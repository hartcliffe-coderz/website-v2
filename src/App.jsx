import SessionInfoBanner from './SessionInfoBanner';
import { useEffect, useState } from 'react';

function App() {
    const [isFilterVisible, setIsFilterVisible] = useState('-translate-y-full');

    function showFilter() {
        isFilterVisible === '-translate-y-full'
            ? setIsFilterVisible('translate-y-0')
            : setIsFilterVisible('-translate-y-full');
    }

    // Hide the mobile menu fully on resize
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) {
                setIsFilterVisible('-translate-y-full');
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <button
                onClick={showFilter}
                className='z-30 text-white top-3 p-4 text-5xl md:hidden transition absolute'
                aria-label='Open navigation'
            >
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='52px'
                    viewBox='0 -960 960 960'
                    width='52px'
                    fill='#cdcdcd'
                    className={isFilterVisible === 'translate-y-0' ? 'hidden' : ''}
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
                    className={isFilterVisible === '-translate-y-full' ? 'hidden' : ''}
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
                        className={`flex-row justify-between  py-3 sm:py-4 font-medium text-zinc-100 sm:gap-8 xl:gap-16 items-center xl:text-3xl sm:text-[3.9vw] md:text-[2.7vw] lg:text-[2.2vw] transition-all ease-in-out hidden md:flex`}
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

                        <li>
                            <a href='https://app.youform.com/forms/k10tqwqi' target='_blank'>
                                <button className=' group group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-amber-200 p-1 text-[3.9vw] md:text-[2.2vw] xl:text-3xl font-medium text-slate-800'>
                                    <span className='relative flex flex-row items-center gap-1 rounded-md hover:text-white hover:bg-slate-800 xl:px-4 xl:py-2 px-2 py-1 transition-all duration-100 ease-in group-hover:bg-opacity-1'>
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
                className={`bg-slate-800 backdrop-blur-sm z-10 ${isFilterVisible} absolute transition w-full shadow-4xl pb-6`}
            >
                {' '}
                <ul
                    className={`flex justify-between  py-3 sm:py-4 font-medium text-zinc-100 sm:gap-8 xl:gap-16 items-center xl:text-3xl text-[11vw] leading-loose transition-all ease-in-out  md:hidden flex-col`}
                    onClick={showFilter}
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
            <SessionInfoBanner />
            <main className='xl:px-0 lg:px-32 md:px-16 px-4'>
                <section className=' bg-white' id='about-us'>
                    <div className='flex justify-between w-full max-w-7xl xl:gap-20 gap-10 xl:flex-row flex-col items-center'>
                        <div className='xl:w-7/12 w-full'>
                            <h1 className='text-slate-600 xl:text-left text-center'>What we do</h1>
                            <p className=' '>
                                Hartcliffe Coderz is a small, yet ambitious resident-led team. We
                                believe that everyone deserves access to opportunities, regardless
                                of their background or postcode. By offering free and accessible
                                coding training to young people, we aim to broaden their horizons
                                and provide positive alternatives to anti-social behaviour.
                            </p>
                            <p className=''>
                                In 2023, we collaborated with Bristol City Council to deliver two
                                pilot summer coding camps. The overwhelming community response
                                underscored the urgent need for our work in Hartcliffe and the
                                surrounding areas. We are committed to continuing to empower young
                                people and fostering positive peer connections, which in turn
                                strengthens community resilience. Our goal is to create a welcoming
                                environment where every young person feels valued and inspired to
                                reach their full potential.
                            </p>
                        </div>

                        <picture className='overflow-hidden min-w-[300px] w-90% '>
                            <img
                                src='/src/assets/team.webp'
                                alt='Team of Hartcliffe Coderz'
                                className='fancy-border border-[25px] border-lime-200'
                            />
                        </picture>
                    </div>
                </section>

                <section className=' bg-white justify-center align-middle' id='coding-club'>
                    <div className='flex justify-between w-max max-w-7xl items-center xl:gap-16 gap-10 xl:flex-row flex-col-reverse'>
                        <picture className=' min-w-[300px] rounded-[20px] w-12/12 '>
                            <img
                                src='/src/assets/summer-camp.webp'
                                alt='Students in a classroom being taught how to code'
                                className='fancy-border-2 border-[25px] border-purple-200  '
                            />
                        </picture>
                        <div className='xl:w-7/12 w-full '>
                            <h1 className='text-slate-600 xl:text-left text-center'>Coding Club</h1>
                            <p className=''>
                                Our Coding Club is a free weekly drop-in event for young people aged
                                10-16, designed to foster a casual and engaging environment for
                                learning coding skills. This club alternates between two key
                                community hubs,{' '}
                                <a href='https://maps.app.goo.gl/kYAkbh7gZ6HcXVMNA' target='_blank'>
                                    @symes community building
                                </a>{' '}
                                and{' '}
                                <a href='https://maps.app.goo.gl/xxBs8EK1LWijBrDU9' target='_blank'>
                                    The Gatehouse
                                </a>
                                , providing flexible and accessible opportunities to explore
                                technology.
                            </p>
                            <p className=''>
                                The sessions are ongoing and participants can join at any time
                                without prior experience. We supply all the necessary equipment and
                                software, so all you need to bring is your curiosity and enthusiasm
                                to learn and make new friends. Refreshments are provided, making it
                                a welcoming and enjoyable space to develop coding skills in a
                                relaxed, supportive setting.
                            </p>
                        </div>
                    </div>
                </section>

                <section className='bg-white justify-center align-middle' id='summer-camps'>
                    <div className='flex justify-between w-full max-w-7xl align-middle xl:gap-16 gap-10 xl:flex-row flex-col '>
                        <div className='xl:w-7/12 w-full '>
                            <h1 className='text-slate-600 xl:text-left text-center '>
                                Summer Camp
                            </h1>
                            <p className=''>
                                Our Summer Camp is an intensive, structured program aimed at
                                providing a deep dive into web development. Over the course of the
                                camp, participants will follow a rigorous curriculum designed to
                                build their skills towards a final project: creating their own
                                webpage using HTML and CSS.
                            </p>
                            <p className=''>
                                The Summer Camp is for those who are really passionate about
                                technology and coding. It offers a more focused, goal-oriented
                                environment where young people can acquire substantial skills in a
                                short period, all while enjoying a supportive and fun atmosphere.
                            </p>
                            <button
                                id='newsButton'
                                className='text-white hover:text-zinc-600 bg-zinc-700 hover:bg-white p-4 rounded-lg  my-8 text-xl hover:bg-gradient-to-r background-animate from-lime-200 to-amber-200 font-semibold transition-all block xl:mx-0 mx-auto'
                            >
                                Be the first to hear about the camp
                            </button>
                        </div>
                        <picture className='overflow-hidden min-w-[300px]'>
                            <img
                                src='/src/assets/coderz-grad.webp'
                                alt='Group of students at summer camp graduation'
                                className='fancy-border border-[25px] border-lime-200'
                            />
                        </picture>
                    </div>
                </section>
            </main>
            <footer className='w-full h-36 '>
                <div className='w-full bg-[#3b3842] xl:px-0 px-8'>
                    <div className='max-w-7xl mx-auto py-4'>
                        <a
                            className='group flex flex-row items-center text-[#ededed] text-3xl font-semibold justify-center mx-auto rounded-lg'
                            href='#nav'
                        >
                            <picture className='overflow-hidden w-[170px] place-self-center opacity-40'>
                                <img
                                    src='/src/assets/logo-coderz-white.svg'
                                    alt='Logo'
                                    className=''
                                />
                            </picture>
                        </a>
                        <p className='text-zinc-300 text-center text-sm p-2 no-underline'>
                            © 2024 Hartcliffe Coderz. Registered Company Number: 15528419
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default App;
