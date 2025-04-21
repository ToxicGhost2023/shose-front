"use client";

import { useEffect, useMemo, useState } from "react";
import ProductSearchBox from "../modules/ProductspageModule/ProductSearchBox";
import SideBarProducts from "../modules/ProductspageModule/SideBarProducts";
import Loader from "../modules/Loader";
import ProductCard from "../modules/ProductspageModule/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/slice/productsReducer";


function ProductsPage() {
    const dispatch = useDispatch();
    const { products, status, error } = useSelector((state) => state.products);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);;
    const updatedProducts = useMemo(() => {
        return filteredProducts.map(product => ({
            ...product,
            image: product.image.startsWith('data:image') || product.image.startsWith('http')
                ? product.image
                : `http://localhost:3400${product.image}`,

        }));
    }, [filteredProducts]);

    if (status === 'loading') return <p>در حال بارگذاری محصولات...</p>;
    if (status === 'failed') return <p>خطا: {error}</p>;

    return (
        <>
            {status === "loading" ? (
                <div className="flex items-center justify-center min-h-screen w-full">
                    <Loader />
                </div>
            ) : status === "failed" ? (
                <div className="flex items-center justify-center min-h-screen w-full">
                    <p className="text-red-500">{error || "خطایی در بارگذاری محصولات رخ داد"}</p>
                </div>
            ) : (
                <div className="p-4">
                    <div className="mb-4">
                        <ProductSearchBox
                            products={products}
                            setFilteredProducts={setFilteredProducts}
                        />
                    </div>

                    <div className="flex flex-col lg:flex-row">
                        <aside className="w-full lg:w-[250px] lg:fixed lg:overflow-y-auto dark:bg-gray-800 p-4 rounded-md mb-4 lg:mb-0">
                            <SideBarProducts
                                products={products}
                                setFilteredProducts={setFilteredProducts}
                            />
                        </aside>
                        <main className="flex-1 lg:mr-[260px] mt-4 lg:mt-0">
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                {updatedProducts.length > 0 ? (
                                    updatedProducts.map((product) => (

                                        <ProductCard key={product._id} product={product} />
                                    ))
                                ) : (
                                    <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
                                        محصولی یافت نشد
                                    </p>
                                )}
                            </div>
                        </main>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductsPage;