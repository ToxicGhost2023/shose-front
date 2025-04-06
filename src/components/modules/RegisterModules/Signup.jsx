"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";

function Signup() {
    const [isOtpSent, setIsOtpSent] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = async (data) => {
        console.log("onSubmit")
        // try {
        //   const res = await fetch("http://localhost:3400/auth/register", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(data),
        //   });
        //   if (res.status == 400) {
        //     alert(" این شماره قبلا استفاده شده");
        //     return;
        //   }
        //   const result = await res.json();
        //   const code = result?.otp?.code;

        //   setIsOtpSent(true);

        //   Swal.fire({
        //     title: "کد یبار مصرف",
        //     text: code, // نمایش کد
        //     icon: "info",
        //     showCancelButton: true,
        //     confirmButtonText: "کپی کد",
        //     cancelButtonText: "باشه",
        //     preConfirm: () => {
        //       navigator.clipboard.writeText(code).then(() => {
        //         Swal.fire({
        //           title: "کد کپی شد",
        //           text: "کد با موفقیت کپی شد",
        //           icon: "success",
        //           timer: 1500,
        //           showConfirmButton: false,
        //         });
        //       });
        //     },
        //   });
        // } catch (error) {
        //   console.error("خطا در ثبت نام:", error.message);
        // }
    }


    return (
        <>
            {isOtpSent ? (
                <div

                    className="flex flex-col justify-center items-center rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-md w-full mx-4 sm:mx-auto space-y-6"
                >
                    <h2 className="text-2xl font-semibold text-center ">
                        وارد کردن کد یبار مصرف
                    </h2>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="رمز یبار مصرف"
                        className="neumorphic md:w-[300px] px-4 py-3 text-lg  rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-300"
                    />
                    <button
                        onClick={otpHandler}
                        className="neumorphic text-or rounded-3xl  md:w-[300px]  w-full py-3 mt-2 text-lg font-semibold  transition-all duration-300 "
                    >
                        تایید کد
                    </button>
                </div>
            ) : (
                <main className="flex justify-center items-center md:min-h-screen px-4">
                    <div

                        className="w-full max-w-md p-6  rounded-3xl "
                    >
                        <form

                            className="flex flex-col gap-4 md:-mt-[200px]"
                        >
                            <h2 className="text-3xl font-bold text-center ">
                                ثبت نام
                            </h2>
                            <div className="relative space-y-4 ">
                                <input
                                    type="text"
                                    {...register("fullName", {
                                        required: "لطفا نام و نام خانوادگی رو وارد کنید",
                                    })}
                                    placeholder="نام و ‌‌‌‌‌‌‌‌نام خانوادگی"
                                    className="neumorphic w-full  md:w-[300px] px-4 py-3 text-lg  rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-300"
                                />
                                {errors.fullName && (
                                    <p className="text-red-500 text-sm">{errors.fullName.message}</p>
                                )}
                                <input
                                    type="text"
                                    {...register("mobile", {
                                        required: "شماره موبایل الزامی است",
                                    })}
                                    placeholder="شماره موبایل"
                                    className="neumorphic w-full  md:w-[300px] px-4 py-3 text-lg  rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-300"
                                />
                                {errors.mobile && (
                                    <p className="text-red-500 text-sm">{errors.mobile.message}</p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="neumorphic text-or rounded-3xl  md:w-[300px]  w-full py-3 mt-2 text-lg font-semibold  transition-all duration-300 "
                            >
                                ارسال کد تایید
                            </button>
                        </form>
                    </div>
                </main>
            )}
        </>
    )
}

export default Signup