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
            const nextSessionDateString = startDate.toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
            const calendarURL = `https://calendar.google.com/calendar/r/eventedit?dates=${startDate
                .toISOString()
                .split('T')[0]
                .replace(/-/g, '')}T153000Z/${startDate
                .toISOString()
                .split('T')[0]
                .replace(
                    /-/g,
                    ''
                )}T173000Z&text=Coding%20Club%20Session&location=%40Symes%20Community%20Building%2C%20Peterson%20Ave%2C%20Bristol%20BS13%200BE&details=Next%20Coding%20Club%20session%20will%20take%20place%20on%20June%2013%2C%202024%20at%20%40Symes%20Community%20Building%20at%2015%3A30-17%3A30`;

            setSessionDetails(
                `Next Coding Club ➜ ${nextSessionDateString} (3:30pm) <a href="https://maps.app.goo.gl/kYAkbh7gZ6HcXVMNA" target="_blank" style="text-decoration:none; color:inherit;">@symes</a>`
            );
            setCalendarLink(calendarURL);
            return;
        }

        // Calculate the next Thursday based on today's date
        let nextThursday = new Date(today);
        if (today.getDay() === 4 && today.getHours() < 17) {
            nextThursday = today;
        } else {
            // If today is past this week's Thursday session, find the next Thursday
            if (today.getDay() > 4 || (today.getDay() === 4 && today.getHours() >= 17)) {
                nextThursday.setDate(today.getDate() + (7 - today.getDay()) + 4);
            } else {
                nextThursday.setDate(today.getDate() + (4 - today.getDay()));
            }
        }

        // Calculate the number of weeks since the start date to the next Thursday
        const nextSessionWeeksSinceStart =
            Math.floor((nextThursday - startDate) / (1000 * 60 * 60 * 24 * 7)) + 1;

        // Ensure the session number does not exceed the total number of sessions
        if (nextSessionWeeksSinceStart > totalSessions) {
            setSessionDetails('The Coding Club sessions have ended for this year.');
            return;
        }

        // Determine the venue and time for the next session
        const isSymes = nextSessionWeeksSinceStart % 2 !== 0;
        const venue = isSymes ? '@symes' : '@symes';
        const time = isSymes ? '3:30pm' : '3:30pm';
        const mapLink = isSymes
            ? 'https://maps.app.goo.gl/kYAkbh7gZ6HcXVMNA'
            : 'https://maps.app.goo.gl/kYAkbh7gZ6HcXVMNA';

        // Format the date to a readable string
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const nextSessionDateString = nextThursday.toLocaleDateString(undefined, options);

        // Check if next Thursday is today
        const isToday =
            nextThursday.getDate() === today.getDate() &&
            nextThursday.getMonth() === today.getMonth() &&
            nextThursday.getFullYear() === today.getFullYear();

        // Set the session details
        setSessionDetails(
            `<span class="font-semibold">Next Coding Club</span> ➜ <span class="font-semibold">${
                isToday ? 'TODAY' : nextSessionDateString
            }, ${time} at <a href="${mapLink}" target="_blank" class="font-semibold">${venue}</a></span>` +
                `${
                    calendarLink
                        ? ' <a href="' +
                          calendarLink +
                          '" target="_blank" rel="noopener noreferrer">Add to Calendar</a>'
                        : ''
                }`
        );
    }, []);

    return (
        <div className='antialiased'>
            <p dangerouslySetInnerHTML={{ __html: sessionDetails }} className='text-xl'></p>
        </div>
    );
};

export default CodingClubSession;
