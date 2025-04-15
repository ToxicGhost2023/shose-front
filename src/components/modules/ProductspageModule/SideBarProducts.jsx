"use client";

import { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";

function SideBarProducts({ products, setFilteredProducts }) {
    const [filters, setFilters] = useState({});

    const categories = [...new Set(products.map(p => p.category))];

    const subcategories = categories.reduce((acc, cat) => {
        const subs = products
            .filter(p => p.category === cat)
            .flatMap(p => p.options);
        acc[cat] = [...new Set(subs)];
        return acc;
    }, {});

    // تغییر انتخاب فقط یکی در هر کتگوری
    const handleSelectOption = (category, selectedOption) => {
        setFilters(prev => ({
            ...prev,
            [category]: prev[category] === selectedOption ? null : selectedOption,
        }));
    };

    // فیلتر محصولات
    useEffect(() => {
        const hasFilters = Object.values(filters).some(Boolean);

        if (!hasFilters) {
            setFilteredProducts(products);
            return;
        }

        const filtered = products.filter(product => {
            const selected = filters[product.category];
            if (!selected) return false;
            return product.options.includes(selected);
        });

        setFilteredProducts(filtered);
    }, [filters, products]);

    return (
        <aside className="w-full sm:w-[200px] max-h-screen overflow-y-auto neumorphics dark:bg-gray-800 p-4 rounded-md mb-4 sm:mb-0">
            <h2 className="text-lg font-semibold mb-4 text-or">دسته‌بندی‌ها</h2>
            <ul className="space-y-4 text-sm text-gray-800 dark:text-white">
                {categories.map((cat, index) => (
                    <li key={index}>
                        <details className="group transition-all duration-300">
                            <summary className="flex items-center justify-between cursor-pointer list-none">
                                <span>{cat}</span>
                                <DownOutlined className="transition-transform group-open:rotate-180 duration-300" />
                            </summary>
                            <ul className="ml-6 mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                                {subcategories[cat]?.map((sub, subIdx) => (
                                    <li key={subIdx}>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={filters[cat] === sub}
                                                onChange={() => handleSelectOption(cat, sub)}
                                                className="accent-blue-500"
                                            />
                                            {sub}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    </li>
                ))}
            </ul>
        </aside>

    );
}

export default SideBarProducts;
