'use client';

import { UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import DarkModeToggle from '../modules/Header/DarkModeButton';
import DrawerHeader from '../modules/Header/DrawerHeader';
import Image from 'next/image';
import NeuButton from '../modules/Header/NeuButton';
import Link from 'next/link';
import SearchBox from '../modules/SearchBox';

export default function AppHeader() {
    return (
        <header
            className="w-full  text-gray-800 dark:text-white rounded-2xl p-2 sm:p-4
        flex  sm:flex-row items-center justify-between gap-2 sm:gap-4"
        >

            <div
                className="flex items-center  gap-2 sm:gap-4 w-full sm:w-auto order-2 sm:order-1
           sm:flex-row"
            >
                <div className="flex items-center  gap-2 sm:gap-4">
                    <DarkModeToggle />
                    <DrawerHeader />
                    <div className="hidden md:flex gap-4">
                        <Link href="/register">
                            <NeuButton icon={<UserOutlined />} tooltip="ورود / ثبت‌نام" />
                        </Link>
                        <Link href="/shoping">
                            <NeuButton icon={<ShoppingCartOutlined />} tooltip="سبد خرید" />
                        </Link>
                    </div>
                </div>
                <div className="w-full sm:w-auto">
                    <SearchBox />
                </div>
            </div>


            <Link
                href="/"
                className="sm:flex items-center justify-center order-1 sm:order-2 w-full sm:w-auto hidden"
            >
                <Image
                    title="صفحه اصلی"
                    src="/images/logo.png"
                    width={200}
                    height={200}
                    alt="لوگو"
                    className="w-[80px] sm:w-[100px] rounded-full mx-2 sm:mx-4 neumorphic
            border-none transition-transform duration-300 hover:scale-110"
                />
            </Link>
        </header>
    );
}