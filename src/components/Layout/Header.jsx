"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { UserOutlined, ShoppingOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import DarkModeToggle from "../modules/Header/DarkModeButton";
import Loader from "../modules/Loader";
import DrawerHeader from "../modules/Header/DrawerHeader";
import NeuButton from "../modules/Header/NeuButton";
import SearchBox from "../modules/SearchBox";

function Header({ token }) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleNavigation = async (path) => {
        setLoading(true);
        await router.push(path);
        setLoading(false);
    };

    return (
        <header className="w-full text-gray-800 dark:text-white rounded-2xl p-2 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">

            {loading && (
                <div className="fixed top-0 left-0 w-full h-full bg-white/50 dark:bg-black/50 z-50 flex items-center justify-center">
                    <Loader />
                </div>
            )}


            <div className="flex items-center justify-between w-full sm:w-auto gap-2 order-2 sm:order-1">
                <div className="flex items-center gap-2 sm:gap-4">
                    <DarkModeToggle />
                    <DrawerHeader token={token} />
                    <div className="hidden md:flex gap-4">
                        <div onClick={() => handleNavigation("/register")}>
                            <NeuButton icon={<UserOutlined />} tooltip="ورود / ثبت‌نام" />
                        </div>
                        <div onClick={() => handleNavigation("/products")}>
                            <NeuButton icon={<ShoppingOutlined />} tooltip="فروشگاه" />
                        </div>
                        <div onClick={() => handleNavigation("/shoping")}>
                            <NeuButton icon={<ShoppingCartOutlined />} tooltip="سبد خرید" />
                        </div>
                    </div>
                </div>


                <div className="w-full sm:w-auto">
                    <SearchBox />
                </div>
            </div>
            <Link
                href="/"
                className="order-1 hidden md:flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto gap-2 py-2 px-4 rounded-xl transition-all duration-300 hover:bg-white/10"
            >
                <Image
                    title="صفحه اصلی"
                    src="/images/logo.png"
                    width={200}
                    height={200}
                    alt="لوگو"
                    className="w-[70px] sm:w-[90px] md:w-[45px] rounded-full border-4 border-orange-500/30 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                />
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

export default Header;
