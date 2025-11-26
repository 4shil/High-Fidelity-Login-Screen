import { createContext, useState, ReactNode } from 'react';
import { AdminRole, TeacherRole } from '../types';

interface RoleContextType {
  currentRole: AdminRole | TeacherRole | 'student' | null;
  setCurrentRole: (role: AdminRole | TeacherRole | 'student' | null) => void;
  hasPermission: (permission: string) => boolean;
  canAccessModule: (module: string) => boolean;
}

export const RoleContext = createContext<RoleContextType | undefined>(undefined);

// Role-based permissions mapping
const ROLE_PERMISSIONS: Record<string, string[]> = {
  'super-admin': ['all'],
  'principal': [
    'view_timetable',
    'view_analytics',
    'block_unblock_users',
    'approve_work_diary',
    'monitor_lesson_planner',
  ],
  'department-admin': [
    'view_dept_teachers',
    'view_dept_students',
    'block_unblock_students',
    'view_attendance',
    'view_exam_data',
    'publish_notices',
  ],
  'hod': [
    'approve_planner',
    'approve_diary',
    'assign_subjects',
    'assign_substitutes',
    'view_dept_analytics',
  ],
  'exam-cell-admin': [
    'set_exam_dates',
    'publish_timetable',
    'verify_marks',
    'send_notifications',
    'view_analytics',
  ],
  'library-admin': [
    'manage_books',
    'issue_return',
    'set_fines',
    'manage_reservations',
    'view_analytics',
  ],
  'bus-admin': [
    'manage_routes',
    'approve_selections',
    'send_arrival_updates',
    'send_alerts',
  ],
  'canteen-admin': [
    'manage_menu',
    'manage_tokens',
    'view_sales',
    'send_updates',
  ],
  'fee-admin': [
    'create_structure',
    'verify_payments',
    'upload_receipts',
    'send_reminders',
    'view_analytics',
  ],
  'subject-teacher': [
    'mark_attendance',
    'upload_materials',
    'create_assignments',
    'grade_submissions',
    'upload_marks',
    'submit_planner',
    'submit_diary',
  ],
  'class-teacher': [
    'view_class_students',
    'view_cross_subject_attendance',
    'view_exam_overview',
    'make_announcements',
  ],
  'mentor': [
    'view_mentee_profiles',
    'view_mentee_attendance',
    'view_mentee_marks',
    'add_counselling_notes',
  ],
  'coordinator': [
    'detect_absent_teachers',
    'assign_substitutes',
    'access_temp_tools',
  ],
  'student': [
    'view_dashboard',
    'view_attendance',
    'view_timetable',
    'submit_assignments',
    'view_marks',
    'download_materials',
    'book_library',
    'select_bus',
    'buy_canteen_tokens',
    'view_fees',
  ],
};

const ROLE_MODULES: Record<string, string[]> = {
  'super-admin': [
    'admin-dashboard',
    'user-management',
    'academic-structure',
    'timetable',
    'attendance',
    'exams',
    'library',
    'bus',
    'canteen',
    'fees',
    'notices',
    'audit-logs',
  ],
  'principal': [
    'admin-dashboard',
    'analytics',
    'timetable',
    'notices',
  ],
  'department-admin': [
    'dept-dashboard',
    'student-management',
    'attendance',
    'notices',
  ],
  'hod': [
    'dept-dashboard',
    'planner-approval',
    'diary-approval',
    'subject-allocation',
  ],
  'exam-cell-admin': [
    'exam-management',
    'marks-verification',
  ],
  'library-admin': [
    'library-management',
    'book-tracking',
  ],
  'bus-admin': [
    'bus-management',
    'route-tracking',
  ],
  'canteen-admin': [
    'canteen-management',
    'menu-management',
  ],
  'fee-admin': [
    'fee-management',
    'payment-verification',
  ],
  'subject-teacher': [
    'class-management',
    'attendance',
    'materials',
    'assignments',
    'marks',
    'planner',
    'diary',
  ],
  'class-teacher': [
    'class-dashboard',
    'student-management',
    'attendance',
  ],
  'mentor': [
    'mentee-management',
    'counselling',
  ],
  'coordinator': [
    'substitute-management',
  ],
  'student': [
    'dashboard',
    'attendance',
    'timetable',
    'assignments',
    'materials',
    'marks',
    'library',
    'bus',
    'canteen',
    'fees',
    'notices',
    'events',
    'feedback',
  ],
};

export const RoleProvider = ({ children }: { children: ReactNode }) => {
  const [currentRole, setCurrentRole] = useState<AdminRole | TeacherRole | 'student' | null>(null);

  const hasPermission = (permission: string): boolean => {
    if (!currentRole) return false;
    const permissions = ROLE_PERMISSIONS[currentRole] || [];
    return permissions.includes('all') || permissions.includes(permission);
  };

  const canAccessModule = (module: string): boolean => {
    if (!currentRole) return false;
    const modules = ROLE_MODULES[currentRole] || [];
    return modules.includes(module);
  };

  return (
    <RoleContext.Provider
      value={{
        currentRole,
        setCurrentRole,
        hasPermission,
        canAccessModule,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};
