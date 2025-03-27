# 🏗 bloom · Architecture

This document outlines the planned technical architecture for `bloom` — our cozy, gamified life OS.
We aim for **modularity**, **clarity**, and **cozy-first design** in both code and structure.

---

## 🧠 Project Philosophy

- **Modular by design**: One module = one concern
- **Shared types/interfaces** across client and server
- **Clean file trees**: no clutter, no chaos
- **Pixel-light, dopamine-tight**: performance-focused, low-dependency where possible
- **Zero config anxiety**: no scary monoliths, just soft separation of powers

---

## 🌿 Tech Stack Overview

| Layer    | Stack                               |
| -------- | ----------------------------------- |
| Frontend | React + Vite + TypeScript           |
| Backend  | Node.js + Express + TypeScript      |
| Game     | Phaser                              |
| Database | MariaDB                             |
| Styling  | SASS                                |
| Extras   | Howler.js (audio), SendGrid (email) |

---

## 🏠 Folder Structure

```
bloom/
├── client/ # Frontend code (Vite + React + TypeScript)
│   └── src/
│       ├── pages/			# Page views (Planner, Mood, Food, etc.)
│       ├── components/		# Reusable UI components
│       ├── assets/			# Pixel art, fonts, sounds, music
│       ├── styles/			# SASS themes, layout, variables
│       ├── game/			# Game logic (XP engine, animations, character sim)
│       └── main.tsx		# Vite entrypoint
├── server/					# Backend (Express + TS)
│   └── src/
│       ├── routes/			# API route handlers
│       ├── controllers/	# Core logic for planner, pets, etc.
│       ├── models/			# DB models (User, Task, Reward, etc.)
│       ├── middleware/		# Auth, rate limiting, validation
│       └── utils/			# XP logic, scheduler, parser utils
├── shared/					# Types/interfaces for both client/server
│   └── types.ts
├── docs/					# This documentation folder 💖
├── public/					# Static assets
└── README.md				# Main project info
```

---

## 🔁 Core Principles

- **No God files** — every concern gets its own space
- **Reusable UI patterns** — cozy, clean, lightweight
- **Clear logic boundaries** between data, view, and interaction
- **Shared Types = no duplicate logic pain**
- **Strict linting** + readable, comment-loving code

---

## 📦 Modules Overview

We’ll split modules across both front and back. Examples:
- `/planner` (tasks, calendar, pomodoro)
- `/habits`
- `/mood`
- `/food`
- `/xp` (XP, rewards, streaks)
- `/game` (animation, loop, dungeons, pets)
- `/radio` (player, presets, audio logic)

Each module will follow the same pattern:
- `route` → `controller` → `model` → `utils`
- paired with frontend components and types

---

## 🎯 Core Structure Decisions

- 🕹️ Game Engine: **Phaser**
  - Ideal for our pixel-based interactions and daily character sim engine
- 🎨 Layout Framework: **SASS + CSS Grid**
  - Clean, grid-based layout
- 🎭 Avatar System: Modular parts for customization (hair, outfit, expressions)
- 🌸 Seasonal Content: Organized in `/themes/season-name/` folders for items, visuals, events

---

## ✨ Soft Architecture Manifesto

> No overengineering.
> No messy sprawl.
> Code should feel like a clean desk with coffee, not a stress ball. ☕🧠

---

## 💖 Built with calm intention by Nolly’s Cafe
