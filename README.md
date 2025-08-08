# Spotify Clone (Mini Version)

A simple mini Spotify clone system with the following core features:

- Add, retrieve, delete **songs**
- Add, retrieve, delete **albums**
- Upload and store **images + mp3 files** using **Cloudinary**

The project follows a monorepo architecture:

- `spotify-admin`: Admin dashboard  
- `spotify-client`: User interface for normal users  
- `spotify-server`: Backend API + Cloudinary integration

---

## Project Structure

```

root/
├── spotify-admin     → Admin dashboard (React / Vite)
├── spotify-client    → User interface (React / Vite)
├── spotify-server    → REST API server (Node.js / Express / MongoDB / Cloudinary)

````

---

## Core Features

### Songs

- Add song (`POST /add-song`)  
  Upload mp3 file to Cloudinary and store metadata + file URL in MongoDB.
- Get all songs (`GET /list-song`)
- Delete song (`DELETE /delete-song/:id`)  
  Delete file from Cloudinary and remove record from MongoDB.

### Albums

- Add album (`POST /add-album`)  
  Upload cover image to Cloudinary and store album metadata + image URL in MongoDB.
- Get all albums (`GET /list-album`)
- Delete album (`DELETE /delete-album/:id`)  
  Delete image from Cloudinary and remove record from MongoDB.

> Note: API routes may vary depending on your backend implementation.

---

## Cloudinary Integration

- Uses Cloudinary SDK to upload images and mp3 files.
- Returns secure URLs for storage in MongoDB.
- Offloads file storage from local server to improve performance and scalability.

---

## Installation

```bash
# Clone repository
git clone <repo-url>
cd <repo-folder>

# Backend
cd spotify-server
npm install
# Create .env file with required Cloudinary and MongoDB info
npm run dev

# User Client
cd ../spotify-client
npm install
npm run dev

# Admin Dashboard
cd ../spotify-admin
npm install
npm run dev
````

---

## Example .env (spotify-server)

```env
PORT=5000
MONGO_URI=
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## Tech Stack

* Frontend: React, Vite, Tailwind CSS
* Backend: Node.js, Express.js, MongoDB, Cloudinary
* File Storage: Cloudinary

---


---

## Notes

This project is for learning and demo purposes only:

* Basic or no authentication
* Not intended for production use

---

## Project Status

*To be updated manually if needed.*

---

## Screenshots

*Add screenshots of the UI here if desired.*

---

## Contributing

Feel free to fork, clone, and add new features.

Recommended future improvements:

* User authentication (login, register)
* Playlist management
* User profiles with avatar upload (via Cloudinary)

---

## Optional Badges

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)]()
[![MongoDB](https://img.shields.io/badge/MongoDB-%2317C516.svg?style=for-the-badge&logo=mongodb&logoColor=white)]()
[![Cloudinary](https://img.shields.io/badge/Cloudinary-activated-blue)]()
 

```
