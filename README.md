# 🤖 AT Protocol Basic Agent

A command-line agent built with TypeScript and Bun that interacts with the AT Protocol network. This project explores the core functionality of AT Protocol by connecting directly to Bluesky Social. 🦋

## ✨ What it does

- 📰 Reads and displays your Bluesky timeline
- 👤 Views user profiles including follower and post counts
- 💬 Creates posts directly from the terminal
- 🔗 Follows and unfollows users

## 🛠️ Tech Stack

- [Bun](https://bun.sh/) — Fast all-in-one JavaScript runtime
- [TypeScript](https://www.typescriptlang.org/) — Programming language
- [@atproto/api](https://www.npmjs.com/package/@atproto/api) — Official AT Protocol SDK

## 🚀 Getting Started

### Prerequisites

- Bun installed on your machine
- A Bluesky account
- A Bluesky App Password (Settings → Privacy and Security → App Passwords)

### Installation

Clone the repository:
```bash
git clone https://github.com/yourusername/atprotocol-basic-agent.git
cd atprotocol-basic-agent
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

Run the agent:
```bash
bun run index.ts
```

## ⚠️ Important

Never commit your `.env` file to GitHub. Make sure it is listed in your `.gitignore` before pushing your code.

## 📄 License

MIT