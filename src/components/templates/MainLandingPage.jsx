"use client"

import { useState } from "react";
import Features from "../modules/Landing/Features";
import ScrollButton from "../modules/ScrollButton";
import BanerLanding from "./BanerLanding";
import Loader from "../modules/Loader";
import SliderProductsWomen from "../modules/Landing/SliderProductsWomen";
import SliderProductsMen from "../modules/Landing/SliderProductsMen";
import Baner2Module from "../modules/Landing/Baner2Module";
import CollapsePage from "../modules/Landing/CollapsModule";
import QR from "../modules/Landing/QR";
import Comment from "../modules/Landing/Comment";
import Banner3Module from "../modules/Landing/Banner3Module";

function MainLandingPage({ token }) {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, "2000");

    return (
        <>
            {loading ? (<div className="flex items-center justify-center min-h-screen w-full">
                <Loader />
            </div>) : (
                <section>
                    <BanerLanding />
                    <Features />
                    <ScrollButton />
                    <div className="mt-[50px]">
                        <SliderProductsWomen />

                    </div>
                    <div className="mt-[50px]">
                        <Baner2Module />

                    </div>
                    <div className="mt-[50px]">
                        <h2 className="text-lg font-semibold text-or">کفش مردانه</h2>
                        <SliderProductsMen />
                    </div>
                    <div className="mt-[150px]">

                        <Banner3Module />
                    </div>
                    <div className="mt-[300px]">

                        <CollapsePage />
                    </div>

                    <div className="mt-[50px]">
                        <QR />
                    </div>

                    <div className="mt-[150px]">
                        <Comment token={token} />
                    </div>

                </section>
            )}

        </>
    )
}

export default MainLandingPage