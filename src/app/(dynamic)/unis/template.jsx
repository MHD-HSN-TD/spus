'use client'

import { motion } from "framer-motion"

export function AnimationProvider({ children }) {
    const variants = {
        hidden: { opacity: 0, x: -1, y: 0 },
        enter: { opacity: 1, x: 2, y: 0 },
    }


    return (
        <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
            // whileInView="enter"
            transition={{ type: "easeInOut", duration: 1 }}
            viewport={{
                margin: "-50px",
                once: true
            }}

        >
            {children}
        </motion.main >
    )


}

export default AnimationProvider