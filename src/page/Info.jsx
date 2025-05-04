import React from 'react';
import {MdOutlineArrowOutward} from "react-icons/md";

const Info = () => {
    return (
        <div className="absolute bottom-3 flex flex-col gap-32 lg:right-0">
            <a href="https://web.facebook.com/ho.leo.716">
                <div className={"flex flex-row gap-1 items-center  hover:text-gray-500 dark:hover:text-gray-800 transition-all lg:absolute lg:right-2/3 lg:w-full"}>
                    <p className={"dark:text-white font-raleway  font-black text-xs tracking-widest"}>Facebook</p>
                    <p className={"dark:text-white text-sm font-bold"}>
                        <MdOutlineArrowOutward/>
                    </p>
                </div>
            </a>
            <a href="https://github.com/KyawZaw-112">
                <div className={"flex flex-row gap-1 items-center  hover:text-gray-500 dark:hover:text-gray-800 transition-all lg:absolute lg:right-2/3 lg:w-full"}>
                    <p className={"dark:text-white font-raleway  font-black text-xs tracking-widest"}>Git Hub</p>
                    <p className={"dark:text-white text-sm font-bold"}>
                        <MdOutlineArrowOutward/>
                    </p>
                </div>
            </a>
            <section className="flex flex-col gap-5  ">
                <div className={"flex flex-col gap-3 "}>
                    <p className={"dark:text-white text-sm font-neue font-thin tracking-widest"}>
                        Bachelor Of Science in Computer Science
                    </p>
                    <p className={"dark:text-white font-raleway font-black text-xs tracking-widest"}>
                        N.A / Kasem Bundit University
                    </p>
                </div>
                <div className={"flex flex-col gap-3 "}>
                    <p className={"dark:text-white text-sm font-neue font-thin tracking-widest"}>Certification of The Perfect 404 Frontend Developer 2024</p>
                    <p className={"dark:text-white font-raleway font-black text-xs tracking-widest"}>2024 / Perfect 404 Training Center</p>
                </div>
                <div className={"flex flex-col gap-3 "}>
                    <p className={"dark:text-white text-sm font-neue font-thin tracking-widest"}>Certification of Web Developer</p>
                    <p className={"dark:text-white font-raleway font-black text-xs tracking-widest"}>2023 / Fairway Technology Training Center</p>
                </div>
            </section>

        </div>
    );
};

export default Info;
