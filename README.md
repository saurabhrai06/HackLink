# 🚀 HackLink

**HackLink** is an all‑in‑one portal that makes discovering and joining hackathons in India effortless.  
It features a modern UI, built‑in chatbot assistance, and secure user authentication so you can track events, save favourites, and chat with the assistant about dates, rules, or team‑forming tips.

---

## ✨ Key Features

| Category | Highlights |
|----------|------------|
| 🔎  **Hackathon Finder** | Search & filter upcoming Indian hackathons by city, theme, date, or prize pool |
| 🤖 **AI Chatbot** | Quick Q&A on event details, registration steps, travel tips, etc. |
| 🔐 **Auth System** | Sign‑up / login with hashed passwords & JWT‑based sessions |
| 🎨 **Clean UI** | Responsive layout, dark/light theme toggle, subtle animations |
| 🗂️ **Saved List** | Bookmark events and view them on a personalised dashboard |
| 📈 **Stats** | Live counts of total events, open seats, prize money, and more |

---

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| **Front‑end** | HTML5, CSS3 (custom + Tailwind utility layer), Vanilla JS |
| **Back‑end** | Python 3 (Flask / FastAPI*) |
| **Database** | SQLite (dev) → Postgres/MySQL (production) |
| **Auth** | JWT tokens, bcrypt hashing |
| **Chatbot** | OpenAI API wrapper (Python) |
| **Deployment** | Render / Railway (backend) + GitHub Pages (static front) |

> \* Replace Flask / FastAPI with whichever framework you actually used.

---

## 📸 Screenshots

> _Add real images or GIFs once deployed._

| Home Page | Chatbot | Dashboard |
|-----------|---------|-----------|
| ![Home](screens/home.png) | ![Bot](screens/bot.png) | ![Dash](screens/dash.png) |

---

## 🚀 Quick Start (Local)

### 1 . Clone + enter project

```bash
git clone https://github.com/saurabhrai06/HackLink.git
cd HackLink
