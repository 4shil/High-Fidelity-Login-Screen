// =============================================
// JPM COLLEGE APP — TYPE DEFINITIONS
// =============================================

// ==================== ADMIN TYPES ====================

export type AdminRole = 
  | 'super-admin'
  | 'principal'
  | 'department-admin'
  | 'hod'
  | 'exam-cell-admin'
  | 'library-admin'
  | 'bus-admin'
  | 'canteen-admin'
  | 'fee-admin';

export interface SuperAdmin {
  id: string;
  email: string;
  name: string;
  role: 'super-admin';
  permissions: 'all';
  createdAt: Date;
}

export interface Principal {
  id: string;
  email: string;
  name: string;
  role: 'principal';
  department?: string;
  permissions: string[];
}

export interface DepartmentAdmin {
  id: string;
  email: string;
  name: string;
  role: 'department-admin';
  departmentId: string;
  departmentName: string;
  permissions: string[];
}

export interface HoDAdmin {
  id: string;
  email: string;
  name: string;
  role: 'hod';
  departmentId: string;
  departmentName: string;
  permissions: string[];
}

export interface ExamCellAdmin {
  id: string;
  email: string;
  name: string;
  role: 'exam-cell-admin';
  permissions: string[];
}

export interface LibraryAdmin {
  id: string;
  email: string;
  name: string;
  role: 'library-admin';
  permissions: string[];
}

export interface BusAdmin {
  id: string;
  email: string;
  name: string;
  role: 'bus-admin';
  permissions: string[];
}

export interface CanteenAdmin {
  id: string;
  email: string;
  name: string;
  role: 'canteen-admin';
  permissions: string[];
}

export interface FeeAdmin {
  id: string;
  email: string;
  name: string;
  role: 'fee-admin';
  permissions: string[];
}

// ==================== TEACHER TYPES ====================

export type TeacherRole = 
  | 'subject-teacher'
  | 'class-teacher'
  | 'mentor'
  | 'coordinator'
  | 'hod';

export interface SubjectTeacher {
  id: string;
  email: string;
  name: string;
  role: 'subject-teacher';
  departmentId: string;
  departmentName: string;
  subjectId: string;
  subjectName: string;
  qualifications: string[];
  experience: number;
}

export interface ClassTeacher extends SubjectTeacher {
  role: 'class-teacher';
  classId: string;
  className: string;
  division: string;
}

export interface Mentor extends ClassTeacher {
  role: 'mentor';
  menteeIds: string[];
}

export interface Coordinator extends Mentor {
  role: 'coordinator';
  canAssignSubstitutes: boolean;
}

export interface HoDTeacher extends Coordinator {
  role: 'hod';
  canApproveUsers: boolean;
  canApprovePlannerDiary: boolean;
}

// ==================== STUDENT TYPES ====================

export interface Student {
  id: string;
  email: string;
  name: string;
  rollNumber: string;
  departmentId: string;
  departmentName: string;
  yearId: string;
  yearNumber: number;
  divisionId: string;
  divisionName: string;
  batch: string;
  photo?: string;
  phone?: string;
  address?: string;
  emergencyContact?: string;
  dateOfBirth?: Date;
  gender?: 'M' | 'F' | 'Other';
}

// ==================== ACADEMIC STRUCTURE ====================

export interface Department {
  id: string;
  name: string;
  code: string;
  hodId?: string;
  description?: string;
}

export interface Year {
  id: string;
  departmentId: string;
  number: number; // 1, 2, 3, 4
  name: string; // "First Year", "Second Year", etc.
}

export interface Division {
  id: string;
  yearId: string;
  name: string; // "A", "B", "C"
  capacity: number;
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  departmentId: string;
  yearId: string;
  credits?: number;
  isMajor: boolean;
  isMinor: boolean;
  type: 'theory' | 'practical' | 'both';
}

export interface SubjectAllocation {
  id: string;
  subjectId: string;
  teacherId: string;
  yearId: string;
  divisionId?: string; // For class-specific allocation
  semester?: number;
}

// ==================== ACADEMIC MANAGEMENT ====================

export interface Timetable {
  id: string;
  yearId: string;
  divisionId: string;
  semester: number;
  startDate: Date;
  endDate: Date;
  periods: TimetablePeriod[];
  isPublished: boolean;
}

export interface TimetablePeriod {
  id: string;
  dayOfWeek: 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT';
  periodNumber: number;
  startTime: string; // HH:MM
  endTime: string;   // HH:MM
  subjectId: string;
  teacherId: string;
  roomNumber: string;
  substitute?: {
    teacherId: string;
    reason: string;
    approvedBy: string;
    approvalDate: Date;
  };
}

export interface Attendance {
  id: string;
  studentId: string;
  subjectId: string;
  date: Date;
  status: 'present' | 'absent' | 'leave' | 'unexcused';
  markedBy: string;
  markedAt: Date;
  editHistory?: AttendanceEdit[];
}

