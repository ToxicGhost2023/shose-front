'use client';

import React, { useState } from 'react';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import NeuButton from './NeuButton';
import Link from 'next/link';

function DrawerHeader() {
    const [open, setOpen] = useState(false);
    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <>
            <NeuButton
                icon={<MenuOutlined style={{ fontSize: '18px' }} />}
                onClick={showDrawer}
                tooltip="منو"
                className="md:hidden"
            />

            <Drawer
                title={<span className="font-bold text-lg">منوی سایت</span>}
                placement="right"
                onClose={onClose}
                open={open}
                className="text-right rounded-l-xl bg-[#e0e0e0] dark:bg-[#1e1e1e]"
                body={{
                    padding: '16px',
                    background: '#e0e0e0',
                    borderRadius: '0 0 0 12px',
                }}
                header={{
                    background: '#e0e0e0',
                    borderBottom: 'none',
                    textAlign: 'right',
                }}
                width={280}
            >
                <div className="flex flex-col gap-4">
                    <Link href="#" className="text-or neumorphic  p-2 rounded-md dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                        پنل ادمین
                    </Link>
                    {/* محصولات */}
                    <details className=' flex flex-col neumorphic p-2 rounded-md' >
                        <summary>محصولات</summary>
                        <div className='flex flex-col mt-[5px]'>

                            <Link href="/#" className="bg-or mt-[3px] rounded-md  pr-1 text-xm dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                                زنانه
                            </Link>
                            <Link href="/#" className="bg-or mt-[3px] rounded-md  pr-1 text-xm dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                                مردانه
                            </Link>
                        </div>
                    </details>
                    {/* ارتباط */}
                    <details className=' flex flex-col neumorphic p-2 rounded-md'>
                        <summary>ارتباط</summary>
                        <div className='flex flex-col mt-[5px]'>

                            <p className="bg-or mt-[3px] rounded-md  pr-1 text-xm dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                                تلفن:0900000000
                            </p>
                            <p className="bg-or mt-[3px] rounded-md  pr-1 text-xm dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                                :@ffffffffffاینستا گرام
                            </p>
                            <p className="bg-or mt-[3px] rounded-md  pr-1 text-xm dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                                :0900000000واتس اپ
                            </p>
                            <p className="bg-or mt-[3px] rounded-md  pr-1 text-xm dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                                :90000000تلگرام
                            </p>
                        </div>
                    </details>
                    {/* ثبت نام  / ورود */}
                    <details className=' flex flex-col neumorphic p-2 rounded-md'>
                        <summary className='text-red-700'>   ثبت نام/ورود</summary>
                        <div className='flex flex-col mt-[5px]'>

                            <Link href="/register" className="bg-or mt-[3px] rounded-md  pr-1 text-xm dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                                ثبت نام
                            </Link>
                            <Link href="/register" className="bg-or mt-[3px] rounded-md  pr-1 text-xm dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                                ورود
                            </Link>
                        </div>
                    </details>

                    <Link href="#" className="text-white text-center  bg-r  p-2 rounded-md dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                        خروج
                    </Link>
                </div>
            </Drawer>
        </>
    );
}

export default DrawerHeader;