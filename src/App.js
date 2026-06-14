import React from 'react';
import { news, leagueTable, topScorers } from './mockData';
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
    }

    .card {
        background-color: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .card h2 {
        color: var(--secondary-color);
        margin-top: 0;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 10px;
        margin-bottom: 20px;
    }

    .news-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
    }

    .news-card {
        background-color: var(--bg-color);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 15px;
        display: flex;
        flex-direction: column;
    }

    .news-card img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 4px;
        margin-bottom: 10px;
    }

    .news-card h3 {
        color: var(--primary-color);
        margin-top: 0;
        margin-bottom: 5px;
        font-size: 1.1em;
    }

    .news-card .news-date {
        font-size: 0.8em;
        color: #aaa;
        margin-bottom: 10px;
    }

    .news-card p {
        font-size: 0.9em;
        line-height: 1.4;
    }

    .table-container {
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 15px;
    }

    th, td {
        border: 1px solid var(--border-color);
        padding: 10px;
        text-align: left;
    }

    th {
        background-color: #333;
        color: var(--primary-color);
        font-weight: bold;
    }

    tr:nth-child(even) {
        background-color: #2e2e2e;
    }

    tr:hover {
        background-color: #383838;
    }

    .footer {
        width: 100%;
        max-width: 1200px;
        text-align: center;
        padding: 20px 0;
        margin-top: 50px;
        border-top: 1px solid var(--border-color);
        font-size: 0.9em;
        color: #999;
    }
`;
document.head.appendChild(style);
