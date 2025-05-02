"use client";

import { getOrdersAsync } from '@/store/slice/orderSlice';
import { ArrowLeftOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CheckOrderModule() {
    const router = useRouter()
    const dispatch = useDispatch();
    const { orders, loading, error } = useSelector((state) => state.order);
    useEffect(() => {
        dispatch(getOrdersAsync());
    }, [dispatch]);
    // فقط سفارش‌های در حال انتظار (pending)
    const pendingOrders = orders?.filter(order => order.status === "pending") || [];

    return (
        <div className="p-2 mt-[50px] rounded-lg relative">
            <main className="max-w-md mx-auto p-6 text-white rounded-2xl flex flex-col items-center">
                <section
                    className="flex items-center justify-center gap-4 p-4 sm:p-10 bg-yellow-500 border border-white/30 rounded-xl text-white cursor-pointer w-full max-w-xs absolute -top-12 sm:-top-28 left-1/2 -translate-x-1/2 shadow-lg"
                >
                    <CheckCircleOutlined className="text-4xl text-white" />
                    <h2 className="text-xl sm:text-xl font-semibold">در انتظار بررسی</h2>
                </section>
                <section className="mt-10 flex flex-col gap-4 justify-center items-center p-6">
                    {loading ? (
                        <div className="text-black">در حال دریافت...</div>
                    ) : error ? (
                        <div className="text-red-500 text-lg">{error}</div>
                    ) : (
                        <>
                            <div className="font-semibold text-5xl text-black">
                                {pendingOrders.length}
                            </div>
                            <p className="text-sm text-gray-700 mt-2">سفارش در حال بررسی</p>
                            <button
                                onClick={() => router.push("/panelAdmin/checkOrder")}
                                className="flex items-center gap-2 text-sm sm:text-base   hover:border-or text-gray-700 border  px-4 py-2 rounded-xl transition duration-300 shadow-sm"
                            >
                                <ArrowLeftOutlined className="text-lg" />
                                مشاهده
                            </button>
                        </>
                    )}
                </section>
            </main>
        </div>
    );
}

export default CheckOrderModule;
