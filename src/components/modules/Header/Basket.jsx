"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { ShoppingCartOutlined } from "@ant-design/icons";


function Basket() {
    const cart = useSelector((state) => state.cart) || {};
    const { items = [], loading = false } = cart;

    const router = useRouter();

    const totalItems = items && items.length > 0
        ? items.reduce((sum, item) => sum + item.quantity, 0)
        : 0;

    const handleClick = () => {
        router.push("/shopping");
    };

    return (

        <div className="relative text-2xl flex items-center gap-2 cursor-pointer" onClick={handleClick}>
            <ShoppingCartOutlined size={28} className="w-[50px] h-[50px] flex items-center justify-center text-xl font-bold neumorphic border-none rounded-full relative dark:text-or transition-all hover:scale-105 active:scale-95" />
            {totalItems > 0 && !loading && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                </span>
            )}
        </div>
        // <div className="relative  text-2xl flex items-center gap-2 cursor-pointer" onClick={handleClick}>
        //     <ShoppingCartOutlined size={28} className="w-[50px] h-[50px] flex items-center justify-center
        //                       text-xl font-bold 
        //                       neumorphic 
        //                       border-none 
        //                       rounded-full 
        //                       relative 
        //                       dark:text-or
        //                       transition-all
        //                       hover:scale-105
        //                       active:scale-95" />
        //     {totalItems > 0 && !loading && (
        //         <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        //             {totalItems}
        //         </span>
        //     )}
        // </div>
    );
}

export default Basket;
