import Image from 'next/image'
import React from 'react'

function Aboutpage() {
    return (
        <div className="container mx-auto p-6 space-y-12 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg">
            <section className="text-center">
                <h1 className="text-4xl font-semibold text-gradient mb-6">درباره ما</h1>
                <p className="text-lg text-gray-800 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                    فروشگاه ما با هدف ارائه بهترین محصولات کفش با کیفیت عالی و قیمت مناسب به شما عزیزان راه‌اندازی شده است.
                    ما همواره در تلاش هستیم تا بهترین تجربه خرید را برای شما فراهم کنیم.
                </p>
            </section>

            <section className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">سیاست فروشگاه</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                        سیاست فروشگاه ما ارائه بهترین محصولات با بالاترین کیفیت است.
                        ما به شما ضمانت خرید بی‌دغدغه و خدمات پس از فروش عالی را ارائه می‌دهیم.
                        فروشگاه ما تمام تلاش خود را به کار گرفته تا تجربه خرید آنلاین راحت و بدون نگرانی برای شما باشد.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        فروشگاه ما همچنین از سیستم پشتیبانی 24 ساعته برخوردار است تا در هر زمان که به کمک نیاز داشتید، پاسخگوی شما باشیم.
                    </p>
                </div>
                <div className="lg:w-1/2 flex justify-center items-center">
                    <Image width={400} height={400} alt="aboutus" src="/images/about/about.png" className="rounded-lg shadow-xl transition-transform transform hover:scale-105" />
                </div>
            </section>

            <section className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">ساخت و راه‌اندازی فروشگاه</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                        فروشگاه ما با استفاده از جدیدترین تکنولوژی‌های روز طراحی و راه‌اندازی شده است.
                        ما به دنبال ارائه یک پلتفرم خرید آنلاین راحت و سریع هستیم که برای کاربران تجربه خرید بهتری فراهم کند.
                        تیم فنی ما همیشه در حال بهبود و توسعه امکانات است.
                    </p>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        تمامی فرایندهای فروشگاه از مرحله سفارش تا ارسال کالا تحت نظارت دقیق قرار دارند تا اطمینان حاصل کنیم که شما تجربه خریدی بی‌دغدغه دارید.
                    </p>
                </div>
                <div className="lg:w-1/2 flex justify-center items-center">
                    <Image width={400} height={400} alt="aboutus" src="/images/about/about2.png" className="rounded-lg shadow-xl transition-transform transform hover:scale-105" />
                </div>
            </section>

            <section className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">شعب فروشگاه در ایران</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                        فروشگاه ما در چندین استان ایران شعبه دارد و قصد داریم شعب بیشتری در آینده نزدیک افتتاح کنیم.
                        این شعبات برای راحتی شما در دسترس هستند تا بتوانید محصولات ما را از نزدیک مشاهده کنید و خریدی راحت و سریع داشته باشید.
                    </p>
                </div>
                <div className="lg:w-1/2 flex justify-center items-center">
                    <Image width={400} height={400} alt="aboutus" src="/images/about/about3.png" className="rounded-lg shadow-xl transition-transform transform hover:scale-105" />
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">واردات و صادرات کفش</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    فروشگاه ما علاوه بر محصولات تولید داخلی، در زمینه واردات و صادرات انواع کفش‌ها نیز فعالیت دارد.
                    ما کفش‌هایی با برندهای معتبر جهانی را وارد کرده و به فروش می‌رسانیم.
                    علاوه بر این، صادرات کفش‌های تولیدی داخلی به کشورهای مختلف نیز جزو فعالیت‌های ماست.
                </p>
            </section>

            <section className="space-y-6">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">تولیدات داخلی کفش</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                    تولیدات داخلی فروشگاه ما با کیفیت بسیار بالا و قیمت مناسب در اختیار شما قرار می‌گیرد.
                    ما از مواد اولیه باکیفیت و استاندارد برای تولید کفش‌ها استفاده می‌کنیم و تمام تلاش خود را برای ارائه بهترین محصول به شما داریم.
                </p>
            </section>
        </div>
    )
}

export default Aboutpage
