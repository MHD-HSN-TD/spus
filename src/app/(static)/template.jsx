'use client'

import { motion } from "framer-motion"

export function AnimationProvider({ children }) {
    const variants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
    }


    return (
        <motion.main
            // variants={variants}
            // initial="hidden"
            // animate="enter"
            // transition={{ type: "easeInOut", duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}


        >
            {children}
        </motion.main>
    )


}

export default AnimationProvider