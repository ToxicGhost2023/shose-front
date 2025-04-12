"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


function BanerModule() {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, "3000");
    return (
        <>

            <section className="w-full min-h-[60vh] md:min-h-[80vh] flex items-center justify-center">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                    <figure className="neumorphics hover:bg-red-600 duration-300 translate-all rounded-3xl w-full md:w-auto flex justify-center">
                        <Image
                            src="/images/baner.png"
                            width={1400}
                            height={600}
                            alt="بنر کفش"
                            className="object-fill rounded-full w-full h-[40vh] md:h-[60vh] md:w-[60vh]"
                            priority
                        />
                        <figcaption className="sr-only">بنر تبلیغاتی کفش</figcaption>
                    </figure>


                    <article className="text-center text-white flex flex-col items-center justify-center px-4 md:px-0">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-or animate-fade-in">
                            با شوور 👟 بدرخشید!
                        </h1>
                        <p className="text-gray-500 text-lg md:text-xl lg:text-2xl mb-4 max-w-2xl">
                            شیک‌ترین و رنگارنگ‌ترین کفش‌ها برای هر استایل منتظر شماست.
                        </p>
                        <p className="text-xs sm:text-sm dark:text-w2 text-gray-800 mb-6">
                            کفش‌های شیک و خفن برای آقایون و خانوما، از کوچیک تا بزرگ، هر سایزی که بخوای!
                        </p>
                        <Link
                            href="#products"
                            className="neumorphic px-6 py-3 bg-orange-500 text-gray-500 font-semibold rounded-full hover:bg-orange-600 transition-all duration-300"
                        >
                            همین حالا ببینید!
                        </Link>
                    </article>
                </div>
            </section>
        </>
    );
}

export default BanerModule;