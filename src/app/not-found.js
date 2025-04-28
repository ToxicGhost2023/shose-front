import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
    return (
        <section className="flex items-center justify-center min-h-screen px-4 sm:px-6">
            <div className="text-center p-6 sm:p-8 rounded-3xl w-full md:w-[1500px] max-w-[100%] sm:max-w-lg   transition-all duration-500">

                <div className="w-[320px] h-[320px] sm:w-[280px] sm:h-[280px] mx-auto mb-4 rounded-lg overflow-hidden  flex items-center justify-center  animate-fade-in">
                    <Image
                        src="/images/404.png"
                        width={280}
                        height={280}
                        alt="Shoe Not Found"
                        className="object-fill w-full h-full"
                    />
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-red-500 drop-shadow-lg">
                    404 ☹️
                </h1>

                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mt-4">
                    صفحه مورد نظر یافت نشد
                </h2>

                <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
                    صفحه‌ای که دنبالش هستید وجود ندارد یا حذف شده است.
                </p>

                <div className="mt-6">
                    <Link href="/">
                        <button className="neumorphic px-6 py-2 text-base sm:text-lg font-medium text-or rounded-full transition-all duration-300">
                            بازگشت به صفحه اصلی
                        </button>
                    </Link>
                </div>
            </div>
        </section>

    );
};

export default NotFound;