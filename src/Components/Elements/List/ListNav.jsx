import React, { useContext } from 'react'
import { DarkMode } from '../../../context/DarkMode'
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from 'react-router-dom';

// Navbar
const ListNav = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)

    return (
        <>
            <h1 className="text-3xl font-bold primary-color ml-4">Iam</h1>
            <ul className="hidden md:flex">
                <li className="p-5">
                    <a href="#about">About Me</a>
                </li>
                <li className="p-5">
                    <Link href="#project">Project</Link>
                </li>
                <li className="p-5">
                    <Link href="#contact">Contact</Link>
                </li>
                <li className="p-5">
                    <button className="cursor-pointer ml-1 rounded-lg hover:text-slate-600" onClick={() => setIsDarkMode(!isDarkMode)}>
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </li>
            </ul>
        </>
    )
}

// Sidebar
const SideBar = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)

    return (
        <>
            <div className='flex flex-wrap items-center cursor-pointer border-b border-white px-5 py-5 ml-1 mr-1'>
                <img src="img/profile.png" alt="" className='w-20 h-20 rounded-full `border-white object-cover' />
                <div className='ml-4'>
                    <p className='text-sm text-white'>Iam</p>
                    <p className='text-xs text-gray-500 mt-0.5'>Web Developer</p>
                </div>
            </div>
            <ul className="p-8 text-2xl">
                <li>
                    <button className="cursor-pointer ml-1 rounded-lg hover:text-slate-600" onClick={() => setIsDarkMode(!isDarkMode)}>
                        {isDarkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </li>
                <li className="p-2">
                    <Link href="#home">Home</Link>
                </li>
                <li className="p-2">
                    <Link href="#about">About</Link>
                </li>
                <li className="p-2">
                    <Link href="#work">Work</Link>
                </li>
                <li className="p-2">
                    <Link href="#experience">Experience</Link>
                </li>
                <li className="p-2">
                    <Link href="#contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}

ListNav.SideBar = SideBar
export default ListNav