import React from 'react';
import { Collapse } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, MobileOutlined, SendOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';
import Image from 'next/image';

const contactItems = [
    {
        key: '1',
        label: (
            <div className="flex items-center space-x-2">
                <EnvironmentOutlined className="text-blue-500 text-xl" />
                <span className="text-lg font-semibold dark:text-or">آدرس دفتر</span>
            </div>
        ),
        children: (
            <div className="space-y-4">
                <p className="text-gray-700 text-base md:text-lg dark:text-orange-300">تهران، خیابان آزادی، پلاک ۱۲۳، کد پستی: ۱۲۳۴۵</p>
                <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-500 hover:text-blue-700 transition-colors text-sm md:text-base"
                >
                    مشاهده روی نقشه
                    <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </div>
        ),
    },
    {
        key: '2',
        label: (
            <div className="flex items-center space-x-2">
                <PhoneOutlined className="text-blue-500 text-xl" />
                <span className="text-lg font-semibold dark:text-or">شماره‌های تماس</span>
            </div>
        ),
        children: (
            <div className="space-y-4">
                <p className="text-gray-700 flex items-center text-base md:text-lg">
                    <MobileOutlined className="ml-2 text-gray-500" />
                    موبایل: <a href="tel:+989123456789" className="mr-2 dark:text-or text-blue-500 hover:text-blue-700">۰۹۱۲-۳۴۵-۶۷۸۹</a>
                </p>
                <p className="text-gray-700 flex items-center text-base md:text-lg">
                    <PhoneOutlined className="ml-2 text-gray-500" />
                    ثابت: <a href="tel:+982112345678" className="mr-2 dark:text-or text-blue-500 hover:text-blue-700">۰۲۱-۱۲۳۴-۵۶۷۸</a>
                </p>
            </div>
        ),
    },
    {
        key: '3',
        label: (
            <div className="flex items-center space-x-2">
                <WhatsAppOutlined className="text-blue-500 text-xl" />
                <span className="text-lg font-semibold dark:text-or">شبکه‌های اجتماعی</span>
            </div>
        ),
        children: (
            <div className="space-y-4">
                <p className="text-gray-700 flex items-center text-base md:text-lg">
                    <SendOutlined className="ml-2 text-gray-500" />
                    تلگرام: <a href="https://t.me/yourchannel" className="mr-2 text-blue-500 hover:text-blue-700">@YourChannel</a>
                </p>
                <p className="text-gray-700 flex items-center text-base md:text-lg">
                    <InstagramOutlined className="ml-2 text-gray-500" />
                    اینستاگرام: <a href="https://instagram.com/yourpage" className="mr-2 text-blue-500 hover:text-blue-700">@YourPage</a>
                </p>
                <p className="text-gray-700 flex items-center text-base md:text-lg">
                    <WhatsAppOutlined className="ml-2 text-gray-500" />
                    واتس‌اپ: <a href="https://wa.me/+989123456789" className="mr-2 text-blue-500 hover:text-blue-700">۰۹۱۲-۳۴۵-۶۷۸۹</a>
                </p>
            </div>
        ),
    },
];

const ContactPage = () => {
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div className="min-h-screen  py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-center justify-center">
                {/* تصویر */}
                <div className="w-full lg:w-1/2">
                    <Image
                        width={800}
                        height={600}
                        src="/images/comitation2.png"
                        alt="comitation"
                        className="w-full h-auto rounded-lg object-cover"
                        priority
                    />
                </div>

                {/* بخش Collapse */}
                <div className="w-full lg:w-1/2">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-orange-500 mb-8">راه‌های ارتباطی</h1>
                    <Collapse
                        items={contactItems}
                        defaultActiveKey={['1']}
                        onChange={onChange}
                        expandIconPosition="end"
                        ghost
                        accordion
                        className="space-y-4 "
                        bordered={false}
                    >
                        {contactItems.map((item) => (
                            <Collapse.Panel
                                key={item.key}
                                header={item.label}
                                className="bg-gradient-to-r from-white to-gray-50 rounded-xl mb-4 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                extra={<span className="text-blue-500" />}
                            >
                                <div className="p-6 bg-white rounded-b-xl">{item.children}</div>
                            </Collapse.Panel>
                        ))}
                    </Collapse>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;