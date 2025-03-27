# 📻 bloom · Radio & Noise System

This doc outlines the cozy sound system of `bloom`, including built-in radio channels, custom ambient sound mixers, noise options, and how they integrate into the user experience.

---

## 🌈 Purpose

- Create **safe, immersive audio spaces** to help users focus, calm down, or vibe out
- Reduce need to switch between bloom and YouTube/Spotify
- Connect sound to rituals, mood, and productivity

---

## 🎧 Feature Breakdown

### 1. Built-in Radio Channels

| Name           | Style                                         |
| -------------- | --------------------------------------------- |
| ☕ Cafécore    | Lo-fi, background café chatter, gentle piano  |
| 🌧 Rainy Days  | Rainfall, light thunder, window ambiance      |
| 🛏 Slowwake    | Dreamy synths, soft piano, gentle transitions |
| 🔥 Cozy Fire   | Fireplace, vinyl crackle, deep cello          |
| 💡 Focus Boost | Minimal ambient beats, theta soundscapes      |
| 🌸 Soft Bloom  | Harp, nature sounds, flute, bird chirps       |

- Each channel has:
  - Title, description, icon
  - Looping or continuous stream
  - Play/pause + volume control
  - Optional autoplay on startup

---

### 2. Noise Lounge 🎛️

A custom ambient mixer where users can blend individual sound layers.

#### 🎚️ Available Layers
| Category   | Options                                           |
| ---------- | ------------------------------------------------- |
| Weather    | Rain, thunder, wind, snow, storm                  |
| Nature     | Forest, birds, river, leaves, beach               |
| Indoors    | Fireplace, keyboard typing, writing, café murmur  |
| Abstract   | White noise, pink noise, brown noise, ASMR static |
| Mechanical | Train rumble, airplane cabin, fan, AC hum         |

#### ✨ Mixer Features
- Up to 4 layers active at once
- Independent volume sliders
- Save + load custom presets (e.g., “Rainy Study”, “Café Chill”)
- Pin a mixer to task mode or Pomodoro

---

### 🔊 Audio Tech & Integration

| Feature              | Tool                               |
| -------------------- | ---------------------------------- |
| Playback engine      | `howler.js`                        |
| Audio file format    | `.mp3` or `.ogg`                   |
| Volume persistence   | LocalStorage/session               |
| Live stream fallback | External radio link (e.g. Icecast) |

---

### 🧠 Interactions & Triggers

| Trigger                          | Behavior                                                |
| -------------------------------- | ------------------------------------------------------- |
| Starting Pomodoro                | Starts selected focus track                             |
| Morning ritual start             | Autoplays preferred ritual preset                       |
| Logging a mood                   | Suggests sound based on emotion (e.g. sad = soft bloom) |
| Entering planner or dungeon mode | Activates “focus channel” or dungeon mix                |
| Petting your pixel pet           | Soft sound reward (meow, chirp, purr, etc.)             |

---

### 🛋 UI Placement

| Context           | Access                            |
| ----------------- | --------------------------------- |
| Global footer bar | Persistent play/pause + icon      |
| Full Radio Panel  | From nav or via task page         |
| Mini Mixer        | Pop-out on Pomodoro or mood pages |

---

## 💖 Future Additions

- 🎙️ User-uploaded audio (optional, sandboxed)
- 🗓 Time-based auto playlists (morning, focus, wind-down)
- 🔁 Loopable rituals with sound cues
- 🎵 Seasonal sound packs (e.g., snowstorm + music box in winter)

---

## ✨ Soft Sound Philosophy

> “We don’t just want to make things louder or quieter —
> We want to make life feel *softer* through sound.” 🎧🌿

---

## 🛠 Audio Credits (TBD)

- Custom tracks will be composed + licensed via open or commissioned audio
- Public domain sounds for non-commercial layering
- Users can toggle sound attribution in settings
