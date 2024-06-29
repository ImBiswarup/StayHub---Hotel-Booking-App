import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'text-yellow-400 font-semibold' : 'text-gray-400';
    };

    return (
        <nav className='sticky top-0 z-10'>
            <header className="bg-gray-900 text-white body-font shadow-md">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer">
                        <span className="ml-3 text-2xl font-semibold">Stay <span className='text-yellow-400'>Hub</span></span>
                    </Link>
                    <div className="relative flex mx-auto items-center">
                        <input className='rounded text-black w-[30rem] h-10 pl-4 pr-10 focus:outline-none' type="text" placeholder="Search..." />
                        <FaSearch size={25} className='text-gray-400 absolute right-2 cursor-pointer' />
                    </div>

                    <nav className="md:ml-auto flex flex-wrap items-center text-2xl justify-center md:justify-end">
                        <Link to="/" className={`mr-5 text-white cursor-pointer hover:text-white transition-all ${isActive('/')}`}>Home</Link>
                        <Link to="/services" className={`mr-5 text-white cursor-pointer hover:text-white transition-all ${isActive('/services')}`}>Services</Link>
                        <Link to="/pricing" className={`mr-5 text-white cursor-pointer hover:text-white transition-all ${isActive('/pricing')}`}>Pricing</Link>
                        <Link to="/contact" className={`mr-5 text-white cursor-pointer hover:text-white transition-all ${isActive('/contact')}`}>Contact</Link>
                    </nav>
                </div>
            </header>
        </nav>
    )
}

export default Navbar;
