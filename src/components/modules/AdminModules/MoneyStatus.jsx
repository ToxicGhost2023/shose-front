import { DollarOutlined } from '@ant-design/icons'
import React from 'react'

function MoneyStatus() {
    return (
        <div className="p-2 mt-[50px] rounded-lg  relative">
            <main className="max-w-md mx-auto p-6 text-white rounded-2xl flex flex-col items-center">
                <section
                    className=" flex items-center justify-center gap-4 p-4 sm:p-10 bg-blue-600 border border-white/30 rounded-xl text-white cursor-pointer w-full max-w-xs absolute -top-12 sm:-top-28 left-1/2 -translate-x-1/2"
                >


                    <DollarOutlined className="text-4xl text-white" />
                    <h2 className="text-xl sm:text-xl font-semibold">درآمد</h2>
                </section>
                <section className="mt-10 flex flex-col gap-4 justify-center items-center p-6">
                    {/* {error ? (
                    <div className="text-red-500 text-lg">{error}</div>
                ) : (
                    <div className="font-semibold text-5xl text-black">
                        {count}
                    </div>
                )} */}
                    order
                </section>
            </main>
        </div>
    )
}

export default MoneyStatus