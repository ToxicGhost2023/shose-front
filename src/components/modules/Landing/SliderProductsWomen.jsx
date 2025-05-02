'use client'

import { fetchProducts } from '@/store/slice/productsReducer';
import { Carousel } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const brands = [
    { name: 'Adidas', src: '/images/logo/adidas.png' },
    { name: 'Puma', src: '/images/logo/puma.png' },
    { name: 'Mizano', src: '/images/logo/mizano2.png' },
    { name: 'ASICS', src: '/images/logo/asics.png' },
    { name: 'Nike', src: '/images/logo/logo-nike.png' },
];

function SliderProductsWomen() {
    const dispatch = useDispatch();
    const { products, status } = useSelector(state => state.products);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [dispatch, status]);

    useEffect(() => {
        const updatedProducts = products.map((product) => ({
            ...product,
            image: product.image.startsWith("http")
                ? product.image
                : `http://localhost:3400${product.image}`,
        }));
        setFilteredProducts(updatedProducts);
    }, [products]);

    return (
        <div className="w-full">
            {/* بخش برندها */}
            <section className="py-16 rounded-b-[80px]">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-or mb-8">
                    برندهای معتبر
                </h2>

                <div className="h-[150px] flex justify-center items-center gap-6 px-8 overflow-x-auto scrollbar-hide">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className="inline-flex flex-col items-center justify-center p-4 bg-white rounded-2xl shadow-md hover:shadow-lg hover:border-orange-400 border border-transparent min-w-[120px] cursor-pointer"
                        >
                            <Image
                                src={brand.src}
                                alt={brand.name}
                                width={80}
                                height={80}
                                className="rounded-full mb-2 object-cover"
                            />
                            <h3 className="text-sm font-semibold text-gray-700">{brand.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* بخش اسلایدر محصولات */}
            <section className="py-16 bg-white dark:bg-[#2b2b2b]">
                <h2 className="text-3xl md:text-4xl font-extrabold text-center text-or mb-12">
                    پرفروش‌ترین کفش‌های زنانه
                </h2>

                <Carousel effect="fade" autoplay autoplaySpeed={1500} className="max-w-6xl mx-auto">
                    {filteredProducts
                        ?.filter(product => product.category === 'زنانه')
                        .map((product, index) => (
                            <motion.div
                                key={product._id || index}
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: 'spring', stiffness: 150 }}
                                className="flex flex-col items-center justify-center mx-6"
                            >
                                <div className="relative w-full flex justify-center items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={400}
                                        height={400}
                                        placeholder="blur"
                                        blurDataURL="/images/blur-placeholder.png"
                                        className="rounded-2xl object-contain max-w-[80%] h-auto"
                                    />
                                </div>
                                <p className="text-center text-lg md:text-xl font-bold mt-6 text-or dark:text-white">
                                    {product.title}
                                </p>
                            </motion.div>
                        ))}
                </Carousel>

                {/* دکمه رفتن به همه محصولات */}
                <div className="flex justify-center mt-12">
                    <Link href="/products?category=زنانه">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300"
                        >
                            دیدن همه محصولات 👟
                        </motion.button>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default SliderProductsWomen;
