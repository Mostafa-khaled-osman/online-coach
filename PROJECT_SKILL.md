# Gymeni - Technical Documentation & API Reference

Welcome to the **Gymeni** technical documentation. This guide is designed for frontend developers to understand the available capabilities, APIs, and business logic of the Spring Boot monolithic project.

---

## 1. Project Overview
**Gymeni** is a specialized platform for fitness coaches and their clients. It allows coaches to manage multiple clients via custom subdomains/slugs, offer subscription plans, and provide personalized diet and workout routines. Clients can track their progress through weight logs and interact with an AI-driven nutrition assistant.

### Base URL
- **Local Development:** `http://localhost:5050`
- **Context Path:** `/` (Root)

---

## 2. Security & Authentication

### Authentication Strategy
The project uses **JWT (JSON Web Token)** stored in **HTTP-Only Cookies** for secure, stateless authentication.

- **Cookie Name:** `jwt`
- **Security Headers:** `HttpOnly`, `Secure` (based on config), `SameSite=Strict`.
- **Authorization Header:** Not required for most requests as the cookie is automatically sent by the browser.
- **CORS:** Configured to allow credentials (cookies) and all headers from origin patterns.

### Roles
- `ROLE_ADMIN`: System-wide administrator.
- `ROLE_COACH`: Manages clients, plans, and content.
- `ROLE_USER`: (Client) Accesses assigned plans and logs progress.

---

## 3. Feature-Based Skill Map

### Auth & User Management
| Action Name | Route | Role | Description |
| :--- | :--- | :--- | :--- |
| Register Client | `POST /auth/register` | Public | Register a new client under a specific coach slug. |
| Register Coach | `POST /auth/register-coach` | Public | Register a new coach account. |
| Login | `POST /auth/login` | Public | Authenticate and receive JWT cookie. |
| Logout | `POST /auth/logout` | Authenticated | Clear the JWT cookie. |
| Forgot Password | `POST /auth/forgot-password` | Public | Request a password reset link. |
| Reset Password | `POST /auth/reset-password` | Public | Update password using a reset token. |
| Change Password | `PUT /auth/change-password` | Authenticated | Update password for current session. |

### Admin Capabilities
| Action Name | Route | Role | Description |
| :--- | :--- | :--- | :--- |
| System Stats | `GET /admin/system-stats` | ADMIN | View total coaches, clients, and revenue. |
| List Coaches | `GET /admin/coaches` | ADMIN | Paginated list of all coaches in the system. |

### Coach Capabilities
| Action Name | Route | Role | Description |
| :--- | :--- | :--- | :--- |
| Dashboard Stats | `GET /coach/dashboard-stats` | COACH | Active clients, pending payments, total revenue. |
| List Clients | `GET /coach/clients` | COACH | Paginated list of clients registered to this coach. |
| Get Client Details| `GET /coach/clients/{id}` | COACH | View specific client profile and status. |
| Delete Client | `DELETE /coach/clients/{id}` | COACH | Remove a client from the coach's list. |
| Manage Plans | `POST/GET/PUT/DELETE /coach/plans` | COACH | CRUD operations for subscription plans. |
| Approve Payment | `PUT /coach/payments/{id}/approve` | COACH | Confirm payment and activate client plan. |
| Reject Payment | `PUT /coach/payments/{id}/reject` | COACH | Reject payment with a reason message. |
| Assign Diet | `POST/PUT /coach/clients/{id}/diet-plans` | COACH | Create or update diet plan for a client. |
| Assign Workout | `POST /coach/clients/{id}/workout-plans` | COACH | Create workout plan (PDF + Notes) for a client. |
| View Proof | `POST /coach/payments/{id}/screenshot` | COACH | Retrieve the URL for the payment proof image. |
| Update Profile | `PUT /coach/profile` | COACH | Update bio, specialization, and profile image. |

### Client Capabilities
| Action Name | Route | Role | Description |
| :--- | :--- | :--- | :--- |
| Get My Plan | `GET /client/my-plan` | USER | View details of current subscription. |
| Upload Payment | `POST /client/payments/upload-proof`| USER | Submit plan selection and payment screenshot. |
| Get Diet | `GET /client/my-diet` | USER | View assigned diet plan. |
| Get Workout | `GET /client/my-workout` | USER | View assigned workout plan. |
| Log Weight | `POST /client/weight-logs` | USER | Record daily or weekly body weight. |
| Weight History | `GET /client/weight-logs` | USER | View all historical weight entries. |
| Update Profile | `PUT /client/profile` | USER | Update age, gender, and phone. |
| AI Chat | `POST /client/ai-chat` | USER | Talk to the AI Nutrition Assistant. |

