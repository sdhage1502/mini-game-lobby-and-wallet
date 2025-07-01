# 🕹️ Mini Game Lobby & Wallet Module

This is a **responsive social gaming module** built with Next.js (App Router) and JavaScript. It simulates a mini game lobby with wallet-based coin management and a basic transaction system — part of a social app featuring games, 1:1 audio calls, and gamification.

---

## 🚀 Features

- 🎮 Game lobby with mock games
- 💰 Wallet system with coin balance and recharge
- 🧾 Transaction history (mocked)
- 📱 Fully responsive (mobile-first) layout
- ⚙️ Clean and modular component structure

---

## 🧑‍💻 Tech Stack Used

| Tech           | Purpose                                 |
|----------------|------------------------------------------|
| **Next.js**    | React framework with App Router (v13+)   |
| **Tailwind CSS** | Utility-first responsive styling        |
| **JavaScript** | Programming language (no TypeScript)     |
| **Node.js**    | For mock API routes                      |
| **Mock APIs**  | Handled using Next.js API routes         |

---

## 📁 Folder Structure

```
📦 mini-game-lobby/
├── app/
│   ├── page.jsx              // Main Lobby page
│   ├── game/[id]/page.jsx    // Dummy game screen
│   └── api/
│       ├── games/route.js    // Mock game list API
│       └── wallet/route.js   // Wallet operations API
├── components/
│   ├── GameCard.jsx
│   ├── Wallet.jsx
│   └── TransactionList.jsx
├── public/
│   └── favicon.ico
├── styles/
│   └── globals.css
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── package.json
```

---

## 🛠️ How to Run the Project Locally

> 📦 Prerequisites:
- Node.js ≥ 18
- Git

---

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mini-game-lobby.git
cd mini-game-lobby
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app in your browser.

---


## 📌 Future Improvements

- Firebase Auth integration
- Multiplayer matchmaking
- Real-time player counts
- QR-based coin recharge

---

