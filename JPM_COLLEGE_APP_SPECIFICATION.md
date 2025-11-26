# 📋 JPM COLLEGE APP — PROJECT SPECIFICATION & IMPLEMENTATION GUIDE

**Version:** 2025 Final Edition  
**Date:** November 25, 2025  
**Status:** Official Complete Specification  
**Tech Stack:** React + TypeScript + Vite + Supabase + Hasura GraphQL

---

## 🎯 PROJECT OVERVIEW

The JPM College App is a unified, comprehensive platform for managing educational institutions. It provides separate, role-based modules for:

- **Admins** (9 hierarchical roles)
- **Teachers** (5 progressive roles)
- **Students** (18 features)

All with centralized authentication, audit logging, and notification systems.

---

## 📊 SYSTEM ARCHITECTURE

```
┌─────────────────────────────────────────────────────────────────┐
│                     CLIENT APPLICATION                          │
│  (React + TypeScript + Vite)                                    │
└─────────────────────────────────────────────────────────────────┘
                              ↓
        ┌─────────────────────┴─────────────────────┐
        ↓                                           ↓
   ┌─────────────┐                         ┌──────────────────┐
   │  SUPABASE   │◄──────────────────────►│ HASURA GraphQL   │
   │  (Auth)     │                         │ (API Layer)      │
   └─────────────┘                         └──────────────────┘
        ↓                                           ↓
   ┌─────────────┐                         ┌──────────────────┐
   │ PostgreSQL  │                         │  Real-time DB    │
   │ Database    │◄────────────────────────┤  Subscriptions   │
   └─────────────┘                         └──────────────────┘
```

---

## 🎓 ADMIN MODULE — 9 HIERARCHICAL ROLES

### 1. **Super Admin** (Top Level)
✅ Create/delete any admin  
✅ Assign/revoke roles  
✅ Full system control  
✅ Backup/restore  
✅ Force logout users  
✅ View all audit logs  

### 2. **Principal** (Academic Oversight)
✅ Approve Work Diary (final)  
✅ Monitor Lesson Planner  
✅ View all analytics  
✅ Block/unblock users  
❌ Cannot edit timetable  
❌ Cannot modify academic structure  

### 3. **Department Admin**
✅ View dept teachers & students  
✅ Block/unblock dept students  
✅ View attendance & exam data  
✅ Publish dept notices  
❌ Cannot approve users  
❌ Cannot set exams  

### 4. **HoD (Admin)** — Department Head
✅ Approve Weekly Planner  
✅ Approve Monthly Diary (Level 1)  
✅ Assign subjects to teachers  
✅ Assign substitutes  
✅ Department analytics  

### 5. **Exam Cell Admin**
✅ Set exam dates (internal, model, university)  
✅ Publish exam timetable  
✅ Verify internal marks  
✅ Verify external results  
✅ Send exam notifications  
❌ Cannot upload marks  

### 6. **Library Admin**
✅ Manage books  
✅ Issue/return/renew books  
✅ Set manual fines  
✅ Manage reservations  
✅ Send library notifications  
⚠️ NO QR code system  

### 7. **Bus Admin**
✅ Manage routes & stops  
✅ Approve student bus selections  
✅ Send arrival updates  
✅ Send holiday alerts  

### 8. **Canteen Admin**
✅ Manage daily menu  
✅ Manage token system  
✅ Send sold-out updates  
✅ View sales summary  

### 9. **Fee Admin**
✅ Create fee structure  
✅ Verify payments  
✅ Upload receipt scans  
✅ Send payment reminders  
✅ View fee analytics  

---

## 👨‍🏫 TEACHER MODULE — 5 PROGRESSIVE ROLES

### Role Hierarchy

```
Subject Teacher (Base)
    ↓ (adds)
Class Teacher
    ↓ (adds)
Mentor
    ↓ (adds)
Coordinator
    ↓ (adds)
HoD (Teacher)
```

### 1. **Subject Teacher** (Base)
- Mark attendance (with edit window)
- Upload teaching materials (PDF, PPT, videos, links)
- Create assignments
- Grade submissions
- Upload marks (internal, model, university)
- Submit weekly planner
- Submit daily work diary
- Make subject announcements