### Notifications & Public
| Action Name | Route | Role | Description |
| :--- | :--- | :--- | :--- |
| List Notifications| `GET /notifications` | Any Auth | Get paginated user notifications. |
| Mark Read | `PUT /notifications/{id}/read`| Any Auth | Mark a specific notification as seen. |
| Public Profile | `GET /public/coach/{slug}` | Public | Get coach info and plans for the landing page. |

---

## 4. Detailed Endpoint Specifications

### Authentication

#### **Login**
- **Action:** Authenticate user.
- **Route:** `POST /auth/login`
- **Request Body:**
```json
{
  "emailOrPhone": "string (email or phone number)",
  "password": "string"
}
```
- **Response (200 OK):**
```json
{
  "role": "ROLE_USER | ROLE_COACH | ROLE_ADMIN",
  "name": "User Name"
}
```
- **Note:** Sets an `HttpOnly` cookie named `jwt`.

#### **Client Registration**
- **Action:** Register under a coach.
- **Route:** `POST /auth/register`
- **Request Body:**
```json
{
  "name": "string",
  "email": "user@example.com",
  "phone": "+1234567890",
  "age": 25,
  "gender": "MALE | FEMALE | OTHER",
  "password": "Password123!",
  "confirmPassword": "Password123!",
  "coachSlug": "coach-mike-slug"
}
```

---

### Coach Operations

#### **Create Subscription Plan**
- **Action:** Define a new service offering.
- **Route:** `POST /coach/plans`
- **Request Body:**
```json
{
  "title": "3 Months Transformation",
  "description": "Full support + Weekly Checkins",
  "price": 299.99,
  "durationDays": 90
}
```

#### **Assign Diet Plan**
- **Action:** Setup daily meals for a client.
- **Route:** `POST /coach/clients/{clientId}/diet-plans`
- **Request Body:**
```json
{
  "title": "Fat Loss Diet",
  "mealItems": [
    { "mealOrder": 1, "content": "3 Eggs + 100g Oats" },
    { "mealOrder": 2, "content": "200g Chicken + 100g Rice" }
  ]
}
```

#### **Assign Workout Plan (Multipart)**
- **Action:** Upload workout PDF and notes.
- **Route:** `POST /coach/clients/{clientId}/workout-plans`
- **Content-Type:** `multipart/form-data`
- **Request Body (Parts):**
  - `generalNotes`: String
  - `dailyWorkouts[0].dayNumber`: Integer
  - `dailyWorkouts[0].exercisesText`: String
  - `file`: MultipartFile (PDF/Image)

---

### Client Operations

#### **Upload Payment Proof**
- **Action:** Purchase a plan by providing evidence.
- **Route:** `POST /client/payments/upload-proof`
- **Content-Type:** `multipart/form-data`
- **Request Body (Parts):**
  - `planId`: UUID
  - `screenshotFile`: MultipartFile (Image)
- **Business Rule:** Creates a payment record in `PENDING` status. Coach must approve to activate.

#### **AI Nutrition Chat**
- **Action:** Get automated nutrition advice.
- **Route:** `POST /client/ai-chat`
- **Request Body:**
```json
{
  "message": "How many calories in a green apple?"
}
```
- **Response Model:**
```json
{
  "provider": "open-ai",
  "model": "gpt-4",
  "userMessage": "How many calories in a green apple?",
  "answer": "A medium green apple contains approximately 95 calories...",
  "tips": [
    "Apples are high in fiber",
    "Great for a pre-workout snack"
  ]
}
```

---

### Shared Utilities

#### **Notifications**
- **Route:** `GET /notifications?page=0&size=10`
- **Response:** Paginated list of:
```json
{
  "id": "UUID",
  "message": "Your payment was approved!",
  "isRead": false,
  "createdAt": "2023-10-27T10:00:00"
}
```

---

## 5. Global Business Rules
1. **Uniqueness:** Emails and Subdomain Slugs must be unique across the platform.
2. **Authorization:** Coaches can only access/modify clients registered under them.
3. **Plan Activation:** A client's plan status only changes to `ACTIVE` once a coach approves the uploaded payment screenshot.
4. **Data Integrity:** Weight logs are immutable once created (historical tracking).
5. **AI Usage:** AI Chat is exclusive to clients with `ROLE_USER`.
