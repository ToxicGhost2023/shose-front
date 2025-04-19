"use client"

import { offdiscount, ondiscount } from "@/utils/fetching";
import Image from "next/image";
import { useState } from "react";

function DiscountAdminModule() {
    const [discountPercentage, setDiscountPercentage] = useState("");
    const [message, setMessage] = useState("");

    const handleApplyDiscount = async () => {
        try {
            const { result, ok } = await ondiscount({ discountPercentage: parseFloat(discountPercentage) });
            if (ok) {
                setMessage(result.message || "تخفیف با موفقیت اعمال شد");
                setDiscountPercentage("");
            } else {
                setMessage(result.message || "خطا در اعمال تخفیف");
            }
        } catch (error) {
            setMessage("خطا در اعمال تخفیف");
        }
    };

    const handleDeactivateDiscount = async () => {
        try {
            const { result, ok } = await offdiscount();
            if (ok) {
                setMessage(result.message || "تخفیف با موفقیت غیرفعال شد");
            } else {
                setMessage(result.message || "خطا در غیرفعال‌سازی تخفیف");
            }
        } catch (error) {
            setMessage("خطا در غیرفعال‌سازی تخفیف");
        }
    };

    return (
        <div className="relative p-12 rounded-2xl w-1/2 border border-or items-center ">
            <div className="relative z-10 text-white">
                <h3 className="text-lg font-bold mb-2 text-orange-400">🎉 تخفیف جشنواره‌ای</h3>

                <div className="mb-2">
                    <label className="block text-xs mb-1">درصد تخفیف (%)</label>
                    <input
                        type="number"
                        value={discountPercentage}
                        onChange={(e) => setDiscountPercentage(e.target.value)}
                        className="w-full p-1 text-sm border rounded"
                        placeholder="مثال: 50"
                        min="0"
                        max="100"
                    />
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={handleApplyDiscount}
                        className="bg-blue-600 text-white text-xl px-3 py-1 rounded hover:bg-blue-700"
                        disabled={!discountPercentage || discountPercentage <= 0}
                    >
                        اعمال تخفیف
                    </button>
                    <button
                        onClick={handleDeactivateDiscount}
                        className="bg-red-600 text-white text-xl px-3 py-1 rounded hover:bg-red-700"
                    >
                        غیرفعال کردن
                    </button>
                </div>

                {message && <p className="mt-8 text-xl text-orange-300">{message}</p>}
            </div>
        </div>
    );
};


export default DiscountAdminModule
