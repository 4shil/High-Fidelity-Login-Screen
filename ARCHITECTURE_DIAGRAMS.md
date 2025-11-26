# 🏗️ JPM COLLEGE APP — SYSTEM ARCHITECTURE DIAGRAMS

**2025 Final Edition**

---

## 📊 SYSTEM OVERVIEW

```
┌─────────────────────────────────────────────────────────────────────┐
│                    JPM COLLEGE APP - CLIENT                         │
│                  (React 18 + TypeScript + Vite)                     │
└─────────────────────────────────────────────────────────────────────┘
                              ↓
                  ┌───────────────────────┐
                  │  Authentication       │
                  │  (Supabase Auth)      │
                  └─────────┬─────────────┘
                            ↓
            ┌───────────────┴──────────────┐
            ↓                              ↓
        ┌─────────┐                  ┌──────────┐
        │ ADMIN   │                  │ TEACHER  │
        │ MODULE  │                  │ MODULE   │
        └────┬────┘                  └────┬─────┘
            │                            │
            └────────────┬───────────────┘
                        ↓
            ┌───────────────────────┐
            │   STUDENT MODULE      │
            └───────────┬───────────┘
                        ↓
        ┌───────────────────────────────────┐
        │     DATABASE & STORAGE            │
        │  (PostgreSQL + Supabase Storage)  │
        └───────────────────────────────────┘
                        ↓
        ┌───────────────────────────────────┐
        │    REAL-TIME SUBSCRIPTIONS        │
        │  (GraphQL / Supabase Realtime)    │
        └───────────────────────────────────┘
```

---

## 👥 ROLE HIERARCHY

```
ADMIN ROLES (9)
├── Super Admin (Top)
│   ├── Full system control
│   └── Can manage all other admins
│
├── Principal
│   ├── Academic governance
│   └── Approval authority
│
├── Department Admin
│   ├── Department level control
│   └── Student management
│
├── HoD (Admin)
│   ├── Department head
│   └── Subject allocation
│
├── Exam Cell Admin
│   ├── Exam management
│   └── Marks verification
│
├── Library Admin
│   ├── Book management
│   └── Fine tracking
│
├── Bus Admin
│   ├── Route management
│   └── Student approvals
│
├── Canteen Admin
│   ├── Menu management
│   └── Token system
│
└── Fee Admin (Bottom)
    ├── Fee structure
    └── Payment verification


TEACHER ROLES (5 - Progressive)
├── Subject Teacher (Base)
│   ├── Attendance marking
│   ├── Assignment management
│   ├── Mark upload
│   └── Planner/Diary submission
│
├── Class Teacher
│   ├── Class oversight
│   ├── Student ranking
│   └── Cross-subject tracking
│
├── Mentor
│   ├── Mentee support
│   ├── Counselling
│   └── Follow-ups
│
├── Coordinator
│   ├── Substitute management
│   ├── Teacher duty tracking
│   └── Temporary tool access
│
└── HoD (Teacher - Top)
    ├── All teacher permissions
    ├── Subject allocation
    ├── Approval authority
    └── Department analytics


STUDENT ROLE (1)
└── Student
    ├── View dashboard
    ├── Track attendance
    ├── Submit assignments
    ├── View marks
    ├── Access library
    ├── Book bus/canteen
    ├── Pay fees
    └── Support access
```

---

## 📁 MODULE ARCHITECTURE

