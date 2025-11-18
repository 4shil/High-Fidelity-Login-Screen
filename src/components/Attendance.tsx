import { Calendar, TrendingUp, CheckCircle, XCircle } from 'lucide-react';
import BottomNav from './BottomNav';

interface AttendanceProps {
  onNavigate: (page: 'dashboard' | 'attendance' | 'assignments' | 'results' | 'profile') => void;
  isDark: boolean;
}

export default function Attendance({ onNavigate, isDark }: AttendanceProps) {
  const subjects = [
    { name: 'Data Structures', present: 45, total: 55, percentage: 82, color: 'from-blue-500 to-cyan-500' },
    { name: 'Web Development', present: 50, total: 60, percentage: 83, color: 'from-purple-500 to-pink-500' },
    { name: 'Database Systems', present: 42, total: 52, percentage: 81, color: 'from-green-500 to-emerald-500' },
    { name: 'Java Programming', present: 48, total: 58, percentage: 83, color: 'from-orange-500 to-red-500' },
  ];

  const recentAttendance = [
    { date: '15 Nov 2025', subject: 'Data Structures', status: 'present' },
    { date: '14 Nov 2025', subject: 'Web Development', status: 'present' },
    { date: '13 Nov 2025', subject: 'Database Systems', status: 'absent' },
    { date: '12 Nov 2025', subject: 'Java Programming', status: 'present' },
  ];

  const overallPercentage = 82;

  return (
    <div className={`relative min-h-screen w-full overflow-hidden transition-colors duration-500 pb-24 ${
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
          
          <div className="relative">
            <h2 className={`transition-colors ${
              isDark ? 'text-white' : 'text-[#1A1A1A]/90'
            }`}>
              Attendance
            </h2>
          </div>
        </div>

        {/* OVERALL ATTENDANCE */}
        <div className="backdrop-blur-2xl rounded-3xl p-6 shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          
          <div className="relative flex items-center justify-between">
            <div>
              <p className={`mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Overall Attendance
              </p>
              <div className="flex items-baseline gap-2">
                <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {overallPercentage}%
                </span>
                <span className={`flex items-center gap-1 font-medium ${
                  overallPercentage >= 75 
                    ? 'text-green-500' 
                    : 'text-red-500'
                }`}>
                  <TrendingUp className="w-4 h-4" />
                  {overallPercentage >= 75 ? 'Good' : 'Low'}
                </span>
              </div>
            </div>
            
            <div className="w-20 h-20 relative">
              <svg className="transform -rotate-90 w-20 h-20">
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke="currentColor"
                  strokeWidth="6"
                  fill="none"
                  className="text-white/10"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  stroke="url(#attendance-gradient)"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 32}`}
                  strokeDashoffset={`${2 * Math.PI * 32 * (1 - overallPercentage / 100)}`}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="attendance-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* SUBJECT-WISE ATTENDANCE */}
        <div>
          <h3 className={`mb-3 px-2 ${isDark ? 'text-white' : 'text-[#1A1A1A]/90'}`}>
            Subject-wise Attendance
          </h3>
          
          <div className="space-y-3">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="backdrop-blur-2xl rounded-3xl p-4 shadow-xl transition-all duration-500 hover:scale-[1.02] bg-white/5 border border-white/10"
              >
                <div className={`absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br ${subject.color} opacity-10`} />
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className={isDark ? 'text-white' : 'text-gray-900'}>
                      {subject.name}
                    </h4>
                    <span className={`font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      {subject.percentage}%
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                      {subject.present} / {subject.total} classes
                    </p>
                    
                    {/* Progress Bar */}
                    <div className="w-32">
                      <div className="h-2 rounded-full overflow-hidden bg-white/10">
                        <div 
                          className={`h-full bg-gradient-to-r ${subject.color} transition-all duration-1000`}
                          style={{ width: `${subject.percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RECENT ATTENDANCE */}
        <div className="backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          
          <div className="relative">
            <h3 className={`mb-4 ${isDark ? 'text-white' : 'text-[#1A1A1A]/90'}`}>
              Recent Attendance
            </h3>
            
            <div className="space-y-3">
              {recentAttendance.map((record, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-3 backdrop-blur-md transition-all bg-white/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {record.status === 'present' ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                      <div>
                        <p className={isDark ? 'text-white' : 'text-gray-900'}>
                          {record.subject}
                        </p>
                        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                          {record.date}
                        </p>
                      </div>
                    </div>
                    
                    <span className={`px-3 py-1 rounded-full font-medium ${
                      record.status === 'present'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {record.status === 'present' ? 'Present' : 'Absent'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="attendance" onNavigate={onNavigate} />
    </div>
  );
}