'use client'

import { fetchProducts } from '@/store/slice/productsReducer';
import { Carousel } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';

function SliderProductsMen() {
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
        <div className="w-full bg-white dark:bg-[#2b2b2b] py-16 rounded-t-[80px] md:mt-[100px]">

            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-or mb-12">
                پرفروش‌ترین کفش‌های مردانه
            </h2>

            <Carousel effect="fade" autoplay autoplaySpeed={2000} className="max-w-6xl mx-auto">
                {filteredProducts
                    ?.filter(product => product.category === 'مردانه')
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

            {/* دکمه رفتن به همه محصولات مردانه */}
            <div className="flex justify-center mt-12">
                <Link href="/products?category=مردانه">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300"
                    >
                        دیدن همه محصولات 👟
                    </motion.button>
                </Link>
            </div>
        </div>
    );
}

export default SliderProductsMen;
