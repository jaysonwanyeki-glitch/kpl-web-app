import React from 'react';
import React from 'react';
import { news, leagueTable, topScorers, fixtures } from './mockData';
import MatchFixtures from './components/MatchFixtures';
import './App.css'; // Assuming you might have a global CSS file

function App() {
    return (
        <div className="App dark-theme">
            <header className="header">
                <h1>Kenyan Premier League Dashboard</h1>
            </header>

            <main className="dashboard-content">
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

                <MatchFixtures fixtures={fixtures} />

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

// Basic CSS for dark theme and layout - you might want to move this to App.css or a dedicated stylesheet
const style = document.createElement('style');
style.innerHTML = `
    .dark-theme {
        --bg-color: #1a1a1a;
        --text-color: #e0e0e0;
        --card-bg: #2a2a2a;
        --border-color: #444;
        --primary-color: #bb86fc; /* A common primary color for dark themes */
        --secondary-color: #03dac6; /* A common secondary color */
        color: var(--text-color);
        background-color: var(--bg-color);
        min-height: 100vh;
        font-family: 'Arial', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
    }

    .App {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .header {
        width: 100%;
        max-width: 1200px;
        text-align: center;
        padding: 20px 0;
        border-bottom: 1px solid var(--border-color);
        margin-bottom: 30px;
    }

    .header h1 {
        color: var(--primary-color);
        margin: 0;
    }

    .dashboard-content {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
        width: 100%;
        max-width: 1200px;
    }

    @media (min-width: 768px) {
        .dashboard-content {
            grid-template-columns: 2fr 1fr;
        }
        .news-section {
            grid-column: 1 / 2;
        }
        .league-table-section {
            grid-column: 2 / 3;
            grid-row: 1 / 3; /* Occupy two rows */
        }
        .top-scorers-section {
            grid-column: 1 / 2;
        }
        .match-fixtures-section {
            grid-column: 1 / 2;
        }
    }

    /* New styles for MatchFixtures component */
    .match-fixtures-section {
        grid-column: 1 / -1; /* Span full width on smaller screens */
    }

    @media (min-width: 768px) {
        .match-fixtures-section {
            grid-column: 2 / 3;
            grid-row: 3 / 4; /* Place below league table on larger screens */
        }
    }

    .fixtures-list {
        margin-top: 15px;
    }

    .fixture-day {
        margin-bottom: 20px;
    }

    .fixture-day h3 {
        color: var(--primary-color);
        margin-bottom: 10px;
        font-size: 1.2em;
        border-bottom: 1px dashed var(--border-color);
        padding-bottom: 5px;
    }

    .fixture-card {
        background-color: var(--bg-color);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 10px 15px;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .fixture-card .fixture-type {
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 0.75em;
        font-weight: bold;
        text-transform: uppercase;
    }

    .premier-league-fixture .fixture-type {
        background-color: var(--primary-color);
        color: var(--bg-color);
    }

    .grassroots-fixture .fixture-type {
        background-color: var(--secondary-color);
        color: var(--bg-color);
    }

    .fixture-details {
        flex-grow: 1;
    }

    .fixture-details .teams {
        font-weight: bold;
        margin: 0;
        font-size: 1em;
    }

    .fixture-details .time-venue {
        font-size: 0.85em;
        color: #aaa;
        margin: 0;
    }
`;
document.head.appendChild(style);
