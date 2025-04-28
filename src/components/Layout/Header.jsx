'use client';

import { UserOutlined, ShoppingCartOutlined, ShoppingOutlined, StepForwardOutlined } from '@ant-design/icons';
import DarkModeToggle from '../modules/Header/DarkModeButton';
import DrawerHeader from '../modules/Header/DrawerHeader';
import Image from 'next/image';
import NeuButton from '../modules/Header/NeuButton';
import Link from 'next/link';
import SearchBox from '../modules/SearchBox';


export default function AppHeader({ token }) {


    return (
        <header
            className="w-full md:w-full  text-gray-800 dark:text-white rounded-2xl p-2 sm:p-4
        flex  sm:flex-row items-center justify-between gap-2 sm:gap-4"
        >

            <div
                className="flex items-center  gap-2 sm:gap-4 w-full sm:w-auto order-2 sm:order-1
           sm:flex-row"
            >
                <div className="flex items-center  gap-2 sm:gap-4">
                    <DarkModeToggle />
                    <DrawerHeader token={token} />
                    <div className="hidden md:flex gap-4">
                        <Link href="/register">
                            <NeuButton icon={<UserOutlined />} tooltip="ورود / ثبت‌نام" />
                        </Link>
                        <Link href="/products">
                            <NeuButton icon={<ShoppingOutlined />} tooltip=" فروشگاه" />
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
                className="order-1 group md:flex hidden flex-col sm:flex-row items-center justify-center w-full sm:w-auto gap-2 sm:gap-4 py-2 px-4 rounded-xl transition-all duration-300 hover:bg-white/10"
            >
                {/* تصویر لوگو سمت چپ */}
                <Image
                    title="صفحه اصلی"
                    src="/images/logo.png"
                    width={200}
                    height={200}
                    alt="لوگو"
                    className="w-[70px] sm:w-[90px] rounded-full border-4 border-orange-500/30 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                />

                {/* متن لوگو سمت راست */}
                <div className="md:flex  items-center sm:items-start text-center sm:text-left hidden">

                    <p className="text-sm mt-[20px] sm:text-base text-gray-400 group-hover:text-orange-400 transition-colors">
                        hover
                    </p>
                    <span className="text-orange-500 text-5xl sm:text-6xl font-extrabold drop-shadow-md group-hover:scale-105 transition-transform duration-300">
                        S
                    </span>

                </div>
            </Link>


        </header>
    );
}