import React, {useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "./page/Home.jsx";
import Projects from "./page/Projects.jsx";
import Contact from "./page/Contact.jsx";
import Info from "./page/Info.jsx";
import Navbar from "./component/Navbar.jsx";

const App = () => {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (systemTheme) {
            setTheme("dark");
        }
    }, []);

    useEffect(() => {
        const html = document.documentElement;
        html.setAttribute('data-theme', theme);
        localStorage.setItem("theme", theme);
    }, [theme])

    const toggleLightTheme = () => {
        setTheme("light");
    }

    const toggleDarkTheme = () => {
        setTheme("dark");
    }


    return (
        <div className={"bg-white dark:bg-zinc-900 overflow-hidden dark"}>
            <div
                className={'absolute flex flex-row gap-10 rotate-270 bottom-22 -left-12'}
            >

                <button
                    onClick={toggleDarkTheme}
                    aria-label={`dark`}
                >
                    <span className={"text-gray-700  hover:text-gray-400 cursor-pointer dark:hover:text-gray-800 transition-all text-sm font-bold font-share tracking-wider dark:text-white"}>Dark</span>
                </button>
                <button
                    onClick={toggleLightTheme}
                    aria-label={`light`}
                >
                    <span className={"text-gray-700  hover:text-gray-400 cursor-pointer dark:hover:text-gray-800 transition-all text-sm font-bold font-share tracking-wider dark:text-white"}>light</span>
                </button>

            </div>
            <div
                className={"border bg-zinc-300/20 relative m-5 dark:bg-zinc-900 border-slate-400 h-[95vh] p-2"}>
                <Navbar/>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/projects"} element={<Projects/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                    <Route path={"/info"} element={<Info/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default App;