### 2. **Class Teacher**
*Inherits Subject Teacher + adds:*
- View full class student list
- Cross-subject attendance overview
- Class-wide announcements
- Student ranking system
- Internal exam overview

### 3. **Mentor**
*Inherits Class Teacher + adds:*
- View mentee profiles
- Track mentee attendance & marks
- Add counselling notes
- Track mentee follow-ups

### 4. **Coordinator**
*Inherits Mentor + adds:*
- Detect absent teachers
- Assign substitutes (logged for audit)
- Access temporary tools for absent teachers
- Teacher duty management

### 5. **HoD (Teacher)**
*Inherits all + adds:*
- Assign teachers to subjects
- Approve weekly planner
- Approve monthly diary (Level 1)
- Substitute approvals
- Department analytics

---

## 👨‍🎓 STUDENT MODULE — 18 FEATURES

### Core Features

1. **Dashboard** — Overview of attendance, assignments, marks, bus, canteen, library
2. **Attendance** — Subject-wise %, daily timeline, calendar view, shortage alerts
3. **Timetable** — Day/week view with teacher info & substitution alerts
4. **Assignments** — Submit, view feedback, check grading
5. **Academic Materials** — Download notes, offline access, search
6. **Internal Marks** — Assignments + exams + attendance + final score
7. **External Marks** — Upload PDF/image, check approval status
8. **Exams** — Timetable, hall ticket, internal results, verified external results, SGPA/CGPA
9. **Library** — Search, borrow, renew, reservations, due/overdue notifications
10. **Canteen** — Menu, token system, history, pickup time
11. **Bus** — Select bus, view route, arrival time, payment alerts
12. **Notices** — College, dept, exam, event notices with read tracking
13. **Events** — External link only, optional certificates, event calendar
14. **Feedback/Complaints** — Teacher feedback, college feedback, complaint ticketing, status tracking
15. **Fees** — Structure view, payment option, receipt download
16. **Honors** — Choose minor subject, track approval
17. **Settings** — Dark mode, notification preferences
18. **Support** — Contact admin, ticket system, FAQ

---

## 🗄️ DATABASE STRUCTURE

### Core Tables

**Users**
- id, email, password_hash, name, roles, is_active, is_blocked, last_login, created_at

**Departments**
- id, name, code, hod_id, description

**Academic Levels**
- Years (1-4), Divisions (A, B, C...), Subjects

**Timetable**
- Periods, substitutions (with approval & audit)

**Attendance**
- Student, subject, date, status, marked_by, edit_history

**Exams & Marks**
- Exam types (internal, model, university)
- Internal marks (assignment + exam + attendance)
- External marks (student-uploaded)

**Materials**
- Subject materials with versions

**Assignments**
- Questions, submissions, grades, feedback

**Planner & Diary**
- Lesson planner (syllabus coverage)
- Work diary (daily logs, monthly approval)

**Library**
- Books, issues, reservations, fines

**Bus**
- Routes, stops, selections, tracking

**Canteen**
- Menu, tokens, sales

**Fees**
- Structure, payments, receipts

---

## 📦 STORAGE BUCKETS (Supabase Storage)

1. `profile-pictures` — User avatars
2. `teaching-materials` — PDFs, PPTs, videos
3. `assignments` — Assignment files
4. `assignment-submissions` — Student submissions
5. `exam-question-papers` — Question papers
6. `exam-external-uploads` — Student-uploaded results
7. `library-documents` — Digital library books
8. `event-posters` — Event promotional materials
9. `event-certificates` — Certificates
10. `canteen-menu` — Menu images
11. `bus-route-files` — Route maps/details
12. `general-notices` — Notice attachments

---

## 🔔 PUSH NOTIFICATIONS

**When triggered:**
- ✅ Assignment created/due
- ✅ Marks published
- ✅ Attendance recorded/edited
- ✅ Planner/Diary submitted
- ✅ Notices published
- ✅ Events created
- ✅ Library book status
- ✅ Bus arrival alerts
- ✅ Fee reminders

---

## 📋 AUDIT LOGGING

**Every important action logged:**
- Attendance edits (with old → new values)
- Marks edits
- Planner/Diary actions
- Substitution assignments
- Library changes
- Bus route changes
- Canteen menu edits
- Fee verifications
- Notice publishing
- User blocking/unblocking

