function Footer() {
    return (
        <div>
            <div className='bg-gradient-to-r from-purple-300/90 via-amber-100  to-lime-200 to-60% flex justify-center xl:px-0 px-4 sm:px-8 h-4 overflow-hidden'></div>
            <footer className='w-full h-36'>
                <div className='w-full bg-slate-800 xl:px-0 px-8'>
                    <div className='max-w-7xl mx-auto py-1'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-16 gap-y-14 lg:gap-y-0 gap-x-10 '>
                            <div className='flex flex-col justify-between gap-8'>
                                <ul className='col-span-1 sm:col-span-2 md:col-span-1 '>
                                    <li>
                                        <a
                                            className='group flex flex-row items-center text-3xl font-semibold rounded-lg'
                                            href='#nav'
                                        >
                                            <picture className='overflow-hidden w-[170px]'>
                                                <img
                                                    src='/src/assets/logo-hc.svg'
                                                    alt='Logo'
                                                    className='grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-200 ease-in-out'
                                                />
                                            </picture>
                                        </a>
                                    </li>
                                </ul>

                                <ul>
                                    <li className='md:mt-[73px]'>
                                        <h3 className='uppercase text-xl font-bold'>Contact</h3>
                                    </li>
                                    <li className='underline-none'>
                                        <a
                                            href='/contact'
                                            className='font-semibold underline text-lime-100 hover:text-lime-200'
                                        >
                                            {' '}
                                            Send us an email
                                        </a>
                                    </li>
                                    <li className='flex gap-6 pt-2'>
                                        <div className='group'>
                                            <a
                                                href='https://www.instagram.com/hartcliffe_coderz/'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                aria-label='Instagram'
                                                // className='group'
                                            >
                                                <svg
                                                    className='social'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    viewBox='0 0 448 512'
                                                    // instagram
                                                >
                                                    <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
                                                </svg>
                                            </a>
                                        </div>
                                        <a
                                            href='https://www.facebook.com/hartcliffe.coderz'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            aria-label='Facebook'
                                            className='group'
                                        >
                                            <svg
                                                className='social'
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 448 512'
                                            >
                                                {/* Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
                                                <path d='M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z' />
                                            </svg>
                                        </a>
                                        <a
                                            href='https://www.linkedin.com/company/hartcliffecoderz'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            aria-label='LinkedIn'
                                            className='group'
                                        >
                                            <svg
                                                className='social'
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 448 512'
                                            >
                                                {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}

                                                <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
                                            </svg>
                                        </a>
                                        <div className='group'>
                                            <a
                                                href='https://nextdoor.co.uk/pages/hartcliffe-coderz'
                                                target='_blank'
                                                rel='noopener noreferrer'
                                                aria-label='Nextdoor'
                                            >
                                                <svg
                                                    fill='none'
                                                    height='40'
                                                    viewBox='0 0 23 23'
                                                    width='40'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='social -translate-x-2'
                                                >
                                                    <path
                                                        // clip-rule='evenodd'
                                                        d='M2.5 3.5C1.94772 3.5 1.5 3.94772 1.5 4.5V7.5C1.5 9.98528 3.51472 12 6 12H6.5V19.5C6.5 20.0523 6.94772 20.5 7.5 20.5H11.5C12.0523 20.5 12.5 20.0523 12.5 19.5V11.5C12.5 10.3954 13.3954 9.5 14.5 9.5C15.6046 9.5 16.5 10.3954 16.5 11.5V19.5C16.5 20.0523 16.9477 20.5 17.5 20.5H21.5C22.0523 20.5 22.5 20.0523 22.5 19.5V11.5C22.5 7.08172 18.9183 3.5 14.5 3.5C11.7541 3.5 9.33238 4.88389 7.89271 6.98846C7.66813 6.93935 7.5 6.73931 7.5 6.5V4.5C7.5 3.94772 7.05228 3.5 6.5 3.5H2.5Z'
                                                        // fill-rule='evenodd'
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <ul>
                                <h3 className='uppercase text-xl font-bold pb-3'>About us</h3>
                                <li>
                                    <a href='/values'>Values</a>
                                </li>
                                <li>
                                    <a href='/what-we-teach'>What we teach</a>
                                </li>
                                <li>
                                    <a href='/venues'>Our venues</a>
                                </li>
                                <li>
                                    <a href='/team'>Team</a>
                                </li>
                                <li>
                                    <a href='/safeguarding'>Safeguarding</a>
                                </li>
                                <li>
                                    <a href='/diversity'>Diversity statement</a>
                                </li>
                            </ul>
                            <ul>
                                <h3 className='uppercase text-xl font-bold pb-3'>Get involved</h3>
                                <li>Support us</li>
                                <li>Volunteer</li>
                                <li>
                                    <a href='/resources'>Resources</a>
                                </li>
                                <li>
                                    <a href='/hire-us'>Hire us</a>
                                </li>
                                <li>
                                    <a href='/code4community'>Free websites</a>
                                </li>
                                <li>
                                    <a href='/issue'>Report an issue</a>
                                </li>
                            </ul>

                            <div className='col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 flex flex-col justify-between gap-16'>
                                <ul className='gap-3'>
                                    <li>
                                        {' '}
                                        <h3 className='uppercase text-xl font-bold pb-[19px]'>
                                            Email updates
                                        </h3>
                                    </li>
                                    <li>
                                        {' '}
                                        <p className='text-zinc-200 text-sm py-0'>
                                            Don&apos;t miss out on our future events. We promise to
                                            keep your details safe and only send you relevant info.
                                        </p>
                                    </li>
                                    <li>
                                        {' '}
                                        <button
                                            id='footer-subscribe'
                                            className='uppercase group group relative inline-flex items-center justify-center overflow-hidden rounded-3xl bg-amber-200 p-1 text-lg font-medium text-slate-900 hover:bg-gradient-to-r background-animate-slow from-purple-200 to-amber-200 hover:border-transparent bg-clip-border cursor-pointer my-3'
                                        >
                                            <span className='relative flex flex-row items-center gap-1 rounded-3xl hover:text-white hover:bg-slate-800 xl:px-8 xl:py-1 px-6 py-1 transition-all duration-100 ease-in group-hover:bg-opacity-1'>
                                                Sign&nbsp;Up
                                            </span>
                                        </button>
                                    </li>
                                </ul>
                                <div className='flex justify-between opacity-70 gap-6 min-[505px]:flex-row flex-col'>
                                    <div>
                                        {' '}
                                        <img
                                            src='src/assets/partnerLogos/bcc.png'
                                            alt='Bristol City Council logo'
                                            className='partner-logo'
                                        ></img>
                                    </div>
                                    <div>
                                        <img
                                            src='src/assets/partnerLogos/onecity.png'
                                            className='partner-logo'
                                            alt='One City logo'
                                        ></img>
                                    </div>

                                    <div>
                                        {' '}
                                        <img
                                            src='src/assets/partnerLogos/quartet.png'
                                            alt='Quartet Community Foundation logo'
                                            className='partner-logo'
                                        ></img>
                                    </div>

                                    <div>
                                        {' '}
                                        <img
                                            src='src/assets/partnerLogos/hwcp.png'
                                            alt='HWCP logo'
                                            className='partner-logo'
                                        ></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-slate-900 xl:px-0 px-8 flex flex-row space-between gap-96'>
                    <div className='max-w-7xl mx-auto flex justify-between w-full'>
                        <p className='text-zinc-300 text-sm no-underline text-center'>
                            &copy; 2023-{new Date().getFullYear()}{' '}
                            <a href='https://hartcliffe.coderz.uk' className='font-light'>
                                Hartcliffe Coderz CIC
                            </a>{' '}
                            {/* • */}&mdash; Registered company limited by guarantee in England &
                            Wales (15528419){' '}
                        </p>
                        <p className='text-zinc-300 text-sm no-underline text-center'>
                            <a href='/privacy' className='font-light'>
                                Privacy & Cookies
                            </a>{' '}
                            |{' '}
                            <a href='/terms' className='font-light'>
                                Terms & Conditions{' '}
                            </a>
                        </p>
                        <p className='text-zinc-300 text-sm no-underline text-center'>
                            Site by{' '}
                            <a
                                href='https://www.linkedin.com/in/zak-koev-057326264/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='underline font-semibold text-lime-100'
                            >
                                Zak
                            </a>{' '}
                            &{' '}
                            <a
                                href='https://www.linkedin.com/in/vladi-stanchev/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='underline font-semibold text-lime-100'
                            >
                                Vladi
                            </a>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
