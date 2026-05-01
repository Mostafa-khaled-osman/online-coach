# Gymeni — Frontend Implementation Plan

Based on `PROJECT_SKILL.md` (backend API reference) and the current project structure.

---

## Overview

The backend is a Spring Boot app running at `http://localhost:5050`.  
Auth uses **HttpOnly JWT cookies** — the browser sends the cookie automatically on every request, so no manual `Authorization` headers are needed.

There are **3 user roles**, each with their own portal:

| Role | Portal Path | Current Status |
|---|---|---|
| `ROLE_ADMIN` | `/admin/*` | ❌ Not built |
| `ROLE_COACH` | `/dashboard/*` | 🟡 UI exists, not wired to API |
| `ROLE_USER` (Client) | `/athlete/*` | 🟡 UI exists, not wired to API |
| Public | `/` | 🟡 UI exists, not wired to API |

---

## Phase 0 — Foundation (Do First)

These are global concerns that everything else depends on.

### Step 0.1 — API Client Setup

**Create `src/lib/api.ts`**

- Configure `axios` (or `fetch`) with `baseURL: 'http://localhost:5050'`
- Set `withCredentials: true` so cookies are sent automatically
- Add a response interceptor: if any request returns `401 Unauthorized`, redirect the user to `/signin`

### Step 0.2 — Auth State (Context)

**Create `src/context/AuthContext.tsx`**

- Store `{ role, name }` in React Context
- On app load, call `GET /auth/me` (or read from `localStorage` after login) to restore session
- Expose `login()`, `logout()`, and `isAuthenticated` helpers

### Step 0.3 — Protected Route Wrapper

**Create `src/components/ProtectedRoute.tsx`**

- A wrapper component that checks `AuthContext`
- If user not authenticated → redirect to `/signin`
- If user's role doesn't match required role → redirect to their home portal

### Step 0.4 — Environment Config

**Create/update `.env`**

```env
VITE_API_URL=http://localhost:5050
```

---

## Phase 1 — Public Pages (No Login Required)

### Step 1.1 — Coach Public Landing Page

**Page:** `src/pages/CoachLanding.tsx` (NEW)  
**Route:** `/:coachSlug` (dynamic)  
**API:** `GET /public/coach/{slug}`

- Fetch coach name, bio, specialization, profile image
- Display coach's subscription plans with price and duration
- Each plan has a **"Subscribe"** button → goes to `/signin` or `/register`

### Step 1.2 — Client Registration Page

**Page:** `src/pages/Register.tsx` (NEW)  
**Route:** `/register`  
**API:** `POST /auth/register`

**Form fields:** name, email, phone, age, gender (MALE/FEMALE/OTHER), password, confirmPassword, coachSlug  
**On success:** redirect to `/signin`

### Step 1.3 — Sign In Page

**Page:** `src/pages/SignIn.tsx` (ALREADY EXISTS — wire it up)  
**Route:** `/signin`  
**API:** `POST /auth/login`

**Request body:** `{ emailOrPhone, password }`  
**On success:** receive `{ role, name }` → store in `AuthContext` → redirect based on role:
- `ROLE_COACH` → `/dashboard`
- `ROLE_USER` → `/athlete/dashboard`
- `ROLE_ADMIN` → `/admin`

### Step 1.4 — Forgot / Reset Password Pages

**Pages:** `src/pages/ForgotPassword.tsx`, `src/pages/ResetPassword.tsx` (NEW)  
**Routes:** `/forgot-password`, `/reset-password?token=...`  
**APIs:** `POST /auth/forgot-password`, `POST /auth/reset-password`

---

## Phase 2 — Coach Dashboard (Role: COACH)

All routes under `/dashboard/*`. Wrap with `ProtectedRoute role="ROLE_COACH"`.

### Step 2.1 — Coach Dashboard Home

**Page:** `src/pages/Dashboard.tsx` (EXISTS — wire it up)  
**Route:** `/dashboard`  
**API:** `GET /coach/dashboard-stats`

**Display:**
- Total active clients
- Pending payments (needs action!)
- Total revenue earned

### Step 2.2 — Clients List

**Page:** `src/pages/ClientsCRM.tsx` (EXISTS — wire it up)  
**Route:** `/dashboard/clients`  
**API:** `GET /coach/clients?page=0&size=10`

**Display:** paginated table of clients with name, email, plan status  
**Actions per row:**
- View details → navigates to `/dashboard/clients/:id`
- Delete → `DELETE /coach/clients/{id}`

### Step 2.3 — Client Detail Page

**Page:** `src/pages/ClientDetail.tsx` (NEW)  
**Route:** `/dashboard/clients/:id`  
**API:** `GET /coach/clients/{id}`

**Tabs/sections:**
1. **Profile** — client info
2. **Diet Plan** — assign via `POST /coach/clients/{id}/diet-plans` or update via `PUT`
3. **Workout Plan** — upload PDF/notes via `POST /coach/clients/{id}/workout-plans` (multipart)
4. **Payments** — approve via `PUT /coach/payments/{paymentId}/approve` or reject via `PUT /coach/payments/{paymentId}/reject`

### Step 2.4 — Subscription Plans Management

**Page:** `src/pages/PricingPlans.tsx` (EXISTS — wire it up)  
**Route:** `/dashboard/plans`  
**APIs:**
- `GET /coach/plans` — list plans
- `POST /coach/plans` — create new plan (title, description, price, durationDays)
- `PUT /coach/plans/{id}` — edit plan
- `DELETE /coach/plans/{id}` — remove plan

### Step 2.5 — Payment Review