```
APPLICATION LAYER
│
├─────────────────────────────────────────────────────────────────
│
├── ADMIN MODULE (src/modules/admin/)
│   │
│   ├── Super Admin Dashboard
│   │   ├── User Management (Create/Delete/Block)
│   │   ├── Audit Logs Viewer
│   │   ├── System Settings
│   │   └── Backup/Restore
│   │
│   ├── Principal Dashboard
│   │   ├── Planner Approval
│   │   ├── Diary Approval
│   │   ├── Analytics Viewer
│   │   └── User Blocking
│   │
│   ├── Department Admin
│   │   ├── Student Management
│   │   ├── Block/Unblock
│   │   └── Notices Publishing
│   │
│   ├── HoD (Admin)
│   │   ├── Planner Approval
│   │   ├── Diary Approval
│   │   ├── Subject Allocation
│   │   └── Substitute Assignment
│   │
│   ├── Exam Cell Admin
│   │   ├── Exam Date Setting
│   │   ├── Timetable Publishing
│   │   ├── Marks Verification
│   │   └── Notifications
│   │
│   ├── Library Admin
│   │   ├── Book Management
│   │   ├── Issue/Return
│   │   ├── Fine Management
│   │   └── Reservations
│   │
│   ├── Bus Admin
│   │   ├── Route Management
│   │   ├── Approval Interface
│   │   ├── Tracking
│   │   └── Alerts
│   │
│   ├── Canteen Admin
│   │   ├── Menu Management
│   │   ├── Token System
│   │   ├── Sales Tracking
│   │   └── Sold-Out Alerts
│   │
│   └── Fee Admin
│       ├── Fee Structure
│       ├── Payment Verification
│       ├── Receipt Management
│       └── Reminders
│
├─────────────────────────────────────────────────────────────────
│
├── TEACHER MODULE (src/modules/teacher/)
│   │
│   ├── Subject Teacher (Base)
│   │   ├── Dashboard
│   │   ├── Attendance Marking
│   │   │   ├── Daily Entry
│   │   │   ├── Edit Window (24h)
│   │   │   └── Summary View
│   │   ├── Material Upload
│   │   │   ├── File Upload
│   │   │   ├── Management
│   │   │   └── Notifications
│   │   ├── Assignment Management
│   │   │   ├── Creation
│   │   │   ├── Submission View
│   │   │   ├── Grading
│   │   │   └── Feedback
│   │   ├── Exam Marks Upload
│   │   │   ├── Manual Entry
│   │   │   ├── CSV Upload
│   │   │   └── Performance Graphs
│   │   ├── Lesson Planner
│   │   │   ├── Syllabus Upload
│   │   │   ├── Progress Tracking
│   │   │   └── Submission
│   │   ├── Work Diary
│   │   │   ├── Daily Logs
│   │   │   ├── Monthly Submission
│   │   │   └── Approval Tracking
│   │   └── Announcements
│   │       ├── Creation
│   │       ├── Attachments
│   │       └── Notifications
│   │
│   ├── Class Teacher (+ above)
│   │   ├── Class Student List
│   │   ├── Cross-Subject Attendance
│   │   ├── Internal Exam Overview
│   │   ├── Student Ranking
│   │   └── Class Announcements
│   │
│   ├── Mentor (+ above)
│   │   ├── Mentee Profiles
│   │   ├── Mentee Attendance
│   │   ├── Mentee Marks
│   │   ├── Counselling Notes
│   │   └── Follow-Up Tracking
│   │
│   ├── Coordinator (+ above)
│   │   ├── Absent Teacher Detection
│   │   ├── Substitute Assignment
│   │   ├── Temporary Tool Access
│   │   └── Audit Logging
│   │
│   └── HoD (Teacher - + all)
│       ├── Subject Allocation
│       ├── Planner Approval
│       ├── Diary Approval
│       └── Department Analytics
│
├─────────────────────────────────────────────────────────────────
│
└── STUDENT MODULE (src/modules/student/)
    │
    ├── Dashboard
    │   ├── Overview Cards
    │   ├── Today's Timetable
    │   ├── Attendance %
    │   ├── Recent Marks
    │   ├── Canteen Menu
    │   ├── Bus Arrival
    │   ├── Library Quick View
    │   └── Notifications
    │
    ├── Attendance
    │   ├── Subject-Wise %
    │   ├── Daily Timeline
    │   ├── Calendar View
    │   ├── Shortage Alerts
    │   └── Download Option
    │
    ├── Timetable
    │   ├── Day View
    │   ├── Week View
    │   ├── Teacher Info
    │   ├── Substitution Alerts
    │   └── Calendar Export
    │
    ├── Assignments
    │   ├── Assignment List
    │   ├── File Upload
    │   ├── Submission Status
    │   ├── Feedback View
    │   ├── Grading Display
    │   └── Due Date Alerts
    │
    ├── Materials
    │   ├── Search & Filter
    │   ├── Download
    │   ├── Offline Access
    │   └── Version History
    │
    ├── Internal Marks
    │   ├── Assignment Marks
    │   ├── Exam Marks
    │   ├── Attendance Marks
    │   ├── Total Calculation
    │   ├── Charts & Graphs
    │   └── Analysis
    │
    ├── External Marks
    │   ├── Upload Interface
    │   ├── Upload Status
    │   ├── Approval Status
    │   ├── Verified Marks
    │   └── Download Verified
    │
    ├── Exams
    │   ├── Exam Timetable
    │   ├── Hall Ticket
    │   ├── Internal Results
    │   ├── External Results
    │   ├── SGPA Calculation
    │   └── CGPA Tracking
    │
    ├── Library
    │   ├── Search Books
    │   ├── Borrowed Books
    │   ├── Renewal
    │   ├── Reservations
    │   ├── Due Dates
    │   └── Overdue Alerts
    │
    ├── Canteen
    │   ├── Daily Menu
    │   ├── Token Purchase
    │   ├── Token History
    │   ├── Pickup Time
    │   └── Order Tracking
    │
    ├── Bus
    │   ├── Bus Selection
    │   ├── Route Info
    │   ├── Arrival Time
    │   ├── Stop Details
    │   └── Payment Alerts
    │
    ├── Notices
    │   ├── College Notices
    │   ├── Department Notices
    │   ├── Exam Notices
    │   ├── Event Notices
    │   ├── Mark as Read
    │   └── Search & Filter
    │
    ├── Events
    │   ├── Event List
    │   ├── External Link
    │   ├── Certificates
    │   ├── Event Calendar
    │   └── Details View
    │
    ├── Feedback/Complaints
    │   ├── Teacher Feedback
    │   ├── College Feedback
    │   ├── Complaint Form
    │   ├── Ticket Tracking
    │   ├── Status Updates
    │   └── Resolution View
    │
    ├── Fees
    │   ├── Fee Structure
    │   ├── Components View
    │   ├── Payment Option
    │   ├── Payment History
    │   └── Receipt Download
    │
    ├── Honors
    │   ├── Available Minors
    │   ├── Selection Form
    │   ├── Selection Status
    │   └── Approval Tracking
    │
    ├── Settings
    │   ├── Dark Mode Toggle
    │   ├── Notification Preferences
    │   ├── Language Selection
    │   ├── Privacy Settings
    │   └── Account Info
    │
    └── Support
        ├── Contact Form
        ├── Ticket System
        ├── FAQ
        ├── Support Info
        └── Live Chat
```

