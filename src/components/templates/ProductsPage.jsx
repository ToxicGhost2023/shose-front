"use client";

import { useEffect, useMemo, useState } from "react";
import ProductSearchBox from "../modules/ProductspageModule/ProductSearchBox";
import SideBarProducts from "../modules/ProductspageModule/SideBarProducts";
import ProductCard from "../modules/ProductspageModule/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/slice/productsReducer";

const ProductSkeleton = () => (
    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md animate-pulse">
        <div className="w-full h-[150px] bg-gray-200 rounded-t-lg" />
        <div className="p-4">
            <div className="h-4 bg-gray-400 rounded w-3/4 mb-2" />
            <div className="h-3 bg-gray-400 rounded w-1/2 mb-4" />
            <div className="h-8 bg-gray-400 rounded w-1/3" />
        </div>
    </div>
);

function ProductsPage({ token }) {
    const dispatch = useDispatch();
    const { products, status, error } = useSelector((state) => state.products);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(4);

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    const updatedProducts = useMemo(() => {
        return filteredProducts.map((product) => ({
            ...product,
            image: product.image.startsWith("data:image") || product.image.startsWith("http")
                ? product.image
                : `http://localhost:3400${product.image}`,
        }));
    }, [filteredProducts]);

    const visibleProducts = useMemo(() => {
        return updatedProducts.slice(0, visibleCount);
    }, [visibleCount, updatedProducts]);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 4);
    };

    if (status === "loading") {
        return (
            <div className="p-4">
                <div className="mb-4">
                    <div className="h-10 bg-gray-200 rounded w-full animate-pulse" />
                </div>
                <div className="flex flex-col lg:flex-row">
                    <aside className="w-full lg:w-[250px] lg:fixed lg:overflow-y-auto dark:bg-gray-800 p-4 rounded-md mb-4 lg:mb-0">
                        <div className="h-40 bg-gray-200 rounded animate-pulse" />
                    </aside>
                    <main className="flex-1 lg:mr-[260px] mt-4 lg:mt-0">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {Array(4)
                                .fill()
                                .map((_, index) => (
                                    <ProductSkeleton key={index} />
                                ))}
                        </div>
                    </main>
                </div>
            </div>
        );
    }

    if (status === "failed") {
        return (
            <div className="flex items-center justify-center min-h-screen w-full">
                <p className="text-red-500">{error || "خطایی در بارگذاری محصولات رخ داد"}</p>
            </div>
        );
    }

    return (
        <div className="p-4">
            <div className="mb-4">
                <ProductSearchBox products={products} setFilteredProducts={setFilteredProducts} />
            </div>

            <div className="flex flex-col lg:flex-row">
                <aside className="w-full lg:w-[250px] lg:fixed lg:overflow-y-auto dark:bg-gray-800 p-4 rounded-md mb-4 lg:mb-0">
                    <SideBarProducts products={products} setFilteredProducts={setFilteredProducts} />
                </aside>

                <main className="flex-1 lg:mr-[260px] mt-4 lg:mt-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {visibleProducts.length > 0 ? (
                            visibleProducts.map((product) => (
                                <ProductCard key={product._id} product={product} token={token} />
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
                                محصولی یافت نشد
                            </p>
                        )}
                    </div>

                    {visibleCount < updatedProducts.length && (
                        <div className="flex justify-center mt-6">
                            <button
                                onClick={handleLoadMore}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
                            >
                                موارد بیشتر
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}

export default ProductsPage;