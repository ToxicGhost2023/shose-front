import { cookies } from "next/headers";
import Header from "./Header"
import Footer from "./Footer"


function Layout({ children }) {
    const cookieStore = cookies();
    const token = cookieStore.get("accessToken")?.value;

    return (
        <>
            <Header token={token} />
            {children}
            <Footer />
        </>
    )
}

export default Layout