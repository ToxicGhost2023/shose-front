"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Spin } from "antd";
import { createNewComment, fetchComments } from "@/store/slice/commentsSlice";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

const Comment = ({ token }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(null);
  const { comments, loading, error } = useSelector((state) => state.comments);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (!token) {
      router.push("/register");
      return;
    }
    const decoded = jwtDecode(token);
    if (!decoded?.userId) {
      router.push("/register");
    } else {
      setUserId(decoded.userId);
    }
  }, [token, router]);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const handleAddComment = async () => {
    if (newComment.trim() && userId) {
      try {
        const result = await dispatch(
          createNewComment({
            userId,
            comment: newComment,
          })
        );
        if (result.meta.requestStatus === "fulfilled") {
          dispatch(fetchComments());
          setNewComment("");
        } else {
          console.error("Error in dispatch:", result.error);
        }
      } catch (error) {
        console.error("Error dispatching comment:", error);
      }
    } else {
      console.log("Missing comment or userId");
    }
  };

  return (
    <section className="min-h-screen py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-center ">
      <div className="w-full max-w-2xl rounded-lg shadow-md p-4 sm:p-6 border border-white dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800">
        <h2 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-or mb-4">
          نظرات ({comments ? comments.length : 0})
        </h2>

        {loading ? (
          <div className="flex justify-center items-center py-10">
            <Spin size="large" />
          </div>
        ) : (
          <div className="space-y-4 mb-6 max-h-96 overflow-y-auto scrollbar-hide pr-2">
            {comments?.map((comment) => (
              <div
                key={comment._id}
                className="flex flex-col gap-1 border-b pb-2 last:border-none"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-white">
                    {comment.userId ? comment.userId.fullName : "کاربر حذف شده"}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-green-400 whitespace-nowrap">
                    {new Date(comment.createdAt).toLocaleString()}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-200 leading-relaxed">
                  {comment.comment}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* فرم ارسال نظر */}
        <div className="flex flex-col sm:flex-row items-center gap-3 border-t pt-4">
          <Input
            placeholder="نظر خود را بنویسید..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onPressEnter={handleAddComment}
            className="w-full sm:flex-1 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base"
          />
          <button
            onClick={handleAddComment}
            className={`
                w-full sm:w-auto
                px-5 py-2
                font-semibold text-sm sm:text-base
                bg-or text-white rounded-lg
                shadow-neumorphic hover:bg-green-700 hover:shadow-neumorphic-hover
                disabled:bg-gray-400 disabled:text-gray-200 disabled:cursor-not-allowed
                transition-all duration-300
                dark:bg-or dark:hover:bg-red-500
                dark:shadow-neumorphic-dark dark:hover:shadow-neumorphic-dark-hover
              `}
            disabled={!newComment.trim()}
          >
            ارسال
          </button>
        </div>

        {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
      </div>
    </section>
  );
};

export default Comment;
