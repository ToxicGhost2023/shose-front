"use client"

import { ArrowRightOutlined, TruckOutlined } from "@ant-design/icons"
import Image from "next/image"
import Link from "next/link"

function Features() {
    return (
        <section className="w-full py-6 ">
            <div className="container mx-auto px-4 flex flex-col gap-4">


                <div className="flex flex-wrap justify-between gap-4">
                    <article className=" flex-1 min-w-[200px] p-3 rounded-xl neumorphic flex items-center justify-between">
                        <span className="font-bold text-2xl text-or">1000+</span>
                        <p className="font-sans text-xs text-gray-700 dark:text-or">تنوع مختلف</p>
                    </article>

                    <article className="flex-1 min-w-[200px] p-3 rounded-xl neumorphic flex items-center justify-between">
                        <span className="text-2xl text-or">
                            <TruckOutlined />
                        </span>
                        <p className="font-sans text-xs text-gray-700 dark:text-or">ارسال رایگان</p>
                    </article>

                    <article className="flex-1 min-w-[200px] p-3 rounded-xl neumorphic flex items-center justify-between">
                        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 justify-between">
                            <Image
                                src="/images/shoseFeauter.png"
                                alt="shoes feature"
                                width={40}
                                height={40}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <p className="font-sans text-sm text-gray-700 dark:text-or">تنوع مختلف</p>
                    </article>
                </div>

                {/* لینک فروشگاه پایین سه تا باکس */}
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