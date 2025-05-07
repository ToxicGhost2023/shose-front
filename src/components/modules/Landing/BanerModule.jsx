"use client";

import Image from "next/image";
import Link from "next/link";

function BanerModule() {
  return (
    <section className="w-full min-h-[70vh] md:mt-12 bg-gradient-to-r from-orange-600 to-gray-100 rounded-lg md:min-h-[90vh] flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-6">
        <article className="text-center md:text-right flex flex-col items-center md:items-start justify-center px-4 md:px-0">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white animate-pulse leading-snug">
            با شوور 👣 بدرخشید!
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl mb-4 max-w-xl">
            شیک‌ترین و رنگارنگ‌ترین کفش‌ها برای هر استایل منتظر شماست.
          </p>
          <p className="text-xs sm:text-sm text-gray-800 dark:text-white mb-6 max-w-md">
            کفش‌های شیک و خفن برای آقایون و خانوما، از کوچیک تا بزرگ، هر سایزی
            که بخوای!
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6">
            <Link
              href="/products"
              prefetch={true}
              className="bg-white px-6 py-3 mb-5 text-gray-700 font-semibold rounded-full hover:bg-orange-600 hover:text-white transition-all duration-500 text-sm sm:text-base"
            >
              همین حالا ببینید!
            </Link>
            <Link
              href="/shopping"
              prefetch={false}
              className="bg-white px-6 py-3  mb-5 text-gray-700 font-semibold rounded-full hover:bg-orange-600 hover:text-white transition-all duration-500 text-sm sm:text-base"
            >
              سبد خرید من!
            </Link>
          </div>
        </article>

        {/* تصویر بنر */}
        <figure className="relative duration-300 translate-all rounded-3xl w-full md:w-auto flex justify-center">
          <Image
            src="/images/banner3.png"
            width={1400}
            height={1200}
            alt="بنر کفش"
            className="object-contain rounded-full w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] md:w-[70vh] lg:w-[90vh] z-10 animate-fade-in"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute bottom-5 w-1/3 h-6 bg-black/40 blur-md rounded-full z-0"></div>
          <figcaption className="sr-only">بنر تبلیغاتی کفش</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default BanerModule;
