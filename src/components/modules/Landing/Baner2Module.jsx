'use client'

import Image from 'next/image'
import React from 'react'

function Baner2Module() {
    return (
        <div className="relative w-full h-[200px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden my-6">
            {/* بک‌گراند بنر */}
            <Image
                src="/images/Baner2.jpg"
                alt="baner"
                layout="fill"
                objectFit="cover"
                className="z-0"
                priority
            />

            {/* اوورلی شیشه‌ای برای متن تبلیغ */}
            <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-center items-center text-center px-4">
                <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg w-full max-w-md">
                    <h2 className="text-white text-2xl md:text-4xl font-bold mb-2 drop-shadow-md">
                        تخفیف‌های باورنکردنی!
                    </h2>
                    <p className="text-white text-lg md:text-xl font-medium drop-shadow-sm">
                        تا <span className="text-yellow-400 font-bold text-2xl md:text-3xl">۵۰٪</span>   تخفیف روی محصولات منتخب زنانه و مردانه
                    </p>
                    <p className="text-white text-sm md:text-base mt-2">فقط تا پایان هفته!</p>
                </div>
            </div>
        </div>
    )
}

export default Baner2Module
