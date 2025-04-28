import React from 'react';
import {MdOutlineArrowOutward} from "react-icons/md";
const Contact = () => {
    return (
        <div className={"absolute right-2 bottom-2"}>
            <a className={"flex gap-1 items-center  hover:text-gray-500 dark:hover:text-gray-800 transition-all"} target={"_blank"} href="https://www.notion.so/Self-Introduction-1e3cd129fdb780708049fb9e32fd3ef1?pvs=4">
                <p className={" dark:text-white font-raleway font-black text-xs tracking-widest "}>
                    About me
                </p>
                <p className={" dark:text-white font-raleway font-black text-xs tracking-widest"}>
                    <MdOutlineArrowOutward />
                </p>
            </a>
        </div>
    );
};

export default Contact;