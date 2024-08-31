function Values() {
    return (
        <div className='policy max-w-3xl mx-auto flex flex-col'>
            <h1 className='text-center'>Values</h1>
            <h2>Mission</h2>

            {/* <p className='text-lg'>
                To ignite the passion for coding in young minds, empowering them to shape a brighter
                future and cultivate resilient communities.
            </p> */}
            <p className='text-lg'>
                To inspire young minds through coding education, empowering them with the skills and
                confidence to innovate and contribute positively to their communities.
            </p>

            <h2>Vision</h2>

            <p className='text-lg'>
                A world where every child, regardless of background, has access to quality
                technology education, fostering a generation of empowered individuals who drive
                community resilience and innovation.
            </p>

            <h2>Tenets</h2>
            <ol className='list-decimal'>
                <li>
                    <p className='text-lg'>
                        <strong className='font-semibold'>
                            Digital Inclusion and Accessibility:{' '}
                        </strong>
                        Ensure equal access to coding programmes and resources for all children.
                    </p>
                </li>
                <li>
                    {' '}
                    <p className='text-lg'>
                        <strong className='font-semibold'>Mentorship and Role Models: </strong>
                        Provide guidance from experienced coders and tech role models.
                    </p>
                </li>
                <li>
                    <p className='text-lg'>
                        <strong className='font-semibold'>Purposeful Education: </strong>Teach
                        coding as a means for problem-solving, creativity, and empowerment.
                    </p>
                </li>
                <li>
                    {' '}
                    <p className='text-lg'>
                        <strong className='font-semibold'>Adaptability and Resilience: </strong>
                        Promote adaptability, persistence, and learning from failure.
                    </p>
                </li>
                <li>
                    {' '}
                    <p className='text-lg'>
                        <strong className='font-semibold'>Lifelong Learning: </strong>Foster a
                        growth mindset and continuous learning.
                    </p>
                </li>
                <li>
                    {' '}
                    <p className='text-lg'>
                        <strong className='font-semibold'>Digital Citizenship: </strong>Encourage
                        responsible technology use and online safety.
                    </p>
                </li>
            </ol>
        </div>
    );
}

export default Values;
