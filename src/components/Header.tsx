"use client";
import { useState } from 'react';
import Link from 'next/link';
import {ModeToggle} from './toggle-theme'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="relative top-0 left-0 right-0 flex justify-between items-center p-4 z-50 bg-white">
            <img alt="Food Truck Catering Company Logo" className="h-12" src="public/logo.png" />
            <button className="md:hidden" onClick={toggleMenu}>
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
            <nav className={`absolute right-0 top-full mt-2 p-5 rounded-lg shadow-lg bg-white w-full md:w-auto md:bg-transparent ${isMenuOpen ? 'block' : 'hidden'} md:block md:static md:shadow-none md:mt-0`}>
                <Link href="#" className="text-black hover:text-gray-300 block w-full text-left md:inline-block md:mt-0 md:ml-4 md:w-auto">Our Concepts</Link>
                <Link href="#" className="text-black hover:text-gray-300 block w-full text-left md:inline-block md:mt-0 md:ml-4 md:w-auto">Team</Link>
                <Link href="#" className="text-black hover:text-gray-300 block w-full text-left md:inline-block md:mt-0 md:ml-4 md:w-auto">FAQ</Link>
                <Link href="#" className="text-black hover:text-gray-300 block w-full text-left md:inline-block md:mt-0 md:ml-4 md:w-auto">Testimonials</Link>
                <Link href="/contact" className="text-black hover:text-gray-300 block w-full text-left md:inline-block md:mt-0 md:ml-4 md:w-auto">Contact</Link>
                <Link href="#" className="text-black hover:text-gray-300 block w-full text-left md:inline-block md:mt-0 md:ml-4 md:w-auto">About</Link>
            </nav>
            <ModeToggle/>
            
        </header>
    );
};

export default Header;
