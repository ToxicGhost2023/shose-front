"use client";

import { fetchProducts } from "@/store/slice/productsReducer";
import { Carousel } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const brands = [
  { name: "Adidas", src: "/images/logo/adidas.png" },
  { name: "Puma", src: "/images/logo/puma.png" },
  { name: "Mizano", src: "/images/logo/mizano2.png" },
  { name: "ASICS", src: "/images/logo/asics.png" },
  { name: "Nike", src: "/images/logo/logo-nike.png" },
];

function SliderProductsWomen() {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  useEffect(() => {
    const updatedProducts = products.map((product) => ({
      ...product,
      image: product.image.startsWith("http")
        ? product.image
        : `http://localhost:3400${product.image}`,
    }));
    setFilteredProducts(updatedProducts);
  }, [products]);

  return (
    <div className="w-full">
      {/* برندها */}
      <section className="py-10 md:py-16 rounded-b-[40px] md:rounded-b-[80px]  ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-or mb-6 sm:mb-8">
          برندهای معتبر
        </h2>

        <div className="h-[140px] sm:h-[160px] flex justify-around items-center gap-4 sm:gap-6 px-4 sm:px-8 overflow-x-auto scrollbar-hide scroll-snap-x scroll-smooth">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex-shrink-0 scroll-snap-start inline-flex flex-col items-center justify-center p-3 bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-lg hover:border-orange-400 border border-transparent min-w-[100px] sm:min-w-[120px] max-w-[140px] cursor-pointer"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={70}
                height={70}
                className="rounded-full mb-2 object-cover w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]"
              />
              <h3 className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 text-center line-clamp-1">
                {brand.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* اسلایدر محصولات پرفروش */}
      <section className="w-full bg-white dark:bg-[#2b2b2b] py-16 rounded-t-[80px] md:mt-[100px]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-or mb-8 sm:mb-12">
          پرفروش‌ترین کفش‌های زنانه
        </h2>

        <Carousel
          effect="fade"
          autoplay
          autoplaySpeed={2000}
          className="max-w-6xl mx-auto"
        >
          {filteredProducts
            ?.filter((product) => product.category === "زنانه")
            .map((product, index) => (
              <motion.div
                key={product._id || index}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="flex flex-col items-center justify-center px-4"
              >
                <div className="relative w-full flex justify-center items-center min-h-[260px] sm:min-h-[320px] md:min-h-[400px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={400}
                    placeholder="blur"
                    blurDataURL="/images/blur-placeholder.png"
                    className="rounded-2xl object-contain max-w-[85%] h-auto"
                  />
                </div>
                <p className="text-center text-base sm:text-lg md:text-xl font-bold mt-6 text-or dark:text-white">
                  {product.title}
                </p>
              </motion.div>
            ))}
        </Carousel>

        {/* دکمه */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <Link href="/products?category=زنانه">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 text-sm sm:text-base"
            >
              دیدن همه محصولات 👟
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default SliderProductsWomen;
