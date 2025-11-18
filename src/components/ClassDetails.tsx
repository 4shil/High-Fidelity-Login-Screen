import { ArrowLeft, MoreVertical, Users, Calendar, TrendingUp, Clock, UserCheck, Upload, FileText, Eye, Download, File, Link as LinkIcon, FileSpreadsheet, Plus } from 'lucide-react';
import { useState } from 'react';

interface ClassDetailsProps {
  isDark: boolean;
  onBack: () => void;
}

export default function ClassDetails({ isDark, onBack }: ClassDetailsProps) {
  const classInfo = {
    subject: 'Data Structures',
    semester: 'Sem 3',
    department: 'BCA',
    totalStudents: 45,
    attendanceToday: { present: 38, total: 45 },
    avgAttendance: 84,
    nextClass: 'Tomorrow, 9:00 AM'
  };

  const quickActions = [
    { icon: UserCheck, label: 'Mark Attendance', color: 'from-blue-500 to-cyan-500' },
    { icon: Upload, label: 'Upload Material', color: 'from-purple-500 to-pink-500' },
    { icon: FileText, label: 'Upload Internal Marks', color: 'from-green-500 to-emerald-500' },
    { icon: Eye, label: 'View Attendance History', color: 'from-orange-500 to-amber-500' },
  ];

  const students = [
    { name: 'Rahul Sharma', prn: 'BCA2023001', attendance: 92, status: 'good' },
    { name: 'Priya Singh', prn: 'BCA2023002', attendance: 88, status: 'good' },
    { name: 'Amit Patel', prn: 'BCA2023003', attendance: 72, status: 'low' },
    { name: 'Sneha Reddy', prn: 'BCA2023004', attendance: 95, status: 'good' },
    { name: 'Vikram Kumar', prn: 'BCA2023005', attendance: 68, status: 'low' },
    { name: 'Anjali Verma', prn: 'BCA2023006', attendance: 85, status: 'good' },
    { name: 'Rohan Gupta', prn: 'BCA2023007', attendance: 90, status: 'good' },
    { name: 'Kavya Nair', prn: 'BCA2023008', attendance: 78, status: 'average' },
    { name: 'Arjun Mehta', prn: 'BCA2023009', attendance: 65, status: 'low' },
    { name: 'Divya Shah', prn: 'BCA2023010', attendance: 82, status: 'good' },
  ];

  const internalMarks = {
    cia1Average: 78,
    cia2Average: 82,
    submissionStatus: '42/45 submitted'
  };

  const materials = [
    { title: 'Arrays and Linked Lists - Lecture Notes', type: 'pdf', date: 'Dec 10, 2024', icon: File, color: 'from-red-500 to-orange-500' },
    { title: 'Tree Traversal Algorithms - PPT', type: 'ppt', date: 'Dec 8, 2024', icon: FileSpreadsheet, color: 'from-orange-500 to-amber-500' },
    { title: 'Stack Implementation Tutorial', type: 'link', date: 'Dec 5, 2024', icon: LinkIcon, color: 'from-blue-500 to-cyan-500' },
    { title: 'Graph Algorithms - Assignment', type: 'pdf', date: 'Dec 3, 2024', icon: File, color: 'from-red-500 to-orange-500' },
  ];

  // Calculate progress circle for attendance
  const getProgressCircle = (percentage: number) => {
    const radius = 16;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    return { radius, circumference, offset };
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
      <div className="relative max-w-md mx-auto px-4 py-6 pb-24">
        
        {/* TOP HEADER */}
        <div className={`backdrop-blur-2xl rounded-3xl p-5 mb-6 shadow-2xl transition-all duration-500 ${
          isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/60'
        }`}>
          <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
            isDark 
              ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
              : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
          }`} />
          
          <div className="relative">
            {/* Top Row: Back Button, Department Tag, Menu */}
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={onBack}
                className={`p-2 rounded-full backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-110 border ${
                  isDark 
                    ? 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                    : 'bg-white/30 hover:bg-white/50 text-gray-900 border-white/40'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full backdrop-blur-md text-xs font-medium border ${
                  isDark 
                    ? 'bg-blue-500/20 text-blue-300 border-blue-400/30'
                    : 'bg-blue-100/60 text-blue-700 border-blue-300/40'
                }`}>
                  {classInfo.department}
                </span>

                <button
                  className={`p-2 rounded-full backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-110 border ${
                    isDark 
                      ? 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                      : 'bg-white/30 hover:bg-white/50 text-gray-900 border-white/40'
                  }`}
                >
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Title */}
            <div>
              <h1 className={`mb-1 transition-colors ${
                isDark ? 'text-white/95' : 'text-[#1A1A1A]/90'
              }`}>
                Class Details
              </h1>
              <p className={`transition-colors ${
                isDark ? 'text-white/70' : 'text-[#5A5A5A]/70'
              }`}>
                {classInfo.subject} – {classInfo.semester}
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 1: CLASS SUMMARY CARD */}
        <div className={`backdrop-blur-2xl rounded-3xl p-5 mb-6 shadow-2xl transition-all duration-500 ${
          isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/60'
        }`}>
          <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
            isDark 
              ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
              : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
          }`} />
          
          <div className="relative grid grid-cols-2 gap-4">
            {/* Total Students */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg flex items-center justify-center shadow-cyan-500/50">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className={`text-xs mb-0.5 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  Total Students
                </p>
                <p className={`text-xl font-medium ${isDark ? 'text-white/95' : 'text-gray-900'}`}>
                  {classInfo.totalStudents}
                </p>
              </div>
            </div>

            {/* Attendance Today */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg flex items-center justify-center shadow-green-500/50">
                <UserCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className={`text-xs mb-0.5 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  Today
                </p>
                <p className={`text-xl font-medium ${isDark ? 'text-white/95' : 'text-gray-900'}`}>
                  {classInfo.attendanceToday.present}/{classInfo.attendanceToday.total}
                </p>
              </div>
            </div>

            {/* Average Attendance */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg flex items-center justify-center shadow-purple-500/50">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className={`text-xs mb-0.5 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  Avg. Attendance
                </p>
                <p className={`text-xl font-medium ${isDark ? 'text-white/95' : 'text-gray-900'}`}>
                  {classInfo.avgAttendance}%
                </p>
              </div>
            </div>

            {/* Next Class */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 shadow-lg flex items-center justify-center shadow-orange-500/50">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className={`text-xs mb-0.5 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  Next Class
                </p>
                <p className={`text-sm font-medium ${isDark ? 'text-white/95' : 'text-gray-900'}`}>
                  {classInfo.nextClass}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2: QUICK ACTIONS */}
        <div className="mb-6">
          <h3 className={`mb-3 px-2 transition-colors ${
            isDark ? 'text-white/95' : 'text-[#1A1A1A]/90'
          }`}>
            Quick Actions
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
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

        {/* SECTION 3: STUDENTS LIST */}
        <div className="mb-6">
          <h3 className={`mb-3 px-2 transition-colors ${
            isDark ? 'text-white/95' : 'text-[#1A1A1A]/90'
          }`}>
            Students
          </h3>
          
          <div className={`backdrop-blur-2xl rounded-3xl p-4 shadow-2xl transition-all duration-500 ${
            isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/60'
          }`}>
            <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
              isDark 
                ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
                : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
            }`} />
            
            <div className="relative max-h-96 overflow-y-auto space-y-3">
              {students.map((student, index) => {
                const progress = getProgressCircle(student.attendance);
                return (
                  <div key={index}>
                    <div className="rounded-2xl p-3 backdrop-blur-md transition-all hover:scale-[1.02] bg-white/5 hover:bg-white/10">
                      <div className="flex items-center gap-3">
                        {/* Circular Progress */}
                        <div className="relative w-10 h-10 flex-shrink-0">
                          <svg className="w-10 h-10 transform -rotate-90">
                            {/* Background circle */}
                            <circle
                              cx="20"
                              cy="20"
                              r={progress.radius}
                              stroke={isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}
                              strokeWidth="3"
                              fill="none"
                            />
                            {/* Progress circle */}
                            <circle
                              cx="20"
                              cy="20"
                              r={progress.radius}
                              stroke={
                                student.status === 'low' 
                                  ? '#ef4444' 
                                  : student.status === 'average' 
                                  ? '#f59e0b' 
                                  : '#10b981'
                              }
                              strokeWidth="3"
                              fill="none"
                              strokeDasharray={progress.circumference}
                              strokeDashoffset={progress.offset}
                              strokeLinecap="round"
                              className="transition-all duration-500"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className={`text-xs font-medium ${
                              student.status === 'low' 
                                ? 'text-red-400' 
                                : student.status === 'average' 
                                ? 'text-amber-400' 
                                : isDark ? 'text-emerald-400' : 'text-emerald-600'
                            }`}>
                              {student.attendance}
                            </span>
                          </div>
                        </div>
                        
                        {/* Student Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <p className={`${isDark ? 'text-white/90' : 'text-gray-900'}`}>
                              {student.name}
                            </p>
                            {student.status === 'low' && (
                              <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-xs font-medium border border-red-500/30">
                                LOW
                              </span>
                            )}
                          </div>
                          <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                            {student.prn}
                          </p>
                        </div>
                        
                        {/* More Menu */}
                        <button
                          className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                            isDark 
                              ? 'text-gray-400 hover:text-white hover:bg-white/10' 
                              : 'text-gray-500 hover:text-gray-900 hover:bg-white/20'
                          }`}
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Separator */}
                    {index < students.length - 1 && (
                      <div className={`h-px my-2 ${isDark ? 'bg-white/5' : 'bg-gray-300/20'}`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* SECTION 4: INTERNAL MARKS OVERVIEW */}
        <div className="mb-6">
          <h3 className={`mb-3 px-2 transition-colors ${
            isDark ? 'text-white/95' : 'text-[#1A1A1A]/90'
          }`}>
            Internal Marks
          </h3>
          
          <div className={`backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 ${
            isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/60'
          }`}>
            <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
              isDark 
                ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
                : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
            }`} />
            
            <div className="relative">
              <div className="grid grid-cols-3 gap-4 mb-4">
                {/* CIA 1 */}
                <div className="text-center">
                  <p className={`text-xs mb-1 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                    CIA 1 Avg
                  </p>
                  <p className={`text-2xl font-medium ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                    {internalMarks.cia1Average}
                  </p>
                </div>

                {/* CIA 2 */}
                <div className="text-center">
                  <p className={`text-xs mb-1 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                    CIA 2 Avg
                  </p>
                  <p className={`text-2xl font-medium ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                    {internalMarks.cia2Average}
                  </p>
                </div>

                {/* Submission Status */}
                <div className="text-center">
                  <p className={`text-xs mb-1 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                    Submitted
                  </p>
                  <p className={`text-lg font-medium ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
                    {internalMarks.submissionStatus}
                  </p>
                </div>
              </div>

              {/* View All Link */}
              <button className={`w-full text-center py-2.5 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] border ${
                isDark 
                  ? 'bg-white/5 hover:bg-white/10 text-blue-400 border-white/10'
                  : 'bg-white/30 hover:bg-white/50 text-blue-700 border-white/40'
              }`}>
                View All Internal Marks
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 5: STUDY MATERIALS */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3 px-2">
            <h3 className={`transition-colors ${
              isDark ? 'text-white/95' : 'text-[#1A1A1A]/90'
            }`}>
              Study Materials
            </h3>
            <button className={`text-sm font-medium transition-colors ${
              isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-700 hover:text-blue-800'
            }`}>
              View All
            </button>
          </div>
          
          <div className="space-y-3 mb-3">
            {materials.map((material, index) => {
              const Icon = material.icon;
              return (
                <div
                  key={index}
                  className={`backdrop-blur-2xl rounded-3xl p-4 shadow-xl transition-all duration-500 hover:scale-[1.02] group ${
                    isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/60'
                  }`}
                >
                  <div className={`absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br ${material.color} opacity-5`} />
                  
                  <div className="relative flex items-center gap-3">
                    {/* File Icon */}
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${material.color} shadow-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Material Info */}
                    <div className="flex-1 min-w-0">
                      <p className={`mb-0.5 ${isDark ? 'text-white/90' : 'text-gray-900'}`}>
                        {material.title}
                      </p>
                      <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                        {material.date}
                      </p>
                    </div>
                    
                    {/* Download Button */}
                    <button
                      className={`p-2 rounded-full backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-110 border ${
                        isDark 
                          ? 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                          : 'bg-white/30 hover:bg-white/50 text-gray-900 border-white/40'
                      }`}
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Upload New Material Button */}
          <button className={`w-full py-4 rounded-3xl backdrop-blur-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] group border flex items-center justify-center gap-2 ${
            isDark 
              ? 'bg-white/5 hover:bg-white/10 border-white/10 text-white/90'
              : 'bg-white/40 hover:bg-white/60 border-white/60 text-gray-900'
          }`}>
            <div className="p-2 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium">Upload New Material</span>
          </button>
        </div>
      </div>
    </div>
  );
}
