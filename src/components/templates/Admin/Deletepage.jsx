"use client";
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Swal from 'sweetalert2';
import { deleteProduct } from '@/utils/fetching';

function Deletepage({ id, product }) {
    const { title, image, content, quantity, discount, price, finalPrice, category } = product;
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const deletehandler = async (id) => {

        const result = await Swal.fire({
            title: 'آیا مطمئن هستید؟',
            text: 'این محصول برای همیشه حذف خواهد شد!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'بله، حذف کن!',
            cancelButtonText: 'لغو',
            reverseButtons: true,
        });


        if (!result.isConfirmed) return;

        setLoading(true);
        try {
            await deleteProduct(id);

            await Swal.fire({
                title: 'حذف شد!',
                text: 'محصول با موفقیت حذف شد.',
                icon: 'success',
                confirmButtonText: 'باشه',
                timer: 2000,
                timerProgressBar: true,
            });
            router.push('/panelAdmin/productsList');
            router.refresh();
        } catch (error) {
            console.error('خطا در حذف محصول:', error.message);

            await Swal.fire({
                title: 'خطا!',
                text: error.message || 'خطا در حذف محصول. لطفاً دوباره تلاش کنید.',
                icon: 'error',
                confirmButtonText: 'باشه',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen neumorphic flex items-center justify-center p-4 sm:p-6 lg:p-10 transition-all duration-700">
            <div className="w-full max-w-6xl dark:text-white dark:border-gray-700/30 rounded-3xl p- sm:p-7 lg:p-10 transform hover:shadow-3xl transition-all duration-500">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6 sm:mb-8 lg:mb-10 bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x tracking-tight">
                    {title}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                    {image && (
                        <div className="relative w-full h-60 sm:h-80 md:h-96 lg:h-[32rem] overflow-hidden rounded-2xl group">
                            <Image
                                src={image.startsWith('http') ? image : `http://localhost:3400/uploads/${image}`}
                                alt={title}
                                fill
                                className="object-fit transition-transform duration-700 group-hover:scale-115 dark:bg-black"
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                            <div className="absolute inset-0 ring-2 ring-indigo-500/20 dark:ring-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                        </div>
                    )}
                    <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8 text-gray-800 dark:text-gray-100">
                        {content.includes(' و ') ? (
                            content.split(' و ').map((item, index) => (
                                <span key={index} className="block">
                                    - {item.trim()}
                                </span>
                            ))
                        ) : (
                            content
                        )}

                        <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-xs sm:text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                                تعداد موجود:
                            </span>
                            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full px-3 sm:px-4 py-1 sm:py-1.5 font-semibold text-xs sm:text-sm shadow-md transform hover:scale-105 transition-transform duration-300">
                                {quantity} عدد
                            </span>
                        </div>

                        <div className="flex flex-col gap-2 sm:gap-3 bg-gray-50/80 dark:bg-gray-800/40 p-4 sm:p-5 rounded-2xl shadow-md border border-gray-200/30 dark:border-gray-700/30">
                            <p
                                className={`${discount > 0
                                    ? 'line-through text-gray-400 dark:text-gray-500'
                                    : 'text-indigo-600 dark:text-indigo-400'
                                    } font-semibold text-base sm:text-lg lg:text-xl transition-colors duration-300`}
                            >
                                قیمت: {price?.toLocaleString()} تومان
                            </p>
                            {discount > 0 && finalPrice && (
                                <p className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent animate-pulse">
                                    قیمت با تخفیف: {finalPrice.toLocaleString()} تومان
                                </p>
                            )}
                        </div>

                        {category && (
                            <p className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-200">
                                دسته‌بندی:{' '}
                                <span className="font-semibold bg-indigo-100/80 dark:bg-indigo-900/60 px-3 py-1 rounded-full text-indigo-700 dark:text-indigo-300 shadow-sm">
                                    {category}
                                </span>
                            </p>
                        )}

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                            <button
                                onClick={() => window.history.back()}
                                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium text-sm sm:text-base py-2.5 sm:py-3 text-center transition-colors duration-300 relative group"
                            >
                                بازگشت به لیست
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                            </button>

                            <button
                                onClick={() => deletehandler(id)}
                                disabled={loading}
                                className={`w-full text-sm py-2 px-4 rounded-lg transition duration-200 ${loading
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-red-500 hover:bg-red-600 text-white'
                                    }`}
                            >
                                {loading ? 'در حال حذف...' : 'حذف'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Deletepage;