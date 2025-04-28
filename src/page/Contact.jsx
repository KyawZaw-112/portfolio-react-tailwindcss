import React from 'react';
import {MdOutlineArrowOutward} from "react-icons/md";
const Contact = () => {
    return (
        <div className={"absolute right-2 bottom-2"}>
            <a className={"flex gap-1 items-center"} target={"_blank"} href="https://pale-begonia-993.notion.site/Self-Introduction-1e3cd129fdb780708049fb9e32fd3ef1">
                <p className={" dark:text-white font-raleway   hover:text-gray-500 dark:hover:text-gray-800 transition-all font-black text-xs tracking-widest "}>
                    About me
                </p>
                <p className={" dark:text-white font-raleway   hover:text-gray-500 dark:hover:text-gray-800 transition-all font-black text-xs tracking-widest"}>
                    <MdOutlineArrowOutward />
                </p>
            </a>
        </div>
    );
};

export default Contact;