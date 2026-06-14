import React from 'react';

function MatchFixtures({ fixtures }) {
    // Group fixtures by date
    const groupedFixtures = fixtures.reduce((acc, fixture) => {
        const date = fixture.date;
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(fixture);
        return acc;
    }, {});

    const sortedDates = Object.keys(groupedFixtures).sort();

    return (
        <section className="match-fixtures-section card">
            <h2>Upcoming Matches</h2>
            {sortedDates.length === 0 ? (
                <p>No upcoming matches this week.</p>
            ) : (
                <div className="fixtures-list">
                    {sortedDates.map(date => (
                        <div key={date} className="fixture-day">
                            <h3>{new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
                            {groupedFixtures[date].map(fixture => (
                                <div key={fixture.id} className={`fixture-card ${fixture.type === 'Premier League' ? 'premier-league-fixture' : 'grassroots-fixture'}`}>
                                    <span className="fixture-type">{fixture.type}</span>
                                    <div className="fixture-details">
                                        <p className="teams">{fixture.homeTeam} vs {fixture.awayTeam}</p>
                                        <p className="time-venue">{fixture.time} - {fixture.venue}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default MatchFixtures;
