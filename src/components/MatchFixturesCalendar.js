import React, { useState } from 'react';

function MatchFixturesCalendar({ fixtures, loading, error }) {
    const [filterType, setFilterType] = useState('all'); // 'all', 'premier', 'grassroots'

    const filteredFixtures = fixtures.filter(fixture => {
        // Note: The API currently only fetches "Premier League" type fixtures.
        // If 'Grassroots' data is needed, a separate API call or data source would be required.
        if (filterType === 'premier') {
            return fixture.type === 'Premier League';
        }
        if (filterType === 'grassroots') {
            // For now, this will return an empty list if 'Grassroots' matches aren't fetched via API
            return fixture.type === 'Grassroots';
        }
        return true; // Show all for 'all'
    });

    // Group fixtures by date
    const groupedFixtures = filteredFixtures.reduce((acc, fixture) => {
        const date = fixture.date;
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(fixture);
        return acc;
    }, {});

    const sortedDates = Object.keys(groupedFixtures).sort((a, b) => new Date(a) - new Date(b));

    return (
        <section className="match-fixtures-calendar-section card">
            <h2>Fixtures / Matchday Schedule</h2>
            <div className="filter-buttons">
                <button
                    className={`filter-button ${filterType === 'all' ? 'active' : ''}`}
                    onClick={() => setFilterType('all')}
                >
                    All Matches
                </button>
                <button
                    className={`filter-button ${filterType === 'premier' ? 'active' : ''}`}
                    onClick={() => setFilterType('premier')}
                >
                    Premier League
                </button>
                <button
                    className={`filter-button ${filterType === 'grassroots' ? 'active' : ''}`}
                    onClick={() => setFilterType('grassroots')}
                >
                    Grassroots
                </button>
            </div>
            <div className="fixtures-calendar-list">
                {loading && <p>Loading fixtures...</p>}
                {error && <p className="error-message">Error loading fixtures: {error}</p>}
                {!loading && !error && (
                    sortedDates.length > 0 ? (
                        sortedDates.map(date => (
                            <div key={date} className="fixture-day">
                                <h3>{new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</h3>
                                {groupedFixtures[date].map(fixture => (
                                    <div key={fixture.id} className={`fixture-card ${fixture.type.toLowerCase().replace(' ', '-')}-fixture`}>
                                        <div className="fixture-teams">
                                            <div className="team-info">
                                                <img src={fixture.homeTeamLogo} alt={fixture.homeTeam} className="team-logo" />
                                                <span className="team-name">{fixture.homeTeam}</span>
                                            </div>
                                            <span className="vs">vs</span>
                                            <div className="team-info">
                                                <img src={fixture.awayTeamLogo} alt={fixture.awayTeam} className="team-logo" />
                                                <span className="team-name">{fixture.awayTeam}</span>
                                            </div>
                                        </div>
                                        <div className="fixture-details">
                                            <p className="time-venue">{fixture.time} - {fixture.venue}</p>
                                        </div>
                                        <div className={`status-badge ${fixture.status.toLowerCase().replace(' ', '-')}`}>{fixture.status}</div>
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <p>No fixtures found for the selected category.</p>
                    )
                )}
            </div>
        </section>
    );
}

export default MatchFixturesCalendar;
