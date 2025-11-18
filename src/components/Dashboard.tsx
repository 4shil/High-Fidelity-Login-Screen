import { Bell, Calendar, ClipboardList, FolderOpen, FileCheck, Award, TrendingUp, User, LogOut } from 'lucide-react';
import { Button } from './ui/button';
import BottomNav from './BottomNav';
import { useState } from 'react';

interface DashboardProps {
  onNavigate: (page: 'dashboard' | 'attendance' | 'materials' | 'results' | 'profile' | 'more' | 'leave' | 'fees' | 'notifications') => void;
  email: string;
  onSignOut: () => void;
  isDark: boolean;
}

export default function Dashboard({ onNavigate, email, onSignOut, isDark }: DashboardProps) {
  const [showSignOutModal, setShowSignOutModal] = useState(false);

  const todaysClasses = [
    { subject: 'Data Structures', time: '9:00 - 10:30 AM', teacher: 'Dr. Smith', room: 'Room 301', color: 'from-blue-500 to-cyan-500', icon: '📚', startTime: '09:00', endTime: '10:30' },
    { subject: 'Web Development', time: '11:00 AM - 12:30 PM', teacher: 'Prof. Johnson', room: 'Lab 2', color: 'from-purple-500 to-pink-500', icon: '💻', startTime: '11:00', endTime: '12:30' },
    { subject: 'Database Systems', time: '2:00 - 3:30 PM', teacher: 'Dr. Williams', room: 'Room 205', color: 'from-green-500 to-emerald-500', icon: '🗄️', startTime: '14:00', endTime: '15:30' },
    { subject: 'Java Programming', time: '4:00 - 5:30 PM', teacher: 'Prof. Brown', room: 'Lab 1', color: 'from-orange-500 to-red-500', icon: '☕', startTime: '16:00', endTime: '17:30' },
  ];

  // Function to get class status based on current time
  const getClassStatus = (startTime: string, endTime: string) => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTimeString = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
    
    if (currentTimeString < startTime) {
      return 'upcoming';
    } else if (currentTimeString >= startTime && currentTimeString < endTime) {
      return 'ongoing';
    } else {
      return 'completed';
    }
  };

  const notifications = [
    { title: 'Assignment Submitted', desc: 'Web Development - Project 2', time: '2h ago' },
    { title: 'New Study Material', desc: 'Database Systems - Chapter 5', time: '5h ago' },
    { title: 'Class Rescheduled', desc: 'Java Programming moved to 4 PM', time: '1d ago' },
  ];

  const quickActions = [
    { icon: Calendar, label: 'Attendance', color: 'from-blue-500 to-blue-600', action: () => onNavigate('attendance') },
    { icon: FolderOpen, label: 'Materials', color: 'from-purple-500 to-purple-600', action: () => onNavigate('materials') },
    { icon: ClipboardList, label: 'Leave', color: 'from-orange-500 to-orange-600', action: () => onNavigate('leave') },
    { icon: Award, label: 'Results', color: 'from-pink-500 to-pink-600', action: () => onNavigate('results') },
    { icon: TrendingUp, label: 'More', color: 'from-green-500 to-green-600', action: () => onNavigate('more') },
    { icon: LogOut, label: 'Sign Out', color: 'from-red-500 to-red-600', action: () => setShowSignOutModal(true) },
  ];

  return (
    <div className={`relative min-h-screen w-full overflow-hidden transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900' 
        : 'bg-gradient-to-br from-blue-100 via-white to-purple-100'
    }`}>
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob ${
          isDark 
            ? 'bg-gradient-to-br from-blue-600 to-blue-500 opacity-30' 
            : 'bg-gradient-to-br from-blue-400 to-blue-300 opacity-40'
        }`} />
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 ${
          isDark 
            ? 'bg-gradient-to-br from-purple-600 to-pink-500 opacity-30' 
            : 'bg-gradient-to-br from-purple-400 to-pink-300 opacity-40'
        }`} />
        <div className={`absolute -bottom-8 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 ${
          isDark 
            ? 'bg-gradient-to-br from-blue-500 to-slate-700 opacity-30' 
            : 'bg-gradient-to-br from-blue-300 to-white opacity-40'
        }`} />
        
        {/* Additional Floating Orbs */}
        <div className={`absolute top-1/4 right-1/4 w-64 h-64 rounded-full filter blur-2xl animate-float animation-delay-1000 ${
          isDark 
            ? 'bg-gradient-to-br from-cyan-500 to-blue-600 opacity-20' 
            : 'bg-gradient-to-br from-cyan-300 to-blue-400 opacity-30'
        }`} />
        <div className={`absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full filter blur-2xl animate-float-reverse animation-delay-3000 ${
          isDark 
            ? 'bg-gradient-to-br from-purple-500 to-indigo-600 opacity-20' 
            : 'bg-gradient-to-br from-purple-300 to-indigo-400 opacity-30'
        }`} />
        
        {/* Animated Particles */}
        <div className={`absolute top-1/3 left-1/4 w-32 h-32 rounded-full filter blur-xl animate-pulse-slow ${
          isDark ? 'bg-blue-400 opacity-10' : 'bg-blue-300 opacity-20'
        }`} />
        <div className={`absolute bottom-1/3 left-2/3 w-40 h-40 rounded-full filter blur-xl animate-pulse-slow animation-delay-2000 ${
          isDark ? 'bg-purple-400 opacity-10' : 'bg-purple-300 opacity-20'
        }`} />
        <div className={`absolute top-2/3 right-1/4 w-36 h-36 rounded-full filter blur-xl animate-pulse-slow animation-delay-4000 ${
          isDark ? 'bg-pink-400 opacity-10' : 'bg-pink-300 opacity-20'
        }`} />
        
        {/* Gradient Mesh Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-shimmer" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-md mx-auto px-4 py-6 space-y-5">
        
        {/* TOP BAR */}
        <div className={`backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 ${
          isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/60'
        }`}>
          <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
            isDark 
              ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
              : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
          }`} />
          
          <div className="relative flex items-center justify-between">
            {/* Profile Avatar */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('profile')}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg flex items-center justify-center backdrop-blur-sm ring-2 ring-white/20 transition-all hover:scale-110 cursor-pointer"
              >
                <User className="w-5 h-5 text-white" />
              </button>
              <div>
                <h2 className={`transition-colors ${
                  isDark ? 'text-white' : 'text-[#1A1A1A]/90'
                }`}>
                  Welcome, Ash
                </h2>
                <p className={`transition-colors ${
                  isDark ? 'text-gray-300' : 'text-[#5A5A5A]/70'
                }`}>
                  BCA — Semester 3
                </p>
              </div>
            </div>

            {/* Notification Icon */}
            <button
              onClick={() => onNavigate('notifications')}
              className={`p-2.5 rounded-full backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-110 relative border ${
                isDark 
                  ? 'bg-white/10 hover:bg-white/20 text-blue-300 border-white/20'
                  : 'bg-white/30 hover:bg-white/50 text-blue-600 border-white/40'
              }`}
            >
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white/50"></span>
            </button>
          </div>
        </div>

        {/* QUICK ACTIONS GRID */}
        <div className="backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          
          <div className="relative">
            <h3 className={`mb-4 ${isDark ? 'text-white' : 'text-[#1A1A1A]/90'}`}>
              Quick Actions
            </h3>
            
            <div className="grid grid-cols-3 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action || undefined}
                  className="rounded-2xl p-4 backdrop-blur-md transition-all duration-300 hover:scale-110 group relative bg-white/5 hover:bg-white/10 border border-white/10"
                >
                  {/* Glow on Hover */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 bg-gradient-to-br ${action.color} blur-lg -z-10`} />
                  
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} shadow-lg flex items-center justify-center`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                      {action.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* TODAY'S CLASSES */}
        <div>
          <h3 className={`mb-3 px-2 transition-colors ${
            isDark ? 'text-white' : 'text-[#1A1A1A]/90'
          }`}>
            Today's Classes
          </h3>
          <div className="space-y-3">
            {todaysClasses.map((classItem, index) => {
              const status = getClassStatus(classItem.startTime, classItem.endTime);
              const isOngoing = status === 'ongoing';
              const isCompleted = status === 'completed';
              
              return (
                <div
                  key={index}
                  className={`backdrop-blur-2xl rounded-3xl p-4 shadow-xl transition-all duration-500 relative border ${
                    isCompleted ? 'opacity-70' : ''
                  } ${
                    isOngoing
                      ? 'bg-white/10 border-blue-400/50 ring-2 ring-blue-400/30'
                      : 'bg-white/5 border-white/10 hover:scale-[1.02]'
                  }`}
                >
                  {/* Ongoing Glow Effect */}
                  {isOngoing && (
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-xl -z-10 animate-pulse" />
                  )}
                  
                  <div className={`absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br ${classItem.color} opacity-10`} />
                  
                  <div className="relative flex items-center gap-4">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${classItem.color} shadow-lg flex items-center justify-center flex-shrink-0 ${
                      isCompleted ? 'opacity-60' : ''
                    }`}>
                      <span className="text-2xl">{classItem.icon}</span>
                    </div>
                    
                    {/* Class Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className={`${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {classItem.subject}
                        </h4>
                        {isOngoing && (
                          <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium">
                            Ongoing
                          </span>
                        )}
                        {isCompleted && (
                          <span className="px-2 py-0.5 rounded-full bg-gray-500/20 text-gray-400 text-xs font-medium">
                            Completed
                          </span>
                        )}
                      </div>
                      <p className={`text-sm mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {classItem.time}
                      </p>
                      <div className="flex items-center gap-3 text-xs">
                        <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                          {classItem.teacher}
                        </p>
                        <span className={isDark ? 'text-gray-500' : 'text-gray-400'}>•</span>
                        <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                          {classItem.room}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ATTENDANCE SUMMARY & RESULT OVERVIEW - Side by Side */}
        <div className="grid grid-cols-2 gap-4">
          {/* ATTENDANCE SUMMARY */}
          <div 
            onClick={() => onNavigate('attendance')}
            className="backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 hover:scale-105 group relative bg-white/5 border border-white/10 cursor-pointer"
          >
            {/* Soft Glow Effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl -z-10" />
            
            <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            
            <div className="relative flex flex-col items-center h-full justify-center">
              {/* Circular Progress */}
              <div className="relative w-24 h-24 mb-3">
                <svg className="transform -rotate-90 w-24 h-24 drop-shadow-lg">
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    className={isDark ? "text-white/10" : "text-gray-300/30"}
                  />
                  <circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="url(#gradient)"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - 0.82)}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`font-medium transition-colors ${isDark ? 'text-white' : 'text-[#1A1A1A]/90'}`}>
                    82%
                  </span>
                </div>
              </div>
              <p className={`text-center transition-colors ${isDark ? 'text-gray-300' : 'text-[#5A5A5A]/70'}`}>
                Attendance
              </p>
            </div>
          </div>

          {/* RESULT OVERVIEW */}
          <div className="backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 hover:scale-105 group relative bg-white/5 border border-white/10">
            {/* Soft Glow Effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br from-purple-500 to-pink-600 blur-2xl -z-10" />
            
            <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            
            <div className="relative flex flex-col items-center h-full justify-center">
              {/* Glowing Icon */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg flex items-center justify-center mb-3 shadow-purple-500/50">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              
              {/* CGPA */}
              <div className="mb-2">
                <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  7.8
                </span>
                <span className={`ml-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  CGPA
                </span>
              </div>
              
              {/* Current Semester */}
              <p className={`mb-2 font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                85%
              </p>
              
              <p className={`text-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Result Overview
              </p>
            </div>
          </div>
        </div>

        {/* FEES DUE */}
        <div className="backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          
          <div className="relative flex items-center justify-between">
            <div>
              <p className={`mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Fees Due
              </p>
              <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                ₹4,500
              </p>
            </div>
            <Button
              onClick={() => onNavigate('fees')}
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-400/30 relative overflow-hidden group"
            >
              <span className="relative z-10">Pay Now</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>

        {/* NOTIFICATIONS */}
        <div className="backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <h3 className={isDark ? 'text-white' : 'text-[#1A1A1A]/90'}>
                Notifications
              </h3>
              <button className={isDark ? 'text-blue-400 hover:text-blue-300' : 'text-[#005ACF] hover:text-[#0047A3]'}>
                View All
              </button>
            </div>
            
            <div className="space-y-3">
              {notifications.map((notif, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-3 backdrop-blur-md transition-all hover:scale-[1.02] bg-white/5 hover:bg-white/10"
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      index === 0 ? 'bg-blue-500' : 'bg-gray-400'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className={`mb-0.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {notif.title}
                      </p>
                      <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                        {notif.desc}
                      </p>
                    </div>
                    <span className={`text-xs flex-shrink-0 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {notif.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Safe Area Spacer */}
        <div className="h-20" />
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="dashboard" onNavigate={onNavigate} />

      {/* Sign Out Modal */}
      {showSignOutModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div 
            className={`max-w-sm w-full backdrop-blur-2xl rounded-3xl p-6 shadow-2xl transition-all duration-500 animate-scale-in ${
              isDark 
                ? 'bg-white/10 border border-white/20' 
                : 'bg-white/40 border border-white/60'
            }`}
          >
            <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
              isDark 
                ? 'bg-gradient-to-br from-white/20 via-transparent to-transparent' 
                : 'bg-gradient-to-br from-white/40 via-transparent to-transparent'
            }`} />
            
            <div className="relative">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg flex items-center justify-center">
                  <LogOut className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h2 className={`text-center mb-2 transition-colors ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                Sign Out
              </h2>

              {/* Description */}
              <p className={`text-center mb-6 transition-colors ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Are you sure you want to sign out?
              </p>

              {/* Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={onSignOut}
                  className={`w-full h-12 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group ${
                    isDark 
                      ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white' 
                      : 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity" />
                  <span className="relative">Sign Out</span>
                </Button>

                <Button
                  onClick={() => setShowSignOutModal(false)}
                  variant="ghost"
                  className={`w-full h-12 rounded-2xl backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98] ${
                    isDark 
                      ? 'bg-white/5 hover:bg-white/10 text-white border border-white/10' 
                      : 'bg-white/40 hover:bg-white/60 text-gray-800 border border-white/40'
                  }`}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}