import SessionInfoBanner from './Components/SessionInfoBanner';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

function App() {
    return (
        <>
            <Nav />
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
                                className=' text-zinc-700 border-zinc-600 border-2 hover:border-white hover:bg-white p-4 px-8 rounded-3xl my-8 text-lg hover:bg-gradient-to-r background-animate from-lime-200 to-amber-200 transition-all block xl:mx-0 mx-auto uppercase font-bold'
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
            <Footer />
        </>
    );
}

export default App;
