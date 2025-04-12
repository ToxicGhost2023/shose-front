"use client"

import { useState } from "react";
import Features from "../modules/Landing/Features";
import ScrollButton from "../modules/ScrollButton";
import BanerLanding from "./BanerLanding";
import Loader from "../modules/Loader";

function MainLandingPage() {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, "3000");

    return (
        <>
            {loading ? (<div className="flex items-center justify-center min-h-screen w-full">
                <Loader />
            </div>) : (
                <div>
                    <BanerLanding />
                    <Features />
                    <ScrollButton />
                </div>
            )}

        </>
    )
}

export default MainLandingPage