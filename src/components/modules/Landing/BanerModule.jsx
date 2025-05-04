"use client"

import Image from 'next/image';
import Link from 'next/link';

function BanerModule() {


    return (
        <>

            <section className="w-full min-h-[60vh] md:mt-[50px] bg-gradient-to-r from-orange-600 to-gray-100 rounded-lg md:min-h-[80vh] flex items-center justify-center"
            >
                <div className="container mx-auto px-4    flex flex-col md:flex-row items-center justify-between gap-6">
                    <figure className="relative duration-300 translate-all rounded-3xl w-full md:w-auto flex justify-center">
                        <Image
                            src="/images/banner3.png"
                            width={1400}
                            height={1200}
                            alt="بنر کفش"
                            className="object-fill rounded-full w-full h-[40vh] md:h-[80vh] md:w-[90vh] z-10 animate-fade-in"
                            sizes="(max-width: 768px) 100vw, 50vw"

                        />
                        {/* سایه */}
                        <div className="absolute bottom-5 w-1/3 h-6 bg-black/40 blur-md rounded-full z-0"></div>

                        <figcaption className="sr-only">بنر تبلیغاتی کفش</figcaption>
                    </figure>



                    <article className="text-center text-white flex flex-col items-center justify-center px-4 md:px-0">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white animate-pulse">
                            با شوور 👣 بدرخشید!
                        </h1>
                        <p className="text-gray-500 text-lg md:text-xl lg:text-2xl mb-4 max-w-2xl">
                            شیک‌ترین و رنگارنگ‌ترین کفش‌ها برای هر استایل منتظر شماست.
                        </p>
                        <p className="text-xs sm:text-sm dark:text-w2 text-gray-800 mb-6">
                            کفش‌های شیک و خفن برای آقایون و خانوما، از کوچیک تا بزرگ، هر سایزی که بخوای!
                        </p>
                        <div className='flex justify-between gap-6'>

                            <Link
                                href="/products"
                                prefetch={true}
                                className="bg-white px-6 py-3  text-gray-500 font-semibold rounded-full hover:bg-orange-600 hover:text-w transition-all duration-500"
                            >
                                همین حالا ببینید!
                            </Link>
                            <Link
                                href="/shopping"
                                prefetch={false}
                                className="bg-white px-8 py-3  text-gray-500 font-semibold rounded-full hover:bg-orange-600 hover:text-w transition-all duration-500"
                            >
                                سبد خرید من!
                            </Link>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}

export default BanerModule;