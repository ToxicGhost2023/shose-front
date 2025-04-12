"use client"


import UserSerachBox from '@/components/modules/AdminModules/UserSearchBox';
import Loader from '@/components/modules/Loader';
import { toPersianDate } from '@/utils/Date';
import { getAllUsers } from '@/utils/fetching';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'

function ListUsers() {
    const router = useRouter()
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false)


    useEffect(() => {
        async function fetchUserData() {
            try {
                setLoader(true)
                const users = await getAllUsers()
                setUsers(users);
                setFilteredUsers(users);
            } catch (err) {
                setError(err.message);
            }
        }

        fetchUserData();
    }, []);

    const backHandler = () => {
        router.push("/panelAdmin")
    }


    return (
        <div className="p-4 sm:p-6 max-w-5xl mx-auto">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <UserSerachBox users={users} setFilteredUsers={setFilteredUsers} />
                {loader ? (<Loader />) : (<button
                    onClick={backHandler}
                    className=" py-2 px-4 rounded-xl font-semibold border border-green-500 flex items-center justify-center gap-2 hover:shadow-inner  hover:bg-green-800 hover:text-white transition-all duration-300"
                >
                    <ArrowLeftOutlined className="w-5 h-5" />
                    بازگشت
                </button>)}

            </div>


            <h2 className="text-xl sm:text-2xl mt-6 font-bold text-center mb-6">
                لیست کاربران
            </h2>


            {error ? (
                <p className="text-center text-red-500 text-sm sm:text-base">{error}</p>
            ) : filteredUsers.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredUsers.map((user, index) => (
                        <div
                            key={index}
                            className="neumorphic p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-inner"
                        >
                            <p className="text-base sm:text-lg font-semibold truncate">
                                👤 {user.fullName}
                            </p>
                            <p className="text-sm sm:text-base mt-2 truncate">
                                📞 {user.mobile}
                            </p>
                            <p className="text-xs sm:text-sm mt-1 truncate">
                                🎭 نقش: {user.role}
                            </p>
                            <p className="text-xs sm:text-sm mt-1 truncate">
                                ⏳ تاریخ عضویت: {toPersianDate(user.createdAt)}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600 dark:text-white text-sm sm:text-base">
                    هیچ کاربری یافت نشد
                </p>
            )}
        </div>


    )
}

export default ListUsers