import { ArrowRight, Users, BookOpen, GraduationCap } from 'lucide-react';

interface TeacherClassListProps {
  isDark: boolean;
  onNavigate: (page: 'dashboard' | 'classDetails') => void;
  onBack: () => void;
}

export default function TeacherClassList({ isDark, onNavigate, onBack }: TeacherClassListProps) {
  const classes = [
    { 
      subject: 'Data Structures', 
      semester: 'BCA - Sem 3', 
      studentCount: 45, 
      department: 'Computer Applications',
      color: 'from-blue-500 to-cyan-500',
      icon: '📚'
    },
    { 
      subject: 'Web Development', 
      semester: 'BCA - Sem 5', 
      studentCount: 38, 
      department: 'Computer Applications',
      color: 'from-purple-500 to-pink-500',
      icon: '💻'
    },
    { 
      subject: 'Database Systems', 
      semester: 'BCA - Sem 3', 
      studentCount: 45, 
      department: 'Computer Applications',
      color: 'from-green-500 to-emerald-500',
      icon: '🗄️'
    },
    { 
      subject: 'Java Programming', 
      semester: 'BCA - Sem 5', 
      studentCount: 38, 
      department: 'Computer Applications',
      color: 'from-orange-500 to-red-500',
      icon: '☕'
    },
    { 
      subject: 'Computer Networks', 
      semester: 'BCA - Sem 4', 
      studentCount: 42, 
      department: 'Computer Applications',
      color: 'from-pink-500 to-rose-500',
      icon: '🌐'
    },
    { 
      subject: 'Operating Systems', 
      semester: 'BCA - Sem 4', 
      studentCount: 42, 
      department: 'Computer Applications',
      color: 'from-indigo-500 to-blue-500',
      icon: '💾'
    },
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
      </div>

      {/* Main Content */}
      <div className="relative max-w-md mx-auto px-4 py-6 pb-24">
        
        {/* HEADER */}
        <div className={`backdrop-blur-2xl rounded-3xl p-5 mb-6 shadow-2xl transition-all duration-500 ${
          isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/60'
        }`}>
          <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
            isDark 
              ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
              : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
          }`} />
          
          <div className="relative">
            <h1 className={`mb-1 transition-colors ${
              isDark ? 'text-white/95' : 'text-[#1A1A1A]/90'
            }`}>
              My Classes
            </h1>
            <p className={`transition-colors ${
              isDark ? 'text-white/70' : 'text-[#5A5A5A]/70'
            }`}>
              All subjects you handle
            </p>
          </div>
        </div>

        {/* CLASSES LIST */}
        <div className="space-y-3">
          {classes.map((classItem, index) => (
            <div
              key={index}
              onClick={() => onNavigate('classDetails')}
              className={`backdrop-blur-2xl rounded-3xl p-4 shadow-xl transition-all duration-500 hover:scale-[1.02] cursor-pointer relative ${
                isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/60'
              }`}
            >
              <div className={`absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br ${classItem.color} opacity-10`} />
              
              <div className="relative flex items-center gap-4">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${classItem.color} shadow-lg flex items-center justify-center flex-shrink-0`}>
                  <span className="text-2xl">{classItem.icon}</span>
                </div>
                
                {/* Class Info */}
                <div className="flex-1 min-w-0">
                  <h4 className={`mb-1 transition-colors ${
                    isDark ? 'text-white/95' : 'text-[#1A1A1A]/90'
                  }`}>
                    {classItem.subject}
                  </h4>
                  <p className={`text-sm mb-2 transition-colors ${
                    isDark ? 'text-white/70' : 'text-[#5A5A5A]/70'
                  }`}>
                    {classItem.semester}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className={`px-2.5 py-1 rounded-full backdrop-blur-md text-xs font-medium flex items-center gap-1.5 ${
                      isDark 
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                        : 'bg-blue-100/60 text-blue-700 border border-blue-300/40'
                    }`}>
                      <Users className="w-3 h-3" />
                      {classItem.studentCount} Students
                    </div>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className={`p-2 rounded-full transition-all duration-300 group-hover:translate-x-1 ${
                  isDark ? 'text-white/70' : 'text-gray-600'
                }`}>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}