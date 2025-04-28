"use client"

import { ArrowRightOutlined, GlobalOutlined, TruckOutlined, UndoOutlined } from "@ant-design/icons"
import Image from "next/image"
import Link from "next/link"

function Features() {
    return (
        <section className="w-full py-6 md:mt-[100px] md:min-h-[50vh]">
            <div className="container mx-auto px-4 flex flex-col gap-8">

                {/* Cards */}
                <div className="flex flex-wrap justify-center gap-6">

                    {/* تنوع مختلف */}
                    <article className="flex-1 min-w-[200px] max-w-[250px] p-4 rounded-xl neumorphic flex flex-col items-center gap-3 text-center">
                        <span className="font-bold text-2xl text-or">1000+</span>
                        <p className="font-sans text-sm text-gray-700 dark:text-or">تنوع مختلف</p>
                    </article>

                    {/* ارسال رایگان */}
                    <article className="flex-1 min-w-[200px] max-w-[250px] p-4 rounded-xl neumorphic flex flex-col items-center gap-3 text-center">
                        <TruckOutlined className="text-3xl text-or" />
                        <p className="font-sans text-sm text-gray-700 dark:text-or">ارسال رایگان</p>
                    </article>

                    {/* تصویر سفارشی */}
                    <article className="flex-1 min-w-[200px] max-w-[250px] p-4 rounded-xl neumorphic flex flex-col items-center gap-3 text-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                            <Image
                                src="/images/shoseFeauter.png"
                                alt="Shoes Feature"
                                width={48}
                                height={48}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <p className="font-sans text-sm text-gray-700 dark:text-or">تنوع خاص</p>
                    </article>

                    {/* مرجوعی تا ۷ روز */}
                    <article className="flex-1 min-w-[200px] max-w-[250px] p-4 rounded-xl neumorphic flex flex-col items-center gap-3 text-center">
                        <UndoOutlined className="text-3xl text-or" />
                        <p className="font-sans text-sm text-gray-700 dark:text-or">مرجوعی تا ۷ روز</p>
                    </article>

                    {/* سفارشات جزئی و کلی + ارسال بین‌المللی */}
                    <article className="flex-1 min-w-[200px] max-w-[250px] p-4 rounded-xl neumorphic flex flex-col items-center gap-3 text-center">
                        <GlobalOutlined className="text-3xl text-or" />
                        <p className="font-sans text-sm text-gray-700 dark:text-or">ارسال بین‌المللی و سفارشات کلی</p>
                    </article>

                </div>

                {/* Button */}
                <nav className="flex justify-center">
                    <Link
                        href="/products"
                        className="neumorphic w-[220px] text-center relative z-10 text-sm rounded-full overflow-hidden group hover:text-white transition duration-300"
                    >
                        <span className="relative z-10 flex justify-center items-center gap-2 py-2">
                            <span className="dark:text-or">برو به فروشگاه</span>
                            <ArrowRightOutlined className="transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <span className="absolute inset-0 bg-emerald-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0"></span>
                    </Link>
                </nav>

            </div>
        </section>
    )
}

export default Features