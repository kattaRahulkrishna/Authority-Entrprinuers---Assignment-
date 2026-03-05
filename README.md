# Authority Entrepreneurs - Login Application

A full-stack login application built with **React** (frontend) and **Node.js/Express** (backend).

## Features

- Login page with username and password fields
- Backend API (`POST /login`) with credential validation
- Successful login redirects to a Welcome page
- Error messages for incorrect credentials
- "Remember username" for subsequent logins
- Show/hide password toggle
- Loading state with spinner
- Responsive design (mobile-friendly)
- Route protection on Welcome page

## Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | React 18, Vite, React Router v6, Axios |
| Backend  | Node.js, Express, CORS            |
| Styling  | Vanilla CSS (custom design system) |

## Project Structure

```
login-app/
├── backend/
│   ├── server.js           # Express API server (port 5000)
│   ├── package.json
│   └── .gitignore
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx   # Login form component
│   │   │   └── Welcome.jsx # Welcome page component
│   │   ├── App.jsx         # React Router setup
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Styles
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Installation & Running

**1. Clone the repository**

```bash
git clone https://github.com/kattaRahulkrishna/Authority-Entrprinuers---Assignment-.git
cd Authority-Entrprinuers---Assignment-
```

**2. Start the Backend**

```bash
cd backend
npm install
node server.js
```

Server runs on `http://localhost:5000`

**3. Start the Frontend**

```bash
cd frontend
npm install
npm run dev
```

App opens at `http://localhost:3000`

## API Reference

### POST `/login`

**Request Body:**
```json
{
  "username": "admin",
  "password": "admin"
}
```

**Responses:**

| Status | Body | Condition |
|--------|------|-----------|
| `200`  | `{ "message": "Login successful", "username": "admin" }` | Valid credentials |
| `401`  | `{ "message": "Invalid username or password" }` | Invalid credentials |
| `400`  | `{ "message": "Username and password are required" }` | Missing fields |

## Demo Credentials

| Username | Password |
|----------|----------|
| `admin`  | `admin`  |

## Deployment

### Backend → Render

- **Root Directory:** `backend`
- **Build Command:** `npm install`
- **Start Command:** `node server.js`

### Frontend → Netlify

- **Base Directory:** `frontend`
- **Build Command:** `npm run build`
- **Publish Directory:** `frontend/dist`

> **Note:** After deploying the backend, update `API_URL` in `frontend/src/pages/Login.jsx` to your Render URL.

## Live Links

- **Frontend (Netlify):** _[Add after deployment]_
- **Backend (Render):** _[Add after deployment]_
