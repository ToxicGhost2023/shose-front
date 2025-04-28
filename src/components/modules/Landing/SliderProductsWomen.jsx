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

const brands = [
    { name: 'Adidas', src: '/images/logo/adidas.png', },
    { name: 'Puma', src: '/images/logo/puma.png', },
    { name: 'Mizano', src: '/images/logo/mizano2.png', },
    { name: 'ASICS', src: '/images/logo/asics.png', },
    { name: 'Nike', src: '/images/logo/logo-nike.png', },
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
        <div className='md:min-h-[100vh]'>
            <section className="py-8 px-4 sm:px-4 lg:px-8 ">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-or mb-8">  پرفروش ترین ها</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                    {brands.map((brand, index) => (
                        <div key={index} className="flex flex-col items-center p-3 neumorphic hover:border-or hover:text-or hover:border rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                            <Image
                                src={brand.src}
                                alt={brand.name}
                                width={100}
                                height={100}
                                className="rounded-full mb-2 object-cover w-1/4"
                            />
                            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 dark:text-or text-center">{brand.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
            <h2 className="text-lg font-semibold text-or">کفش زنانه</h2>
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
        </div>
    );
}

export default SliderProductsWomen;
