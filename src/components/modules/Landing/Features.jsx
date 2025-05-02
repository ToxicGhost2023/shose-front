"use client"

import { ArrowRightOutlined, GlobalOutlined, TruckOutlined, UndoOutlined } from "@ant-design/icons"
import Image from "next/image"
import Link from "next/link"

function Features() {
    return (
        <section className="w-full py-6 md:mt-[100px] mt-[150px] md:min-h-[60vh] relative overflow-visible">
            <div className="absolute inset-0 md:mt-[150px] bg-gradient-to-t from-orange-600 to-gray-100 rounded-b-[50px] md:rounded-b-[100px] h-full md:h-[250px]"></div>

            <div className="container mx-auto px-4 flex flex-col gap-6 md:gap-8 relative z-10">
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 relative z-20 mt-8 md:mt-20">
                    <article className="flex-1 min-w-[140px] max-w-[200px] p-3 md:p-4 rounded-xl neumorphic flex flex-col items-center gap-2 md:gap-3 text-center transform translate-y-5 md:translate-y-10">
                        <span className="font-bold text-xl md:text-2xl text-or">1000+</span>
                        <p className="font-sans text-xs md:text-sm text-gray-700 dark:text-or">تنوع مختلف</p>
                    </article>
                    <article className="flex-1 min-w-[140px] max-w-[200px] p-3 md:p-4 rounded-xl neumorphic flex flex-col items-center gap-2 md:gap-3 text-center transform translate-y-3 md:translate-y-6">
                        <TruckOutlined className="text-2xl md:text-3xl text-or" />
                        <p className="font-sans text-xs md:text-sm text-gray-700 dark:text-or">ارسال رایگان</p>
                    </article>
                    <article className="flex-1 min-w-[140px] max-w-[200px] p-3 md:p-4 rounded-xl neumorphic flex flex-col items-center gap-2 md:gap-3 text-center transform translate-y-0">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">

                            <Image
                                src="/images/shoseFeauter.png"
                                alt="Shoes Feature"
                                width={40}
                                height={40}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <p className="font-sans text-xs md:text-sm text-gray-700 dark:text-or">تنوع خاص</p>
                    </article>
                    <article className="flex-1 min-w-[140px] max-w-[200px] p-3 md:p-4 rounded-xl neumorphic flex flex-col items-center gap-2 md:gap-3 text-center transform translate-y-3 md:translate-y-6">

                        <UndoOutlined className="text-2xl md:text-3xl text-or" />
                        <p className="font-sans text-xs md:text-sm text-gray-700 dark:text-or">مرجوعی تا ۷ روز</p>
                    </article>
                    <article className="flex-1 min-w-[140px] max-w-[200px] p-3 md:p-4 rounded-xl neumorphic flex flex-col items-center gap-2 md:gap-3 text-center transform translate-y-5 md:translate-y-10">

                        <GlobalOutlined className="text-2xl md:text-3xl text-or" />
                        <p className="font-sans text-xs md:text-sm text-gray-700 dark:text-or">ارسال بین‌المللی و سفارشات کلی</p>
                    </article>
                </div>
                <nav className="flex justify-center mt-10 md:mt-16">

                    <Link
                        href="/products"
                        className="neumorphic w-[180px] md:w-[220px] text-center relative z-30 text-xs md:text-sm rounded-full overflow-hidden group hover:text-white transition duration-300"
                    >
                        <span className="relative z-10 flex justify-center items-center gap-2 py-1.5 md:py-2">
                            <span className="dark:text-white">برو به فروشگاه</span>
                            <ArrowRightOutlined className="text-sm md:text-base transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <span className="absolute inset-0 bg-emerald-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0"></span>
                    </Link>
                </nav>
            </div>
        </section>

    )
}

export default Features