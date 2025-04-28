"use client"

import { fetchRegister, verifyOtpCode } from "@/utils/fetching";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

function Signup() {
    const router = useRouter();
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [otp, setOtp] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const onSubmit = async (data) => {
        const { data: result, error, status } = await fetchRegister(data);


        if (result.status === 403) {
            const swalResult = await Swal.fire({ 
                title: "خطا",
                text: "شماره موبایل قبلاً ثبت شده است",
                icon: "error",
                confirmButtonText: "برو به صفحه ورود",
                showCancelButton: true,
                cancelButtonText: "تلاش دوباره",
            });
           
            return; 
        }

        // بررسی خطای کلی
        if (error || !result) {
            Swal.fire({
                title: "خطا",
                text: "مشکلی در ارتباط با سرور رخ داد",
                icon: "error",
            });
            return; // جلوگیری از ادامه اجرا
        }

        // بررسی دریافت OTP
        if (!result?.otp) {
            Swal.fire({
                title: "خطا",
                text: "کد OTP از سرور دریافت نشد",
                icon: "error",
            });
            return; // جلوگیری از ادامه اجرا
        }

        const code = result.otp;
        setIsOtpSent(true);

        Swal.fire({
            title: "کد یک‌بار مصرف",
            text: code,
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "کپی کد",
            cancelButtonText: "باشه",
            preConfirm: () => {
                navigator.clipboard.writeText(code).then(() => {
                    Swal.fire({
                        title: "کد کپی شد",
                        text: "کد با موفقیت کپی شد",
                        icon: "success",
                        timer: 1500,
                        showConfirmButton: false,
                    });
                });
            },
        });
    };

    const otpHandler = async () => {
        if (!otp) {
            return Swal.fire({
                title: "خطا",
                text: "رمز یبار مصرف را وارد کنید",
                icon: "error",
            });
        }
        const result = await verifyOtpCode(otp);

        if (result?.status == 200) {
            Swal.fire({
                title: "بررسی  رمز یبار مصرف",
                text: "با موفقیت ثبت شد",
                icon: "success",
            });
        } else {
            Swal.fire({
                title: "بررسی  رمز یبار مصرف",
                text: "مشکلی رخ داده است",
                icon: "error",
                router: router.push("/register")
            });
        }
        if (result?.user?.role == "admin") {
            router.push("/dashboard");
        } else {
            router.push("/");
        }

    };

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
                            onSubmit={handleSubmit(onSubmit)}
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