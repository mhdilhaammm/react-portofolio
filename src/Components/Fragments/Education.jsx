import React from 'react'

const Education = () => {
    return (
        <>
            <div className='max-w-[1200px] mx-auto my-12 p-5' id='education'>
                <p className='text-4xl primary-color font-bold'>Education</p>
                <div className='max-w-[1200px] p-4 my-5 rounded shadow md:p-6 bg-[#0b2746e7]'>
                    <ol className="relative border-s border-gray-200 dark:border-slate-400">
                        <li className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-slate-400 dark:bg-slate-400"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2018 - 2021</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">State Senior High School 1 Batam</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, assumenda?</p>
                        </li>
                        <li className="ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-slate-400 dark:bg-slate-400"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2021 - 2024</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Batam State Polytechnic</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, itaque!</p>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Education