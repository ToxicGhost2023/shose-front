'use client';

import React, { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import NeuButton from './NeuButton';
import Link from 'next/link';
import Logout from '../RegisterModules/Logout';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAuthUser } from '@/store/slice/userReducer';


function DrawerHeader({ token }) {

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const { user, authStatus } = useSelector((state) => state.users);

    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);

    useEffect(() => {
        if (token) {
            dispatch(fetchAuthUser({ token }));
        }
    }, [token, dispatch]);

    return (
        <>
            <NeuButton
                icon={<MenuOutlined style={{ fontSize: '22px', fontWeight: "bold", color: "orange" }} />}
                onClick={showDrawer}
                tooltip="منو"
                className="md:hidden"
            />

            <Drawer
                title={<span className="font-bold text-3xl dark:text-or">shover👣</span>}
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
                    <Link href="/" className="text-blue-700  neumorphic  p-2 rounded-md dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                        صفحه اصلی
                    </Link>

                    {user?.role === "admin" && (
                        <Link href="/panelAdmin" className="text-black  neumorphic  p-2 rounded-md dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                            پنل ادمین
                        </Link>
                    )}

                    {/* محصولات */}
                    <div className='flex flex-col mt-[5px] '>
                        <Link href="/products" className="neumorphic p-2 mt-[3px]  rounded-md  pr-1 text-xm dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                            محصولات
                        </Link>
                    </div>

                    {/* درباره ما */}
                    <div className='flex flex-col mt-[5px]'>
                        <Link href="/about" className="neumorphic p-2 mt-[3px] rounded-md  pr-1 text-xm dark:text-white hover:text-blue-500 transition-colors cursor-pointer">
                            درباره ما
                        </Link>
                    </div>
                    {/* ارتباط */}
                    <details className="flex flex-col neumorphic p-2 rounded-md shadow-xl  dark:text-white transition-all duration-300 ease-in-out">
                        <summary className="text-xm mr-1 font-semibold cursor-pointer dark:text-white">
                            ارتباط با ما
                        </summary>
                        <div className="flex flex-col mt-4 space-y-3">
                            <p className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-md text-sm text-white shadow-md hover:scale-105 transition-transform">
                                تلفن: 0900000000
                            </p>
                            <p className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-md text-sm text-white shadow-md hover:scale-105 transition-transform">
                                @ffffffffff اینستا گرام
                            </p>
                            <p className="bg-gradient-to-r from-green-400 to-teal-500 p-2 rounded-md text-sm text-white shadow-md hover:scale-105 transition-transform">
                                0900000000 واتس اپ
                            </p>
                            <p className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-md text-sm text-white shadow-md hover:scale-105 transition-transform">
                                90000000 تلگرام
                            </p>
                        </div>
                    </details>


                    {/* ثبت نام / ورود */}

                    <details className="flex flex-col neumorphic p-2 rounded-md shadow-xl  dark:text-white transition-all duration-300 ease-in-out">
                        <summary className="text-xm  font-semibold cursor-pointer text-green-600 dark:text-white">
                            ثبت نام/ورود
                        </summary>
                        <div className="flex flex-col mt-4 space-y-3">
                            <Link
                                href="/register"
                                className="bg-gradient-to-r from-orange-500 to-yellow-500 p-2 rounded-md text-sm text-black shadow-md hover:scale-105 transition-transform"
                            >
                                ثبت نام
                            </Link>
                            <Link
                                href="/register"
                                className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-md text-sm text-black shadow-md hover:scale-105 transition-transform"
                            >
                                ورود
                            </Link>
                        </div>
                    </details>



                    {user && <Logout />}
                </div>
            </Drawer>
        </>
    );
}

export default DrawerHeader;
