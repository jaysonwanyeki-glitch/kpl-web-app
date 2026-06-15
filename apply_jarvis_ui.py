import os

# Content for src/App.css - Jarvis HUD Theme
new_app_css_content = """
/* Jarvis HUD Theme for KPL Dashboard */

@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Share+Tech+Mono&display=swap');

:root {
    --jarvis-bg-deep: #0a0f1d;
    --jarvis-neon-cyan: #00f0ff;
    --jarvis-electric-green: #39ff14;
    --jarvis-text-light: #e0e0e0;
    --jarvis-text-medium: #a0a0a0;
    --jarvis-border-light: rgba(0,240,255,0.4);
    --jarvis-shadow-glow: rgba(0,240,255,0.2);
    --jarvis-red-alert: #ff0033;
    --jarvis-grid-line: rgba(0,240,255,0.05); /* Subtle grid lines */
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Share Tech Mono', monospace, Arial, sans-serif;
    color: var(--jarvis-text-light);
    background-color: var(--jarvis-bg-deep);
    min-height: 100vh;
    overflow-x: hidden; /* Prevent horizontal scroll from glowing elements */
    position: relative;
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
}

/* Background grid effect */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image:
        linear-gradient(to right, var(--jarvis-grid-line) 1px, transparent 1px),
        linear-gradient(to bottom, var(--jarvis-grid-line) 1px, transparent 1px);
    background-size: 20px 20px;
    z-index: 0;
    opacity: 0.5;
    pointer-events: none;
}


/* Base App Container */
.App {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    position: relative;
    z-index: 1; /* Ensure app content is above background effects */
    max-width: 100vw;
}

/* Global Card Styling - Futuristic Boxes */
.card {
    background-color: rgba(10, 15, 29, 0.7); /* Slightly lighter than background, semi-transparent */
    border: 1px solid var(--jarvis-border-light);
    border-radius: 5px; /* Subtle rounding */
    padding: 20px;
    box-shadow: 0 0 15px var(--jarvis-shadow-glow); /* Neon glow */
    position: relative;
    overflow: hidden; /* For internal effects */
}

/* Geometric Corner Borders for Cards */
.card::before, .card::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 1px solid var(--jarvis-neon-cyan);
    transition: all 0.3s ease-in-out;
}

.card::before { /* Top-left corner */
    top: -1px; left: -1px;
    border-right: none;
    border-bottom: none;
}

.card::after { /* Bottom-right corner */
    bottom: -1px; right: -1px;
    border-left: none;
    border-top: none;
}

/* Hover effect for cards */
.card:hover::before, .card:hover::after {
    border-color: var(--jarvis-electric-green);
    box-shadow: 0 0 10px var(--jarvis-electric-green);
}

/* Typography Overrides */
h1, h2, h3, h4, h5, h6 {
    color: var(--jarvis-neon-cyan);
    font-family: 'Orbitron', sans-serif; /* A sci-fi font */
    text-shadow: 0 0 8px var(--jarvis-shadow-glow);
}

h2 {
    border-bottom: 2px solid var(--jarvis-electric-green);
    padding-bottom: 10px;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
}

h2::after {
    content: '';
    position: absolute;
    bottom: -2px; /* Position it on the border */
    left: 0;
    width: 20%; /* Short line at the start of the border */
    height: 2px;
    background-color: var(--jarvis-neon-cyan);
    box-shadow: 0 0 5px var(--jarvis-neon-cyan);
}


/* Navbar and Header */
.navbar-container {
    width: 100%;
    max-width: 1200px;
    position: relative;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.status-banner {
    background-color: var(--jarvis-red-alert);
    color: var(--jarvis-bg-deep);
    padding: 5px 15px;
    font-size: 0.9em;
    font-weight: bold;
    text-align: center;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 1px;
    animation: blinkStatus 1s infinite step-end;
    margin-bottom: 10px;
    border-radius: 3px;
    box-shadow: 0 0 10px var(--jarvis-red-alert);
}

@keyframes blinkStatus {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
}


.header {
    width: 100%;
    text-align: center;
    padding: 20px 0;
    border-bottom: 2px solid var(--jarvis-electric-green);
    position: relative;
}

.header::before, .header::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid var(--jarvis-neon-cyan);
    top: -2px;
}

.header::before {
    left: -2px;
    border-right: none;
    border-bottom: none;
}

.header::after {
    right: -2px;
    border-left: none;
    border-bottom: none;
}

.header h1 {
    color: var(--jarvis-neon-cyan);
    margin: 0;
    text-shadow: 0 0 10px var(--jarvis-neon-cyan), 0 0 20px var(--jarvis-neon-cyan);
    letter-spacing: 3px;
    text-transform: uppercase;
}

/* Dashboard Layout */
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
        grid-row: 1 / 3;
    }
    .top-scorers-section {
        grid-column: 1 / 2;
    }
    .match-fixtures-section {
        grid-column: 1 / 2;
    }
}

.live-indicator {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: var(--jarvis-red-alert);
    border-radius: 50%;
    margin-left: 8px;
    animation: pulse 1.5s infinite;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(255, 0, 51, 0.7);
    }
    70% {
        box-shadow: 0 0 0 10px rgba(255, 0, 51, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(255, 0, 51, 0);
    }
}

/* Match Fixtures Calendar styles */
.match-fixtures-calendar-section {
    grid-column: 1 / -1; /* Span full width on smaller screens */
}

/* News Card Specific Styles */
.news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
}

.news-card {
    background-color: rgba(10, 15, 29, 0.8);
    border: 1px solid var(--jarvis-border-light);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0,240,255,0.1);
}

.news-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0,240,255,0.3);
    border-color: var(--jarvis-neon-cyan);
}

.news-card img {
    width: 100%;
    height: 180px; /* Fixed height for feature image */
    object-fit: cover; /* Cover the area, cropping if necessary */
    border-bottom: 1px solid var(--jarvis-border-light);
    transition: transform 0.3s ease;
}

.news-card:hover img {
    transform: scale(1.05); /* Zoom effect on hover */
}

.news-card-content {
    padding: 15px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.news-card h3 {
    color: var(--jarvis-electric-green); /* News titles in electric green */
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 1.2em;
    line-height: 1.3;
}

.news-card .news-meta {
    font-size: 0.85em;
    color: var(--jarvis-text-medium);
    margin-bottom: 10px;
}

.news-card .news-summary {
    font-size: 0.95em;
    line-height: 1.5;
    color: var(--jarvis-text-light);
    flex-grow: 1;
}

.news-card .read-more {
    margin-top: 15px;
    align-self: flex-start;
    color: var(--jarvis-neon-cyan);
    text-decoration: none;
    font-weight: bold;
    font-size: 0.9em;
    text-shadow: 0 0 5px rgba(0,240,255,0.5);
}

.news-card .read-more:hover {
    text-decoration: underline;
    color: var(--jarvis-electric-green);
}

/* Live Match Center Styles */
.live-match-center-section {
    grid-column: 1 / -1;
    position: relative;
    overflow: hidden; /* For scanline effect */
}

.live-match-center-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(255,0,0,0.1) 50%, rgba(0,0,0,0.1) 50%);
    background-size: 100% 3px; /* Thin scanlines */
    animation: scanline 5s linear infinite;
    pointer-events: none;
    z-index: 2; /* Above content, but below header/scoreboard if needed */
}

@keyframes scanline {
    0% { background-position: 0 0; }
    100% { background-position: 0 100%; }
}


@media (min-width: 768px) {
    .live-match-center-section {
        grid-column: 1 / 2;
        grid-row: 1 / 2; /* Occupy top-left on larger screens */
    }
    .match-fixtures-calendar-section {
        grid-column: 1 / 2;
        grid-row: 2 / 3; /* Below Live Match Center */
    }
    .news-section {
        grid-column: 1 / 2;
        grid-row: 3 / 4; /* Below Match Fixtures Calendar */
    }
}

.match-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px dashed var(--jarvis-border-light);
}

.match-header h3 {
    margin: 0;
    color: var(--jarvis-electric-green);
    font-size: 1.4em;
    text-shadow: 0 0 5px rgba(57,255,20,0.5);
}

.match-status {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 1.1em;
    color: var(--jarvis-red-alert); /* Red for LIVE */
    animation: blinkStatus 1s infinite step-end;
}

.scoreboard {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 25px;
    background-color: rgba(10, 15, 29, 0.9);
    border: 1px solid var(--jarvis-neon-cyan);
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0,240,255,0.4);
}

.team-display {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    min-width: 120px;
}

.team-display img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: contain;
    border: 1px solid var(--jarvis-electric-green);
    padding: 2px;
    box-shadow: 0 0 8px rgba(57,255,20,0.5);
}

.team-display .team-name {
    font-size: 1.1em;
    font-weight: bold;
    text-align: center;
    color: var(--jarvis-text-light);
}

.score {
    font-family: 'Orbitron', sans-serif;
    font-size: 2.5em;
    font-weight: bold;
    color: var(--jarvis-neon-cyan);
    min-width: 50px;
    text-align: center;
    text-shadow: 0 0 15px var(--jarvis-neon-cyan);
}

.match-events {
    margin-top: 20px;
    max-height: 300px;
    overflow-y: auto;
    background-color: rgba(10, 15, 29, 0.8);
    border: 1px solid var(--jarvis-border-light);
    border-radius: 8px;
    padding: 15px;
    box-shadow: inset 0 0 10px rgba(0,240,255,0.1);
}

.match-event-item {
    display: flex;
    margin-bottom: 10px;
    font-size: 0.95em;
    border-bottom: 1px dotted rgba(0,240,255,0.2);
    padding-bottom: 5px;
}
.match-event-item:last-child {
    border-bottom: none;
}

.event-time {
    font-weight: bold;
    color: var(--jarvis-electric-green);
    margin-right: 10px;
    min-width: 40px;
    text-shadow: 0 0 3px rgba(57,255,20,0.5);
}

.event-description {
    color: var(--jarvis-text-light);
}

/* Match Fixtures Calendar grid layout */
@media (min-width: 768px) {
    .match-fixtures-calendar-section {
        grid-column: 1 / 2; /* Place at top-left on larger screens */
        grid-row: 1 / 2;
    }
    .news-section {
        grid-column: 1 / 2;
        grid-row: 2 / 3; /* Below Match Fixtures Calendar */
    }
    .league-table-section {
        grid-column: 2 / 3;
        grid-row: 1 / 3; /* Occupy two rows to the right */
    }
    .top-scorers-section {
        grid-column: 1 / 2;
        grid-row: 3 / 4; /* Below news section */
    }
}

.filter-buttons {
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
}

.filter-button {
    background-color: rgba(0,240,255,0.1);
    color: var(--jarvis-neon-cyan);
    border: 1px solid var(--jarvis-neon-cyan);
    padding: 8px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    font-family: 'Share Tech Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.filter-button:hover {
    background-color: rgba(0,240,255,0.3);
    border-color: var(--jarvis-electric-green);
    box-shadow: 0 0 10px var(--jarvis-electric-green);
}

.filter-button.active {
    background-color: var(--jarvis-electric-green);
    border-color: var(--jarvis-electric-green);
    color: var(--jarvis-bg-deep);
    font-weight: bold;
    box-shadow: 0 0 15px var(--jarvis-electric-green);
    text-shadow: none;
}

.fixtures-calendar-list {
    margin-top: 15px;
}

.fixture-day {
    margin-bottom: 25px;
}

.fixture-day h3 {
    color: var(--jarvis-electric-green);
    margin-bottom: 15px;
    font-size: 1.3em;
    border-bottom: 1px dashed var(--jarvis-border-light);
    padding-bottom: 8px;
    text-shadow: 0 0 5px rgba(57,255,20,0.5);
}

.fixture-card {
    background-color: rgba(10, 15, 29, 0.8);
    border: 1px solid var(--jarvis-border-light);
    border-radius: 8px;
    padding: 12px 18px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
    box-shadow: 0 0 8px rgba(0,240,255,0.1);
    transition: all 0.2s ease;
}

.fixture-card:hover {
    border-color: var(--jarvis-neon-cyan);
    box-shadow: 0 0 15px rgba(0,240,255,0.3);
}

.fixture-card.premier-league-fixture {
    border-left: 5px solid var(--jarvis-electric-green);
}

.fixture-card.grassroots-fixture {
    border-left: 5px solid var(--jarvis-neon-cyan);
}

.fixture-teams {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-grow: 1;
    min-width: 250px; /* Ensure teams stay together */
}

.fixture-teams .team-info {
    display: flex;
    align-items: center;
    gap: 8px;
}

.fixture-teams .team-logo {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #333; /* Fallback for logos */
    object-fit: contain;
    border: 1px solid var(--jarvis-border-light);
}

.fixture-teams .team-name {
    font-weight: bold;
    white-space: nowrap;
    color: var(--jarvis-text-light);
}

.fixture-teams .vs {
    font-style: italic;
    color: var(--jarvis-text-medium);
    margin: 0 5px;
}

.fixture-details {
    text-align: right;
    flex-grow: 1;
    min-width: 150px;
}

.fixture-details .time-venue {
    font-size: 0.9em;
    color: var(--jarvis-text-medium);
    margin: 0;
}

.status-badge {
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.75em;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--jarvis-bg-deep);
    text-shadow: none;
}

.status-badge.upcoming {
    background-color: var(--jarvis-neon-cyan);
    box-shadow: 0 0 8px var(--jarvis-neon-cyan);
}

.status-badge.live {
    background-color: var(--jarvis-red-alert);
    box-shadow: 0 0 8px var(--jarvis-red-alert);
}

.status-badge.postponed {
    background-color: #FFC107; /* Amber */
    box-shadow: 0 0 8px #FFC107;
}

/* Stats Tables Specific Styles */
.table-container {
    overflow-x: auto; /* Ensure tables are scrollable on small screens */
    background-color: rgba(10, 15, 29, 0.8);
    border: 1px solid var(--jarvis-border-light);
    border-radius: 8px;
    padding: 10px;
    box-shadow: inset 0 0 10px rgba(0,240,255,0.1);
}

table {
    width: 100%;
    border-collapse: collapse;
    font-family: 'Share Tech Mono', monospace;
}

table thead tr {
    background-color: rgba(0,240,255,0.2);
    color: var(--jarvis-neon-cyan);
    text-transform: uppercase;
    font-size: 0.9em;
}

table th, table td {
    padding: 10px 15px;
    text-align: left;
    border-bottom: 1px solid rgba(0,240,255,0.1);
}

table th {
    font-weight: bold;
    color: var(--jarvis-electric-green);
    text-shadow: 0 0 5px rgba(57,255,20,0.3);
}

table tbody tr {
    transition: background-color 0.2s ease;
}

table tbody tr:nth-child(even) {
    background-color: rgba(0,240,255,0.05);
}

table tbody tr:hover {
    background-color: rgba(0,240,255,0.15);
    color: var(--jarvis-electric-green);
}

table td {
    color: var(--jarvis-text-light);
}

/* Specific styling for Rank and Goals for visibility */
table td:first-child, /* Rank */
table td:last-child { /* Goals */
    font-weight: bold;
    color: var(--jarvis-electric-green);
    text-shadow: 0 0 3px rgba(57,255,20,0.5);
}

"""

# Content for src/components/Navbar.js - Adding the status banner
new_navbar_js_content = """import React from 'react';

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="status-banner">SYSTEM STATUS: KPL TRACKER ACTIVE</div>
            <header className="header">
                <h1>Kenyan Premier League Dashboard</h1>
            </header>
        </div>
    );
}

export default Navbar;
"""

# Define file paths
app_css_path = 'src/App.css'
navbar_js_path = 'src/components/Navbar.js'

def apply_jarvis_theme():
    print(f"Applying Jarvis UI theme to {app_css_path} and {navbar_js_path}...")

    # Write to src/App.css
    try:
        with open(app_css_path, 'w') as f:
            f.write(new_app_css_content)
        print(f"Successfully wrote Jarvis CSS to {app_css_path}")
    except IOError as e:
        print(f"Error writing to {app_css_path}: {e}")

    # Write to src/components/Navbar.js
    try:
        with open(navbar_js_path, 'w') as f:
            f.write(new_navbar_js_content)
        print(f"Successfully modified {navbar_js_path}")
    except IOError as e:
        print(f"Error writing to {navbar_js_path}: {e}")

if __name__ == "__main__":
    apply_jarvis_theme()
