import { useState, useEffect } from 'react';

const CodingClubSession = () => {
    const [sessionDetails, setSessionDetails] = useState('');
    const [calendarLink, setCalendarLink] = useState('');

    useEffect(() => {
        const startDate = new Date(2024, 5, 13); // June 13, 2024 (month is 0-based)
        const totalSessions = 50;
        const today = new Date();

        // If today is before the start date, set next session to start date
        if (today < startDate) {
            const eventDate = startDate.toISOString().split('T')[0].replace(/-/g, '');
            const calendarURL = `https://calendar.google.com/calendar/r/eventedit?dates=${eventDate}T153000Z/${eventDate}T173000Z&text=Coding%20Club%20Session&location=%40Symes%20Community%20Building%2C%20Peterson%20Ave%2C%20Bristol%20BS13%200BE&details=Next%20Coding%20Club%20session%20will%20take%20place%20on%20June%2013%2C%202024%20at%20%40Symes%20Community%20Building%20at%2015%3A30-17%3A30`;

            setSessionDetails(
                `Next Coding Club ➜ June 13, 2024 (3:30pm) <a href="https://maps.app.goo.gl/kYAkbh7gZ6HcXVMNA" target="_blank" style="text-decoration:none; color:inherit;">@symes</a>`
            );

            setCalendarLink(calendarURL);
            return;
        }

        // Calculate the number of days between the start date and today
        const diffTime = today - startDate;
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        // Calculate the number of weeks since the start date
        let weeksSinceStart = Math.floor(diffDays / 7);

        // Find the next Thursday
        let nextThursday = new Date(startDate);
        nextThursday.setDate(startDate.getDate() + weeksSinceStart * 7);

        // Adjust for today's date and time
        if (today.getDay() === 4 && today.getHours() < 15) {
            nextThursday = today;
        } else if (today.getDay() > 4 || (today.getDay() === 4 && today.getHours() >= 15)) {
            nextThursday.setDate(nextThursday.getDate() + 7);
            weeksSinceStart++;
        }

        // Ensure the session number does not exceed the total number of sessions
        let nextSessionNumber = weeksSinceStart + 1;
        if (nextSessionNumber > totalSessions) {
            setSessionDetails('The Coding Club sessions have ended for this year.');
            return;
        }

        // Determine the venue and time for the next session
        const isSymes = nextSessionNumber % 2 !== 0;
        const venue = isSymes ? '@symes' : 'The Gatehouse';
        const time = isSymes ? '3:30pm' : '3:00pm';
        const mapLink = isSymes
            ? 'https://maps.app.goo.gl/kYAkbh7gZ6HcXVMNA'
            : 'https://maps.app.goo.gl/xxBs8EK1LWijBrDU9';

        // Format the date to a readable string
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const nextSessionDateString = nextThursday.toLocaleDateString(undefined, options);

        // Create the calendar link
        const startTime = isSymes ? '153000' : '150000';
        const endTime = isSymes ? '173000' : '170000';
        const eventDate = nextThursday.toISOString().split('T')[0].replace(/-/g, '');
        const calendarURL = `https://calendar.google.com/calendar/r/eventedit?dates=${eventDate}T${startTime}Z/${eventDate}T${endTime}Z&text=Coding%20Club%20Session&location=${encodeURIComponent(
            venue
        )}&details=Next%20Coding%20Club%20session%20will%20take%20place%20on%20${nextSessionDateString}%20at%20${encodeURIComponent(
            venue
        )}%20at%20${time}`;

        // Set the session details
        setSessionDetails(
            `Next Coding Club ➜ ${nextSessionDateString}, ${time} at <a href="${mapLink}" target="_blank">${venue}</a>` +
                `${
                    calendarLink
                        ? ' <a href="' +
                          calendarLink +
                          '" target="_blank" rel="noopener noreferrer">Add to Calendar</a>'
                        : ''
                }`
        );
        setCalendarLink(calendarURL);
    }, []);

    return (
        <div className='antialiased'>
            <p dangerouslySetInnerHTML={{ __html: sessionDetails }} className='text-xl'></p>
            {/* {calendarLink && (
                <a href={calendarLink} target='_blank' rel='noopener noreferrer'>
                    Add to Calendar
                </a>
            )} */}
        </div>
    );
};

export default CodingClubSession;
