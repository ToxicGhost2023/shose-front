"use client"

import { useEffect, useState } from 'react'
import ProductSearchBox from '../modules/ProductspageModule/ProductSearchBox'
import SideBarProducts from '../modules/ProductspageModule/SideBarProducts'
import Loader from '../modules/Loader';

import { getAllProducts } from '@/utils/fetching';
import ProductCard from '../modules/ProductspageModule/ProductCard';

function ProductsPage() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const myproducts = await getAllProducts();

                const updatedProducts = myproducts.map((product) => ({
                    ...product,
                    image: product.image.startsWith("http")
                        ? product.image
                        : `http://localhost:3400${product.image}`,
                }));
                setLoading(false)
                setProducts(updatedProducts || []);
                setFilteredProducts(updatedProducts || []);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            {loading ? (
                <div className="flex items-center justify-center min-h-screen w-full">
                    <Loader />
                </div>
            ) : (
                <div className="p-4">
                    {/* باکس جستجو */}
                    <div className="mb-4">
                        <ProductSearchBox
                            products={products}
                            setFilteredProducts={setFilteredProducts}
                        />
                    </div>

                    <div className="flex flex-col lg:flex-row">
                        {/* سایدبار - ریسپانسیو */}
                        <aside className="w-full lg:w-[250px] lg:fixed  lg:overflow-y-auto dark:bg-gray-800 p-4 rounded-md  mb-4 lg:mb-0">
                            <SideBarProducts
                                products={products}
                                setFilteredProducts={setFilteredProducts}
                            />
                        </aside>

                        {/* محتوای اصلی */}
                        <main className="flex-1 lg:mr-[260px] mt-4 lg:mt-0">
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product) => (
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




    )
}

export default ProductsPage
