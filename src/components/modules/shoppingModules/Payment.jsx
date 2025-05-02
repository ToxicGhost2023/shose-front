import React from "react";
import { Button, Card, Typography } from "antd";
import Swal from "sweetalert2";
import Image from "next/image";
import { useSelector } from "react-redux";

const { Title, Text } = Typography;

const Payment = ({ cart, personalInfo, onBack, onPayment }) => {
    const { items = [], totalAmount = 0 } = cart;
    const products = useSelector((state) => state.products.products) || [];
    const findProductById = (productId) => {
        return products.find((product) => product._id === productId);
    };

    const handlePayment = () => {
        onPayment();
        Swal.fire({
            icon: "success",
            title: " برو به درگاه پرداخت",
            text: "سفارش شما با موفقیت ثبت شد!",
            confirmButtonText: "باشه",
            timer: 2000,
            timerProgressBar: true,
        });
    };

    return (
        <Card bordered={false} className="shadow-lg">
            <Title level={3} className="text-center mb-6">خلاصه سفارش و پرداخت</Title>
            <div className="space-y-6">
                <div>
                    <Text strong>اطلاعات شخصی:</Text>
                    <div className="mt-2">
                        <Text>نام: {personalInfo?.firstName || "-"} {personalInfo?.lastName || "-"}</Text>
                        <br />
                        <Text>موبایل: {personalInfo?.phone || "-"}</Text>
                        <br />
                        <Text>آدرس: {personalInfo?.address || "-"}</Text>
                        <br />
                        <Text>شهر: {personalInfo?.city || "-"}</Text>
                        <br />
                        <Text>استان: {personalInfo?.province || "-"}</Text>
                        <br />
                        <Text>کد پستی: {personalInfo?.postalCode || "-"}</Text>
                    </div>
                </div>
                <div>
                    <Text strong>محصولات:</Text>
                    <div className="space-y-4 mt-2">
                        {items.map((item) => {
                            const product = findProductById(item.productId);
                            return (
                                <div
                                    key={item.productId}
                                    className="flex gap-4 items-center border-b py-4"
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
                                            width={80}
                                            height={80}
                                            alt={product?.title || "محصول"}
                                            className="rounded-lg object-cover"
                                        />
                                    )}
                                    <div className="flex-1">
                                        <Text strong>{product?.title || `محصول ${item.productId}`}</Text>
                                        <div>
                                            <Text>قیمت: {item.price.toLocaleString()} تومان</Text>
                                            <br />
                                            <Text>تعداد: {item.quantity}</Text>
                                            <br />
                                            <Text>جمع: {(item.price * item.quantity).toLocaleString()} تومان</Text>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-right mt-4">
                        <Text strong>جمع کل: {totalAmount.toLocaleString()} تومان</Text>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-6">
                <Button onClick={onBack}>بازگشت</Button>
                <Button type="primary" onClick={handlePayment}>
                    پرداخت
                </Button>
            </div>
        </Card>
    );
};

export default Payment;