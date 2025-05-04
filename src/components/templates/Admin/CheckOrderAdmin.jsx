// components/CheckOrderAdmin.jsx
"use client";


import {
    getOrdersAsync,
    deleteOrderAsync,
    updateOrderStatusAsync,
} from "@/store/slice/orderSlice";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

function CheckOrderAdmin() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { orders, loading, error } = useSelector((state) => state.order);



    useEffect(() => {
        dispatch(getOrdersAsync());

    }, [dispatch]);
;

    const handleConfirmOrder = (id) => {
        dispatch(updateOrderStatusAsync({ id, status: "completed" })).then((res) => {
            if (res.meta.requestStatus === "fulfilled") {
                Swal.fire("تایید شد!", "سفارش به وضعیت ارسال شده تایید شد.", "success");
            }
        });
    };

    const handleRejectOrder = (id) => {
        Swal.fire({
            title: "آیا از لغو این سفارش مطمئنی؟",
            text: "بعد از لغو امکان بازگرداندن نیست!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "بله، لغو کن",
            cancelButtonText: "خیر",
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteOrderAsync(id)).then((res) => {
                    if (res.meta.requestStatus === "fulfilled") {
                        Swal.fire("حذف شد!", "سفارش با موفقیت حذف شد.", "success");
                    }
                });
            }
        });
    };

    if (loading) return <p>در حال بارگذاری...</p>;
    if (error) return <p>خطا: {error}</p>;

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">لیست سفارش‌ها</h2>
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-sm sm:text-base hover:border-or text-gray-700 border px-4 py-2 rounded-xl transition duration-300 shadow-sm"
                >
                    <ArrowRightOutlined className="text-lg" />
                    بازگشت
                </button>
            </div>
            <ul className="space-y-4">
                {orders.map((order) => (
                    <li
                        key={order._id}
                        className="dark:bg-black shadow-md rounded-xl p-4 border border-gray-100 hover:shadow-lg transition duration-300"
                    >
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-lg font-semibold text-gray-700 dark:text-or">
                                {order.firstName} {order.lastName}
                            </p>
                            <span
                                className={`text-sm px-3 py-1 rounded-full font-medium ${order.status === "pending"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-green-100 text-green-800"
                                    }`}
                            >
                                {order.status === "pending" ? "در انتظار" : order.status}
                            </span>
                        </div>

                        <div className="text-gray-600 text-sm space-y-2 mb-4 dark:text-or">
                            <p>
                                مبلغ کل:{" "}
                                <span className="font-medium">{order.totalAmount.toLocaleString()} تومان</span>
                            </p>
                            <p>تاریخ ثبت: {new Date(order.createdAt).toLocaleString("fa-IR")}</p>
                            <p>آدرس: {order.address}</p>
                            <p>شماره تماس: {order.phone}</p>
                        </div>

                        <div className="mt-4 text-sm text-gray-700 dark:text-or">
                            <p className="font-bold mb-1">محصولات سفارش‌ داده‌شده:</p>
                            <ul className="list-disc ps-5 space-y-1">
                                {order.items?.map((item, idx) => (
                                    <li key={idx}>
                                        {item?.title || "عنوان نامشخص"} - تعداد: {item.quantity}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                            <button
                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
                                onClick={() => handleConfirmOrder(order._id)}
                                disabled={order.status === "completed"}
                            >
                                تایید سفارش
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                                onClick={() => handleRejectOrder(order._id)}
                            >
                                لغو سفارش
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CheckOrderAdmin;