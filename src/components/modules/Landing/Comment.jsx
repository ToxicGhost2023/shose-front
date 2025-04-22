import React, { useState } from 'react';
import { Input, Avatar } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

const initialComments = [
    {
        id: 1,
        username: 'user1',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        text: 'عالی بود! خیلی خوشم اومد 😍',
        timestamp: '2 ساعت پیش',
        likes: 12,
        liked: false,
    },
    {
        id: 2,
        username: 'user2',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        text: 'کیفیتش حرف نداره، حتما پیشنهاد می‌کنم!',
        timestamp: '1 ساعت پیش',
        likes: 8,
        liked: false,
    },
];

const Comment = () => {
    const [comments, setComments] = useState(initialComments);
    const [newComment, setNewComment] = useState('');

    // اضافه کردن نظر جدید
    const handleAddComment = () => {
        if (newComment.trim()) {
            const newCommentObj = {
                id: comments.length + 1,
                username: 'شما', // فرضاً کاربر فعلی
                avatar: 'https://randomuser.me/api/portraits/men/3.jpg', // آواتار پیش‌فرض
                text: newComment,
                timestamp: 'اکنون',
                likes: 0,
                liked: false,
            };
            setComments([...comments, newCommentObj]);
            setNewComment('');
        }
    };

    // لایک کردن نظر
    const handleLike = (id) => {
        setComments(
            comments.map((comment) =>
                comment.id === id
                    ? {
                        ...comment,
                        liked: !comment.liked,
                        likes: comment.liked ? comment.likes - 1 : comment.likes + 1,
                    }
                    : comment
            )
        );
    };

    return (
        <div className="min-h-screen  py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="w-full max-w-2xl  rounded-lg shadow-md p-6">
                {/* هدر: تعداد نظرات */}
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                    نظرات ({comments.length})
                </h2>

                {/* لیست نظرات */}
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                    {comments.map((comment) => (
                        <div key={comment.id} className="flex items-start space-x-3">
                            {/* آواتار */}
                            <Avatar src={comment.avatar} size={40} className="flex-shrink-0" />

                            {/* محتوا */}
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm sm:text-base font-semibold text-gray-800">
                                        {comment.username}
                                    </span>
                                    <span className="text-xs text-gray-500">{comment.timestamp}</span>
                                </div>
                                <p className="text-sm sm:text-base text-gray-700 mt-1">{comment.text}</p>
                                <div className="flex items-center space-x-2 mt-2">
                                    <button
                                        onClick={() => handleLike(comment.id)}
                                        className="text-gray-500 hover:text-red-500 transition-colors"
                                    >
                                        {comment.liked ? (
                                            <HeartFilled className="text-red-500" />
                                        ) : (
                                            <HeartOutlined />
                                        )}
                                    </button>
                                    <span className="text-xs text-gray-500">{comment.likes} لایک</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ورودی برای افزودن نظر */}
                <div className="flex items-center space-x-3 border-t pt-4">
                    <Avatar
                        src="https://randomuser.me/api/portraits/men/3.jpg"
                        size={40}
                        className="flex-shrink-0"
                    />
                    <Input
                        placeholder="نظر خود را بنویسید..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        onPressEnter={handleAddComment}
                        className="flex-1 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                    <button
                        onClick={handleAddComment}
                        className="text-blue-500 hover:text-blue-700 font-semibold text-sm sm:text-base"
                        disabled={!newComment.trim()}
                    >
                        ارسال
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Comment;