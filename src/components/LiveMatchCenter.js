import React, { useState, useEffect } from 'react'; // Keep useState and useEffect

// Mock data for the live match
const mockMatch = {
    id: 'live-kpl-derby',
    homeTeam: "Gor Mahia",
    awayTeam: "AFC Leopards",
    homeTeamLogo: "https://via.placeholder.com/50/4CAF50/FFFFFF?text=GM",
    awayTeamLogo: "https://via.placeholder.com/50/2196F3/FFFFFF?text=AL",
    venue: "Nyayo National Stadium",
    score: { home: 0, away: 0 },
    events: [
        { minute: 1, description: "Kick-off! Mashemeji Derby is underway." },
    ]
};

const matchEventsQueue = [
    { minute: 10, description: "Shot on target by Gor Mahia! Saved by the keeper." },
    { minute: 18, description: "Yellow Card for AFC Leopards' defender for a reckless tackle." },
    { minute: 25, description: "Chance! AFC Leopards' striker misses a header from close range." },
    { minute: 34, description: "GOAL! Gor Mahia takes the lead! Striker Benson Omalla scores with a powerful shot." },
    { minute: 35, description: "Gor Mahia 1 - 0 AFC Leopards" },
    { minute: 42, description: "Free kick awarded to AFC Leopards just outside the box." },
    { minute: 45, description: "Halftime whistle blows at Nyayo Stadium." },
    { minute: 46, description: "Second half begins." },
    { minute: 55, description: "Substitution for Gor Mahia: Midfielder comes on for a forward." },
    { minute: 63, description: "GOAL! AFC Leopards equalize! A header from a corner kick levels the score." },
    { minute: 64, description: "Gor Mahia 1 - 1 AFC Leopards" },
    { minute: 72, description: "Another Yellow Card, this time for Gor Mahia's midfielder." },
    { minute: 80, description: "Penalty awarded to AFC Leopards! Hand ball in the box." },
    { minute: 81, description: "GOAL! AFC Leopards take the lead from the spot! Clinical finish." },
    { minute: 82, description: "Gor Mahia 1 - 2 AFC Leopards" },
    { minute: 88, description: "Gor Mahia pushing hard for an equalizer in the dying minutes." },
    { minute: 90, description: "Added time: 4 minutes." },
    { minute: 90, description: "Full-time whistle! AFC Leopards win the Mashemeji Derby!" },
];

function LiveMatchCenter() {
    const [matchTime, setMatchTime] = useState(0); // Current minute of the match
    const [currentScore, setCurrentScore] = useState(mockMatch.score);
    const [eventFeed, setEventFeed] = useState(mockMatch.events);
    const [eventIndex, setEventIndex] = useState(0); // To track which event to add next

    useEffect(() => {
        let matchInterval;
        let eventInterval;

        // Simulate match time
        matchInterval = setInterval(() => {
            setMatchTime(prevTime => {
                if (prevTime >= 90) {
                    clearInterval(matchInterval);
                    return 90;
                }
                return prevTime + 1;
            });
        }, 1000); // Advance 1 minute every 1 second

        // Simulate event feed
        eventInterval = setInterval(() => {
            setEventFeed(prevFeed => {
                const nextEvent = matchEventsQueue[eventIndex];

                if (nextEvent && matchTime >= nextEvent.minute) {
                    setEventIndex(prevIndex => prevIndex + 1);

                    // Update score if the event is a goal
                    if (nextEvent.description.includes("GOAL! Gor Mahia takes the lead!")) {
                        setCurrentScore(s => ({ ...s, home: s.home + 1 }));
                    } else if (nextEvent.description.includes("GOAL! AFC Leopards equalize!")) {
                        setCurrentScore(s => ({ ...s, away: s.away + 1 }));
                    } else if (nextEvent.description.includes("GOAL! AFC Leopards take the lead from the spot!")) {
                        setCurrentScore(s => ({ ...s, away: s.away + 1 }));
                    } else if (nextEvent.description.includes("Gor Mahia 1 - 0 AFC Leopards")) {
                        setCurrentScore({ home: 1, away: 0 });
                    } else if (nextEvent.description.includes("Gor Mahia 1 - 1 AFC Leopards")) {
                        setCurrentScore({ home: 1, away: 1 });
                    } else if (nextEvent.description.includes("Gor Mahia 1 - 2 AFC Leopards")) {
                        setCurrentScore({ home: 1, away: 2 });
                    }

                    return [...prevFeed, nextEvent];
                }
                return prevFeed;
            });

            // Stop event interval if all events are processed or match is over
            if (eventIndex >= matchEventsQueue.length && matchTime >= 90) {
                clearInterval(eventInterval);
            }

        }, 3000); // Add a new event every 3 seconds

        return () => {
            clearInterval(matchInterval);
            clearInterval(eventInterval);
        };
    }, [matchTime, eventIndex]); // Re-run effect when matchTime or eventIndex changes

    const formatMatchTime = (time) => {
        if (time >= 90) return "FT";
        if (time >= 45 && time < 46) return "HT";
        return `${time}'`;
    };

    const isMatchLive = matchTime < 90;

    return (
        <section className="live-match-center-section card">
            <div className="match-header">
                <h3>KPL Live Match Center</h3>
                <div className="match-status">
                    {isMatchLive ? (
                        <>
                            LIVE <span className="live-indicator"></span>
                        </>
                    ) : (
                        "FULL TIME"
                    )}
                </div>
            </div>

            <div className="scoreboard">
                <div className="team-display">
                    <img src={mockMatch.homeTeamLogo} alt={mockMatch.homeTeam} />
                    <span className="team-name">{mockMatch.homeTeam}</span>
                </div>
                <div className="score">{currentScore.home} - {currentScore.away}</div>
                <div className="team-display">
                    <img src={mockMatch.awayTeamLogo} alt={mockMatch.awayTeam} />
                    <span className="team-name">{mockMatch.awayTeam}</span>
                </div>
            </div>

            <p className="time-venue" style={{ textAlign: 'center', marginBottom: '20px' }}>
                {formatMatchTime(matchTime)} - {mockMatch.venue}
            </p>

            <h4>Text Commentary / Event Feed</h4>
            <div className="match-events">
                {eventFeed.map((event, index) => (
                    <div key={index} className="match-event-item">
                        <span className="event-time">{event.minute}'</span>
                        <span className="event-description">{event.description}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default LiveMatchCenter;
