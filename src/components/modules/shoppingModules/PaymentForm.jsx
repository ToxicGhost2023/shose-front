"use client";

import React from "react";
import { Form, Input, Button, Card, Typography } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { clearCartAsync } from "@/store/slice/cartSlice";


const { Title, Text } = Typography;

const PaymentForm = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const searchParams = useSearchParams();
    const orderId = searchParams.get("orderId");
    const totalAmount = searchParams.get("totalAmount");
    const userId = searchParams.get("userId"); // گرفتن userId از URL

    const [form] = Form.useForm();

    const handleSubmit = async () => {
        try {
            if (userId) {
                await dispatch(clearCartAsync(userId)).unwrap();
            }

            // نمایش پیام موفقیت
            Swal.fire({
                icon: "success",
                title: "پرداخت موفق",
                text: "پرداخت شما با موفقیت انجام شد!",
                confirmButtonText: "باشه",
                timer: 2000,
                timerProgressBar: true,
            }).then(() => {
                router.push("/products"); // هدایت به صفحه سبد خرید
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "خطا",
                text: "خطا در پردازش پرداخت",
                confirmButtonText: "باشه",
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <Card className="w-full max-w-md shadow-lg">
                <Title level={3} className="text-center mb-6">
                    فرم پرداخت نمادین
                </Title>
                <Text className="block mb-6">
                    مبلغ قابل پرداخت: {totalAmount ? Number(totalAmount).toLocaleString() : "0"} تومان
                </Text>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        name="cardNumber"
                        label="شماره کارت"
                        rules={[
                            { required: true, message: "لطفاً شماره کارت را وارد کنید" },
                            { pattern: /^\d{16}$/, message: "شماره کارت باید 16 رقم باشد" },
                        ]}
                    >
                        <Input placeholder="1234 5678 9012 3456" maxLength={16} />
                    </Form.Item>
                    <Form.Item
                        name="expiryDate"
                        label="تاریخ انقضا"
                        rules={[
                            { required: true, message: "لطفاً تاریخ انقضا را وارد کنید" },
                            { pattern: /^(0[1-9]|1[0-2])\/\d{2}$/, message: "فرمت: MM/YY" },
                        ]}
                    >
                        <Input placeholder="MM/YY" maxLength={5} />
                    </Form.Item>
                    <Form.Item
                        name="cvv"
                        label="کد CVV"
                        rules={[
                            { required: true, message: "لطفاً کد CVV را وارد کنید" },
                            { pattern: /^\d{3,4}$/, message: "CVV باید 3 یا 4 رقم باشد" },
                        ]}
                    >
                        <Input placeholder="123" maxLength={4} type="password" />
                    </Form.Item>
                    <div className="flex justify-between">
                        <Button onClick={() => router.push("/shop")}>
                            بازگشت به سبد خرید
                        </Button>
                        <Button type="primary" htmlType="submit">
                            پرداخت
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default PaymentForm;