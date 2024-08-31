import React, { useContext } from 'react'
import { DarkMode } from '../../../context/DarkMode'
import { Link } from 'react-router-dom'

const Button = (props) => {
    const { variant } = props
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)
    return (
        <>
            {variant === "resume" && [
                <Link
                    variant={variant}
                    href="#"
                    className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-400 to-pink-500 text-white">
                    Download CV
                </Link>
            ]}
            {
                variant === "contact" && [
                    <Link
                        variant={variant}
                        href="#"
                        className={`px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-400 to-pink-500 ${isDarkMode ? "text-white" : "text-[#021526] hover:text-white"}`}>
                        Contact
                    </Link>
                ]
            }
        </>
    )
}

export default Button