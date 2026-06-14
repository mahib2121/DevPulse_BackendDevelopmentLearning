# 🚀 Issue Tracker API

A scalable and secure **Issue Tracking REST API** built with **Express.js, TypeScript, and PostgreSQL**. The application provides user authentication, issue management, role-based access control, and a clean, modular architecture following modern backend development practices.

## ✨ Features

* 🔐 JWT-based User Authentication & Authorization
* 👥 Role-based Access Control (Admin & User)
* 📝 Create, Read, Update, and Delete (CRUD) operations for issues
* 🏷️ Issue status and priority management
* 🔍 Filter and search issues
* 🗄️ PostgreSQL database integration
* 📂 Modular MVC architecture
* ⚡ TypeScript for type safety and maintainability
* 🔒 Environment variable management with `.env`
* 📋 Request validation and centralized error handling
* 🧪 API testing using Postman
* 🚀 Production-ready deployment configuration

---

## 🛠️ Tech Stack

| Category                | Technologies                                          |
| ----------------------- | ----------------------------------------------------- |
| **Language**            | TypeScript                                            |
| **Runtime**             | Node.js                                               |
| **Framework**           | Express.js                                            |
| **Database**            | PostgreSQL                                            |
| **ORM / Query Builder** | pg 
| **Authentication**      | JSON Web Token (JWT), bcrypt                          |  |
| **Development Tools**   | Nodemon, tsup, Postman                                |
| **Version Control**     | Git & GitHub                                          |
| **Deployment**          | Vercel                   |

---

## 📁 Project Structure

```text
src/
├── config/         # Database and application configuration
├── middleware/     # Authentication & error handling middleware
├── modules/
│   ├── auth/       # Authentication module
│   ├── users/      # User management
│   └── issues/     # Issue CRUD operations
├── routes/         # API route definitions
├── utils/          # Helper functions
└── index.ts        # Application entry point
```

---

## 📌 API Endpoints

### Authentication

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| POST   | `/api/auth/register` | Register a new user   |
| POST   | `/api/auth/login`    | Login and receive JWT |

### Issues

| Method | Endpoint          | Description              |
| ------ | ----------------- | ------------------------ |
| POST   | `/api/issues`     | Create a new issue       |
| GET    | `/api/issues`     | Get all issues           |
| GET    | `/api/issues/:id` | Get issue by ID          |
| PATCH  | `/api/issues/:id` | Update an existing issue |
| DELETE | `/api/issues/:id` | Delete an issue          |

> **Note:** Protected routes require a valid JWT token in the `Authorization` header.

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mahib2121/DevPulse_BackendDevelopment
cd issue-tracker-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and add the following:

```env
PORT=5000

DATABASE_URL=your_postgresql_connection_string

JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=7d
```

### 4. Run the development server

```bash
npm run dev
```

The server will start at:

```text
http://localhost:5000
```

---

## 🗃️ Database Schema (Simplified)

### Users

* id
* name
* email
* password
* role
* created_at

### Issues

* id
* title
* description
* status
* priority
* reporter_id
* assignee_id
* created_at
* updated_at

---

## 🔒 Authentication Flow

1. User registers an account.
2. Password is securely hashed using `bcrypt`.
3. User logs in and receives a JWT access token.
4. Protected endpoints verify the JWT through authentication middleware.
5. Authorized users can create and manage issues based on their permissions.

---

## 📬 Testing the API

You can test all endpoints using:

* Postman
* Thunder Client
* Insomnia

Import the API collection or manually send requests with the required JWT token.

---

## 🎯 Learning Objectives

This project was built to strengthen practical knowledge of:

* RESTful API design
* TypeScript backend development
* PostgreSQL database integration
* Authentication and authorization
* Express middleware patterns
* Error handling and validation
* Clean code and modular architecture
* Git and collaborative development workflows

---

## 📸 Future Improvements

* [ ] Docker support
* [ ] Swagger/OpenAPI documentation
* [ ] Email notifications
* [ ] File attachment support
* [ ] Sentry integration for monitoring
* [ ] CI/CD pipeline with GitHub Actions
* [ ] Unit and integration tests

---

## 👨‍💻 Author

**Mahib Alam Khan**

* 💼 LinkedIn: https://linkedin.com/in/mahib-alam-khan
* 🌐 GitHub: https://github.com/mahib2121

If you found this project interesting, feel free to ⭐ the repository and connect with me!
