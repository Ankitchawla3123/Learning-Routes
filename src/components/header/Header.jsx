import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    const [enable, setEnable] = useState(false);

    // Handle toggling menu state
    const toggleMenu = () => {
        setEnable(prev => !prev);
    };

    return (
        <header className={`sticky z-50 top-0 ${enable ? 'delay-500' : 'shadow'}`}>
            <nav className={`bg-white border-gray-300 px-4 py-2.5 ${enable ? 'delay-500' : 'border'} relative`}>
                <div className={`flex flex-wrap justify-between items-center mx-auto max-w-screen-xl relative z-50 ${enable ? 'delay-500 z-40' : ''}`}>
                    <div className='text-3xl'>
                        Yo
                    </div>

                    <ul className='hidden md:flex md:gap-16'>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => `duration-200 ${isActive ? 'text-orange-700' : 'text-black'} hover:text-orange-700 bg-transparent block`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/about'
                                className={({ isActive }) => `duration-200 ${isActive ? 'text-orange-700' : 'text-black'} hover:text-orange-700`}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            Contact
                        </li>
                        <li>
                            <NavLink
                                to='/github'
                                className={({ isActive }) => `duration-200 ${isActive ? 'text-orange-700' : 'text-black'} hover:text-orange-700`}
                            >
                                Github
                            </NavLink>
                        </li>
                    </ul>

                    <div className='hidden md:flex md:gap-8'>
                        <div>1st icon</div>
                        <div>2nd icon</div>
                    </div>

                    <div className='md:hidden flex items-center gap-2'>
                        <div className='flex gap-5'>
                            <div>1st icon</div>
                            <div>2nd icon</div>
                        </div>
                        <button className="h-12 w-12" onClick={toggleMenu}>
                            <div className='grid gap-1.5 justify-items-center'>
                                <span className={`h-1 w-8 rounded-full bg-black transition-transform duration-500 ${enable ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                                <span className={`h-1 w-8 rounded-full bg-black transition-transform duration-500 ${enable ? 'scale-0' : ''}`}></span>
                                <span className={`h-1 w-8 rounded-full bg-black transition-transform duration-500 ${enable ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden shadow absolute left-0 right-0 bg-white border border-t-0 border-gray-300 z-40 transition-all duration-500 ${enable ? 'top-[97%]' : '-top-96'}`} style={{ pointerEvents: enable ? 'auto' : 'none' }}>
                    <div className="flex flex-col items-center gap-4 pb-3">
                        <div>Home</div>
                        <div>About</div>
                        <div>Contact</div>
                        <div>Github</div>
                    </div>
                </div>

                {/* Transparent Overlay */}
                {enable && <div className="fixed inset-0 bg-transparent z-30"></div>}
            </nav>
        </header>
    );
}

export default Header;
