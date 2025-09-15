# 📒 Notes Vault

**Notes Vault** is a full-stack note-taking application that allows users to securely create, manage, and organize their notes. It provides authentication, tagging, and a clean modern UI powered by **React (Vite), TailwindCSS, Node.js, and MongoDB**.

---

## ✨ Features
- 🔐 **User Authentication** (JWT based login & signup)
- 📝 **Create, Edit, Delete Notes**
- 📌 **Pin Notes** for quick access
- 🏷️ **Tag Management** – Add and remove tags easily
- 🔍 **Search & Filter Notes**
- 🎨 **Responsive UI** with Tailwind CSS
- ☁️ **MERN Full-stack App** (MongoDB, Express, React, Node.js)

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React (Vite)
- 🎨 TailwindCSS
- 📡 Axios (API calls)

### Backend
- 🚀 Node.js + Express
- 📂 MongoDB (Mongoose ODM)
- 🔑 JWT Authentication & Middleware

---

## 📂 Project Structure
```
Notes-Vault/
│
├── Backend/               # Express + MongoDB backend
│   ├── controllers/       # Route controllers (auth, notes)
│   ├── models/            # Mongoose models (User, Note)
│   ├── routes/            # API routes
│   ├── utilities/         # Helpers (JWT, middleware, etc.)
│   ├── index.js           # Backend entry point
│   ├── package.json
│   └── .env.example
│
├── Frontend/Notes-Vault/  # React + Vite frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/        # Images & icons
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Login, Signup, Home, etc.
│   │   ├── utils/         # Axios instance, helpers
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🚀 Getting Started

### Clone the repository
```bash
git clone https://github.com/your-username/notes-vault.git
cd notes-vault
```

---

### Backend Setup
```bash
cd Backend
npm install
```

Create a `.env` file (copy `.env.example`) and add:
```
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=5000
```

Run the backend:
```bash
npm start
```
Your backend should now be running on `http://localhost:5000`.

---

### Frontend Setup
```bash
cd Frontend/Notes-Vault
npm install
```

Run the frontend:
```bash
npm run dev
```
Frontend will start on `http://localhost:5173`.

---

## 🌐 Deployment
- **Frontend** → Deploy on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)  
- **Backend** → Deploy on [Render](https://render.com/), [Railway](https://railway.app/), or [Heroku](https://www.heroku.com/)  

Make sure to update your frontend’s `axiosInstance.js` with the deployed backend URL.

---

## 📸 Screenshots
(Add your screenshots here, e.g.:)  
- Login Page  
- Dashboard  
- Note Editor  

---

## 🤝 Contributing
Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

---

## 📜 License
This project is licensed under the **MIT License**.

---

⚡ With **Notes Vault**, your thoughts and ideas are always safe and organized.
