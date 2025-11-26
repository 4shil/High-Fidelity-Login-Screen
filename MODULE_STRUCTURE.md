# JPM COLLEGE APP — MODULE STRUCTURE

## 📁 Directory Organization

```
src/
├── modules/
│   ├── admin/                 # Admin Module (9 roles)
│   ├── teacher/              # Teacher Module (5 roles)
│   ├── student/              # Student Module (18 features)
│   └── shared/               # Shared components & utilities
├── context/                  # React Context Providers
├── types/                    # TypeScript type definitions
├── constants/                # App-wide constants
├── utils/                    # Utility functions
├── hooks/                    # Custom React hooks
├── components/               # Existing UI components (preserved)
└── App.tsx                   # Main app routing
```

---

## 🟥 ADMIN MODULE

### Role Hierarchy (Top → Bottom)

1. **Super Admin** — `src/modules/admin/super-admin/`
   - Full system control
   - Create/delete admins
   - Force logout, backups

2. **Principal** — `src/modules/admin/principal/`
   - Approve Work Diary
   - Monitor Lesson Planner
   - View analytics

3. **Department Admin** — `src/modules/admin/department-admin/`
   - Manage department students
   - Block/unblock students
   - Department notices

4. **HoD (in Admin)** — `src/modules/admin/hod/`
   - Approve planner/diary
   - Assign subjects
   - Department analytics

5. **Exam Cell Admin** — `src/modules/admin/exam-cell/`
   - Set exam dates
   - Verify marks
   - Exam notifications

6. **Library Admin** — `src/modules/admin/library-admin/`
   - Manage books
   - Issue/return/renew
   - Set fines

7. **Bus Admin** — `src/modules/admin/bus-admin/`
   - Manage routes
   - Approve selections
   - Arrival updates

8. **Canteen Admin** — `src/modules/admin/canteen-admin/`
   - Daily menu
   - Token management
   - Sales summary

9. **Fee Admin** — `src/modules/admin/fee-admin/`
   - Create fee structure
   - Verify payments
   - Fee analytics

### Admin Features

Each admin folder should contain:

```
admin-role/
├── Dashboard.tsx
├── pages/
│   ├── UserManagement.tsx
│   ├── Analytics.tsx
│   └── Settings.tsx
├── components/
│   └── [role-specific components]
└── hooks/
    └── [role-specific hooks]
```

---

## 🟦 TEACHER MODULE

### Role Hierarchy (Base → Advanced)

1. **Subject Teacher** — `src/modules/teacher/subject-teacher/`
   - Base role for all teachers
   - Mark attendance
   - Upload materials
   - Create assignments
   - Grade submissions
   - Upload marks
   - Submit planner & diary

2. **Class Teacher** — `src/modules/teacher/class-teacher/`
   - Extends Subject Teacher
   - View full class student list
   - Cross-subject attendance
   - Class-wide announcements

3. **Mentor** — `src/modules/teacher/mentor/`
   - Extends Class Teacher
   - View mentee profiles
   - Counselling notes
   - Follow-ups

4. **Coordinator** — `src/modules/teacher/coordinator/`
   - Extends Mentor
   - Detect absent teachers
   - Assign substitutes
   - Temporary tool access

5. **HoD (in Teacher)** — `src/modules/teacher/hod/`
   - Extends all roles
   - Assign teachers to subjects
   - Approve planner/diary
   - Department analytics

### Teacher Features (per role)

```
teacher-role/
├── Dashboard.tsx
├── sections/
│   ├── AttendanceMarking.tsx
│   ├── Materials.tsx
│   ├── Assignments.tsx
│   ├── Exams.tsx
│   ├── LessonPlanner.tsx
│   ├── WorkDiary.tsx
│   └── Announcements.tsx
├── components/
└── hooks/
```

---

## 🟩 STUDENT MODULE

### 18 Core Features

```
student/
├── dashboard/              # 1. Dashboard
├── attendance/             # 2. Attendance
├── timetable/              # 3. Timetable
├── assignments/            # 4. Assignments
├── materials/              # 5. Academic Materials
├── internal-marks/         # 6. Internal Marks
├── external-marks/         # 7. External Marks
├── exams/                  # 8. Exams
├── library/                # 9. Library
├── canteen/                # 10. Canteen
├── bus/                    # 11. Bus
├── notices/                # 12. Notices
├── events/                 # 13. Events
├── feedback/               # 14. Feedback/Complaints
├── fees/                   # 15. Fees
├── honors/                 # 16. Honors (Major-Minor)
├── settings/               # 17. Settings
└── support/                # 18. Support
```

### Each Feature Folder Contains

```
feature/
├── index.tsx or [Feature].tsx
├── components/
│   └── [feature-specific components]
├── hooks/
│   └── [feature-specific hooks]
└── types.ts (if needed)
```

---

## 🟧 SHARED MODULE

Reusable components across all modules:

```
modules/shared/
├── components/
│   ├── BottomNav/           # Navigation bar (existing)
│   ├── Header/              # Header component
│   ├── Sidebar/             # Sidebar (admin/teacher)
│   ├── RoleSwitch/          # Role switcher
│   ├── AuditLog/            # Audit log viewer
│   └── Notifications/       # Notification center
├── layouts/
│   ├── AdminLayout.tsx
│   ├── TeacherLayout.tsx
│   └── StudentLayout.tsx
└── hooks/
    └── useSharedData.ts
```

