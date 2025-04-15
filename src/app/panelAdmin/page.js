import MainPanelAdmin from '@/components/templates/Admin/MainPanelAdmin';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function panelAdmin() {

    const cookieStore = cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
        redirect("/register");
    }


    return (
        <MainPanelAdmin token={token} />
    )
}

export default panelAdmin