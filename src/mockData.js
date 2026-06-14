export const news = [
    {
        id: 1,
        title: "Gor Mahia Clinch Record 21st KPL Title!",
        date: "2026-06-12",
        summary: "Gor Mahia secured their record 21st Kenyan Premier League title with a dominant performance against Sofapaka FC, winning 3-0 at Kasarani Stadium.",
        imageUrl: "https://example.com/gor_mahia_win.jpg" // Placeholder image URL
    },
    {
        id: 2,
        title: "AFC Leopards Eyeing Top Four Finish After Crucial Win",
        date: "2026-06-10",
        summary: "AFC Leopards boosted their chances of a top-four finish after a narrow 1-0 victory over Kariobangi Sharks. Ingwe's resilience was on full display.",
        imageUrl: "https://example.com/afc_leopards_win.jpg" // Placeholder image URL
    },
    {
        id: 3,
        title: "Tusker FC Stumble, Title Hopes Fading?",
        date: "2026-06-09",
        summary: "Tusker FC suffered a surprising 2-1 defeat to Kakamega Homeboyz, putting a dent in their title aspirations. The Brewers need to regroup quickly.",
        imageUrl: "https://example.com/tusker_defeat.jpg" // Placeholder image URL
    },
    {
        id: 4,
        title: "Young Talents Shine in KPL Mid-Season Review",
        date: "2026-06-05",
        summary: "A look at the breakout stars and promising young talents who have made a significant impact in the Kenyan Premier League this season.",
        imageUrl: "https://example.com/young_talents.jpg" // Placeholder image URL
    }
];

export const leagueTable = [
    { rank: 1, team: "Gor Mahia", played: 28, wins: 20, draws: 6, losses: 2, goalsFor: 55, goalsAgainst: 18, goalDifference: 37, points: 66 },
    { rank: 2, team: "Tusker FC", played: 28, wins: 18, draws: 5, losses: 5, goalsFor: 48, goalsAgainst: 20, goalDifference: 28, points: 59 },
    { rank: 3, team: "Bandari FC", played: 28, wins: 16, draws: 8, losses: 4, goalsFor: 42, goalsAgainst: 22, goalDifference: 20, points: 56 },
    { rank: 4, team: "AFC Leopards", played: 28, wins: 14, draws: 9, losses: 5, goalsFor: 39, goalsAgainst: 25, goalDifference: 14, points: 51 },
    { rank: 5, team: "Kakamega Homeboyz", played: 28, wins: 12, draws: 10, losses: 6, goalsFor: 35, goalsAgainst: 28, goalDifference: 7, points: 46 },
    { rank: 6, team: "Kenya Police FC", played: 28, wins: 10, draws: 12, losses: 6, goalsFor: 30, goalsAgainst: 24, goalDifference: 6, points: 42 },
    { rank: 7, team: "KCB FC", played: 28, wins: 9, draws: 11, losses: 8, goalsFor: 28, goalsAgainst: 26, goalDifference: 2, points: 38 },
    { rank: 8, team: "Sofapaka FC", played: 28, wins: 8, draws: 9, losses: 11, goalsFor: 29, goalsAgainst: 33, goalDifference: -4, points: 33 },
    { rank: 9, team: "Posta Rangers", played: 28, wins: 7, draws: 10, losses: 11, goalsFor: 25, goalsAgainst: 30, goalDifference: -5, points: 31 },
    { rank: 10, team: "Nzoia Sugar FC", played: 28, wins: 6, draws: 12, losses: 10, goalsFor: 22, goalsAgainst: 32, goalDifference: -10, points: 30 }
];

export const topScorers = [
    { rank: 1, player: "Benson Omalla", team: "Gor Mahia", goals: 18 },
    { rank: 2, player: "Eric Kapaito", team: "Kariobangi Sharks", goals: 15 },
    { rank: 3, player: "Patrick Kaddu", team: "Gor Mahia", goals: 12 },
    { rank: 4, player: "David Okoth", team: "Kakamega Homeboyz", goals: 11 },
    { rank: 5, player: "Derrick Otanga", team: "KCB FC", goals: 10 }
];

