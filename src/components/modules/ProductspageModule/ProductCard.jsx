"use client";


import Image from 'next/image';
import Link from 'next/link';
import LikeButton from './LikeButton';


const ProductCard = ({ product }) => {
    const { title, image, content, quantity, discount, price, finalPrice, category } = product;

    const { _id } = product


    return (
        <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 w-full max-w-[300px] sm:max-w-[250px] md:max-w-[280px] mx-auto p-3 flex flex-col">
            {/* تصویر */}
            <div className="relative w-full h-40 sm:h-44 md:h-48 rounded-xl overflow-hidden">
                {image ? (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 300px"
                    />
                ) : (
                    <div className="w-full h-40 bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">تصویر موجود نیست</span>
                    </div>
                )}

                {/* <img src={image} alt={title} className="w-full h-auto" /> */}

                {discount > 0 && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] sm:text-xs px-2 py-1 rounded">
                        {discount}% تخفیف
                    </span>
                )}
            </div>

            {/* محتوا */}
            <div className="mt-3 flex flex-col gap-1 flex-1">
                {/* عنوان و دکمه لایک */}
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-sm sm:text-base truncate">{title}</h3>
                    <LikeButton id={_id} />
                </div>

                {/* دسته‌بندی */}
                <p className="text-gray-500 dark:text-gray-400 text-xs">{category}</p>

                {/* توضیحات */}
                <p className="text-gray-600 dark:text-gray-300 text-[11px] sm:text-xs line-clamp-2">
                    {typeof content === "string"
                        ? content
                            .replace(/\n/g, ' ')
                            .split('-')
                            .filter((item) => item.trim())
                            .join(' | ')
                        : "توضیحی ثبت نشده"}
                </p>


                {/* قیمت‌ها */}
                <div className="flex justify-between items-center mt-1">
                    <span className="text-or font-bold text-sm">{finalPrice?.toLocaleString()} تومان</span>
                    {discount > 0 && (
                        <span className="text-red-500 line-through text-xs">{price?.toLocaleString()} تومان</span>
                    )}
                </div>

                {/* دکمه‌ها */}
                <div className="flex gap-2 mt-3">
                    <Link
                        href={`/products/${product._id}`}
                        className="flex-1 bg-or text-white text-xs sm:text-sm px-3 py-1.5 rounded-lg text-center hover:bg-orange-600 transition"
                    >
                        جزئیات
                    </Link>
                    <button className="flex-1 bg-blue-500 text-white text-xs sm:text-sm px-3 py-1.5 rounded-lg hover:bg-blue-600 transition">
                        + سبد خرید
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ProductCard;