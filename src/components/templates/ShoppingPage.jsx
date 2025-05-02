"use client";

import React, { useState, useEffect } from "react";
import { Steps, Button } from "antd";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { addToCartAsync, getCartAsync, removeFromCartAsync, submitOrderAsync } from "@/store/slice/cartSlice";
import { fetchProducts } from "@/store/slice/productsReducer";
import Image from "next/image";
import Swal from "sweetalert2";
import AddressForm from "../modules/shoppingModules/AddressForm";
import Payment from "../modules/shoppingModules/Payment";
import Link from "next/link";

const ShoppingPage = ({ token }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [userId, setUserId] = useState(null);
    const [currentStep, setCurrentStep] = useState(0);
    const [personalInfo, setPersonalInfo] = useState(null);
    const { products } = useSelector((state) => state.products);
    const cart = useSelector((state) => state.cart) || {};
    const { items = [], loading = false, totalAmount = 0 } = cart;

    const findProductById = (productId) => {
        return products.find((product) => product._id === productId);
    };

    useEffect(() => {
        const decoded = jwtDecode(token);
        setUserId(decoded.userId);
    }, [token]);

    useEffect(() => {
        if (userId) {
            dispatch(getCartAsync(userId));
        }
    }, [userId, dispatch]);

    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products.length]);

    const handleIncrease = async (item) => {
        try {
            if (!item.price || !item.quantity) {
                await Swal.fire({
                    icon: "error",
                    title: "خطا",
                    text: "داده‌های محصول نامعتبر است",
                    confirmButtonText: "باشه",
                });
                return;
            }
            const payload = {
                userId,
                productId: item.productId,
                quantity: item.quantity + 1,
                price: Number(item.price),
            };
            await dispatch(addToCartAsync(payload)).unwrap();
            await dispatch(getCartAsync(userId)).unwrap();
            await Swal.fire({
                icon: "success",
                title: "موفقیت",
                text: "تعداد محصول به‌روزرسانی شد",
                confirmButtonText: "باشه",
                timer: 1500,
                timerProgressBar: true,
            });
        } catch (error) {
            await Swal.fire({
                icon: "error",
                title: "خطا",
                text: "خطا در به‌روزرسانی تعداد محصول",
                confirmButtonText: "باشه",
            });
            console.error("خطا در افزایش تعداد:", error);
        }
    };

    const handleDecrease = async (item) => {
        try {
            const newQuantity = item.quantity - 1;
            if (newQuantity >= 1) {
                const payload = {
                    userId,
                    productId: item.productId,
                    quantity: newQuantity,
                    price: Number(item.price),
                };
                await dispatch(addToCartAsync(payload)).unwrap();
                await dispatch(getCartAsync(userId)).unwrap();
                await Swal.fire({
                    icon: "success",
                    title: "موفقیت",
                    text: "تعداد محصول به‌روزرسانی شد",
                    confirmButtonText: "باشه",
                    timer: 1500,
                    timerProgressBar: true,
                });
            }
        } catch (error) {
            await Swal.fire({
                icon: "error",
                title: "خطا",
                text: "خطا در به‌روزرسانی تعداد محصول",
                confirmButtonText: "باشه",
            });
            console.error("خطا در کاهش تعداد:", error);
        }
    };

    const handleRemove = (productId) => {
        dispatch(removeFromCartAsync({ productId, userId }));
    };

    const handleAddressSubmit = (values) => {
        setPersonalInfo(values);
        setCurrentStep(2);
    };

    const handlePayment = async () => {
        try {
            const orderData = {
                firstName: personalInfo.firstName,
                lastName: personalInfo.lastName,
                phone: personalInfo.phone,
                address: personalInfo.address,
                province: personalInfo.province,
                city: personalInfo.city,
                postalCode: personalInfo.postalCode,
                items: items.map(item => ({
                    productId: item.productId,
                    price: item.price,
                    quantity: item.quantity,
                })),
            };
            // ثبت سفارش
            const result = await dispatch(submitOrderAsync({ userId, orderData })).unwrap();
            // هدایت به فرم پرداخت نمادین با userId
            router.push("/pay");
        } catch (error) {
            await Swal.fire({
                icon: "error",
                title: "خطا",
                text: "خطا در ثبت سفارش",
                confirmButtonText: "باشه",
            });
        }
    };

    const steps = [
        {

            title: "سبد خرید",
            content: (
                <div className="max-w-4xl mx-auto space-y-6">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
                            <div className="text-7xl mb-4 animate-bounce">🛍️</div>
                            <div className="text-center flex flex-col items-center gap-4 text-gray-600 font-semibold text-2xl">
                                <span>سبد خریدتان خالیست!</span>

                                <Link
                                    href="/products"
                                    className="text-base text-gray-500 hover:text-orange-500 transition-colors duration-300 relative group"
                                >
                                    عب نداره، برو به صفحه محصولات
                                    <span
                                        className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"
                                    />
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <>
                            {items.map((item) => {
                                const product = findProductById(item.productId);
                                return (
                                    <div
                                        key={item.productId}
                                        className="flex gap-4 items-center border border-gray-200 rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
                                    >
                                        {product && (
                                            <Image
                                                src={
                                                    product?.image
                                                        ? (product.image.startsWith("data:image") || product.image.startsWith("http")
                                                            ? product.image
                                                            : `http://localhost:3400${product.image}`)
                                                        : "/default-product.png"
                                                }
                                                width={100}
                                                height={100}
                                                alt={product?.title || "محصول"}
                                                className="rounded-xl object-cover w-24 h-24"
                                            />
                                        )}
                                        <div className="flex-1">
                                            <h2 className="text-xl font-bold text-gray-800">
                                                {product?.title || `محصول ${item.productId}`}
                                            </h2>
                                            <p className="text-gray-500 mt-1 text-sm">
                                                قیمت: {item.price ? item.price.toLocaleString() : "نامشخص"} تومان
                                            </p>
                                            <div className="mt-4 flex items-center gap-4">
                                                <button
                                                    onClick={() => handleRemove(item.productId)}
                                                    className="text-sm bg-red-400 hover:bg-red-500 text-white px-4 py-1 rounded-full transition-all"
                                                >
                                                    حذف
                                                </button>
                                                <div className="flex items-center gap-2 border px-2 py-1 rounded-full">
                                                    <button
                                                        onClick={() => handleIncrease(item)}
                                                        className="bg-green-400 hover:bg-green-500 text-white px-3 py-1 rounded-full text-lg transition-all"
                                                    >
                                                        +
                                                    </button>
                                                    <span className="font-semibold">{item.quantity}</span>
                                                    <button
                                                        onClick={() => handleDecrease(item)}
                                                        className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-full text-lg transition-all"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        -
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            <div className="text-right mt-8 text-2xl font-extrabold text-blue-800">
                                جمع کل: {totalAmount.toLocaleString()} تومان
                            </div>
                            <div className="text-center mt-10">
                                <Button
                                    type="primary"
                                    onClick={() => setCurrentStep(1)}
                                    className="px-6"
                                    disabled={items.length === 0}
                                >
                                    ادامه به اطلاعات آدرس
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            ),
        },
        {
            title: "اطلاعات آدرس",
            content: (
                <AddressForm
                    onSubmit={handleAddressSubmit}
                    onBack={() => setCurrentStep(0)}
                />
            ),
        },
        {
            title: "پرداخت",
            content: (
                <Payment
                    cart={cart}
                    personalInfo={personalInfo}
                    onBack={() => setCurrentStep(1)}
                    onPayment={handlePayment}
                />
            ),
        },
    ];

    return (
        <div className="min-h-screen px-4 py-6">
            <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-700 mt-[100px] animate-fadeIn">
                🛒 خرید سه مرحله ایی
            </h1>
            <div className="max-w-4xl mx-auto">
                <Steps current={currentStep} items={steps} className="mb-8" />
                <div>{steps[currentStep].content}</div>
            </div>
        </div>
    );
};

export default ShoppingPage;