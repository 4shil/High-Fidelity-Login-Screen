// =============================================
// JPM COLLEGE APP — CONSTANTS
// =============================================

// Admin Roles
export const ADMIN_ROLES = {
  SUPER_ADMIN: 'super-admin',
  PRINCIPAL: 'principal',
  DEPARTMENT_ADMIN: 'department-admin',
  HOD: 'hod',
  EXAM_CELL_ADMIN: 'exam-cell-admin',
  LIBRARY_ADMIN: 'library-admin',
  BUS_ADMIN: 'bus-admin',
  CANTEEN_ADMIN: 'canteen-admin',
  FEE_ADMIN: 'fee-admin',
} as const;

// Teacher Roles
export const TEACHER_ROLES = {
  SUBJECT_TEACHER: 'subject-teacher',
  CLASS_TEACHER: 'class-teacher',
  MENTOR: 'mentor',
  COORDINATOR: 'coordinator',
  HOD: 'hod',
} as const;

// User Roles
export const USER_ROLES = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  STUDENT: 'student',
} as const;

// Attendance Status
export const ATTENDANCE_STATUS = {
  PRESENT: 'present',
  ABSENT: 'absent',
  LEAVE: 'leave',
  UNEXCUSED: 'unexcused',
} as const;

// Exam Types
export const EXAM_TYPES = {
  INTERNAL: 'internal',
  MODEL: 'model',
  UNIVERSITY: 'university',
} as const;

// Approval Status
export const APPROVAL_STATUS = {
  PENDING: 'pending',
  APPROVED: 'approved',
  REJECTED: 'rejected',
  LEVEL1: 'level1', // HoD approval
} as const;

// Complaint Status
export const COMPLAINT_STATUS = {
  OPEN: 'open',
  IN_PROGRESS: 'in-progress',
  RESOLVED: 'resolved',
  CLOSED: 'closed',
} as const;

// Payment Status
export const PAYMENT_STATUS = {
  PENDING: 'pending',
  VERIFIED: 'verified',
  REJECTED: 'rejected',
} as const;

// Material Types
export const MATERIAL_TYPES = {
  PDF: 'pdf',
  PPT: 'ppt',
  VIDEO: 'video',
  LINK: 'link',
  DOCUMENT: 'document',
} as const;

// Notice Types
export const NOTICE_TYPES = {
  COLLEGE: 'college',
  DEPARTMENT: 'department',
  CLASS: 'class',
  EXAM: 'exam',
  EVENT: 'event',
} as const;

// Bus Status
export const BUS_STATUS = {
  ON_TIME: 'on-time',
  DELAYED: 'delayed',
  ARRIVED: 'arrived',
} as const;

// Token Status
export const TOKEN_STATUS = {
  PENDING: 'pending',
  PREPARED: 'prepared',
  COLLECTED: 'collected',
} as const;

// Days of Week
export const DAYS_OF_WEEK = [
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT',
] as const;

// Semesters (typically 2 per year)
export const SEMESTERS = [1, 2] as const;

// Default Academic Year Configuration
export const ACADEMIC_YEARS = {
  MIN_YEARS: 1,
  MAX_YEARS: 4, // B.Tech/Bachelor typically 4 years
  SEMESTERS_PER_YEAR: 2,
  TOTAL_SEMESTERS: 8,
} as const;

// Push Notification Types
export const NOTIFICATION_TYPES = {
  ASSIGNMENT: 'assignment',
  MARKS: 'marks',
  ATTENDANCE: 'attendance',
  PLANNER: 'planner',
  DIARY: 'diary',
  NOTICE: 'notice',
  EVENT: 'event',
  LIBRARY: 'library',
  BUS: 'bus',
  FEES: 'fees',
} as const;

// Gender Options
export const GENDER_OPTIONS = {
  MALE: 'M',
  FEMALE: 'F',
  OTHER: 'Other',
} as const;

// Payment Methods
export const PAYMENT_METHODS = {
  ONLINE: 'online',
  CHEQUE: 'cheque',
  CASH: 'cash',
} as const;

// Rating Scale
export const RATING_SCALE = {
  MIN: 1,
  MAX: 5,
} as const;

// Book Reservation Priority
export const RESERVATION_PRIORITY = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
} as const;