export const fixturesData = [
    {
        id: 1,
        type: "Premier League",
        date: "2026-06-15",
        time: "15:00",
        homeTeam: "Gor Mahia",
        awayTeam: "AFC Leopards",
        venue: "Nyayo National Stadium",
        homeTeamLogo: "https://via.placeholder.com/30/4CAF50/FFFFFF?text=GM", // Placeholder for Gor Mahia
        awayTeamLogo: "https://via.placeholder.com/30/2196F3/FFFFFF?text=AL", // Placeholder for AFC Leopards
        status: "Upcoming"
    },
    {
        id: 2,
        type: "Premier League",
        date: "2026-06-15",
        time: "15:00",
        homeTeam: "Tusker FC",
        awayTeam: "Bandari FC",
        venue: "Kasarani Main Stadium",
        homeTeamLogo: "https://via.placeholder.com/30/FFC107/000000?text=TFC", // Placeholder for Tusker FC
        awayTeamLogo: "https://via.placeholder.com/30/9C27B0/FFFFFF?text=BFC", // Placeholder for Bandari FC
        status: "Upcoming"
    },
    {
        id: 3,
        type: "Premier League",
        date: "2026-06-16",
        time: "13:00",
        homeTeam: "KCB FC",
        awayTeam: "Sofapaka FC",
        venue: "Machakos Stadium",
        homeTeamLogo: "https://via.placeholder.com/30/795548/FFFFFF?text=KCB", // Placeholder for KCB FC
        awayTeamLogo: "https://via.placeholder.com/30/FF9800/FFFFFF?text=SFC", // Placeholder for Sofapaka FC
        status: "Upcoming"
    },
    {
        id: 4,
        type: "Grassroots",
        date: "2026-06-16",
        time: "10:00",
        homeTeam: "Local Heroes FC",
        awayTeam: "Village Stars",
        venue: "Bukhungu Stadium",
        homeTeamLogo: "https://via.placeholder.com/30/8BC34A/FFFFFF?text=LH", // Placeholder
        awayTeamLogo: "https://via.placeholder.com/30/607D8B/FFFFFF?text=VS", // Placeholder
        status: "Upcoming"
    },
    {
        id: 5,
        type: "Premier League",
        date: "2026-06-17",
        time: "15:00",
        homeTeam: "Kakamega Homeboyz",
        awayTeam: "Kenya Police FC",
        venue: "Bukhungu Stadium",
        homeTeamLogo: "https://via.placeholder.com/30/CDDC39/000000?text=KH", // Placeholder for Kakamega Homeboyz
        awayTeamLogo: "https://via.placeholder.com/30/E91E63/FFFFFF?text=KP", // Placeholder for Kenya Police FC
        status: "Upcoming"
    },
    {
        id: 6,
        type: "Grassroots",
        date: "2026-06-17",
        time: "14:00",
        homeTeam: "Youth Academy",
        awayTeam: "Rising Talents",
        venue: "City Grounds",
        homeTeamLogo: "https://via.placeholder.com/30/00BCD4/FFFFFF?text=YA", // Placeholder
        awayTeamLogo: "https://via.placeholder.com/30/FF5722/FFFFFF?text=RT", // Placeholder
        status: "Upcoming"
    },
    {
        id: 7,
        type: "Premier League",
        date: "2026-06-18",
        time: "16:00",
        homeTeam: "Posta Rangers",
        awayTeam: "Nzoia Sugar FC",
        venue: "Thika Stadium",
        homeTeamLogo: "https://via.placeholder.com/30/3F51B5/FFFFFF?text=PR", // Placeholder for Posta Rangers
        awayTeamLogo: "https://via.placeholder.com/30/7CB342/FFFFFF?text=NS", // Placeholder for Nzoia Sugar FC
        status: "Upcoming"
    },
    {
        id: 8,
        type: "Premier League",
        date: "2026-06-18",
        time: "15:00",
        homeTeam: "Gor Mahia",
        awayTeam: "Kariobangi Sharks",
        venue: "Kasarani Main Stadium",
        homeTeamLogo: "https://via.placeholder.com/30/4CAF50/FFFFFF?text=GM", // Placeholder for Gor Mahia
        awayTeamLogo: "https://via.placeholder.com/30/9E9E9E/FFFFFF?text=KS", // Placeholder for Kariobangi Sharks
        status: "Upcoming"
    },
    {
        id: 9,
        type: "Grassroots",
        date: "2026-06-19",
        time: "09:30",
        homeTeam: "Community FC",
        awayTeam: "Amateur United",
        venue: "Local Pitch A",
        homeTeamLogo: "https://via.placeholder.com/30/009688/FFFFFF?text=CFC", // Placeholder
        awayTeamLogo: "https://via.placeholder.com/30/E0F2F1/000000?text=AU", // Placeholder
        status: "Upcoming"
    }
];