**Audit Log Fields:**
- User ID, Role, Action, Entity Type, Entity ID
- Old Value, New Value, Timestamp, IP Address

---

## 🔐 AUTHENTICATION

**Method:** Email-based  
**Providers:**
- Supabase Auth (email/password)
- Multi-role support on single account
- Persistent sessions with refresh tokens
- Password reset flow
- Signup with email verification

---

## 🎨 UI COMPONENTS

**Using:** Shadcn/ui (Radix UI + Tailwind CSS)

Already included components:
- Form, Input, Button, Card, Tabs, Dialog
- Accordion, Alert, Badge, Calendar, Carousel
- Checkbox, Dropdown, Hover Card, Menu, Popover
- Progress, Radio Group, Scroll Area, Select, Sidebar
- Skeleton, Slider, Table, Toast notifications

---

## 📱 RESPONSIVE DESIGN

- **Mobile-first approach**
- **Breakpoints:** Mobile, Tablet, Desktop
- **Navigation:** Bottom nav (mobile), Sidebar (tablet+)
- **Dark/Light theme support**

---

## 🚀 DEPLOYMENT CHECKLIST

### Pre-deployment
- [ ] Environment variables configured
- [ ] Database migrations completed
- [ ] API endpoints tested
- [ ] Push notifications configured
- [ ] Storage buckets created
- [ ] Email templates set up
- [ ] Audit logging verified

### Deployment
- [ ] Build optimized: `npm run build`
- [ ] Deploy to Vercel/Netlify/custom server
- [ ] Configure domain & SSL
- [ ] Set up CI/CD pipeline
- [ ] Monitor error logs
- [ ] Test all auth flows
- [ ] Verify notifications

### Post-deployment
- [ ] Set up monitoring/analytics
- [ ] Configure backup strategy
- [ ] Document API endpoints
- [ ] Train admin team
- [ ] Set up support ticketing

---

## 📈 SCALABILITY CONSIDERATIONS

1. **Database**: Indexed queries, connection pooling
2. **API**: GraphQL subscriptions for real-time updates
3. **Storage**: CDN for asset delivery
4. **Notifications**: Queue-based push system
5. **Caching**: Redis for frequently accessed data
6. **Load Balancing**: Multi-region deployment option

---

## 🔄 IMPLEMENTATION PHASES

### Phase 1: Foundation (Weeks 1-2)
- Authentication system
- Database schema
- Basic layouts
- Role context setup

### Phase 2: Admin Module (Weeks 3-4)
- Super Admin dashboard
- User management
- Academic structure
- Basic CRUD operations

### Phase 3: Teacher Module (Weeks 5-6)
- Subject Teacher features
- Attendance marking
- Assignment management
- Planner/Diary

### Phase 4: Student Module (Weeks 7-9)
- Dashboard
- Attendance view
- Marks tracking
- Library, Bus, Canteen, Fees

### Phase 5: Integration (Week 10)
- Real-time notifications
- Audit logging
- Analytics
- Performance optimization

### Phase 6: Testing & Deployment (Week 11-12)
- UAT testing
- Bug fixes
- Documentation
- Production deployment

---

## 🛠 TECH STACK SUMMARY

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18 + TypeScript |
| **Bundler** | Vite 6.3 |
| **UI Library** | Shadcn/ui (Radix UI + Tailwind) |
| **State Management** | React Context |
| **Backend API** | Hasura GraphQL |
| **Database** | PostgreSQL |
| **Auth** | Supabase Auth |
| **Storage** | Supabase Storage |
| **Real-time** | GraphQL Subscriptions |
| **Notifications** | Supabase Realtime + Push Notifications |
| **Deployment** | Vercel / Netlify / Docker |

---

## 📞 SUPPORT & CONTACTS

For feature requests, bug reports, or technical issues:
- Create GitHub issue
- Contact development team
- Access in-app support module

---

## ✅ STATUS

**Current Status:** Module structure and types fully defined  
**Next Steps:** Implement authentication and first admin module  
**Last Updated:** November 25, 2025

---

**This is the COMPLETE, OFFICIAL specification for the JPM College App.**  
**All requirements have been documented and organized for implementation.**
