"use client"

import { ArrowUpOutlined } from '@ant-design/icons'


function ScrollButton() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-12 h-12 bg-[#e0e0e0] dark:bg-[#2b2b2b] hover:bg-or hover:text-white rounded-full flex items-center justify-center shadow-[inset_5px_5px_9px_#bababa,inset_-5px_-5px_9px_#ffffff] dark:shadow-[inset_5px_5px_9px_#1a1a1a,inset_-5px_-5px_9px_#3c3c3c] hover:scale-105 transition-all duration-300 z-50"
        >
            <ArrowUpOutlined className="text-xl text-gray-800 dark:text-white" />
        </button>
    )
}

export default ScrollButton