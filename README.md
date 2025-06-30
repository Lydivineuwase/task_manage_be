# 📚 Study Task Tracker

A modern full-stack **Task Management Application** built to help users create, track, edit, and manage tasks efficiently.

---

## 🔧 Tech Stack

### 🚀 Backend
- **Node.js** + **Express**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **JWT Authentication**
- **Dockerized Environment**

### 💻 Frontend
- **React** (Vite)
- **Tailwind CSS**
- **Context API for Auth**
- **Axios for HTTP Requests**

---

## 📦 Features

✅ User Registration & Login  
✅ JWT-based Authentication  
✅ Create, Edit, Delete Tasks  
✅ View All Tasks  
✅ Secure API with Protected Routes  
✅ Responsive & Clean UI with Tailwind  
✅ Dockerized Setup for Local Development

---

## 📁 Project Structure

```
.
├── backend/
│   ├── prisma/             # Prisma schema and migrations
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── services/       # Database service logic
│   │   ├── routes/         # Express routers
│   │   ├── middlewares/    # Auth middlewares
│   │   └── server.ts       # App entry point
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── pages/          # Page components like Dashboard
│   │   ├── components/     # Reusable components (Modal, TaskItem)
│   │   ├── context/        # AuthContext
│   │   └── main.tsx
│   └── tailwind.config.js
│
├── docker-compose.yml
└── README.md
```

---

## 🐳 Getting Started with Docker

```bash
# Start both backend & frontend using Docker Compose
docker-compose up --build
```

You can also run backend & frontend separately for development:

```bash
# Backend
cd backend
npm install
npx prisma generate
npx prisma migrate dev
npm run dev

# Frontend
cd frontend
npm install
npm run dev
```

---

## 🔐 API Endpoints (Protected by JWT)

| Method | Endpoint                     | Description             |
|--------|------------------------------|-------------------------|
| POST   | `/api/auth/register`         | Register new user       |
| POST   | `/api/auth/login`            | Login existing user     |
| GET    | `/api/tasks`                 | Get all tasks           |
| POST   | `/api/tasks`                 | Create a new task       |
| PATCH  | `/api/tasks/:id`             | Update task by ID       |
| DELETE | `/api/tasks/:id`             | Delete task by ID       |

> Use `Authorization: Bearer <token>` header for all protected routes.

---
# task_manage_be
