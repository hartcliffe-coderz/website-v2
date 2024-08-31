import SafeguardingPolicyPDF from '../../src/assets/docs/safeguarding_and_child_protection_policy.pdf';

function Safeguarding() {
    return (
        <div className='policy max-w-3xl mx-auto flex flex-col'>
            <h1 className='text-center'>Safeguarding</h1>

            <p className='text-lg'>
                <strong>Hartcliffe Coderz</strong> is committed to providing a safe and supportive
                environment for young people to learn coding. Safeguarding the welfare of all our
                students is our top priority, and we take this responsibility very seriously.
            </p>

            <h2 className='pt-10'>Our Commitment</h2>
            <p className='text-lg'>
                <strong className='font-semibold'>Enhanced DBS Checks:</strong> Every member of our
                staff, volunteer, and anyone in regular contact with students undergoes an Enhanced
                Disclosure and Barring Service (DBS) check. This ensures that only individuals with
                a clear background are involved in our programmes.
            </p>

            <p className='text-lg'>
                <strong className='font-semibold'>Safeguarding Training:</strong> All staff and
                volunteers in contact with young people receive safeguarding training to at least
                Level 2. Our Child Protection Lead has completed Level 3 safeguarding training,
                equipping them with advanced knowledge and skills to handle complex safeguarding
                concerns.
            </p>

            <p className='text-lg'>
                Our commitment to safeguarding is reflected in every aspect of our operations, from
                recruitment and training to daily interactions with students. We strive to create a
                culture of vigilance and responsiveness, ensuring that any potential issues are
                addressed promptly and effectively.
            </p>
            <h2 className='pt-10'>Reporting Concerns</h2>
            <p className='text-lg'>
                If you have any concerns about the welfare or safety of a young person in our care,
                please report it immediately. You can do this by speaking directly to our Child
                Protection Lead: <strong>Nevenka Kirovska</strong> in person or{' '}
                <a href='/contact'>via email</a>.
            </p>
            <p className='text-lg'>
                Alternatively, you can report to any staff member, who will ensure that the
                information is passed on to the Child Protection Lead.
            </p>

            <h2 className='pt-10'>Safeguarding and Child Protection Policy</h2>
            <p className='text-lg'>
                For more detailed information about our safeguarding policies and procedures, please
                refer to our{' '}
                <a href={SafeguardingPolicyPDF} target='_blank'>
                    Safeguarding and Child Protection Policy
                </a>
                &nbsp;[PDF]
            </p>

            <h2 className='pt-10'>Contacting Local Authorities</h2>
            <p className='text-lg'>
                In the event that you need to report a safeguarding concern directly to the local
                authority, please contact the First Response Team on:
            </p>

            <p className='text-lg'>
                <strong>Phone:</strong> <a href='tel:+441179036444'>0117 903 6444</a>
                {/* </p>
            <p className='text-lg'> */}
                <br />
                <strong>Website:</strong>{' '}
                <a
                    href='https://www.bristol.gov.uk/residents/social-care-and-health/children-and-families/concerns-about-a-child/report-your-concerns-about-a-child-as-a-member-of-the-public'
                    target='_blank'
                >
                    Report your concerns about a child
                </a>
            </p>
            <h2 className='pt-10'>NSPCC Helpline</h2>
            <p className='text-lg'>
                The NSPCC Helpline can help with various safeguarding concerns and your call or
                message doesn’t have to be an emergency.
            </p>
            <p className='text-lg'>
                <strong>Help for adults concerned about a child:</strong>{' '}
                <a href='tel:08088005000'>0808 800 5000</a>
                {/* </p>
            <p className='text-lg'> */}
                <br />
                <strong>Help for children and young people (Childline):</strong>{' '}
                <a href='tel:08001111'>0800 1111</a>
                {/* </p>
            <p className='text-lg'> */}
                <br />
                <strong>Email:</strong> <a href='mailto:help@nspcc.org.uk'>help@nspcc.org.uk</a>
            </p>
        </div>
    );
}

export default Safeguarding;
