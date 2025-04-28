import React from 'react';
import {Link, useLocation} from "react-router-dom";
import Home from "../page/Home.jsx";

const Navbar = () => {
    const location = useLocation();
    return (
        <section className={"flex flex-col gap-6"}>
            <section className={" flex flex-col gap-2"}>
                <h1 className={"font-neue tracking-widest  text-4xl font-thin"}>Kyaw Zaw Win</h1>
                <p className={"font-neue text-sm font-bold dark:text-white text-black"}>Front End Developer</p>
            </section>
            <div className={"flex flex-col gap-4"}>
                <Link className={"w-[20px]"} to={"/"}>
                    <p className="font-share w-[20px] tracking-wider text-sm font-black hover:text-gray-400 dark:hover:text-gray-800 transition-all ">
                        {location.pathname === "/" ? "⚫" : "Home"}
                    </p>
                </Link>
                <Link className={"w-[20px]"} to={"/projects"}>
                    <p className="font-share tracking-wider text-sm font-black  hover:text-gray-400 dark:hover:text-gray-800 transition-all">
                        {location.pathname === "/projects" ? "⚫" : "Projects"}
                    </p>
                </Link>
                <Link className={"w-[20px]"} to={"info"}>
                    <p className="font-share tracking-wider text-sm font-black  hover:text-gray-400 dark:hover:text-gray-800 transition-all">
                        {location.pathname === "/info" ? "⚫" : "Info"}
                    </p>
                </Link>
                <Link className={"w-[20px]"} to={"/contact"}>
                    <p className="font-share tracking-wider text-sm font-black hover:text-gray-400 dark:hover:text-gray-800 transition-all">
                        {location.pathname === "/contact" ? "⚫" :
                            "Contact"}
                    </p>
                </Link>
            </div>
        </section>
    );
};

export default Navbar;