import React, { useState, useEffect } from 'react';
import { news } from './mockData'; // News remains static as no API specified
import MatchFixturesCalendar from './components/MatchFixturesCalendar';
import './App.css'; // Assuming you might have a global CSS file
import { getFixtures, getLeagueStandings, getTopScorers } from './services/footballApi';

function App() {
    const [fixtures, setFixtures] = useState([]);
    const [fixturesLoading, setFixturesLoading] = useState(true);
    const [fixturesError, setFixturesError] = useState(null);

    const [leagueTable, setLeagueTable] = useState([]);
    const [leagueTableLoading, setLeagueTableLoading] = useState(true);
    const [leagueTableError, setLeagueTableError] = useState(null);

    const [topScorers, setTopScorers] = useState([]);
    const [topScorersLoading, setTopScorersLoading] = useState(true);
    const [topScorersError, setTopScorersError] = useState(null);

    useEffect(() => {
        // Fetch Fixtures
        const fetchFixtures = async () => {
            setFixturesLoading(true);
            setFixturesError(null);
            try {
                // Fetching fixtures for the next 7 days for a richer display
                const today = new Date();
                const datesToFetch = [];
                for (let i = 0; i < 7; i++) {
                    const d = new Date(today);
                    d.setDate(today.getDate() + i);
                    datesToFetch.push(d.toISOString().split('T')[0]);
                }

                const allFixtures = [];
                for (const date of datesToFetch) {
                    const dailyFixtures = await getFixtures(date);
                    allFixtures.push(...dailyFixtures);
                }
                setFixtures(allFixtures);
            } catch (error) {
                setFixturesError(error.message);
            } finally {
                setFixturesLoading(false);
            }
        };

        // Fetch League Standings
        const fetchLeagueTable = async () => {
            setLeagueTableLoading(true);
            setLeagueTableError(null);
            try {
                const data = await getLeagueStandings();
                setLeagueTable(data);
            } catch (error) {
                setLeagueTableError(error.message);
            } finally {
                setLeagueTableLoading(false);
            }
        };

        // Fetch Top Scorers
        const fetchTopScorers = async () => {
            setTopScorersLoading(true);
            setTopScorersError(null);
            try {
                const data = await getTopScorers();
                setTopScorers(data);
            } catch (error) {
                setTopScorersError(error.message);
            } finally {
                setTopScorersLoading(false);
            }
        };

        fetchFixtures();
        fetchLeagueTable();
        fetchTopScorers();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="App dark-theme">
            <header className="header">
                <h1>Kenyan Premier League Dashboard</h1>
            </header>

            <main className="dashboard-content">
                <MatchFixturesCalendar fixtures={fixtures} loading={fixturesLoading} error={fixturesError} />

                <section className="news-section card">
                    <h2>Latest News</h2>
                    <div className="news-grid">
                        {news.map(article => (
                            <div key={article.id} className="news-card">
                                {article.imageUrl && <img src={article.imageUrl} alt={article.title} />}
                                <h3>{article.title}</h3>
                                <p className="news-date">{article.date}</p>
                                <p>{article.summary}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="league-table-section card">
                    <h2>KPL League Table</h2>
                    {leagueTableLoading && <p>Loading league table...</p>}
                    {leagueTableError && <p className="error-message">Error loading league table: {leagueTableError}</p>}
                    {!leagueTableLoading && !leagueTableError && leagueTable.length > 0 ? (
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Team</th>
                                        <th>P</th>
                                        <th>W</th>
                                        <th>D</th>
                                        <th>L</th>
                                        <th>GF</th>
                                        <th>GA</th>
                                        <th>GD</th>
                                        <th>Pts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leagueTable.map(team => (
                                        <tr key={team.rank}>
                                            <td>{team.rank}</td>
                                            <td>{team.team}</td>
                                            <td>{team.played}</td>
                                            <td>{team.wins}</td>
                                            <td>{team.draws}</td>
                                            <td>{team.losses}</td>
                                            <td>{team.goalsFor}</td>
                                            <td>{team.goalsAgainst}</td>
                                            <td>{team.goalDifference}</td>
                                            <td>{team.points}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        !leagueTableLoading && !leagueTableError && <p>No league table data available.</p>
                    )}
                </section>

                <section className="top-scorers-section card">
                    <h2>Top Scorers</h2>
                    {topScorersLoading && <p>Loading top scorers...</p>}
                    {topScorersError && <p className="error-message">Error loading top scorers: {topScorersError}</p>}
                    {!topScorersLoading && !topScorersError && topScorers.length > 0 ? (
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Rank</th>
                                        <th>Player</th>
                                        <th>Team</th>
                                        <th>Goals</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topScorers.map(scorer => (
                                        <tr key={scorer.rank}>
                                            <td>{scorer.rank}</td>
                                            <td>{scorer.player}</td>
                                            <td>{scorer.team}</td>
                                            <td>{scorer.goals}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        !topScorersLoading && !topScorersError && <p>No top scorers data available.</p>
                    )}
                </section>
            </main>

            <footer className="footer">
                <p>&copy; 2026 Kenyan Premier League App</p>
            </footer>
        </div>
    );
}

export default App;

