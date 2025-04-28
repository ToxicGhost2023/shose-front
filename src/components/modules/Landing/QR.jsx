'use client';

import React from 'react';
import { QRCode } from 'antd';
import { motion } from 'framer-motion';
import Image from 'next/image';

const QR = () => {
    const qrLink = 'https://github.com/ToxicGhost2023';

    return (
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8  dark:from-gray-800 dark:to-gray-900 min-h-screen">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative backdrop-blur-lg bg-white/20 dark:bg-white/10 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-6 w-full max-w-sm"
            >

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-400/20 to-purple-500/20 blur-3xl z-0" />


                <div className="relative z-10">
                    <QRCode
                        value={qrLink}
                        size={250}
                        bgColor="#ffffff00"
                        bordered={false}
                    />
                    {/* لوگو وسط QR */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Image
                            src="/images/logo/loggit.png"
                            alt="Logo"
                            width={48}
                            height={48}
                            className="rounded-full bg-white p-1 shadow-lg"
                        />
                    </div>
                </div>

                {/* متن زیر QR */}
                <div className="text-center z-10">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-1">
                        پروژه منو ببین 👀
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                        گوشی رو بیار نزدیک و اسکن کن
                    </p>
                </div>

            </motion.div>
        </div>
    );
};

export default QR;
