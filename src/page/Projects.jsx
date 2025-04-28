import React from 'react';
import {Link} from "react-router-dom";

const Projects = () => {
    return (
        <section className={" absolute right-2 bottom-2 flex flex-col gap-5"}>
            <a target={"_blank"} className={"flex flex-col gap-5"} href="https://www.integrated-builder.com/">
                <h1 className={"text-4xl  dark:text-white font-neue tracking-widest font-thin  hover:text-gray-400 dark:hover:text-gray-800 transition-all"}>Integrated Builder</h1>
                <p className={"dark:text-white lg:text-right font-raleway text-sm font-bold"}>24.4.2025 / Design & Dev</p>
            </a>
            <a target={"_blank"} className={"flex flex-col gap-5"} href="https://weather-app-ten-inky-42.vercel.app">
                <h1  className={"text-4xl dark:text-white lg:text-right font-neue tracking-widest font-thin  hover:text-gray-400 dark:hover:text-gray-800 transition-all"}>Weather App</h1>
                <p className={"dark:text-white font-raleway lg:text-right text-sm font-bold"}>3.2.2024 / Design & Dev</p>
            </a>
            <a target={"_blank"} className={"flex flex-col gap-5"} href="https://boisterous-madeleine-3a0fb4.netlify.app/">
                <h1  className={"text-4xl dark:text-white lg:text-right font-neue tracking-widest font-thin  hover:text-gray-400 dark:hover:text-gray-800 transition-all"}>I Drink</h1>
                <p className={"dark:text-white font-raleway lg:text-right text-sm font-bold"}>30.5.2023 / Dev</p>
            </a>
            <a target={"_blank"} className={"flex flex-col gap-5"} href="https://everything-eight.vercel.app/">
                <h1  className={"text-4xl dark:text-white lg:text-right font-neue tracking-widest font-thin  hover:text-gray-400 dark:hover:text-gray-800 transition-all"}>Everything</h1>
                <p className={"dark:text-white font-raleway lg:text-right text-sm font-bold"}>22.12.2023 / Dev</p>
            </a>
            <a target={"_blank"} className={"flex flex-col gap-5"} href="https://foodie-liard.vercel.app/">
                <h1  className={"text-4xl dark:text-white lg:text-right font-neue tracking-widest font-thin  hover:text-gray-400 dark:hover:text-gray-800 transition-all"}>Foodie</h1>
                <p className={"dark:text-white font-raleway lg:text-right text-sm font-bold"}>17.11.2023 / Design & Dev</p>
            </a>
            <a target={"_blank"} className={"flex flex-col gap-5"} href="https://joyful-vacherin-e22ee2.netlify.app/">
                <h1  className={"text-4xl dark:text-white lg:text-right  font-neue tracking-widest font-thin  hover:text-gray-400 dark:hover:text-gray-800 transition-all"}>
                    Travesties
                </h1>
                <p className={"dark:text-white font-raleway lg:text-right text-sm font-bold"}>28.11.2022 / Design & Dev</p>
            </a>
        </section>
    );
};

export default Projects;