export interface AttendanceEdit {
  previousStatus: string;
  newStatus: string;
  editedBy: string;
  editedAt: Date;
  reason?: string;
}

// ==================== ASSIGNMENTS ====================

export interface Assignment {
  id: string;
  subjectId: string;
  teacherId: string;
  title: string;
  description: string;
  dueDate: Date;
  maxMarks: number;
  attachments: string[]; // Storage URLs
  createdAt: Date;
  submissions: AssignmentSubmission[];
}

export interface AssignmentSubmission {
  id: string;
  assignmentId: string;
  studentId: string;
  submittedAt: Date;
  files: string[]; // Storage URLs
  marks?: number;
  feedback?: string;
  gradedAt?: Date;
  gradedBy?: string;
}

// ==================== EXAMS ====================

export type ExamType = 'internal' | 'model' | 'university';

export interface Exam {
  id: string;
  name: string;
  type: ExamType;
  departmentId: string;
  yearId: string;
  startDate: Date;
  endDate: Date;
  subjects: ExamSubject[];
  isPublished: boolean;
  createdBy: string;
  createdAt: Date;
}

export interface ExamSubject {
  id: string;
  examId: string;
  subjectId: string;
  date: Date;
  startTime: string;
  endTime: string;
  maxMarks: number;
  totalStudents: number;
  hall?: string;
}

export interface InternalMarks {
  id: string;
  studentId: string;
  subjectId: string;
  semester: number;
  assignmentMarks: number;
  examMarks: number;
  attendanceMarks: number;
  totalMarks: number;
  verificationStatus: 'pending' | 'verified' | 'rejected';
  verifiedBy?: string;
  verifiedAt?: Date;
}

export interface ExternalMarks {
  id: string;
  studentId: string;
  subjectId: string;
  semester: number;
  uploadedAt: Date;
  documentUrl: string; // PDF/Image URL
  marks?: number;
  approvalStatus: 'pending' | 'approved' | 'rejected';
  approvedBy?: string;
  approvedAt?: Date;
}

// ==================== MATERIALS & PLANNER ====================

export interface Material {
  id: string;
  subjectId: string;
  teacherId: string;
  title: string;
  description: string;
  type: 'pdf' | 'ppt' | 'video' | 'link' | 'document';
  url: string;
  uploadedAt: Date;
  visible: boolean;
  notified: boolean;
}

export interface LessonPlanner {
  id: string;
  teacherId: string;
  subjectId: string;
  yearId: string;
  semester: number;
  syllabus: string[]; // Topics covered
  progressPercentage: number;
  submittedAt?: Date;
  approvedBy?: string;
  approvalStatus: 'pending' | 'approved' | 'rejected';
}

export interface WorkDiary {
  id: string;
  teacherId: string;
  subjectId?: string;
  date: Date;
  content: string;
  monthlySubmission?: {
    month: number;
    year: number;
    submittedAt: Date;
    approvalStatus: 'pending' | 'level1' | 'approved' | 'rejected';
    approvedBy?: string;
    hodApproval?: boolean;
    principalApproval?: boolean;
  };
}

// ==================== NOTICES & ANNOUNCEMENTS ====================

export interface Notice {
  id: string;
  title: string;
  content: string;
  type: 'college' | 'department' | 'class' | 'exam' | 'event';
  scope: 'all' | 'departmentId' | 'classId';
  scopeId?: string;
  publishedBy: string;
  publishedAt: Date;
  scheduledFor?: Date;
  attachments?: string[];
  readBy?: string[]; // Student IDs
}

export interface Announcement {
  id: string;
  subjectId: string;
  teacherId: string;
  title: string;
  content: string;
  attachments?: string[];
  createdAt: Date;
  notificationSent: boolean;
}

// ==================== LIBRARY ====================

export interface LibraryBook {
  id: string;
  isbn: string;
  title: string;
  author: string;
  publisher: string;
  yearPublished: number;
  totalCopies: number;
  availableCopies: number;
  category: string;
  shelfLocation: string;
  documentUrl?: string;
}

export interface BookIssue {
  id: string;
  bookId: string;
  studentId: string;
  issuedDate: Date;
  dueDate: Date;
  returnedDate?: Date;
  renewalCount: number;
  fineAmount: number;
  fineStatus: 'pending' | 'paid' | 'waived';
}

export interface BookReservation {
  id: string;
  bookId: string;
  studentId: string;
  reservedDate: Date;
  queuePosition: number;
}

// ==================== BUS ====================

export interface BusRoute {
  id: string;
  routeNumber: string;
  name: string;
  stops: BusStop[];
  capacity: number;
  totalSeated: number;
}

export interface BusStop {
  id: string;
  stopNumber: number;
  name: string;
  location: string;
  estimatedTime: string; // HH:MM
  lat?: number;
  lng?: number;
}

