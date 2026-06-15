import React, { useState, useEffect } from 'react';
import { news, fixturesData, leagueTableData, topScorersData } from './mockData';
import './App.css';

// Import new components
import Navbar from './components/Navbar';
import MatchCenter from './components/MatchCenter';
import FixturesCalendar from './components/FixturesCalendar';
import NewsGrid from './components/NewsGrid';
import StatsTables from './components/StatsTables';

function App() {
    const [fixtures, setFixtures] = useState([]);
    const [fixturesLoading, setFixturesLoading] = useState(true);
    const [fixturesError, setFixturesError] = useState(null);

    const [leagueTable, setLeagueTable] = useState([]);
    const [topScorers, setTopScorers] = useState([]);
    const [latestNews, setLatestNews] = useState([]);

    useEffect(() => {
        setFixtures(fixturesData);
        setLeagueTable(leagueTableData);
        setTopScorers(topScorersData);
        setLatestNews(news);
        setFixturesLoading(false);
        setFixturesError(null);
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="App dark-theme">
            <Navbar />

            <main className="dashboard-content">
                <MatchCenter />
                <FixturesCalendar fixtures={fixtures} loading={fixturesLoading} error={fixturesError} />
                <NewsGrid news={latestNews} />
                <StatsTables leagueTable={leagueTable} topScorers={topScorers} />
            </main>

            <footer className="footer">
                <p>&copy; 2026 Kenyan Premier League App</p>
            </footer>
        </div>
    );
}

export default App;

