"use client";

import { useSelector } from "react-redux";

export default function CountProduct() {
    const { products, loading, error } = useSelector((state) => state.products);

    if (loading) return <div className="text-center p-8 text-gray-500">در حال بارگذاری...</div>;
    if (error) return <div className="text-center p-8 text-red-500">خطا: {error}</div>;

    const brandMap = new Map();

    products.forEach((product) => {
        const brand = product.brand || "برند نامشخص";
        if (!brandMap.has(brand)) {
            brandMap.set(brand, { stock: 0, sales: 0 });
        }
        const current = brandMap.get(brand);
        current.stock += product.quantity || 0;
        current.sales += product.sold || 0;
    });

    const data = Array.from(brandMap.entries()).map(([brand, stats]) => ({
        name: brand,
        sales: stats.sales,
        stock: stats.stock,
    }));

    data.sort((a, b) => b.sales - a.sales);

    return (
        <div dir="rtl" className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-green-500">آمار برندها</h2>
            <div className="h-[400px] overflow-y-auto space-y-4 p-2 border rounded-md shadow-sm">
                {data.map((item) => (
                    <div key={item.name} className="flex flex-col bg-green-400 p-2 rounded-md shadow-sm">
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-blue-600">{item.name}</span>
                            <span className="text-sm text-green-950">موجودی: {item.stock}</span>
                        </div>
                        <div className="text-xs text-gray-700">تعداد فروش: {item.sales}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
