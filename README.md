# 🎥 Monte Movies - Movie Tracking Application

Monte Movies is a simple, frontend-only movie tracking application built with Next.js. The app allows users to search for movies, view movie details, and track their favorite films using data from the IMDB API. This project demonstrates how to build a dynamic movie app with Next.js and fetch data from a third-party API without using a backend.

## 🚨 Project Status: Archived

**Note:** I have moved on from working on Monte Movies and am now actively developing a more advanced movie tracking app called [MMM…Movies](https://github.com/YonteMoon/mmm-movies), which includes user authentication, a watchlist, favorites, and a rating system. Feel free to explore the Monte Movies code, but no further updates will be made to this repository.

## 📖 Table of Contents

- [🎥 Monte Movies - Movie Tracking Application](#-monte-movies---movie-tracking-application)
  - [🚨 Project Status: Archived](#-project-status-archived)
  - [📖 Table of Contents](#-table-of-contents)
  - [🌟 Features](#-features)
  - [🛠 Technologies Used](#-technologies-used)
  - [⚙️ Installation](#️-installation)
  - [Environmental Variables](#environmental-variables)

## 🌟 Features

- 🔍 Search Movies: Search for movies using the IMDB API.
- 📄 Movie Details: View detailed information about each movie, including title, synopsis, rating, and more.
- ⭐ Favorites List: Mark movies as favorites to track them.
- 💻 Frontend-only: The app runs entirely on the client side, with no backend services.

## 🛠 Technologies Used

- Next.js
- Typescript
- Next-Auth
- TMDB API
- Tailwind CSS

## ⚙️ Installation

To install and run this project locally, follow these steps:

1. Clone the Repository:

```bash
git clone https://github.com/Yontemoon/movie-nextjs.git
cd movie-nextjs
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to:

```bash
http://localhost:3000
```

## Environmental Variables

```bash
NEXT_PUBLIC_API_KEY=(tmdb-api-key)
```

Replace "tmdb-api-key" with your actually TMDb api key.
More information at https://developer.themoviedb.org/docs/getting-started
