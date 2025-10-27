
# Spotify Clone (Mini Version)
A **mini Spotify clone** built using **Node.js**, **React**, and **MongoDB**, featuring Cloudinary integration for media storage.  
This project demonstrates how to build a simplified full-stack music app that supports uploading, managing, and playing songs and albums.
---
## Overview
This project is split into three main parts (monorepo structure):

```
root/
├── spotify-admin     → Admin Dashboard (React / Vite)
├── spotify-client    → User Interface (React / Vite)
└── spotify-server    → Backend API (Node.js / Express / MongoDB / Cloudinary)
````
---
## Features
### 🎵 Songs
-  **Add Song** (`POST /add-song`)
  - Uploads `.mp3` file and song image to **Cloudinary**
  - Stores metadata + URLs in MongoDB  
-  **Get All Songs** (`GET /list-song`)
-  **Delete Song** (`DELETE /delete-song/:id`)
  - Removes both Cloudinary files and DB record

###  Albums
-  **Add Album** (`POST /add-album`)
  - Uploads album cover to **Cloudinary**
  - Stores album metadata + image URL in MongoDB  
-  **Get All Albums** (`GET /list-album`)
-  **Get Album By ID** (`GET /album/:id`)
  - Returns full album info + song list
-  **Delete Album** (`DELETE /delete-album/:id`)
  - Deletes image from Cloudinary and DB record

---

##  Cloudinary Integration

- Handles **image** and **audio** uploads (MP3)
- Returns **secure file URLs** for playback and display
- Keeps the backend lightweight — no local storage needed

---

##  Installation & Setup

### 1️ Clone repository

```bash
git clone <repo-url>
cd <repo-folder>
````

### 2️ Setup Backend (`spotify-server`)

```bash
cd spotify-server
npm install
```

Create a `.env` file in the `spotify-server` folder:

```env
PORT=5000
MONGO_URI=mongodb+srv://your_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the backend server:

```bash
npm run dev
```

### 3️ Setup User Client (`spotify-client`)

```bash
cd ../spotify-client
npm install
npm run dev
```

### 4️ Setup Admin Dashboard (`spotify-admin`)

```bash
cd ../spotify-admin
npm install
npm run dev
```

---
##  Tech Stack

| Layer                | Technology                |
| -------------------- | ------------------------- |
| **Frontend**         | React, Vite, Tailwind CSS |
| **Backend**          | Node.js, Express.js       |
| **Database**         | MongoDB (Mongoose)        |
| **File Storage**     | Cloudinary                |
| **State Management** | React Context API         |
| **HTTP Client**      | Axios                     |
---

##  API Endpoints

| Method   | Endpoint                | Description                  |
| -------- | ----------------------- | ---------------------------- |
| `POST`   | `/api/add-song`         | Add new song                 |
| `GET`    | `/api/list-song`        | Get all songs                |
| `DELETE` | `/api/delete-song/:id`  | Delete a song                |
| `POST`   | `/api/add-album`        | Add new album                |
| `GET`    | `/api/list-album`       | Get all albums               |
| `GET`    | `/api/album/:id`        | Get album by ID (with songs) |
| `DELETE` | `/api/delete-album/:id` | Delete an album              |
---

##  Example JSON Response

###  Successful Song Fetch
```json
{
  "success": true,
  "message": "Get songs success",
  "data": [
    {
      "_id": "671f3f8a...",
      "name": "Night Sky",
      "file": "https://res.cloudinary.com/.../audio.mp3",
      "image": "https://res.cloudinary.com/.../cover.jpg",
      "duration": "3:42"
    }
  ]
}
```
---

##  Project Notes

* No authentication implemented (for simplicity)
* Designed for **demo and learning purposes**
* All files are uploaded to Cloudinary, not stored locally
* Album–Song relationship handled via MongoDB references
---

##  Future Improvements

*  User authentication (Login, Register)
*  Playlist management
*  User profile system (with avatar via Cloudinary)
*  Real-time streaming optimization
*  Comments and likes per song
---

##  Screenshots (Optional)

> *(Add your screenshots here once UI is ready)*

---

##  Contributing

Feel free to fork and improve. Pull requests are welcome.

**Recommended Guidelines:**
* Follow ESLint & Prettier formatting
* Keep component naming consistent
* Use environment variables for all secrets
---

##  Badges
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)]()
[![MongoDB](https://img.shields.io/badge/MongoDB-%2317C516.svg?style=for-the-badge\&logo=mongodb\&logoColor=white)]()
[![Cloudinary](https://img.shields.io/badge/Cloudinary-active-blue)]()
[![React](https://img.shields.io/badge/React-18.x-61dafb)]()

---

##  Project Status
> **Status:** In Progress
> **Last Updated:** October 2025

---

**Made with ❤️ by Bẻn**
Nhiều dev thích có phần đó trong README để up production dễ hơn.
```
