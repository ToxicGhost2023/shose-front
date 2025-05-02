"use client"
import { Form, Input, Button, Select, Row, Col, Card } from "antd";
import Swal from "sweetalert2";
import provinces from "@/data/provinces"
const { Option } = Select;

const AddressForm = ({ onSubmit, onBack }) => {
    const [form] = Form.useForm();



    const handleSubmit = (values) => {
        onSubmit(values);
        Swal.fire({
            icon: "success",
            title: "موفقیت",
            text: "اطلاعات آدرس ثبت شد",
            confirmButtonText: "باشه",
            timer: 1500,
            timerProgressBar: true,
        });
    };

    return (
        <Card bordered={false} className="shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">وارد کردن اطلاعات آدرس</h2>
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="firstName"
                            label="نام"
                            rules={[{ required: true, message: "لطفاً نام را وارد کنید" }]}
                        >
                            <Input placeholder="نام" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="lastName"
                            label="نام خانوادگی"
                            rules={[{ required: true, message: "لطفاً نام خانوادگی را وارد کنید" }]}
                        >
                            <Input placeholder="نام خانوادگی" />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item
                    name="phone"
                    label="شماره موبایل"
                    rules={[
                        { required: true, message: "لطفاً شماره موبایل را وارد کنید" },
                        {
                            pattern: /^09\d{9}$/,
                            message: "شماره موبایل باید 11 رقم و با 09 شروع شود",
                        },
                    ]}
                >
                    <Input placeholder="09123456789" />
                </Form.Item>
                <Form.Item
                    name="address"
                    label="آدرس"
                    rules={[{ required: true, message: "لطفاً آدرس را وارد کنید" }]}
                >
                    <Input.TextArea rows={4} placeholder="آدرس کامل" />
                </Form.Item>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="province"
                            label="استان"
                            rules={[{ required: true, message: "لطفاً استان را انتخاب کنید" }]}
                        >
                            <Select placeholder="انتخاب استان">
                                {Object.entries(provinces).map(([key, value]) => (
                                    <Option key={key} value={value}>
                                        {value}
                                    </Option>
                                ))}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="city"
                            label="شهر"
                            rules={[{ required: true, message: "لطفاً شهر را وارد کنید" }]}
                        >
                            <Input placeholder="شهر" />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item
                    name="postalCode"
                    label="کد پستی"
                    rules={[
                        { required: true, message: "لطفاً کد پستی را وارد کنید" },
                        {
                            pattern: /^\d{10}$/,
                            message: "کد پستی باید 10 رقم باشد",
                        },
                    ]}
                >
                    <Input placeholder="1234567890" />
                </Form.Item>
                <div className="flex justify-between">
                    <Button onClick={onBack}>بازگشت</Button>
                    <Button type="primary" htmlType="submit">
                        ادامه به پرداخت
                    </Button>
                </div>
            </Form>
        </Card>
    );
};

export default AddressForm;