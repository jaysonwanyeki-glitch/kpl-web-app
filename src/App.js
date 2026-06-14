import React from 'react';
import { news, leagueTable, topScorers, fixturesData } from './mockData';
import MatchFixturesCalendar from './components/MatchFixturesCalendar';
import './App.css'; // Assuming you might have a global CSS file

function App() {
    return (
        <div className="App dark-theme">
            <header className="header">
                <h1>Kenyan Premier League Dashboard</h1>
            </header>

            <main className="dashboard-content">
                <MatchFixturesCalendar fixturesData={fixturesData} />

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
                </section>

                <section className="top-scorers-section card">
                    <h2>Top Scorers</h2>
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
                </section>
            </main>

            <footer className="footer">
                <p>&copy; 2026 Kenyan Premier League App</p>
            </footer>
        </div>
    );
}

export default App;

