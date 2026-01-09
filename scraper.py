import requests
from bs4 import BeautifulSoup
import json
import os

def get_data():
    # 🧠 This makes the robot look like a real human browser
    headers = {
        'User-Agent': (
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
            'AppleWebKit/537.36 (KHTML, like Gecko) '
            'Chrome/120.0.0.0 Safari/537.36'
        )
    }

    table_url = "https://www.transfermarkt.com/kenyan-premier-league/tabelle/wettbewerb/KEN1"

    try:
        response = requests.get(table_url, headers=headers, timeout=10)

        # 🚫 If blocked
        if response.status_code != 200:
            print(f"Blocked by website! Status code: {response.status_code}")
            return [], []

        soup = BeautifulSoup(response.content, 'html.parser')

        # 🔍 Find table container
        table_div = soup.find("div", class_="responsive-table")
        if not table_div:
            print("Table container not found. Site layout may have changed.")
            return [], []

        table = table_div.find("table", class_="items")
        if not table:
            print("Table not found inside container.")
            return [], []

        standings = []
        rows = table.find_all("tr")[1:]  # skip header row

        for row in rows:
            cols = row.find_all("td")
            if len(cols) > 9:
                standings.append({
                    "pos": cols[0].text.strip(),
                    "team": cols[2].text.strip(),
                    "played": cols[3].text.strip(),
                    "gd": cols[8].text.strip(),
                    "pts": cols[9].text.strip()
                })

        # 🧪 Sample players (safe fallback)
        players = [
            {
                "name": "Benson Omala",
                "team": "Gor Mahia",
                "market_value": "€150k",
                "role": "Striker",
                "history": [{"club": "Gor Mahia"}]
            },
            {
                "name": "Austin Odhiambo",
                "team": "Gor Mahia",
                "market_value": "€125k",
                "role": "Midfielder",
                "history": [{"club": "Gor Mahia"}]
            }
        ]

        return standings, players

    except Exception as e:
        print(f"An error occurred: {e}")
        return [], []


# 📁 Ensure data folder exists
if not os.path.exists("data"):
    os.makedirs("data")

standings, players = get_data()

# 💾 Save only if data exists
if standings:
    with open("data/standings.json", "w", encoding="utf-8") as f:
        json.dump(standings, f, indent=2, ensure_ascii=False)

    with open("data/players.json", "w", encoding="utf-8") as f:
        json.dump(players, f, indent=2, ensure_ascii=False)

    print("✅ Success! JSON files updated.")
else:
    print("⚠️ No data saved.")
