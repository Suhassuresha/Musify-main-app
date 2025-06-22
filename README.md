## 🎵 Musify Main App (Micro Frontend Container)

This is the main container application for the **Musify** project, built using **React**, **Vite**, and **Module Federation**. It integrates a remote micro frontend (`music-library`) and supports **role-based access control** using in-memory JWT.

---

### 📦 Tech Stack

* React + Vite
* Tailwind CSS
* Module Federation via `@originjs/vite-plugin-federation`
* Context API for authentication
* Vercel for deployment

---

## 🔧 How to Run Locally

### 1️⃣ Clone Both Repositories

```bash
git clone https://github.com/Suhassuresha/Musify-main-app.git
git clone https://github.com/Suhassuresha/Musify-music-library.git
```

### 2️⃣ Install Dependencies

```bash
# In main-app
cd Musify-main-app
npm install

# In music-library
cd ../Musify-music-library
npm install
```

### 3️⃣ Start Both Apps

Make sure you start the **music-library** first so the remote is available:

```bash
# Start music-library (port 4174)
cd ../Musify-music-library
npm run dev

# In a new terminal, start main-app (port 5173)
cd ../Musify-main-app
npm run dev
```

---

## 🌐 Live Demo

* Main App (container): [https://musify-main-app.vercel.app](https://musify-main-app.vercel.app)
* Music Library (micro frontend): [https://musify-music-library.vercel.app](https://musify-music-library.vercel.app)

---

## 🔐 Demo Credentials

| Role  | Username | Description                     |
| ----- | -------- | ------------------------------- |
| Admin | `admin`  | Can add and delete songs        |
| User  | `user`   | Can only view, filter, and sort |

Login by selecting role in the UI (no password required).

---

## 🧹 Micro Frontend Architecture

This project uses **Module Federation** to dynamically load the music library micro frontend:

* `main-app` is the **host** container.
* `music-library` is the **remote** exposed at:

```js
remotes: {
  music_library: 'https://musify-music-library.vercel.app/assets/remoteEntry.js',
}
```

The `music-library` app exposes its React component, which is rendered inside the host app.

---

## 🛡️ Role-Based Authentication

* **In-memory JWT** is simulated using `localStorage` + React Context.
* Two roles are supported:

  * `admin`: Can **add** and **delete** songs.
  * `user`: Can **view**, **filter**, and **sort** only.
* The `AuthContext` is **exposed by the main-app** and imported into the remote micro frontend using Module Federation.

---

## 🚀 How It Was Deployed

Both apps were deployed to **Vercel**:

1. Create GitHub repos: one for `main-app`, one for `music-library`.
2. Connect both to Vercel separately.
3. Ensure the **remoteEntry.js URL** from music-library is used in main-app:

```js
remotes: {
  music_library: 'https://musify-music-library.vercel.app/assets/remoteEntry.js',
}
```

---
