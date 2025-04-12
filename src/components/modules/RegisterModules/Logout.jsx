"use client";

import { fetchLogOut } from "@/utils/fetching";
import { useRouter } from "next/navigation";

function Logout() {
    const router = useRouter();

    const handleLogout = async () => {
        const { data, error } = await fetchLogOut();

        if (error) {
            console.error("خطا در خروج:", error);
            return;
        }


        router.push("/register");
    };

    return (
        <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
        >
            خروج
        </button>
    );
}

export default Logout;
