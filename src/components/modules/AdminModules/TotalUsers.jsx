
"use client"

import { getTotalUsers } from "@/utils/fetching";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useEffect, useState } from "react";

function TotalUsers() {
    const [count, setCount] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const data = await getTotalUsers()

                setCount(data.count);
            } catch (err) {
                setError(err.message);
            }
        }

        fetchUserData();
    }, []);



    return (
        <div className="p-2 mt-[50px] rounded-lg  relative">
            <main className="max-w-md mx-auto p-6 text-white rounded-2xl flex flex-col items-center">
                <section
                    className="flex items-center justify-center gap-4 p-4 sm:p-10 bg-amber-600 border border-white/30 rounded-xl text-white cursor-pointer w-full max-w-xs absolute -top-12 sm:-top-28 left-1/2 -translate-x-1/2"
                >
                    <UserOutlined className="text-4xl text-white" />
                    <h2 className="text-xl sm:text-2xl font-semibold">تعداد کاربران</h2>
                </section>
                <section className="mt-10 w-full max-w-sm mx-auto p-6  dark:bg-zinc-800 rounded-xl flex flex-col items-center justify-between gap-6">
                    {error ? (
                        <div className="text-red-500 text-lg">{error}</div>
                    ) : (
                        <>
                            <div className="text-5xl font-bold text-gray-900 dark:text-white">
                                {count}
                            </div>
                            <Link
                                href="/panelAdmin/listUsers"
                                className="text-xl p-5 rounded-3xl w-full text-center bg-amber-600  text-white dark:text-blue-400 hover:bg-opacity-5 hover:text-opacity-100 hover:text-amber-600  transition-all"
                            >
                                مشاهده
                            </Link>
                        </>
                    )}
                </section>


            </main>
        </div>
    )
}

export default TotalUsers