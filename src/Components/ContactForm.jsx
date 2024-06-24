import React from 'react';

export default function Contact() {
    const [result, setResult] = React.useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult('Sending....');
        const formData = new FormData(event.target);

        formData.append('access_key', '9517e0aa-1daa-4ae4-8763-e2ad82e06321');

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult('Email Sent');
            event.target.reset();
        } else {
            console.log('Error', data);
            setResult(data.message);
        }
    };

    return (
        <div className='py-16 px-6 max-w-xl mx-auto'>
            <h1 className='text-center'>Contact us</h1>
            <p className='text-center text-md pb-12 '>
                Send us an email and we&apos;ll be in touch as soon as we can.
            </p>
            <form onSubmit={onSubmit} className='' aria-labelledby='contactFormHeading'>
                <fieldset className='flex flex-col gap-6'>
                    <legend id='contactFormHeading' className='sr-only'>
                        Contact Form
                    </legend>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <br />
                        <input
                            type='text'
                            id='name'
                            name='name'
                            required
                            className='
                            mb-2 mt-1 w-full rounded-xl bg-zinc-50 p-2 text-base text-slate-600  ring-lime-500/30 focus:bg-white focus:outline-none focus:ring-4 border-[1px] border-zinc-200
                        '
                            aria-required='true'
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <br />

                        <input
                            type='email'
                            id='email'
                            name='email'
                            required
                            className='
                            mb-2 mt-1 w-full rounded-xl bg-zinc-50 p-2 text-base text-slate-600  ring-lime-500/30 focus:bg-white focus:outline-none focus:ring-4 border-[1px] border-zinc-200
                        '
                            aria-required='true'
                        />
                    </div>

                    <div>
                        <label htmlFor='subject'>What are you contacting us about?</label>
                        <br />
                        <select
                            name='subject'
                            id='subject'
                            className='
                            mb-2 mt-1 w-full rounded-xl bg-zinc-50 p-2 text-base text-slate-600  ring-lime-500/30 focus:bg-white focus:outline-none focus:ring-4 border-[1px] border-zinc-200
                        '
                        >
                            <option value=''>- Select -</option>
                            <option value='Website Form: Coding Club'>Coding Club</option>
                            <option value='Website Form: Code4Community'>Code4Community</option>
                            <option value='Website Form: Feedback'>Feedback</option>
                            <option value='Website Form: Support us'>Support us</option>
                            <option value='Website Form: Volunteer'>Volunteer</option>
                            <option value='Website Form: Something else'>Something else</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='message'>Message</label>
                        <br />

                        <textarea
                            id='message'
                            rows='6'
                            name='message'
                            required
                            className='
    mb-2 mt-1 w-full rounded-xl bg-zinc-50 p-2 text-base text-slate-600  ring-lime-500/30 focus:bg-white focus:outline-none focus:ring-4 border-[1px] border-zinc-200
'
                            aria-required='true'
                        ></textarea>
                    </div>
                    <button
                        type='submit'
                        className='border-[1px] border-zinc-600 px-20 py-4 rounded-full uppercase font-semibold hover:bg-gradient-to-r background-animate from-lime-200 to-amber-200 transition-all hover:border-white  text-slate-600  ring-lime-500/30 focus:bg-white focus:outline-none focus:ring-4 max-w-72 mx-auto'
                    >
                        Submit Form
                    </button>
                </fieldset>
                <div className='h-captcha' data-captcha='true'></div>
            </form>
            <span role='status' aria-live='polite'>
                {result}
            </span>
            {/* hCaptcha */}
            <script src='https://web3forms.com/client/script.js' async defer></script>
        </div>
    );
}
