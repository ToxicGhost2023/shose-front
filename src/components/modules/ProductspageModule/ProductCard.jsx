"use client";


import Image from 'next/image';
import Link from 'next/link';
import LikeButton from './LikeButton';

const ProductCard = ({ product }) => {
    const { _id } = product
    return (
        <div className="neumorphic-dark border hover:border-or dark:hover:border-or rounded-xl shadow-md p-2 sm:p-4 hover:shadow-lg transition-all duration-300 w-full max-w-[20rem] mx-auto">
            <div className="relative w-full h-36 sm:h-48">
                <Image
                    fill
                    src={product.image}
                    alt={product.title}
                    className="object-fill sm:object-fill md:object-fill rounded-lg"
                    sizes="(max-width: 640px) 100vw, 350px"
                    priority
                />
                {product.discount > 0 && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-md">
                        {product.discount}% تخفیف
                    </span>
                )}
            </div>
            <div className="mt-2">
                <div className="flex justify-between items-center mb-1">
                    <h3 className="font-semibold text-xs sm:text-base truncate">
                        {product.title}
                    </h3>
                    <button className="text-gray-500 hover:text-red-500 transition-colors">
                        <LikeButton id={_id} />
                    </button>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-xs mb-1">
                    {product.category}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-[10px] sm:text-xs mb-2 line-clamp-2">
                    {product.content
                        .replace(/\n/g, ' ')
                        .split('-')
                        .filter((item) => item.trim())
                        .join(' | ')}
                </p>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-or font-bold text-xs sm:text-base">
                        {product.finalPrice.toLocaleString()} تومان
                    </span>
                    {product.discount > 0 && (
                        <span className="text-red-500 line-through text-[10px] sm:text-sm">
                            {product.price.toLocaleString()} تومان
                        </span>
                    )}
                </div>
                <div className="flex justify-between gap-1 sm:gap-2 md:gap-3">
                    <Link href={`/products/${product._id}`} className="flex-1">
                        <button className="w-full bg-or text-white text-[10px] sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-md hover:bg-orange-600 transition-colors">
                            جزئیات
                        </button>
                    </Link>
                    <button className="flex-1 bg-blue-500 text-white text-[10px] sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-md hover:bg-blue-600 transition-colors">
                        + سبد خرید
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;