---

## 🔄 DATA FLOW

```
USER LOGIN
    ↓
Authentication (Supabase)
    ↓
Role Detection (Database)
    ↓
Context Update (AuthContext + RoleContext)
    ↓
Route to Module (Admin/Teacher/Student)
    ↓
Load Module Dashboard
    ↓
Fetch Data (API/GraphQL)
    ↓
Display Data with Permissions
    ↓
User Action
    ↓
Create/Update/Delete Data
    ↓
Audit Log Entry (Database)
    ↓
Trigger Notification (Real-time)
    ↓
Update UI (Context Update)
    ↓
User Sees Result
```

---

## 🗄️ DATABASE SCHEMA

```
USERS TABLE
├── id (PK)
├── email (UNIQUE)
├── password_hash
├── name
├── roles (ARRAY)
├── is_active
├── is_blocked
├── last_login
└── created_at

DEPARTMENTS TABLE
├── id (PK)
├── name
├── code (UNIQUE)
├── hod_id (FK → users.id)
└── description

YEARS TABLE
├── id (PK)
├── department_id (FK)
├── number (1-4)
└── name

DIVISIONS TABLE
├── id (PK)
├── year_id (FK)
├── name (A, B, C...)
└── capacity

SUBJECTS TABLE
├── id (PK)
├── code
├── name
├── department_id (FK)
├── year_id (FK)
├── credits
├── is_major
├── is_minor
└── type (theory/practical/both)

TIMETABLE TABLE
├── id (PK)
├── year_id (FK)
├── division_id (FK)
├── semester
├── start_date
└── end_date

TIMETABLE_PERIODS TABLE
├── id (PK)
├── timetable_id (FK)
├── day_of_week
├── period_number
├── start_time
├── end_time
├── subject_id (FK)
├── teacher_id (FK)
├── room_number
└── substitute (JSON)

ATTENDANCE TABLE
├── id (PK)
├── student_id (FK)
├── subject_id (FK)
├── date
├── status
├── marked_by (FK)
├── marked_at
└── edit_history (ARRAY)

EXAMS TABLE
├── id (PK)
├── name
├── type (internal/model/university)
├── department_id (FK)
├── year_id (FK)
├── start_date
├── end_date
├── is_published
└── created_by (FK)

EXAM_SUBJECTS TABLE
├── id (PK)
├── exam_id (FK)
├── subject_id (FK)
├── date
├── start_time
├── end_time
├── max_marks
├── total_students
└── hall

INTERNAL_MARKS TABLE
├── id (PK)
├── student_id (FK)
├── subject_id (FK)
├── semester
├── assignment_marks
├── exam_marks
├── attendance_marks
├── total_marks
├── verification_status
├── verified_by (FK)
└── verified_at

EXTERNAL_MARKS TABLE
├── id (PK)
├── student_id (FK)
├── subject_id (FK)
├── semester
├── uploaded_at
├── document_url
├── marks
├── approval_status
├── approved_by (FK)
└── approved_at

MATERIALS TABLE
├── id (PK)
├── subject_id (FK)
├── teacher_id (FK)
├── title
├── description
├── type (pdf/ppt/video/link/document)
├── url
├── uploaded_at
├── visible
└── notified

ASSIGNMENTS TABLE
├── id (PK)
├── subject_id (FK)
├── teacher_id (FK)
├── title
├── description
├── due_date
├── max_marks
├── attachments (ARRAY)
└── created_at

ASSIGNMENT_SUBMISSIONS TABLE
├── id (PK)
├── assignment_id (FK)
├── student_id (FK)
├── submitted_at
├── files (ARRAY)
├── marks
├── feedback
├── graded_at
└── graded_by (FK)

AUDIT_LOGS TABLE
├── id (PK)
├── user_id (FK)
├── user_role
├── action
├── entity_type
├── entity_id
├── old_value (JSON)
├── new_value (JSON)
├── timestamp
└── ip_address

NOTIFICATIONS TABLE
├── id (PK)
├── user_id (FK)
├── title
├── body
├── type
├── related_id
├── read
└── created_at
```

