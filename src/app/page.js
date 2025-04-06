
import Features from "@/components/modules/Landing/Features";
import ScrollButton from "@/components/modules/ScrollButton";

import BanerLanding from "@/components/templates/BanerLanding";



export default function Home() {

  return (
    <main className=" min-h-screen mt-[0px] ">
      <BanerLanding />
      <Features />
      <ScrollButton />
    </main>
  );
}
