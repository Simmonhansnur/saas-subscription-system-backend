# SaaS Subscription System – Backend

A **production-style backend system** for managing SaaS subscriptions, users, plans, billing lifecycle, and access control. This project is designed with **placement & interview readiness** in mind, following clean architecture, RESTful principles, and real-world backend practices.

---

## 🚀 Project Overview

This backend powers a **subscription-based SaaS platform**, handling everything from user onboarding to plan management and subscription lifecycle tracking. It is structured to be **scalable, maintainable, and easy to extend**.

The project demonstrates:

* Real-world backend architecture
* Clean separation of concerns
* Industry-standard API design
* Practical SaaS business logic

---

## 🧩 Core Features

### 👤 User Management

* User registration & authentication
* Secure login system
* Role-based access control (Admin / User)

### 📦 Subscription & Plan Management

* Create & manage subscription plans
* Assign subscriptions to users
* Track subscription status (active, expired, cancelled)

### 💳 Billing Logic (Backend-side)

* Subscription lifecycle handling
* Start date, end date, renewal logic
* Ready for payment gateway integration

### 🔐 Security

* JWT-based authentication
* Protected routes using middleware
* Environment-based configuration

---

## 🏗️ Tech Stack

| Layer             | Technology   |
| ----------------- | ------------ |
| Runtime           | Node.js      |
| Framework         | Express.js   |
| Database          | MongoDB      |
| ODM               | Mongoose     |
| Authentication    | JWT          |
| Config Management | dotenv       |
| Version Control   | Git & GitHub |

---

## 📁 Project Structure

```
SaasSubscriptionSystem/
├── controllers/        # Business logic
├── routes/             # API route definitions
├── models/             # Database schemas
├── middlewares/        # Auth & error handling
├── services/           # Reusable business services
├── config/             # DB & environment setup
├── utils/              # Helper utilities
├── .env.example        # Environment variables sample
├── server.js           # App entry point
└── README.md
```

---

## 🔌 API Endpoints (Sample)

### Authentication

* `POST /api/auth/register` – Register a user
* `POST /api/auth/login` – Login user

### Subscriptions

* `POST /api/subscriptions` – Create subscription
* `GET /api/subscriptions/:id` – Get subscription details
* `PUT /api/subscriptions/cancel/:id` – Cancel subscription

### Plans

* `POST /api/plans` – Create plan (Admin)
* `GET /api/plans` – List available plans

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Simmonhansnur/saas-subscription-system-backend.git
cd saas-subscription-system-backend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file using `.env.example`:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the Server

```bash
npm start
```

Server runs at: `http://localhost:5000`

---

## 🧪 Testing (Optional)

* APIs can be tested using **Postman** or **Thunder Client**
* JWT token required for protected routes

---

## 🔮 Future Enhancements

* Payment gateway integration (Stripe/Razorpay)
* Webhooks for subscription events
* Cron jobs for expiry handling
* Multi-tenant SaaS support
* Admin dashboard APIs

---

## 👨‍💻 Author

**Vishwa Hansnur**
Backend Developer | SaaS & System Design Enthusiast
GitHub: [https://github.com/Simmonhansnur](https://github.com/Simmonhansnur)

---

## 📜 License

This project is for **learning, portfolio, and placement preparation** purposes.
