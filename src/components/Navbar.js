import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {

    return (

        <nav className="bg-gray-800 p-4">

            <div className="container mx-auto">

                <div className="flex justify-between items-center">

                    <div className="text-slate-300 font-bold text-xl">Adam Johnson</div>

                    <div className="hidden md:flex space-x-4">
                        <Link to="/" className="text-white hover:text-gray-300">Home</Link>
                        <Link to="/about" className="text-white hover:text-gray-300">About</Link>
                    </div>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;