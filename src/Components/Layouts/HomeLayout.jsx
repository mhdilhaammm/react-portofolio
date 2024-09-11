import { React, useContext } from 'react'
import Navbar from '../Fragments/Navbar'
import Hero from '../Fragments/Hero'
import Skills from '../Fragments/Skills'
import Work from '../Fragments/Work'
import About from '../Fragments/About'
import { DarkMode } from "../../context/DarkMode";
import Education from '../Fragments/Education'

const HomeLayout = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
    // { console.log(isDarkMode) }
    return (
        <div className={isDarkMode ? "bg-[#021526]" : "bg-[#ececec]"}>
            <Navbar />
            <Hero />
            <Skills />
            <About />
            <Education />
            <Work />
        </div>
    )
}

export default HomeLayout