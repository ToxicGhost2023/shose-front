'use client';

import React from 'react';
import Link from 'next/link';
import { InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';
import NeuButton from '../modules/Header/NeuButton';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const TelegramIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" color='#FFA500' x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">

            <path
                fill='#FFA500'
                d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 34.087891 14.035156 C 33.403891 14.035156 32.635328 14.193578 31.736328 14.517578 C 30.340328 15.020578 13.920734 21.992156 12.052734 22.785156 C 10.984734 23.239156 8.9960938 24.083656 8.9960938 26.097656 C 8.9960938 27.432656 9.7783594 28.3875 11.318359 28.9375 C 12.146359 29.2325 14.112906 29.828578 15.253906 30.142578 C 15.737906 30.275578 16.25225 30.34375 16.78125 30.34375 C 17.81625 30.34375 18.857828 30.085859 19.673828 29.630859 C 19.666828 29.798859 19.671406 29.968672 19.691406 30.138672 C 19.814406 31.188672 20.461875 32.17625 21.421875 32.78125 C 22.049875 33.17725 27.179312 36.614156 27.945312 37.160156 C 29.021313 37.929156 30.210813 38.335938 31.382812 38.335938 C 33.622813 38.335938 34.374328 36.023109 34.736328 34.912109 C 35.261328 33.299109 37.227219 20.182141 37.449219 17.869141 C 37.600219 16.284141 36.939641 14.978953 35.681641 14.376953 C 35.210641 14.149953 34.672891 14.035156 34.087891 14.035156 z M 34.087891 16.035156 C 34.362891 16.035156 34.608406 16.080641 34.816406 16.181641 C 35.289406 16.408641 35.530031 16.914688 35.457031 17.679688 C 35.215031 20.202687 33.253938 33.008969 32.835938 34.292969 C 32.477938 35.390969 32.100813 36.335938 31.382812 36.335938 C 30.664813 36.335938 29.880422 36.08425 29.107422 35.53125 C 28.334422 34.97925 23.201281 31.536891 22.488281 31.087891 C 21.863281 30.693891 21.201813 29.711719 22.132812 28.761719 C 22.899812 27.979719 28.717844 22.332938 29.214844 21.835938 C 29.584844 21.464938 29.411828 21.017578 29.048828 21.017578 C 28.923828 21.017578 28.774141 21.070266 28.619141 21.197266 C 28.011141 21.694266 19.534781 27.366266 18.800781 27.822266 C 18.314781 28.124266 17.56225 28.341797 16.78125 28.341797 C 16.44825 28.341797 16.111109 28.301891 15.787109 28.212891 C 14.659109 27.901891 12.750187 27.322734 11.992188 27.052734 C 11.263188 26.792734 10.998047 26.543656 10.998047 26.097656 C 10.998047 25.463656 11.892938 25.026 12.835938 24.625 C 13.831938 24.202 31.066062 16.883437 32.414062 16.398438 C 33.038062 16.172438 33.608891 16.035156 34.087891 16.035156 z"></path>
        </svg>
    );
    return (
        <footer className="w-full bg-[#f0f0f0] dark:bg-[#3a393957] text-gray-800 dark:text-white py-8 px-4 md:px-8 mt-8 rounded-2xl shadow-[10px_10px_20px_rgba(0,0,0,0.1),-10px_-10px_20px_rgba(255,255,255,0.7)] dark:shadow-[10px_10px_20px_rgba(0,0,0,0.4),-10px_-10px_20px_rgba(255,255,255,0.05)] transition-all duration-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* لینک‌های مفید */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-center md:text-right">لینک‌های مفید</h3>
                    <div className="items-center md:items-start bg-[#e0e0e0] dark:bg-[#2b2b2b] p-4 rounded-xl shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.1),inset_5px_5px_9px_#bababa,inset_-5px_-5px_9px_#ffffff] dark:shadow-[8px_8px_16px_rgba(0,0,0,0.3),-8px_-8px_16px_rgba(255,255,255,0.05),inset_5px_5px_9px_#1a1a1a,inset_-5px_-5px_9px_#3c3c3c] flex flex-col gap-2">
                        <Link href="/" className="hover:bg-or dark:hover:bg-or hover:text-white w-full px-4 py-2 rounded-lg transition-all duration-300">خانه</Link>
                        <Link href="/about" className="hover:bg-or dark:hover:bg-or hover:text-white dark:hover:text-white w-full px-4 py-2 rounded-lg transition-all duration-300">درباره ما</Link>
                        <Link href="/contact" className="hover:bg-or dark:hover:bg-or hover:text-white dark:hover:text-white w-full px-4 py-2 rounded-lg transition-all duration-300">تماس با ما</Link>
                        <Link href="/blog" className="hover:bg-or dark:hover:bg-or hover:text-white dark:hover:text-white w-full px-4 py-2 rounded-lg transition-all duration-300">بلاگ</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-center md:text-right">
                    <h3 className="text-lg font-bold">تماس با ما</h3>
                    <div className="bg-[#e0e0e0] dark:bg-[#2b2b2b] p-4 rounded-xl flex flex-col gap-2">
                        <p className="w-full px-4 py-2">آدرس: تهران، خیابان آزادی، پلاک 123</p>
                        <p className="w-full px-4 py-2">تلفن: 021-12345678</p>
                        <p className="w-full px-4 py-2">موبایل: 0912-345-6789</p>
                        <p className="w-full px-4 py-2">ایمیل: info@example.com</p>
                    </div>
                </div>


                <div className="flex flex-col gap-4 items-center justify-center md:items-start">
                    <h3 className="text-lg font-bold">شبکه‌های اجتماعی</h3>
                    <section className="flex gap-4">
                        <NeuButton icon={<InstagramOutlined />} />
                        <NeuButton icon={<WhatsAppOutlined />} />
                        <NeuButton icon={<TelegramIcon />} />
                    </section>


                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 bg-[#e0e0e0] dark:bg-[#2b2b2b] rounded-full flex items-center justify-center mt-4 shadow-[inset_5px_5px_9px_#bababa,inset_-5px_-5px_9px_#ffffff] dark:shadow-[inset_5px_5px_9px_#1a1a1a,inset_-5px_-5px_9px_#3c3c3c] hover:scale-105 transition-all duration-300"
                    >
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12 4l-8 8h6v8h4v-8h6l-8-8z"
                                className="fill-gray-800 dark:fill-white"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* خط جداکننده و کپی‌رایت */}
            <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-4 text-center text-sm">
                <p>© 1404 - طراحی و توسعه توسط تیم شما</p>
            </div>
        </footer>
    );
}

export default Footer;