export interface BusSelection {
  id: string;
  studentId: string;
  routeId: string;
  selectedDate: Date;
  approvalStatus: 'pending' | 'approved' | 'rejected';
  approvedAt?: Date;
}

export interface BusArrival {
  id: string;
  routeId: string;
  currentStop: string;
  estimatedArrivalTime: string;
  actualArrivalTime?: string;
  status: 'on-time' | 'delayed' | 'arrived';
  updatedAt: Date;
}

// ==================== CANTEEN ====================

export interface CanteenMenu {
  id: string;
  date: Date;
  items: MenuItem[];
  totalTokensSold: number;
  totalRevenue: number;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  sold: number;
  description?: string;
}

export interface CanteenToken {
  id: string;
  studentId: string;
  menuItemId: string;
  date: Date;
  quantity: number;
  tokenNumber: string;
  pickupTime: string;
  status: 'pending' | 'prepared' | 'collected';
  collectedAt?: Date;
}

// ==================== FEES ====================

export interface FeeStructure {
  id: string;
  departmentId: string;
  yearId: string;
  semester: number;
  components: FeeComponent[];
  totalAmount: number;
  dueDate: Date;
}

export interface FeeComponent {
  id: string;
  name: string;
  amount: number;
  description?: string;
}

export interface FeePayment {
  id: string;
  studentId: string;
  feeStructureId: string;
  amountPaid: number;
  paymentDate: Date;
  paymentMethod: 'online' | 'cheque' | 'cash';
  transactionId?: string;
  receiptUrl?: string;
  verificationStatus: 'pending' | 'verified' | 'rejected';
  verifiedBy?: string;
  verifiedAt?: Date;
}

// ==================== HONORS (MAJOR-MINOR) ====================

export interface HonorSelection {
  id: string;
  studentId: string;
  minorSubjectId: string;
  selectedDate: Date;
  approvalStatus: 'pending' | 'approved' | 'rejected';
  approvedBy?: string;
  approvedAt?: Date;
}

// ==================== FEEDBACK & COMPLAINTS ====================

export interface TeacherFeedback {
  id: string;
  studentId: string;
  teacherId: string;
  rating: number; // 1-5
  feedback: string;
  submittedAt: Date;
}

export interface CollegeFeedback {
  id: string;
  studentId: string;
  category: string;
  feedback: string;
  attachments?: string[];
  submittedAt: Date;
}

export interface Complaint {
  id: string;
  studentId: string;
  category: string;
  description: string;
  attachments?: string[];
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  assignedTo?: string;
  createdAt: Date;
  resolvedAt?: Date;
  resolution?: string;
  ticketNumber: string;
}

// ==================== EVENTS ====================

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  location?: string;
  externalRegistrationLink?: string;
  poster?: string;
  createdBy: string;
  createdAt: Date;
}

export interface EventCertificate {
  id: string;
  eventId: string;
  studentId: string;
  certificateUrl: string;
  uploadedBy: string;
  uploadedAt: Date;
}

// ==================== AUDIT LOGS ====================

export interface AuditLog {
  id: string;
  userId: string;
  userRole: AdminRole | TeacherRole | 'student';
  action: string;
  entityType: string;
  entityId: string;
  oldValue?: any;
  newValue?: any;
  timestamp: Date;
  ipAddress?: string;
}

// ==================== USER AUTHENTICATION ====================

export interface User {
  id: string;
  email: string;
  password?: string; // Only in login context
  name: string;
  roles: (AdminRole | TeacherRole | 'student')[];
  isActive: boolean;
  isBlocked: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: 'Bearer';
}

// ==================== PUSH NOTIFICATION ====================

export interface PushNotification {
  id: string;
  userId: string;
  title: string;
  body: string;
  type: 'assignment' | 'marks' | 'attendance' | 'planner' | 'diary' | 'notice' | 'event' | 'library' | 'bus' | 'fees';
  relatedId?: string;
  read: boolean;
  createdAt: Date;
}

// ==================== STORAGE BUCKETS ====================

export const STORAGE_BUCKETS = {
  PROFILE_PICTURES: 'profile-pictures',
  TEACHING_MATERIALS: 'teaching-materials',
  ASSIGNMENTS: 'assignments',
  ASSIGNMENT_SUBMISSIONS: 'assignment-submissions',
  EXAM_QUESTION_PAPERS: 'exam-question-papers',
  EXAM_EXTERNAL_UPLOADS: 'exam-external-uploads',
  LIBRARY_DOCUMENTS: 'library-documents',
  EVENT_POSTERS: 'event-posters',
  EVENT_CERTIFICATES: 'event-certificates',
  CANTEEN_MENU: 'canteen-menu',
  BUS_ROUTE_FILES: 'bus-route-files',
  GENERAL_NOTICES: 'general-notices',
} as const;
