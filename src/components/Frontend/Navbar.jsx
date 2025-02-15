'use client'

import { useState } from 'react'

export default function Navbar() {
    const [state, setState] = useState(false);

    const navigation = [
        { title: "Home", path: "/" },
        { title: "About Us", path: "/about" },
        { title: "Pages", path: "/pages" },
    ];

    return (
        <nav className="bg-[#800000] fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 w-full">
                    <h2 className="font-bold text-xl text-white">Agrivista Farms</h2>
                    <div className="md:hidden">
                        <button className="text-white hover:text-gray-200"
                            onClick={() => setState(!state)}
                        >
                            {state ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row md:items-center md:justify-end md:gap-x-12">
                        {navigation.map((item, idx) => (
                            <li key={idx} className="text-white font-semibold hover:text-gray-300">
                                <a href={item.path} className="block py-2 px-6">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
