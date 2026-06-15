import React from 'react';

function StatsTables({ leagueTable, topScorers }) {
    return (
        <>
            <section className="league-table-section card">
                <h2>KPL League Table</h2>
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
        </>
    );
}

export default StatsTables;
