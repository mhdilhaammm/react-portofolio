import React, { useContext } from 'react'
import { DarkMode } from '../../../context/DarkMode'
import { Link } from 'react-router-dom'

const Button = (props) => {
    const { variant } = props
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode)

    const handleClick = () => {
        if (variant === "resume") {
            window.open("/cv/cv-mhdilham.pdf", "_blank");
        }
    }
    return (
        <>
            {variant === "resume" && [
                <button
                    variant={variant}
                    href="#"
                    className="py-3 px-4 rounded-xl mr-4 bg-gradient-to-br from-orange-400 to-pink-500 text-white" onClick={handleClick}>
                    Download CV
                </button>
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