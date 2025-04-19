"use client";

import { useEffect, useState, useCallback } from "react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";


function LikeButton({ id }) {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const fetchLikes = useCallback(async () => {
        try {
            const res = await fetch(`http://localhost:3400/product/${id}/like`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!res.ok) throw new Error("خطا در دریافت اطلاعات لایک");
            const data = await res.json();
            setIsLiked(data.liked);
            setLikeCount(data.likes);
        } catch (error) {
            console.error("خطا در گرفتن لایک‌ها:", error);
        }
    }, [id]); 

    useEffect(() => {
        fetchLikes();
    }, [fetchLikes]);

    const handleLike = async () => {
        if (isLoading) return;

        const newIsLiked = !isLiked;
        const newLikeCount = newIsLiked ? likeCount + 1 : likeCount - 1;

        setIsLiked(newIsLiked);
        setLikeCount(newLikeCount);
        setIsLoading(true);

        try {
            const res = await fetch(`http://localhost:3400/product/${id}/like`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    liked: newIsLiked,
                    likes: newLikeCount,
                }),
            });

            if (!res.ok) throw new Error("خطا در ثبت لایک");
            const data = await res.json();
            setLikeCount(data.likes);
        } catch (error) {
            console.error("خطا در ثبت لایک:", error);
            setIsLiked(isLiked);
            setLikeCount(likeCount);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <button
            onClick={handleLike}
            disabled={isLoading}
            className={`flex items-center justify-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 px-4 py-2.5 rounded-full transition-colors duration-300 group ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
        >
            {isLiked ? (
               
                    <HeartFilled
                        className="group-hover:scale-110 transition-transform duration-300"
                        style={{ color: "#ef4444", fontSize: "20px" }}
                    />

            ) : (
              
                    <HeartOutlined
                        className="group-hover:scale-110 transition-transform duration-300"
                        style={{ fontSize: "20px" }}
                    />

            )}
          
                {likeCount}

        </button>
    );
}

export default LikeButton;