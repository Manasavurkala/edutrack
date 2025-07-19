# EduTrack - Student Management System

## 📌 Overview
EduTrack is a backend system to manage students, courses, grades, and reports in a university setup. It supports role-based access for students, faculty, and admins.

## 🧰 Tech Stack
- Node.js + Express.js
- MySQL (normalized schema)
- JWT for authentication
- Swagger for documentation
- Postman Client for testing

## ⚙️ How to Run
1. Clone the repo
2. `npm install`
3. Add `.env` file
4. `npm run dev`

## 🔐 API Endpoints
- POST `/api/users/register` - Register a user
- POST `/api/users/login` - Login
- POST `/api/courses/create` - Add a course (faculty/admin)
...

## 🗃️ Database Schema
- `users(id, name, email, password, role, department)`
- `courses(id, name, code, faculty_id)`
...

## 🧪 Testing
Use Postman with JSON body and token headers.
