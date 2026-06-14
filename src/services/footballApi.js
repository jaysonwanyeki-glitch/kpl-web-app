const API_BASE_URL = process.env.REACT_APP_FOOTBALL_API_BASE_URL || "https://api-football-v1.p.rapidapi.com/v3";
const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY;
const API_HOST = process.env.REACT_APP_FOOTBALL_API_HOST || "api-football-v1.p.rapidapi.com";

// Hardcoded for Kenyan Premier League (example ID, replace with actual) and current season
const KENYAN_LEAGUE_ID = 300; // Placeholder: You'll need to find the actual League ID for Kenyan Premier League from your chosen API
const CURRENT_SEASON = 2026; // As per mock data season

const defaultHeaders = {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST,
};

async function fetchFootballData(endpoint, params = {}) {
    if (!API_KEY) {
        console.error("REACT_APP_FOOTBALL_API_KEY is not set.");
        throw new Error("API Key not configured.");
    }

    const url = new URL(`${API_BASE_URL}${endpoint}`);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    try {
        const response = await fetch(url.toString(), {
            method: 'GET',
            headers: defaultHeaders,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API call failed: ${response.status} ${response.statusText} - ${errorText}`);
        }

        const data = await response.json();
        if (data.errors && Object.keys(data.errors).length > 0) {
            console.error("API returned errors:", data.errors);
            throw new Error(`API specific error: ${JSON.stringify(data.errors)}`);
        }
        return data.response;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

export async function getLeagueStandings() {
    try {
        const data = await fetchFootballData('/standings', { league: KENYAN_LEAGUE_ID, season: CURRENT_SEASON });
        // Assuming data.response[0].league.standings[0] contains the actual table
        // Transform API response to match existing `leagueTable` structure if necessary
        // The API-Football usually returns data in an array: data.response[0].league.standings[0]
        if (data && data.length > 0 && data[0].league && data[0].league.standings && data[0].league.standings.length > 0) {
            return data[0].league.standings[0].map((team, index) => ({
                rank: team.rank,
                team: team.team.name,
                played: team.all.played,
                wins: team.all.win,
                draws: team.all.draw,
                losses: team.all.lose,
                goalsFor: team.all.goals.for,
                goalsAgainst: team.all.goals.against,
                goalDifference: team.goalsDiff,
                points: team.points,
            }));
        }
        return [];
    } catch (error) {
        console.error("Failed to fetch league standings:", error);
        throw error;
    }
}

export async function getFixtures(date = null) {
    try {
        const params = { league: KENYAN_LEAGUE_ID, season: CURRENT_SEASON };
        if (date) {
            params.date = date; // Format: YYYY-MM-DD
        }
        const data = await fetchFootballData('/fixtures', params);
        // Transform API response to match existing `fixturesData` structure
        if (data && data.length > 0) {
            return data.map(fixture => ({
                id: fixture.fixture.id,
                // The API doesn't usually provide a 'type' field like 'Premier League' or 'Grassroots'.
                // For simplicity, we'll hardcode 'Premier League' here as the request focuses on KPL.
                // If you need 'Grassroots', that would require a different data source or logic.
                type: "Premier League",
                date: new Date(fixture.fixture.date).toISOString().split('T')[0], // YYYY-MM-DD
                time: new Date(fixture.fixture.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
                homeTeam: fixture.teams.home.name,
                awayTeam: fixture.teams.away.name,
                venue: fixture.fixture.venue.name,
                homeTeamLogo: fixture.teams.home.logo || `https://via.placeholder.com/30/CCCCCC/000000?text=${fixture.teams.home.name.substring(0,2).toUpperCase()}`,
                awayTeamLogo: fixture.teams.away.logo || `https://via.placeholder.com/30/AAAAAA/000000?text=${fixture.teams.away.name.substring(0,2).toUpperCase()}`,
                status: fixture.fixture.status.long, // e.g., "Match Finished", "Not Started"
            }));
        }
        return [];
    } catch (error) {
        console.error("Failed to fetch fixtures:", error);
        throw error;
    }
}

export async function getTopScorers() {
    try {
        const data = await fetchFootballData('/players/topscorers', { league: KENYAN_LEAGUE_ID, season: CURRENT_SEASON });
        // Transform API response to match existing `topScorers` structure
        if (data && data.length > 0) {
            return data.map((playerStats, index) => ({
                rank: index + 1, // API usually doesn't provide rank directly, so we derive it
                player: playerStats.player.name,
                team: playerStats.statistics[0].team.name, // Assuming first statistic entry is relevant
                goals: playerStats.statistics[0].goals.total,
            }));
        }
        return [];
    } catch (error) {
        console.error("Failed to fetch top scorers:", error);
        throw error;
    }
}