**Page:** `src/pages/CheckInReviewer.tsx` (EXISTS — repurpose/wire it up)  
**Route:** `/dashboard/payments`  
**APIs:**
- List pending payments (part of client list or separate endpoint)
- `PUT /coach/payments/{id}/approve`
- `PUT /coach/payments/{id}/reject` (with reason message)
- `POST /coach/payments/{id}/screenshot` — view proof image URL

### Step 2.6 — Coach Profile Settings

**Page:** `src/pages/AccountSettings.tsx` (EXISTS — wire it up)  
**Route:** `/dashboard/settings`  
**API:** `PUT /coach/profile`

**Fields:** bio, specialization, profile image (multipart upload)

---

## Phase 3 — Client (Athlete) Portal (Role: USER)

All routes under `/athlete/*`. Wrap with `ProtectedRoute role="ROLE_USER"`.

### Step 3.1 — Client Dashboard

**Page:** `src/pages/SanctuaryDashboard.tsx` (EXISTS — wire it up)  
**Route:** `/athlete/dashboard`  
**API:** `GET /client/my-plan`

**Display:** current subscription plan name, status (PENDING/ACTIVE/EXPIRED), expiry date

### Step 3.2 — Upload Payment Proof

**Page:** `src/pages/Checkout.tsx` (EXISTS — wire it up)  
**Route:** `/athlete/payment`  
**API:** `POST /client/payments/upload-proof` (multipart)

**Form fields:**
- Select a plan (fetched from `GET /public/coach/{slug}` or stored from landing page)
- Upload screenshot image
- Submit → status becomes **PENDING** until coach approves

### Step 3.3 — My Diet Plan

**Page:** `src/pages/MealPlanner.tsx` (EXISTS — wire it up)  
**Route:** `/athlete/meal-planner`  
**API:** `GET /client/my-diet`

**Display:** plan title + ordered meal list (mealOrder, content)

### Step 3.4 — My Workout Plan

**Page:** `src/pages/WorkoutLog.tsx` (EXISTS — wire it up)  
**Route:** `/athlete/workout-log`  
**API:** `GET /client/my-workout`

**Display:** general notes + daily workout breakdown + PDF download link

### Step 3.5 — Weight Logging & History

**Page:** `src/pages/ProgressTracking.tsx` (EXISTS — wire it up)  
**Route:** `/athlete/progress`  
**APIs:**
- `POST /client/weight-logs` — log a new weight entry (weight value + date)
- `GET /client/weight-logs` — fetch history

**Display:** weight chart (line graph over time) + input form for new entry

### Step 3.6 — AI Nutrition Chat

**Page:** `src/pages/TrainerChatHub.tsx` (EXISTS — wire it up)  
**Route:** `/athlete/chat`  
**API:** `POST /client/ai-chat`

**Request:** `{ message: "..." }`  
**Response:** display `answer` + `tips` array as chat bubbles

### Step 3.7 — Client Profile Settings

**Page:** `src/pages/AccountSettings.tsx` or a new `ClientSettings.tsx`  
**Route:** `/athlete/settings`  
**API:** `PUT /client/profile`

**Fields:** age, gender, phone

---

## Phase 4 — Admin Portal (Role: ADMIN)

Currently **nothing is built** for admin.

### Step 4.1 — Admin Layout

**Component:** `src/components/layout/AdminLayout.tsx` (NEW)  
**Route:** `/admin/*` — wrap with `ProtectedRoute role="ROLE_ADMIN"`

### Step 4.2 — System Stats Dashboard

**Page:** `src/pages/admin/AdminDashboard.tsx` (NEW)  
**Route:** `/admin`  
**API:** `GET /admin/system-stats`

**Display:** total coaches, total clients, total revenue

### Step 4.3 — Coaches List

**Page:** `src/pages/admin/AdminCoaches.tsx` (NEW)  
**Route:** `/admin/coaches`  
**API:** `GET /admin/coaches?page=0&size=10`

**Display:** paginated list of all coaches in the system

---

## Phase 5 — Shared Features (All Authenticated Users)

### Step 5.1 — Notifications

**Component:** `src/components/ui/NotificationBell.tsx` (NEW)  
**Place:** in the top navbar (visible to all logged-in users)  
**APIs:**
- `GET /notifications?page=0&size=10` — fetch paginated notifications
- `PUT /notifications/{id}/read` — mark as read on click

**Display:** bell icon with unread count badge, dropdown list of messages

### Step 5.2 — Logout

**Location:** in sidebar/navbar for all roles  
**API:** `POST /auth/logout`  
**On success:** clear `AuthContext` → redirect to `/signin`

### Step 5.3 — Change Password

**Location:** in Account Settings page for all roles  
**API:** `PUT /auth/change-password`  
**Fields:** current password, new password, confirm new password

---

## Summary: Recommended Build Order

```
Phase 0: Foundation (API client, AuthContext, ProtectedRoute)
   ↓
Phase 1: Public (SignIn, Register, ForgotPassword, CoachLanding)
   ↓
Phase 2: Coach Dashboard (Stats → Clients → ClientDetail → Plans → Payments → Profile)
   ↓
Phase 3: Client Portal (Dashboard → Payment → Diet → Workout → Weight → AI Chat)
   ↓
Phase 4: Admin Portal (Layout → Stats → Coaches)
   ↓
Phase 5: Shared (Notifications, Logout, Change Password)
```

> [!IMPORTANT]
> **Critical business rule:** A client's plan is only `ACTIVE` after the coach approves the payment screenshot. Until then, the plan is `PENDING`. Build your UI to reflect this status clearly.

> [!NOTE]
> The AI Chat (`/client/ai-chat`) is restricted to `ROLE_USER` only. Make sure your ProtectedRoute enforces this.