---

## 🔐 PERMISSION SYSTEM

```
┌─────────────────────────┐
│   User authenticates    │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│  Fetch user roles       │
│  (from database)        │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│  Set RoleContext        │
│  currentRole = primary  │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│  Load permission map    │
│  for current role       │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│  hasPermission(perm)    │
│  checks permission map  │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│  canAccessModule(mod)   │
│  checks module access   │
└────────────┬────────────┘
             ↓
┌─────────────────────────┐
│  Route to correct view  │
└─────────────────────────┘
```

---

## 🔔 NOTIFICATION SYSTEM

```
Event Triggered
    ↓
Check notification type:
├─ Assignment created
├─ Marks published
├─ Attendance recorded
├─ Notice published
├─ Bus arrival
├─ Fee reminder
└─ Library event
    ↓
Create notification entry (Database)
    ↓
Send real-time update (GraphQL Subscription)
    ↓
Client receives update (RealTime)
    ↓
Display to user in NotificationCenter
    ↓
User reads/dismisses
    ↓
Mark as read (Database)
```

---

## 📊 API FLOW

```
Frontend (React)
    ↓
Context/Hooks
    ↓
API Call (HTTP/GraphQL)
    ↓
Supabase Client
    ↓
↙──────────────────────────────────────────────────────────────╲
↓                                                               ↓
REST API (for auth)                          GraphQL API (for data)
        ↓                                           ↓
    Supabase Auth                        Hasura (optional)
        ↓                                           ↓
    PostgreSQL                         PostgreSQL (same DB)
        ↓                                           ↓
    User Table                       All other tables
        ↓                                           ↓
Return Auth Token                    Return Data
        ↓                                           ↓
↖──────────────────────────────────────────────────────────────╱
        ↓
Frontend receives response
        ↓
Update Context
        ↓
Re-render UI
```

