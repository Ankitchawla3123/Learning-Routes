import React, { useState } from 'react';

function Header2() {
    const [enable, setEnable] = useState(false);

    return (
        <header className="shadow sticky top-0 z-50">
            <nav className='bg-white border border-gray-300 px-4 py-2.5'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                    <div className="text-3xl">
                        Yo
                    </div>

                    <div className='hidden md:flex md:gap-16'>
                        <div>Home</div>
                        <div>About</div>
                        <div>Contact</div>
                        <div>Github</div>
                    </div>

                    <div className='hidden lg:flex lg:gap-8'>
                        <div>1st icon</div>
                        <div>2nd icon</div>
                    </div>

                    <div className='lg:hidden flex items-center gap-2'>
                        <div className='flex gap-5'>
                            <div>1st icon</div>
                            <div>2nd icon</div>
                        </div>
                        <button className="h-12 w-12" onClick={() => setEnable(prev => !prev)}>
                            <div className='grid gap-1.5 justify-items-center'>
                                <span className={`h-1 w-8 rounded-full bg-black transition-transform duration-500 ${enable ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                                <span className={`h-1 w-8 rounded-full bg-black transition-transform duration-500 ${enable ? 'scale-0' : ''}`}></span>
                                <span className={`h-1 w-8 rounded-full bg-black transition-transform duration-500 ${enable ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                <div className={`md:hidden transition-all duration-700 ease-in-out overflow-hidden ${enable ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="flex flex-col items-center gap-4 mt-4">
                        <div>Home</div>
                        <div>About</div>
                        <div>Contact</div>
                        <div>Github</div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header2;
