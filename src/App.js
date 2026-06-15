import React, { useState, useEffect } from 'react';
import { news } from './mockData';
import MatchFixturesCalendar from './components/MatchFixturesCalendar';
import LiveMatchCenter from './components/LiveMatchCenter'; // Import the new component
import './App.css';
import { getFixtures, getLeagueStandings, getTopScorers } from './services/footballApi';

function App() {
    const [fixtures, setFixtures] = useState([]);
    const [fixturesLoading, setFixturesLoading] = useState(true);
    const [fixturesError, setFixturesError] = useState(null);

    const [leagueTable, setLeagueTable] = useState([]);

    const [topScorers, setTopScorers] = useState([]);

    useEffect(() => {
        setFixtures(fixturesData);
        setLeagueTable(leagueTableData);
        setTopScorers(topScorersData);
        setFixturesLoading(false);
        setFixturesError(null);
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="App dark-theme">
            <header className="header">
                <h1>Kenyan Premier League Dashboard</h1>
            </header>

            <main className="dashboard-content">
                <LiveMatchCenter /> {/* New Live Match Center component */}
                <MatchFixturesCalendar fixtures={fixtures} loading={fixturesLoading} error={fixturesError} />

                <section className="news-section card">
                    <h2>Latest News</h2>
                    <div className="news-grid">
                        {news.map(article => (
                            <div key={article.id} className="news-card">
                                {article.imageUrl && <img src={article.imageUrl} alt={article.title} />}
                                <div className="news-card-content">
                                    <h3>{article.title}</h3>
                                    <p className="news-meta">By {article.author} | {new Date(article.date).toLocaleDateString()}</p>
                                    <p className="news-summary">{article.summary}</p>
                                    {/* You could add a 'Read More' link here if full article pages were implemented */}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="league-table-section card">
                    <h2>KPL League Table</h2>
                    {/* Removed explicit loading/error messages as per request */}
                    {leagueTable.length > 0 ? (
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
                        <p>No league table data available.</p>
                    )}
                </section>

                <section className="top-scorers-section card">
                    <h2>Top Scorers</h2>
                    {/* Removed explicit loading/error messages as per request */}
                    {topScorers.length > 0 ? (
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
                        <p>No top scorers data available.</p>
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

