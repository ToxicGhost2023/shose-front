
import BanerModule from '../modules/Landing/BanerModule'
import { Suspense } from "react";
import { motion } from "framer-motion";
function BanerLanding() {
    return (
        <main >
            <motion.main
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Suspense fallback={<p className="text-center">در حال بارگذاری بنر...</p>}>
                    <BanerModule />
                </Suspense>
            </motion.main>
        </main>
    )
}

export default BanerLanding