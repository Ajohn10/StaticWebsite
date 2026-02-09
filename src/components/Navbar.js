import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons for the menu button

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-slate-300 font-bold text-xl">Adam Johnson</div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-4">
                    <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                    <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                    <Link to="/contact" className="text-white hover:text-gray-300">Contact Me</Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2 flex flex-col items-center bg-gray-900 py-4">
                    <Link
                        to="/"
                        className="text-white hover:text-gray-300"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-white hover:text-gray-300"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