---

## 📦 CONTEXT & STATE MANAGEMENT

### AuthContext.tsx

```typescript
- user: User | null
- token: AuthToken | null
- isAuthenticated: boolean
- login(email, password)
- logout()
- register(email, password, name)
- forgotPassword(email)
```

### RoleContext.tsx

```typescript
- currentRole: AdminRole | TeacherRole | 'student'
- setCurrentRole()
- hasPermission(permission: string)
- canAccessModule(module: string)
```

---

## 🎯 TYPES & CONSTANTS

### /types/index.ts

Contains all TypeScript interfaces:
- User types (Admin, Teacher, Student)
- Academic structures (Department, Year, Subject)
- Management models (Attendance, Exam, Assignment, etc.)
- Notification & storage definitions

### /constants/index.ts

- `ADMIN_ROLES`
- `TEACHER_ROLES`
- `ATTENDANCE_STATUS`
- `EXAM_TYPES`
- `APPROVAL_STATUS`
- `NOTIFICATION_TYPES`
- Storage bucket names

---

## 🛠 UTILITIES & HOOKS

### /utils/index.ts

- `getRoleDisplayName(role)`
- `isAdminRole(role)` / `isTeacherRole(role)` / `isStudentRole(role)`
- `formatDate()`, `formatCurrency()`, `formatTime()`
- `isValidEmail()`, `isValidPassword()`
- `calculateAttendancePercentage()`, `calculateGPA()`
- `generateTicketNumber()`, `generateToken()`

### /hooks/index.ts

- `useAuth()` — Access auth context
- `useRole()` — Access role context
- `useHasPermission(permission)` — Check permission
- `useCanAccessModule(module)` — Check module access

---

## 🔄 ROUTING STRATEGY

Main `App.tsx` routing logic:

```typescript
if (!isAuthenticated) {
  return <LoginScreen />
} else {
  switch(currentRole) {
    case 'super-admin':
    case 'principal':
    case 'department-admin':
    case 'hod':
    case 'exam-cell-admin':
    case 'library-admin':
    case 'bus-admin':
    case 'canteen-admin':
    case 'fee-admin':
      return <AdminModule />
    
    case 'subject-teacher':
    case 'class-teacher':
    case 'mentor':
    case 'coordinator':
      return <TeacherModule />
    
    case 'student':
      return <StudentModule />
  }
}
```

---

## 📝 IMPLEMENTATION CHECKLIST

### Phase 1: Foundation
- [x] Create folder structure
- [x] Define types & constants
- [x] Set up context providers
- [x] Create utility functions
- [ ] Integrate authentication API

### Phase 2: Admin Module
- [ ] Super Admin dashboard & features
- [ ] Principal dashboard & approvals
- [ ] Department Admin management
- [ ] HoD features
- [ ] Other admin roles

### Phase 3: Teacher Module
- [ ] Subject Teacher base features
- [ ] Class Teacher features
- [ ] Mentor features
- [ ] Coordinator features
- [ ] HoD features

### Phase 4: Student Module
- [ ] Dashboard
- [ ] Attendance module
- [ ] Timetable module
- [ ] Assignments module
- [ ] Marks modules
- [ ] Library, Bus, Canteen, Fees
- [ ] Notices, Events, Feedback
- [ ] Settings & Support

### Phase 5: Integration
- [ ] Connect to Supabase/Hasura
- [ ] Implement push notifications
- [ ] Set up audit logging
- [ ] Add analytics
- [ ] Deploy

---

## 🔗 INTER-MODULE COMMUNICATION

Example: When Teacher submits Planner

1. Teacher calls `submitPlanner()` in Subject Teacher module
2. Sends data to Supabase
3. Triggers notification via Context
4. HoD sees notification in approval dashboard
5. HoD approves → triggers Student notification (if applicable)
6. Audit log recorded
7. Analytics updated

---

## 📚 EXISTING COMPONENTS

The following existing components are preserved and integrated:

```
src/components/
├── Dashboard.tsx              → Student Dashboard
├── TeacherDashboard.tsx       → Teacher Dashboard
├── TeacherClassList.tsx       → Teacher Class View
├── ClassDetails.tsx           → Class Details
├── Attendance.tsx             → Student Attendance
├── Materials.tsx              → Student Materials
├── Results.tsx                → Student Results/Marks
├── Profile.tsx                → Profile management
├── EditProfile.tsx
├── ChangePassword.tsx
├── Settings.tsx               → Settings
├── HelpSupport.tsx            → Support
├── Notifications.tsx          → Notifications
├── About.tsx
├── MoreMenu.tsx               → More options
├── Fees.tsx                   → Fees module
├── SignUp.tsx                 → Registration
└── ui/                        → Shadcn UI components (preserved)
```

These are gradually moved into the modular structure as each module is built.

---

## ✅ NEXT STEPS

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Test authentication flow
4. Build first admin module (Super Admin)
5. Iterate through modules
6. Connect backend APIs
7. Add push notifications
8. Deploy

---

**Document Version:** 2025 Final Edition  
**Last Updated:** November 25, 2025  
**Status:** Implementation Guide
