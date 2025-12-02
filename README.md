
# SakaJobo — Full-Stack Job Posting Platform

SakaJobo is a full-stack application built with a **Node.js/Express backend** and a **React + Vite frontend**, allowing users to create accounts, authenticate, manage job posts, and update profiles.

---

## 🚀 Features
- User authentication (signup, login, token-based auth)
- Protected routes using JWT
- Job posting creation, retrieval, and management
- User profile page and `/me` endpoint
- Admin portal (conditional redirect based on credentials)
- Responsive frontend built with React + TailwindCSS

---

## 🛠️ Tech Stack
### Frontend
- React (Vite)
- TypeScript
- TailwindCSS
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT for authentication
- CORS configured for production

### Deployment
- Render (Backend and Frontend)

---

## 📁 Project Structure
```
root/
│
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
|   ├── package.json
│   └── .env
│
└── frontend/
    ├── src/
    ├── public/
    ├── vite.config.ts
    ├── package.json
    └── .env
```

---
## 🚀 Project Setup
Copy and paste the following commands in order to the terminal if you are new to this

## 📝 Requirements
Before running this project, make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)
- A MongoDB database (Atlas or local)

> **Note:** Node.js is required to run both the backend and frontend. Without it, the application will not start.

---

### Clone the repo
```bash
git clone https://github.com/victorMK-sys/JobHub-Youth.git
```

## ⚙️ Backend Setup
### 1. Install dependencies
```bash
cd backend
npm install
```

### 2. Create a `.env` file
You need a conection string to mongodb ([MongoDB Atlas](https://www.mongodb.com/resources/products/fundamentals/mongodb-connection-string)).
```
PORT=5500
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 3. Run the backend
```bash
npm run dev
```

---

## 🎨 Frontend Setup
### 1. Install dependencies
```bash
cd frontend
npm install
```

### 2. Create a `.env` file
```
VITE_APP_URL=your_backend_url
VITE_ADMIN=your_admin_keyword
```

### 3. Run the frontend
```bash
npm run dev
```

---

## 🔐 Authentication Flow
1. User signs in → server returns a JWT
2. Token is stored in `localStorage`
3. Protected routes require the `Authorization: Bearer <token>` header
4. `/api/users/me` fetches the authenticated user's profile

---

## 📡 API Routes Summary
### Auth Routes
```
POST /api/auth  → Login
POST /api/users → Signup
```

### User Routes
```
GET /api/users/me → Get logged-in user
DELETE /api/users/me → Delete user account
```

### Job Routes
```
GET /api/jobs        → Get all jobs
POST /api/jobs       → Create job
GET /api/jobs/:id    → Get single job
DELETE /api/jobs/:id → Delete job
```

---

## 🧪 Testing
- Use ThunderClient / Postman for backend testing
- Ensure your Authorization header is included when testing protected routes

---

The project is also live at [SakaJobo](https://jobhub-youth-web.onrender.com/).
