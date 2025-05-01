import React from 'react';
import {motion} from "motion/react"
const LoadingPage = () => {
    return (
        <motion.div
            initial={{
                opacity: 1,
            }}
            animate={{
                opacity: 0,
                display:"none"
            }}
            transition={{
                duration:3,
                delay:5,
                ease:"linear",
            }}
            className={"h-screen absolute z-10 w-screen bg-zinc-900 flex items-center justify-center gap-6"}>
            <motion.h1
                initial={{
                    opacity:1,
                }}
                animate={{
                    opacity:0,
                }}
                transition={{
                    duration:2,
                    ease:'linear',
                }}
                className={"font-raleway text-2xl md:4xl xl:5xl font-thin text-white"}>Kyaw Zaw Win</motion.h1>
            <motion.p
                initial={{
                    opacity:1,
                }}
                animate={{
                    opacity:0,
                }}
                transition={{
                    duration:4,
                    ease:'linear',
                }}
                className={"font-share text-white font-thin text-2xl md:4xl xl:5xl"}>Portfolio</motion.p>
        </motion.div>
    );
};

export default LoadingPage;