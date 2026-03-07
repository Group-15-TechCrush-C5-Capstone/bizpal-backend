# 🖥️ BizPad API

> REST API server for BizPad CRM — Built by Group 15, TechCrush Cohort 5.

---

## 📖 About

BizPad is a simple CRM built for Nigerian small businesses. This repo contains the backend API that powers both the web and mobile apps.

---

## 👥 Team Members

| Name | GitHub Username | Role |
|------|----------------|------|
|  |  | Backend Lead |
|  |  | Backend Developer |
|  |  | Backend Developer |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| Node.js | Runtime |
| Express.js | Web framework |
| MySQL | Database |
| MySQL2 | Database driver |
| JWT | Authentication |
| bcrypt | Password hashing |
| express-validator | Input validation |

---

## 📁 Folder Structure
```
bizpad-api/
├── src/
│   ├── config/         # Database connection
│   ├── middleware/     # Auth, role, error handlers
│   ├── models/         # Raw SQL query functions
│   ├── modules/
│   │   ├── auth/       # Register, login, JWT
│   │   ├── customers/  # Customer CRUD
│   │   ├── leads/      # Lead pipeline
│   │   ├── notes/      # Notes + reminders
│   │   └── dashboard/  # Aggregated stats
│   ├── uploads/
│   ├── utils/
│   └── app.js
├── scripts/
│   └── seed.js
├── .env.example
├── .gitignore
└── README.md
```

---

## ⚙️ Setup

### 1. Clone the repo
```bash
git clone https://github.com/Group-15-TechCrush-C5-Capstone/bizpad-api.git
cd bizpad-api
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
```bash
cp .env.example .env
```

Fill in your `.env`:
```
DB_HOST=localhost
DB_PORT=3306
DB_NAME=bizpad
DB_USER=root
DB_PASSWORD=your_password
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
PORT=5000
NODE_ENV=development
```

### 4. Create the database
```bash
# Open MySQL and run
CREATE DATABASE bizpad;
```

### 5. Run migrations
```bash
mysql -u root -p bizpad < mysql/migrations/001_create_users.sql
mysql -u root -p bizpad < mysql/migrations/002_create_customers.sql
mysql -u root -p bizpad < mysql/migrations/003_create_leads.sql
mysql -u root -p bizpad < mysql/migrations/004_create_notes.sql
```

### 6. Start the server
```bash
npm run dev
```

Server runs at: `http://localhost:5000`

---

## 🌐 API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/auth/register` | Register new user |
| POST | `/api/v1/auth/login` | Login + get JWT token |

### Customers
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/customers` | Get all customers |
| POST | `/api/v1/customers` | Add new customer |
| PUT | `/api/v1/customers/:id` | Update customer |
| DELETE | `/api/v1/customers/:id` | Delete customer |

### Leads
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/leads` | Get all leads |
| POST | `/api/v1/leads` | Add new lead |
| PATCH | `/api/v1/leads/:id/status` | Update lead status |

### Notes
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/notes` | Get all notes |
| POST | `/api/v1/notes` | Add new note |
| DELETE | `/api/v1/notes/:id` | Delete note |

### Dashboard
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/dashboard/stats` | Get dashboard stats |

---

## 🔀 Branching Rules

| Branch | Purpose |
|--------|---------|
| `main` | Stable — team lead only |
| `dev` | Integration — everyone merges here |
| `feat/*` | Feature branches e.g. `feat/auth` |

### Daily Workflow
```bash
# 1. Always start from dev
git checkout dev
git pull origin dev

# 2. Create your feature branch
git checkout -b feat/your-feature

# 3. Do your work

# 4. Push and raise PR to dev
git add .
git commit -m "feat: description"
git push origin feat/your-feature
```

---

## 🚫 Rules

- ❌ Never push directly to `main`
- ❌ Never commit `.env` file
- ✅ Always test with Postman before raising a PR
- ✅ All responses must follow `{ success, message, data }` format

---

## 📋 PR Checklist

- [ ] API returns `{ success, message, data }` format
- [ ] Validation added for all inputs
- [ ] Tested with Postman
- [ ] No `.env` file committed
- [ ] No console.log left in code

---

*BizPad API — Group 15 · TechCrush Cohort 5 · March 2026*
