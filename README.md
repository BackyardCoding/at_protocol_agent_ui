# 🤖 AT Protocol Agent UI

A web application built with React, TypeScript, Bun and Vite that interacts with the AT Protocol network through a simple and minimal user interface. This project extends the AT Protocol Basic Agent by adding a web UI on top of the core agent functionality. 🦋

## ✨ What it does

- 📰 Reads and displays your Bluesky timeline
- 👤 Views user profiles including follower and post counts
- 💬 Creates posts directly from the browser
- 🔗 Follows and unfollows users

## 🛠️ Tech Stack

- [Bun](https://bun.sh/) — Fast all-in-one JavaScript runtime
- [TypeScript](https://www.typescriptlang.org/) — Programming language
- [React](https://react.dev/) — UI component library
- [Vite](https://vitejs.dev/) — Frontend build tool
- [@atproto/api](https://www.npmjs.com/package/@atproto/api) — Official AT Protocol SDK

## 🏗️ Project Structure
```
at_protocol_ui/
├── src/
│   ├── components/
│   │   ├── Feed.tsx        ← displays your Bluesky timeline
│   │   ├── Profile.tsx     ← view and follow/unfollow users
│   │   └── CreatePost.tsx  ← create posts from the browser
│   ├── App.tsx             ← main app with navigation
│   └── main.tsx            ← entry point
├── server.ts               ← Bun backend server and AT Protocol agent
├── vite.config.ts          ← Vite configuration
├── index.html              ← single HTML entry point
└── .env                    ← your credentials (never commit this)
```

## 🚀 Getting Started

### Prerequisites

- Bun installed on your machine
- A Bluesky account
- A Bluesky App Password (Settings → Privacy and Security → App Passwords)

### Installation

Clone the repository:
```bash
git clone https://github.com/BackyardCoding/AT_protocol_ui.git
cd AT_protocol_ui
```

Install dependencies:
```bash
bun install
```

Create a `.env` file in the root of the project:
```bash
BLUESKY_IDENTIFIER="yourhandle.bsky.social"
BLUESKY_PASSWORD="your-app-password"
```

Run the app:
```bash
bun run dev
```

Then open your browser and go to `http://localhost:5173`

## ⚠️ Important

Never commit your `.env` file to GitHub. Make sure it is listed in your `.gitignore` before pushing your code.

## 🔗 Related Projects

- [AT Protocol Basic Agent](https://github.com/BackyardCoding/AT_protocol_basic_agent) — the command line agent this project is based on

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)