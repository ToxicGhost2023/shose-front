import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Banner3Module() {
    return (
        <section className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
            <figure className="mb-8">
                <Image
                    width={400}
                    height={400}
                    alt="بنر کفش"
                    src="/images/banner5.png"
                    className="w-64 h-64 sm:w-80 sm:h-80 object-contain mx-auto"
                />
            </figure>

            <div className="text-center max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-or mb-4">
                    سیاست‌های فروشگاه کفش ما
                </h2>
                <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                    ما در فروشگاه خود، متعهد به ارائه‌ی بهترین کیفیت و تجربه‌ی خرید بی‌نقص هستیم. تمامی کفش‌های ارائه شده دارای ضمانت اصالت و کیفیت می‌باشند.
                </p>
                <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                    در صورت وجود هرگونه مشکل در سایز یا کیفیت، امکان تعویض یا مرجوع کالا تا ۷ روز پس از خرید فراهم شده است.
                </p>
                <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                    ارسال سریع به سراسر کشور و پشتیبانی ۲۴ ساعته، بخشی از تعهد ما برای رضایت شماست.
                </p>
                <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                    با ما همراه شوید و لذت یک خرید مطمئن را تجربه کنید.
                </p>

                <div className="mt-8">
                    <Link
                        href="/products"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300"
                    >
                        مشاهده محصولات
                    </Link>
                </div>
            </div>
        </section>

    )
}

export default Banner3Module
