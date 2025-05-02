"use client";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useEffect } from "react";
import { fetchSalesReport } from "@/store/slice/barChartSlice";
import { useDispatch, useSelector } from "react-redux";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChartAdmin() {
    const dispatch = useDispatch();
    const { labels, datasets, loading, error } = useSelector((state) => state.barChart);

    useEffect(() => {
        dispatch(fetchSalesReport());
    }, [dispatch]);

    if (loading) return <div>در حال بارگذاری...</div>;
    if (error) return <div>خطا در دریافت اطلاعات: {error}</div>;
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'تعداد فروش',
                data: datasets[0]?.data || [],
                backgroundColor: '#4CAF50',
                borderColor: '#388E3C',
                borderWidth: 1,
            },
            {
                label: 'درآمد',
                data: datasets[1]?.data || [],
                backgroundColor: '#2196F3',
                borderColor: '#1976D2',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },

        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return value + ' تومان';
                    },
                },
            },
        },
    };

    return (
        <div dir="rtl" className="p-8 mt-[0px]">
            <h2 className="text-2xl font-bold mb-6 text-center text-green-500">
                نمودار فروش و درآمد محصولات
            </h2>
            <div className="flex justify-center w-full">
                <div className="w-full h-[300px] max-w-full">
                    <Bar data={data} options={options} />
                </div>
            </div>
        </div>
    );
}
