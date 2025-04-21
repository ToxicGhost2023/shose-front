'use client'

import { fetchProducts } from '@/store/slice/productsReducer';
import { Carousel } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '450px',
    borderRadius: '12px',
    padding: '20px',
};

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
        <Carousel autoplay autoplaySpeed={3000} className="max-w-screen-lg mx-auto">
            {filteredProducts
                ?.filter(product => product.category === 'زنانه') // یا gender === 'female'
                .map((product, index) => (
                    <div key={product._id || index}>
                        <div
                            style={contentStyle}
                            className="p-4 sm:p-6 md:p-8 lg:p-10 max-h-[600px] w-full flex flex-col items-center"
                        >
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={400}
                                height={400}
                                className="rounded-lg w-full md:h-[300px] md:max-w-[500px] object-cover"
                            />
                            <p className="text-center text-lg sm:text-xl md:text-2xl font-bold mt-4 text-or dark:text-white">
                                {product.title}
                            </p>
                        </div>
                    </div>
                ))}
        </Carousel>
    );
}

export default SliderProductsWomen;
