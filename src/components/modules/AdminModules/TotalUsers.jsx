"use client";

import { fetchUsersCount } from "@/store/slice/userReducer";
import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function TotalUsers() {
    const router = useRouter();
    const dispatch = useDispatch();
    const totalUsers = useSelector((state) => state.users.totalUsers);
    const usersCountStatus = useSelector((state) => state.users.usersCountStatus);
    const error = useSelector((state) => state.users.error);

    useEffect(() => {
        if (usersCountStatus === "idle") {
            dispatch(fetchUsersCount());
        }
    }, [dispatch, usersCountStatus]);

    return (
        <div className="p-2 mt-[50px] rounded-lg relative">
            <main className="max-w-md mx-auto p-6 text-white rounded-2xl flex flex-col items-center">
                <section
                    className="flex items-center justify-center gap-4 p-4 sm:p-10 bg-amber-600 border border-white/30 rounded-xl text-white cursor-pointer w-full max-w-xs absolute -top-12 sm:-top-28 left-1/2 -translate-x-1/2"
                >
                    <UserOutlined className="text-4xl text-white" />
                    <h2 className="text-xl sm:text-2xl font-semibold">تعداد کاربران</h2>
                </section>
                <section className="mt-10 w-full max-w-sm mx-auto p-6  rounded-xl flex flex-col items-center justify-between gap-6">
                    {usersCountStatus === "loading" ? (
                        <div className="text-lg text-gray-900 dark:text-white">در حال بارگذاری...</div>
                    ) : usersCountStatus === "failed" ? (
                        <div className="text-red-500 text-lg">{error || "خطایی رخ داد"}</div>
                    ) : (
                        <>
                            <div className="text-5xl font-bold text-gray-900 dark:text-white">
                                {totalUsers}
                            </div>
                            <button
                                onClick={() => router.push("/panelAdmin/checkOrder")}
                                className="flex items-center gap-2 text-sm sm:text-base mt-8   hover:border-or text-gray-700 border  px-4 py-[10px] rounded-xl transition duration-300 shadow-sm"
                            >
                                <ArrowLeftOutlined className="text-lg" />
                                مشاهده
                            </button>
                        </>
                    )}
                </section>
            </main>
        </div>
    );
}

export default TotalUsers;