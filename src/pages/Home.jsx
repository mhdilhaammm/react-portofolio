import React from 'react'
import HomeLayout from '../Components/Layouts/HomeLayout'
import { motion, useScroll } from "framer-motion";
import "../pages/style.css"

const Home = () => {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <HomeLayout />
            <motion.div className='progress-bar' style={{ scaleX: scrollYProgress }} />
        </>
    )
}

export default Home