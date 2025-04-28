'use client'

import Image from 'next/image'
import React from 'react'

function Baner2Module() {
    return (
        <div className="relative w-full h-[100vh] md:h-[100vh] lg:h-[100vh] rounded-xl overflow-hidden my-6">
            {/* بک‌گراند بنر */}
            <Image
                src="/images/banner4.png"
                alt="banner"
                layout="fill"
                objectFit="cover"
                className="z-0"
                priority
            />

            {/* اوورلی شیشه‌ای برای متن تبلیغ */}
            <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-center items-center text-center px-6">
                <div className="bg-white/30 backdrop-blur-md p-8 rounded-2xl w-full max-w-2xl">
                    <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-md">
                        تخفیف‌های باورنکردنی!
                    </h2>
                    <p className="text-white text-lg md:text-2xl font-medium drop-shadow-sm">
                        تا <span className="text-yellow-400 font-bold text-3xl md:text-4xl">۵۰٪</span> تخفیف روی محصولات منتخب زنانه و مردانه
                    </p>
                    <p className="text-white text-sm md:text-lg mt-4">فقط تا پایان هفته!</p>
                </div>
            </div>
        </div>

    )
}

export default Baner2Module
