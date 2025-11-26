// =============================================
// JPM COLLEGE APP — UTILITY FUNCTIONS
// =============================================

import { AdminRole, TeacherRole, User } from '../types';

// ==================== ROLE UTILITIES ====================

export const getRoleDisplayName = (role: AdminRole | TeacherRole | 'student'): string => {
  const roleNames: Record<string, string> = {
    'super-admin': 'Super Admin',
    'principal': 'Principal',
    'department-admin': 'Department Admin',
    'hod': 'Head of Department',
    'exam-cell-admin': 'Exam Cell Admin',
    'library-admin': 'Library Admin',
    'bus-admin': 'Bus Admin',
    'canteen-admin': 'Canteen Admin',
    'fee-admin': 'Fee Admin',
    'subject-teacher': 'Subject Teacher',
    'class-teacher': 'Class Teacher',
    'mentor': 'Mentor',
    'coordinator': 'Coordinator',
    'student': 'Student',
  };
  return roleNames[role] || role;
};

export const getRoleColor = (role: AdminRole | TeacherRole | 'student'): string => {
  const roleColors: Record<string, string> = {
    'super-admin': '#FF0000', // Red
    'principal': '#FFA500', // Orange
    'department-admin': '#4169E1', // Blue
    'hod': '#FFD700', // Gold
    'exam-cell-admin': '#8B4513', // Brown
    'library-admin': '#8B0000', // Dark Red
    'bus-admin': '#4B0082', // Indigo
    'canteen-admin': '#8B8B00', // Yellow-Green
    'fee-admin': '#006400', // Dark Green
    'subject-teacher': '#228B22', // Forest Green
    'class-teacher': '#20B2AA', // Light Sea Green
    'mentor': '#9932CC', // Dark Orchid
    'coordinator': '#FF69B4', // Hot Pink
    'student': '#0066CC', // Blue
  };
  return roleColors[role] || '#808080'; // Gray as default
};

export const isAdminRole = (role: AdminRole | TeacherRole | 'student'): boolean => {
  const adminRoles = [
    'super-admin',
    'principal',
    'department-admin',
    'hod',
    'exam-cell-admin',
    'library-admin',
    'bus-admin',
    'canteen-admin',
    'fee-admin',
  ];
  return adminRoles.includes(role as AdminRole);
};

export const isTeacherRole = (role: AdminRole | TeacherRole | 'student'): boolean => {
  const teacherRoles = [
    'subject-teacher',
    'class-teacher',
    'mentor',
    'coordinator',
    'hod',
  ];
  return teacherRoles.includes(role as TeacherRole);
};

export const isStudentRole = (role: AdminRole | TeacherRole | 'student'): boolean => {
  return role === 'student';
};

export const getUserPrimaryRole = (user: User): AdminRole | TeacherRole | 'student' => {
  if (user.roles.length === 0) return 'student';
  return user.roles[0];
};

// ==================== FORMAT UTILITIES ====================

export const formatDate = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatDateTime = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatTime = (time: string): string => {
  // time format: "HH:MM"
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
};

export const formatPercentage = (value: number, decimals: number = 2): string => {
  return `${value.toFixed(decimals)}%`;
};

export const formatCurrency = (amount: number): string => {
  return `₹${amount.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
};

// ==================== VALIDATION UTILITIES ====================

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{10}$/;
  return phoneRegex.test(phone.replace(/\D/g, ''));
};

export const isValidPassword = (password: string): boolean => {
  // Minimum 8 chars, at least one uppercase, one lowercase, one digit
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
};

export const getPasswordStrength = (password: string): 'weak' | 'medium' | 'strong' => {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (password.length >= 12) strength++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[!@#$%^&*]/.test(password)) strength++;

  if (strength <= 2) return 'weak';
  if (strength <= 4) return 'medium';
  return 'strong';
};

// ==================== CALCULATION UTILITIES ====================

export const calculateAttendancePercentage = (
  presentDays: number,
  totalDays: number
): number => {
  if (totalDays === 0) return 0;
  return (presentDays / totalDays) * 100;
};

export const calculateGPA = (marks: number, maxMarks: number): number => {
  const percentage = (marks / maxMarks) * 100;
  // Typical conversion: 90+ = 4.0, 80+ = 3.5, etc.
  if (percentage >= 90) return 4.0;
  if (percentage >= 80) return 3.5;
  if (percentage >= 70) return 3.0;
  if (percentage >= 60) return 2.5;
  if (percentage >= 50) return 2.0;
  return 0;
};

export const calculateCGPA = (sgpas: number[]): number => {
  if (sgpas.length === 0) return 0;
  return sgpas.reduce((a, b) => a + b, 0) / sgpas.length;
};

export const calculateFine = (daysOverdue: number, dailyFineAmount: number): number => {
  return daysOverdue * dailyFineAmount;
};

// ==================== STRING UTILITIES ====================

export const truncateString = (str: string, length: number = 50): string => {
  if (str.length <= length) return str;
  return str.substring(0, length) + '...';
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const capitalizeWords = (str: string): string => {
  return str
    .split(' ')
    .map((word) => capitalizeFirstLetter(word.toLowerCase()))
    .join(' ');
};

export const generateTicketNumber = (): string => {
  return 'TKT' + Date.now() + Math.random().toString(36).substr(2, 9);
};

export const generateToken = (length: number = 6): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let token = '';
  for (let i = 0; i < length; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
};

// ==================== ARRAY UTILITIES ====================

export const removeDuplicates = <T>(arr: T[]): T[] => {
  return [...new Set(arr)];
};

export const sortByDate = <T extends { createdAt?: Date; date?: Date }>(
  arr: T[],
  order: 'asc' | 'desc' = 'desc'
): T[] => {
  return arr.sort((a, b) => {
    const dateA = a.createdAt || a.date || new Date(0);
    const dateB = b.createdAt || b.date || new Date(0);
    return order === 'asc'
      ? new Date(dateA).getTime() - new Date(dateB).getTime()
      : new Date(dateB).getTime() - new Date(dateA).getTime();
  });
};

export const groupBy = <T>(arr: T[], key: keyof T): Record<string, T[]> => {
  return arr.reduce(
    (result, item) => {
      const groupKey = String(item[key]);
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(item);
      return result;
    },
    {} as Record<string, T[]>
  );
};

// ==================== STORAGE UTILITIES ====================

export const saveToLocalStorage = (key: string, value: any): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

export const getFromLocalStorage = (key: string): any => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

export const removeFromLocalStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing from localStorage:', error);
  }
};

// ==================== ERROR HANDLING ====================

export const getErrorMessage = (error: any): string => {
  if (typeof error === 'string') return error;
  if (error?.message) return error.message;
  return 'An unexpected error occurred';
};

export const logError = (error: any, context?: string): void => {
  console.error(`[${context || 'Error'}]`, error);
  // TODO: Send to error tracking service (Sentry, etc.)
};
