"use client";

import {
  ArrowRightOutlined,
  GlobalOutlined,
  TruckOutlined,
  UndoOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";

function Features() {
  return (
    <section className="w-full py-10 md:mt-[100px] mt-[120px] md:min-h-[60vh] relative overflow-visible">
      <div className="absolute inset-0 md:mt-[150px] bg-gradient-to-t from-orange-600 to-gray-100 rounded-b-[40px] md:rounded-b-[100px] h-full md:h-[250px]"></div>

      <div className="container mx-auto px-4 flex flex-col gap-10 md:gap-14 relative z-10">
        <div className="flex flex-wrap justify-center gap-5 sm:gap-6 md:gap-8 mt-6 sm:mt-10 md:mt-20 z-20">
          {[
            {
              icon: (
                <span className="font-bold text-xl sm:text-2xl text-or">
                  1000+
                </span>
              ),
              text: "تنوع مختلف",
            },
            {
              icon: <TruckOutlined className="text-xl sm:text-2xl text-or" />,
              text: "ارسال رایگان",
            },
            {
              icon: (
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                  <Image
                    src="/images/shoseFeauter.png"
                    alt="Shoes Feature"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
              ),
              text: "تنوع خاص",
            },
            {
              icon: <UndoOutlined className="text-xl sm:text-2xl text-or" />,
              text: "مرجوعی تا ۷ روز",
            },
            {
              icon: <GlobalOutlined className="text-xl sm:text-2xl text-or" />,
              text: "ارسال بین‌المللی و سفارشات کلی",
            },
          ].map((item, index) => (
            <article
              key={index}
              className="flex-[1_1_140px] max-w-[200px] p-3 sm:p-4 rounded-xl neumorphic flex flex-col items-center gap-2 text-center"
            >
              {item.icon}
              <p className="text-xs sm:text-sm text-gray-700 dark:text-or">
                {item.text}
              </p>
            </article>
          ))}
        </div>
        <nav className="flex justify-center">
          <Link
            href="/products"
            prefetch={true}
            className="neumorphic w-[160px] sm:w-[200px] text-center relative z-30 text-xs sm:text-sm rounded-full overflow-hidden group hover:text-white transition duration-300"
          >
            <span className="relative z-10 flex justify-center items-center gap-2 py-2 sm:py-2.5">
              <span className="dark:text-white">برو به فروشگاه</span>
              <ArrowRightOutlined className="text-sm sm:text-base transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-emerald-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-in-out z-0"></span>
          </Link>
        </nav>
      </div>
    </section>
  );
}

export default Features;
