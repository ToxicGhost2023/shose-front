"use client";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

function ProductSearchBox({ products, setFilteredProducts }) {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase().trim();
        setQuery(value);
        const filtered = products.filter((p) =>
            p.title.toLowerCase().includes(value)
        );
        setFilteredProducts(filtered);
    };

    return (
        <form className="max-w-[330px]  mx-auto w-full px-1 mt-3 mb-2 -mr-[1px]">
            <div className="relative flex items-center">
                <SearchOutlined className="absolute left-4 text-gray-500 dark:text-white w-5 h-5" />
                <input
                    type="search"
                    value={query}
                    onChange={handleSearch}
                    className="neumorphic w-full pl-12 pr-24 py-3 text-sm text-or rounded-[15px]  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                    placeholder="جستجوی محصول..."
                />
                <button
                    type="button"
                    className="absolute neumorphic right-2.5 top-1/2 transform -translate-y-1/2 text-or px-3 py-2 rounded-[12px] text-sm font-medium transition-all duration-300 hover:text-white hover:bg-or  focus:ring-4 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                    Search
                </button>
            </div>
        </form>
    );
}

export default ProductSearchBox;
