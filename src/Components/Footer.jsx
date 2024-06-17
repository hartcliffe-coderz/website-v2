import React from 'react';

function Footer() {
    return (
        <div>
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
        </div>
    );
}

export default Footer;
