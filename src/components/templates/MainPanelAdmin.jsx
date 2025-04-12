



import CheckOrderAdmin from "../modules/AdminModules/CheckOrderAdmin"
import MenuAdmin from "../modules/AdminModules/MenuAdmin"
import MoneyStatus from "../modules/AdminModules/MoneyStatus"
import TotalUsers from "../modules/AdminModules/TotalUsers"


function MainPanelAdmin() {

    return (
        <section className=" flex flex-col md:mt-[80px] md:flex-row gap-4 p-4 bg-[var(--background)]">
            {/* منو ادمین */}
            <aside className="w-full md:w-1/5  p-2 rounded-2xl">
                <MenuAdmin />
            </aside>

            {/* محتوای اصلی */}
            <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="neumorphic p-6 rounded-2xl bg-blue-500">
                    <TotalUsers />
                </div>
                <div className="neumorphic p-6 rounded-2xl bg-green-500">
                    <CheckOrderAdmin />
                </div>
                <div className="neumorphic p-6 rounded-2xl bg-yellow-500">
                    <MoneyStatus />
                </div>
                <div className="neumorphic p-6 rounded-2xl bg-red-500">4</div>
                <div className="neumorphic p-6 rounded-2xl bg-slate-700">5</div>
            </main>
        </section>

    )
}

export default MainPanelAdmin