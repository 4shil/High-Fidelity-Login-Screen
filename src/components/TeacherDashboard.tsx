import { Bell, ClipboardCheck, Upload, FileText, UserCheck, TrendingUp, Clock, AlertCircle, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface TeacherDashboardProps {
  onNavigate: (page: 'dashboard' | 'attendance' | 'materials' | 'results' | 'profile' | 'more' | 'leave' | 'fees' | 'notifications' | 'classDetails' | 'attendanceMarking' | 'uploadMaterial') => void;
  email: string;
  onSignOut: () => void;
  isDark: boolean;
}

export default function TeacherDashboard({ onNavigate, email, onSignOut, isDark }: TeacherDashboardProps) {
  const teacherName = "Dr. Sarah Johnson";
  
  const todaysClasses = [
    { subject: 'Data Structures', semester: 'BCA - Sem 3', department: 'Computer Applications', time: '9:00 - 10:30 AM', room: 'Room 301', color: 'from-blue-500 to-cyan-500', icon: '📚', startTime: '09:00', endTime: '10:30' },
    { subject: 'Web Development', semester: 'BCA - Sem 5', department: 'Computer Applications', time: '11:00 AM - 12:30 PM', room: 'Lab 2', color: 'from-purple-500 to-pink-500', icon: '💻', startTime: '11:00', endTime: '12:30' },
    { subject: 'Database Systems', semester: 'BCA - Sem 3', department: 'Computer Applications', time: '2:00 - 3:30 PM', room: 'Room 205', color: 'from-green-500 to-emerald-500', icon: '🗄️', startTime: '14:00', endTime: '15:30' },
    { subject: 'Java Programming', semester: 'BCA - Sem 5', department: 'Computer Applications', time: '4:00 - 5:30 PM', room: 'Lab 1', color: 'from-orange-500 to-red-500', icon: '☕', startTime: '16:00', endTime: '17:30' },
  ];

  const quickActions = [
    { icon: UserCheck, label: 'Mark Attendance', color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/10' },
    { icon: Upload, label: 'Upload Material', color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/10' },
    { icon: FileText, label: 'Upload Internal Marks', color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500/10' },
    { icon: ClipboardCheck, label: 'Approve Leaves', color: 'from-orange-500 to-amber-500', bgColor: 'bg-orange-500/10' },
  ];

  const pendingItems = [
    { type: 'leave', student: 'Rahul Sharma', reason: 'Medical Leave', date: 'Dec 15-17', status: 'pending' },
    { type: 'leave', student: 'Priya Singh', reason: 'Family Emergency', date: 'Dec 20', status: 'pending' },
    { type: 'notification', title: 'Exam Schedule Updated', desc: 'Internal exams postponed by 1 week', time: '2h ago' },
    { type: 'attendance', title: 'Incomplete Attendance', desc: 'BCA Sem 3 - Database Systems (Dec 14)', time: '1d ago' },
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
      <div className="relative max-w-md mx-auto px-4 py-6 pb-24 space-y-6">
        
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
            {/* Title */}
            <div>
              <h1 className={`mb-1 transition-colors ${
                isDark ? 'text-white/95' : 'text-[#1A1A1A]/90'
              }`}>
                Teacher Dashboard
              </h1>
              <p className={`transition-colors ${
                isDark ? 'text-white/70' : 'text-[#5A5A5A]/70'
              }`}>
                Welcome, {teacherName}
              </p>
            </div>

            {/* Notification Icon */}
            <button
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

        {/* TODAY'S CLASSES */}
        <div>
          <h3 className={`mb-3 px-2 transition-colors ${
            isDark ? 'text-white/95' : 'text-[#1A1A1A]/90'
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
                  onClick={() => onNavigate('classDetails')}
                  className={`backdrop-blur-2xl rounded-3xl p-4 shadow-xl transition-all duration-500 relative border cursor-pointer ${
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
                        <h4 className={`${isDark ? 'text-white/95' : 'text-gray-900'}`}>
                          {classItem.subject}
                        </h4>
                        {isOngoing && (
                          <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium animate-pulse">
                            Ongoing
                          </span>
                        )}
                        {isCompleted && (
                          <span className="px-2 py-0.5 rounded-full bg-gray-500/20 text-gray-400 text-xs font-medium">
                            Completed
                          </span>
                        )}
                      </div>
                      <p className={`text-sm mb-1 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                        {classItem.semester} • {classItem.department}
                      </p>
                      <div className="flex items-center gap-3 text-xs">
                        <p className={isDark ? 'text-white/60' : 'text-gray-500'}>
                          {classItem.time}
                        </p>
                        <span className={isDark ? 'text-gray-500' : 'text-gray-400'}>•</span>
                        <p className={isDark ? 'text-white/60' : 'text-gray-500'}>
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

        {/* QUICK ACTIONS */}
        <div>
          <h3 className={`mb-3 px-2 transition-colors ${
            isDark ? 'text-white/95' : 'text-[#1A1A1A]/90'
          }`}>
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              const handleClick = () => {
                if (action.label === 'Mark Attendance') {
                  onNavigate('attendanceMarking');
                } else if (action.label === 'Upload Material') {
                  onNavigate('uploadMaterial');
                }
                // Add other navigation handlers as needed
              };
              
              return (
                <button
                  key={index}
                  onClick={handleClick}
                  className="backdrop-blur-2xl rounded-3xl p-5 shadow-xl transition-all duration-500 hover:scale-105 group relative bg-white/5 border border-white/10"
                >
                  {/* Soft Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br ${action.color} blur-2xl -z-10`} />
                  
                  <div className={`absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br ${action.color} opacity-5`} />
                  
                  <div className="relative flex flex-col items-center gap-3">
                    {/* Icon Container */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${action.color} shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Label */}
                    <p className={`text-center text-sm ${isDark ? 'text-white/90' : 'text-gray-900'}`}>
                      {action.label}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* CLASS PERFORMANCE SNAPSHOT */}
        <div>
          <h3 className={`mb-3 px-2 transition-colors ${
            isDark ? 'text-white/95' : 'text-[#1A1A1A]/90'
          }`}>
            Class Performance
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Overall Attendance */}
            <div className="backdrop-blur-2xl rounded-3xl p-4 shadow-2xl transition-all duration-500 hover:scale-105 group relative bg-white/5 border border-white/10">
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br from-cyan-500 to-blue-600 blur-2xl -z-10" />
              
              <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
              
              <div className="relative flex flex-col items-center h-full justify-center">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg flex items-center justify-center mb-3 shadow-cyan-500/50">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                
                {/* Percentage */}
                <div className="mb-2">
                  <span className={`text-2xl font-medium ${isDark ? 'text-white/95' : 'text-gray-900'}`}>
                    78%
                  </span>
                </div>
                
                <p className={`text-center text-sm ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                  Avg. Attendance
                </p>
              </div>
            </div>

            {/* Pending Marks */}
            <div className="backdrop-blur-2xl rounded-3xl p-4 shadow-2xl transition-all duration-500 hover:scale-105 group relative bg-white/5 border border-white/10">
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br from-purple-500 to-pink-600 blur-2xl -z-10" />
              
              <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
              
              <div className="relative flex flex-col items-center h-full justify-center">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg flex items-center justify-center mb-3 shadow-purple-500/50">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                
                {/* Count */}
                <div className="mb-2">
                  <span className={`text-2xl font-medium ${isDark ? 'text-white/95' : 'text-gray-900'}`}>
                    3
                  </span>
                </div>
                
                <p className={`text-center text-sm ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                  Pending Marks
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PENDING ITEMS */}
        <div>
          <h3 className={`mb-3 px-2 transition-colors ${
            isDark ? 'text-white/95' : 'text-[#1A1A1A]/90'
          }`}>
            Pending Items
          </h3>
          
          <div className="backdrop-blur-2xl rounded-3xl p-4 shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
            <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            
            <div className="relative space-y-3">
              {pendingItems.map((item, index) => (
                <div key={index}>
                  <div className="rounded-2xl p-3 backdrop-blur-md transition-all hover:scale-[1.02] bg-white/5 hover:bg-white/10">
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        item.type === 'leave' 
                          ? 'bg-orange-500/20' 
                          : item.type === 'notification' 
                          ? 'bg-blue-500/20' 
                          : 'bg-red-500/20'
                      }`}>
                        {item.type === 'leave' && <Calendar className="w-4 h-4 text-orange-400" />}
                        {item.type === 'notification' && <Bell className="w-4 h-4 text-blue-400" />}
                        {item.type === 'attendance' && <AlertCircle className="w-4 h-4 text-red-400" />}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {item.type === 'leave' ? (
                          <>
                            <p className={`mb-0.5 ${isDark ? 'text-white/90' : 'text-gray-900'}`}>
                              {item.student}
                            </p>
                            <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                              {item.reason} • {item.date}
                            </p>
                          </>
                        ) : (
                          <>
                            <p className={`mb-0.5 ${isDark ? 'text-white/90' : 'text-gray-900'}`}>
                              {item.title}
                            </p>
                            <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                              {item.desc}
                            </p>
                          </>
                        )}
                      </div>
                      
                      {/* Action/Time */}
                      {item.type === 'leave' ? (
                        <span className="px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-medium flex-shrink-0">
                          Review
                        </span>
                      ) : (
                        <span className={`text-xs flex-shrink-0 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                          {item.time}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Separator */}
                  {index < pendingItems.length - 1 && (
                    <div className={`h-px my-2 ${isDark ? 'bg-white/5' : 'bg-gray-300/20'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM NAVIGATION */}
      <div className="fixed bottom-0 left-0 right-0 z-50 pb-6 px-4">
        <div className={`max-w-md mx-auto backdrop-blur-2xl rounded-full px-6 py-3 shadow-2xl transition-all duration-500 border ${
          isDark ? 'bg-white/10 border-white/20' : 'bg-white/50 border-white/60'
        }`}>
          <div className={`absolute inset-0 rounded-full pointer-events-none ${
            isDark 
              ? 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10' 
              : 'bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20'
          }`} />
          
          <div className="relative flex items-center justify-around">
            <button className={`p-3 rounded-full transition-all duration-300 relative ${
              isDark 
                ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50' 
                : 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30'
            }`}>
              <div className="absolute inset-0 rounded-full bg-white/20 blur-xl" />
              <Calendar className="w-5 h-5 text-white relative z-10" />
            </button>
            
            <button className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>
              <Upload className="w-5 h-5" />
            </button>
            
            <button className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>
              <ClipboardCheck className="w-5 h-5" />
            </button>
            
            <button className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}>
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}