---

## 📁 FOLDER DEPTH

```
Max Depth: 5 levels

Level 1: /src/modules/{module}/
Level 2: /{role}/
Level 3: /{feature}/
Level 4: /components or /pages
Level 5: Individual component files

Example:
src/modules/admin/super-admin/pages/UserManagement.tsx
└─ Level 5: UserManagement.tsx
   └─ Level 4: /pages
      └─ Level 3: /super-admin
         └─ Level 2: /admin
            └─ Level 1: /modules
               └─ Root: /src
```

---

## 🎯 STATE MANAGEMENT

```
Global State (Context)
├── AuthContext
│   ├── user (User | null)
│   ├── token (AuthToken | null)
│   ├── isAuthenticated (boolean)
│   └── Methods: login, logout, register, forgotPassword
│
└── RoleContext
    ├── currentRole (AdminRole | TeacherRole | 'student')
    ├── setCurrentRole
    ├── hasPermission(perm) → boolean
    └── canAccessModule(mod) → boolean

Local State (useState)
├── Component-level state
├── Form inputs
├── Loading states
├── Error messages
└── Local UI state

Derived State (useMemo)
├── Calculated values
├── Filtered lists
├── Aggregated data
└── Formatted values
```

---

## 🚀 DEPLOYMENT ARCHITECTURE

```
┌────────────────────────────────────────────────────┐
│              CDN (Content Delivery)                │
│  (Static assets, images, cached content)          │
└──────────────────────┬─────────────────────────────┘
                       ↓
┌────────────────────────────────────────────────────┐
│         Frontend (Vercel/Netlify/Docker)          │
│  (React app - /dist folder)                       │
└──────────────────────┬─────────────────────────────┘
                       ↓
        ┌──────────────────────────────┐
        │   API Gateway (Hasura)       │
        │   - GraphQL endpoint         │
        │   - Real-time subscriptions  │
        └──────────────┬───────────────┘
                       ↓
        ┌──────────────────────────────┐
        │      Authentication          │
        │    (Supabase Auth)           │
        └──────────────┬───────────────┘
                       ↓
        ┌──────────────────────────────┐
        │        PostgreSQL            │
        │       (Main Database)        │
        └──────────────┬───────────────┘
                       ↓
        ┌──────────────────────────────┐
        │   Supabase Storage           │
        │   (File uploads, avatars)    │
        └──────────────────────────────┘
```

---

## 🔄 REQUEST/RESPONSE CYCLE

```
User Action (e.g., Mark Attendance)
    ↓
Component calls Hook (useAttendance)
    ↓
Hook calls API (markAttendance)
    ↓
API validates data
    ↓
API authenticates user
    ↓
Check permissions (RoleContext)
    ↓
Execute query/mutation
    ↓
Create audit log entry
    ↓
Return success/error
    ↓
Component updates state
    ↓
Trigger notification (if needed)
    ↓
UI updates with result
    ↓
User sees confirmation
```

---

**Version:** 2025 Final Edition  
**Date:** November 25, 2025  
**Status:** Architecture Complete
