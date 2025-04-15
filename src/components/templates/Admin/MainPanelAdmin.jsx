

import CheckOrderAdmin from "@/components/modules/AdminModules/CheckOrderAdmin";
import DiscountAdminModule from "@/components/modules/AdminModules/DicountAdminModule";
import MenuAdmin from "@/components/modules/AdminModules/MenuAdmin";
import MoneyStatus from "@/components/modules/AdminModules/MoneyStatus";
import TotalUsers from "@/components/modules/AdminModules/TotalUsers";

async function MainPanelAdmin() {
    return (
        <section className="flex flex-col min-h-screen gap-1 p-2 bg-[var(--background)] sm:p-4 md:p-6">
            {/* منو ادمین */}
            <aside className="w-full md:w-1/2 p-2 rounded-3xl bg-[var(--background)]">
                <details className="md:open">
                    <summary className="p-2 text-2xl text-white bg-blue-600 rounded-lg cursor-pointer ">
                        منوی ادمین
                    </summary>
                    <div className="mt-2 md:mt-0">
                        <MenuAdmin />
                    </div>
                </details>
            </aside>

            {/* محتوای اصلی */}
            <main className="flex-1 mt-[100px] grid w-full grid-cols-1 gap-[60px] sm:grid-cols-2 lg:grid-cols-3 auto-rows-min">
                <div className="neumorphic p-4 rounded-2xl sm:p-5 min-h-[140px]">
                    <DiscountAdminModule />
                </div>

                <div className="neumorphic p-4 rounded-2xl bg-blue-500 sm:p-5 min-h-[140px]">
                    <TotalUsers />
                </div>
                <div className="neumorphic p-4 rounded-2xl bg-green-500 sm:p-5 min-h-[140px]">
                    <CheckOrderAdmin />
                </div>
                <div className="neumorphic p-4 rounded-2xl bg-yellow-500 sm:p-5 min-h-[140px]">
                    <MoneyStatus />
                </div>

                <div className="neumorphic p-4 rounded-2xl bg-slate-700 sm:p-5 min-h-[140px]">
                    <p className="text-sm text-white">پیش‌نمایش محصولات پرطرفدار (جدید)</p>
                </div>
            </main>
        </section>
    );
}

export default MainPanelAdmin;