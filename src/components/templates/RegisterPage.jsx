"use client"

import React, { useState } from 'react'
import Signin from '../modules/RegisterModules/Signin';
import Signup from '../modules/RegisterModules/Signup';

function RegisterPage() {
    const [showForm, setShowForm] = useState(null);
    const showHandler = (form) => {
        setShowForm(form);
    };
    return (
        <section className="flex flex-col md:flex-row items-center justify-center px-4 py-8 md:px-10 md:py-14 min-h-[600px]">
            <div className="w-full max-w-2xl md:max-w-3xl hover:border hover:border-or  rounded-3xl overflow-hidden neumorphic transition-all duration-500 flex justify-center flex-col md:flex-row">

                <div className="w-full md:w-1/2 p-6 md:p-10  flex flex-col justify-center">

                    <div className="text-center mb-6">
                        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100">
                            فرم ثبت نام
                        </h1>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => showHandler("signin")}
                            className="text-or neumorphic w-full py-3 text-lg font-semibold rounded-full    transition-all duration-300"
                        >
                            ورود
                        </button>

                        <button
                            onClick={() => showHandler("signup")}
                            className="neumorphic text-green-600 w-full py-3 text-lg font-semibold rounded-full     transition-all duration-300"
                        >
                            ثبت نام
                        </button>
                    </div>

                    <div className="w-full h-px bg-gray-300 dark:bg-gray-600 my-6" />

                    <div className="w-full flex justify-center">
                        {showForm === "signin" && <Signin />}
                        {showForm === "signup" && <Signup />}
                    </div>
                </div>



            </div>
        </section>
    )
}

export default RegisterPage