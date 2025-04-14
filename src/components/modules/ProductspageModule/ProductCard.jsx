"use client"

import Image from 'next/image';
export default function ProductCard({ product }) {
    return (
        <div className=" neumorphic-elevated  border border-gray-200 dark:border-gray-700 rounded-xl shadow-md p-4 hover:shadow-lg transition-all duration-300">
            <Image
                width={400}
                height={400}
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="font-semibold text-sm mb-1 truncate">{product.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs mb-2">{product.category}</p>
            <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold text-sm">{product.finalPrice.toLocaleString()} تومان</span>
                {product.discount > 0 && (
                    <span className="text-red-500 line-through text-xs">
                        {product.price.toLocaleString()} تومان
                    </span>
                )}
            </div>
        </div>
    );
}
