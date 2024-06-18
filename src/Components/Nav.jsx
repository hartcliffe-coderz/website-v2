import React from 'react';
import { useState, useEffect } from 'react';

function Nav() {
    const [isNavVisible, setIsNavVisible] = useState('-translate-y-full');

    function showNav() {
        isNavVisible === '-translate-y-full'
            ? setIsNavVisible('translate-y-0')
            : setIsNavVisible('-translate-y-full');
    }

    // Hide the mobile menu fully on resize
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) {
                setIsNavVisible('-translate-y-full');
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <button
                onClick={showNav}
                className='z-30 text-white top-3 p-4 text-5xl md:hidden transition absolute'
                aria-label='Open navigation'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='52px'
                    viewBox='0 -960 960 960'
                    width='52px'
                    fill='#cdcdcd'
                    className={isNavVisible === 'translate-y-0' ? 'hidden' : ''}
                    aria-hidden='true'
                >
                    <path d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z' />
                </svg>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='52px'
                    viewBox='0 -960 960 960'
                    width='52px'
                    fill='#cdcdcd'
                    className={isNavVisible === '-translate-y-full' ? 'hidden' : ''}
                    aria-hidden='true'
                >
                    <path d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z' />
                </svg>
            </button>

            <nav
                className='w-full h-full md:h-28 bg-slate-800 flex justify-center subpixel-antialiased transition'
                id='nav'
                role='navigation'
            >
                <div className='w-full max-w-7xl flex flex-row justify-center md:justify-between md:gap-8 bg-slate-800 z-20 px-4 xl:px-0 transition'>
                    <picture className='md:overflow-hidden w-[40vw] sm:w-[28vw] md:w-[170px] py-4 self-center'>
                        <a href='/'>
                            <img
                                src='/src/assets/logo-hc.svg'
                                alt='Hartcliffe Coderz logo'
                                className=''
                            />
                        </a>
                    </picture>

                    <ul
                        className={`flex-row justify-between align-middle py-3 sm:py-4 font-medium text-zinc-100 sm:gap-8 xl:gap-16 items-center xl:text-3xl sm:text-[3.9vw] md:text-[2.7vw] lg:text-[2.2vw] transition-all ease-in-out hidden md:flex`}
                    >
                        <li>
                            <a href='#coding-club' className=' hover:text-lime-200'>
                                Coding Club
                            </a>
                        </li>
                        <li>
                            <a href='#summer-camps' className=' hover:text-lime-200'>
                                Summer Camp
                            </a>
                        </li>

                        <li className='flex items-center'>
                            <a href='https://app.youform.com/forms/k10tqwqi' target='_blank'>
                                <button className='uppercase group relative inline-flex items-center justify-center overflow-hidden rounded-3xl bg-amber-200 p-1 text-[3.9vw] md:text-[2.2vw] lg:text-xl text-slate-800 font-semibold'>
                                    <span className='relative flex flex-row items-center gap-1 rounded-3xl hover:text-white hover:bg-slate-800 xl:px-6 xl:py-2 px-4 py-2 transition-all duration-100 ease-in group-hover:bg-opacity-1'>
                                        Get&nbsp;Involved
                                    </span>
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* Mobile menu  */}
            <div
                className={`bg-slate-800 backdrop-blur-sm z-10 ${isNavVisible} absolute transition w-full shadow-4xl pb-6`}
            >
                {' '}
                <ul
                    className={`flex justify-between  py-3 sm:py-4 font-medium text-zinc-100 sm:gap-8 xl:gap-16 items-center xl:text-3xl text-[11vw] leading-loose transition-all ease-in-out  md:hidden flex-col`}
                    onClick={showNav}
                >
                    <li>
                        <a href='#coding-club' className=' hover:text-lime-200 no-underline'>
                            Coding Club
                        </a>
                    </li>
                    <li>
                        <a href='#summer-camps' className=' hover:text-lime-200 no-underline'>
                            Summer Camp
                        </a>
                    </li>

                    <li>
                        <a href='https://app.youform.com/forms/k10tqwqi' target='_blank'>
                            <button className=' group group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-amber-200 p-1 text-[7vw] font-medium text-[#343450]'>
                                <span className='relative flex flex-row items-center gap-1 rounded-md hover:text-white hover:bg-[#343450]  px-14 transition-all duration-100 ease-in group-hover:bg-opacity-1'>
                                    Get&nbsp;Involved
                                </span>
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Nav;
