
import MainLandingPage from "@/components/templates/MainLandingPage";
import { cookies } from "next/headers";


export default function Home() {
  const cookieStore = cookies();
  const token = cookieStore.get("accessToken")?.value;

  return (
    <main className=" min-h-screen mt-[0px] ">
      <MainLandingPage token={token} />
    </main>
  );
}
