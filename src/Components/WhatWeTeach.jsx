function WhatWeTeach() {
    return (
        <div className='policy max-w-3xl mx-auto flex flex-col'>
            <h1 className='text-center'>What we teach</h1>
            <p className='text-lg'>
                Our curriculum is meticulously crafted to demystify coding and empower young
                participants with essential skills in web development. We focus on three fundamental
                languages: HTML, CSS, and JavaScript, which form the backbone of modern web design.
            </p>
            <h2>HTML</h2>

            <p className='text-lg'>
                We start with HTML, where participants grasp the fundamentals of structuring content
                and laying the groundwork for webpages. They learn to create headings, paragraphs,
                lists, and incorporate multimedia elements such as images and videos to enhance
                their creations.
            </p>
            <h2>CSS</h2>

            <p className='text-lg'>
                Moving to CSS, students delve into the world of design and presentation. They master
                styling techniques to customise the look and feel of their webpages, including
                colors, fonts, margins, and responsive layouts. Typography principles are
                emphasised, teaching them how to effectively use fonts and text styles to improve
                readability and aesthetic appeal.
            </p>
            <h2>JavaScript</h2>

            <p className='text-lg'>
                JavaScript introduces the dynamic aspect of web development, enabling participants
                to add interactive elements and functionality to their projects. From basic concepts
                like variables and functions to more advanced topics such as event handling and DOM
                manipulation, students gain hands-on experience in bringing their webpages to life.
            </p>

            <picture className='overflow-hidden mx-auto w-[85%] min-w-[200px] py-8'>
                <img
                    src='/src/assets/coding-club-hwcp.webp'
                    alt='Group of students at summer camp graduation'
                    className='fancy-border border-[20px] border-lime-200'
                />
            </picture>
            <p className='text-lg'>
                Our approach goes beyond technical instruction. We foster a supportive learning
                environment where collaboration and problem-solving are encouraged. Participants not
                only gain technical expertise but also develop critical thinking, creativity, and
                teamwork skills that are invaluable in both academic and professional settings.
            </p>
            <p className='text-lg'>
                <strong className='font-semibold'>
                    Join us to embark on a journey of discovery and empowerment through coding!
                </strong>
            </p>
        </div>
    );
}

export default WhatWeTeach;
