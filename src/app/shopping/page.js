import ShoppingPage from "@/components/templates/ShoppingPage"
import { cookies } from "next/headers";


function Shopping() {

    const cookieStore = cookies();
    const token = cookieStore.get("accessToken")?.value;
    return (
        <div>
            <ShoppingPage token={token} />
        </div>
    )
}

export default Shopping
