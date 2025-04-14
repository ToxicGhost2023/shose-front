'use client';

import React, { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import NeuButton from './NeuButton';
import Link from 'next/link';
import Logout from '../RegisterModules/Logout';
import { userDetails } from '@/utils/fetching';

function DrawerHeader({ token }) {

    const [user, setUser] = useState(null);
    const [open, setOpen] = useState(false);
    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);




    useEffect(() => {
        async function fetchUserData() {
            try {
                const data = await userDetails({ token });

                if (data) {
                    setUser(data?.role);
                } else {
                    console.error("Data not found or error occurred");

                }
            } catch (err) {
                console.error("Error fetching user details:", err);
            }
        }

        if (token) {
            fetchUserData();
        } else {
            console.error("No token available");
        }
    }, [token]);




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
                    <Link href="/" className="text-blue-700 neumorphic  p-2 rounded-md dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                        صفحه اصلی
                    </Link>
                    {user == "admin" ? (<Link href="/panelAdmin" className="text-black neumorphic  p-2 rounded-md dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                        پنل ادمین
                    </Link>) : null}

                    {/* محصولات */}

                    <div className='flex flex-col mt-[5px]'>

                        <Link href="/products" className="neumorphic p-2 mt-[3px] rounded-md  pr-1 text-xm dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                            محصولات
                        </Link>

                    </div>

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
                        <summary className='text-green-600'>   ثبت نام/ورود</summary>
                        <div className='flex flex-col mt-[5px]'>

                            <Link href="/register" className="bg-or mt-[3px] rounded-md  pr-1 text-xm dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                                ثبت نام
                            </Link>
                            <Link href="/register" className="bg-or mt-[3px] rounded-md  pr-1 text-xm dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                                ورود
                            </Link>
                        </div>
                    </details>

                    <Logout />
                </div>
            </Drawer>
        </>
    );
}

export default DrawerHeader;