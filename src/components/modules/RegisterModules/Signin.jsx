import { useState } from "react";
import { useForm } from "react-hook-form";


function Signin() {
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [mobile, setMobile] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();



    const onSubmit = async (data) => {
        console.log(data)
        // try {
        //   const res = await fetch("http://localhost:3400/auth/login", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(data),
        //     credentials: "include",
        //   });

        //   const result = await res.json();

        //   if (res.status !== 200) {
        //     return Swal.fire({
        //       title: "خطا",
        //       text: result.error || "مشکلی در ارسال کد پیش آمده",
        //       icon: "error",
        //     });
        //   }

        //   const code = result?.otp;
        //   setIsOtpSent(true);
        //   setMobile(data.mobile);

        //   Swal.fire({
        //     title: "کد یبار مصرف",
        //     text: code, // نمایش کد OTP
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
        //   console.error("خطا در ارسال کد:", error.message);
        // }
    };



    return (
        <>
            {isOtpSent ? (
                <div

                    className="flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 lg:p-12 max-w-md mx-auto space-y-6"
                >
                    <h2 className="text-2xl font-semibold text-center ">
                        وارد کردن کد یبار مصرف
                    </h2>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="رمز یبار مصرف"
                        className="neumorphic md:w-[300px] w-full px-2 py-2 text-lg  rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-300 "
                    />
                    <button
                        onClick={otpHandler}
                        className="neumorphic rounded-3xl text-or w-full py-3 mt-4 text-lg font-semibold   transition-all duration-300"
                    >
                        تایید کد
                    </button>
                </div>
            ) : (
                <main className="flex justify-center items-center md:min-h-screen  px-4">
                    <div

                        className="w-full  justify-center max-w-sm p-4 sm:p-6 "
                    >
                        <form
                            onSubmit={handleSubmit(onSubmit)}

                            className="flex flex-col gap-4"
                        >
                            <h2 className="text-3xl md:-mt-[250px] font-bold text-center ">
                                ورود
                            </h2>
                            <div className="relative">
                                <input
                                    type="text"
                                    {...register("mobile", {
                                        required: "شماره موبایل الزامی است",
                                    })}
                                    placeholder="شماره موبایل"
                                    className="neumorphic md:w-[300px] w-full px-2 py-2 text-lg  rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-300 "
                                />
                                {errors.mobile && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.mobile.message}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="neumorphic rounded-3xl text-or w-full py-3 mt-4 text-lg font-semibold   transition-all duration-300"
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

export default Signin