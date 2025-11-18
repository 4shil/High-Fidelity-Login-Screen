import { TrendingUp, Award } from 'lucide-react';
import BottomNav from './BottomNav';

interface ResultsProps {
  onNavigate: (page: 'dashboard' | 'attendance' | 'assignments' | 'results' | 'profile') => void;
  isDark: boolean;
}

export default function Results({ onNavigate, isDark }: ResultsProps) {
  const currentSemester = {
    semester: 3,
    subjects: [
      { name: 'Data Structures', marks: 85, total: 100, grade: 'A', color: 'from-blue-500 to-cyan-500' },
      { name: 'Web Development', marks: 92, total: 100, grade: 'A+', color: 'from-purple-500 to-pink-500' },
      { name: 'Database Systems', marks: 78, total: 100, grade: 'B+', color: 'from-green-500 to-emerald-500' },
      { name: 'Java Programming', marks: 88, total: 100, grade: 'A', color: 'from-orange-500 to-red-500' },
    ],
    sgpa: 8.6,
    percentage: 85.8,
  };

  const previousSemesters = [
    { semester: 2, sgpa: 8.2, percentage: 82 },
    { semester: 1, sgpa: 7.9, percentage: 79 },
  ];

  const cgpa = 7.8;

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
        <div className="backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          
          <div className="relative">
            <h2 className={isDark ? 'text-white' : 'text-[#1A1A1A]/90'}>
              Results
            </h2>
          </div>
        </div>

        {/* CGPA & PERCENTAGE CARDS */}
        <div className="grid grid-cols-2 gap-4">
          <div className="backdrop-blur-2xl rounded-3xl p-5 shadow-xl transition-all duration-500 hover:scale-105 group relative bg-white/5 border border-white/10">
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl -z-10" />
            
            <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            
            <div className="relative text-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-lg flex items-center justify-center mx-auto mb-2">
                <Award className="w-6 h-6 text-white" />
              </div>
              <p className={`mb-1 font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {cgpa}
              </p>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                CGPA
              </p>
            </div>
          </div>

          <div className="backdrop-blur-2xl rounded-3xl p-5 shadow-xl transition-all duration-500 hover:scale-105 group relative bg-white/5 border border-white/10">
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br from-blue-500 to-cyan-600 blur-2xl -z-10" />
            
            <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            
            <div className="relative text-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <p className={`mb-1 font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {currentSemester.percentage}%
              </p>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Current Sem
              </p>
            </div>
          </div>
        </div>

        {/* CURRENT SEMESTER RESULTS */}
        <div>
          <h3 className={`mb-3 px-2 ${isDark ? 'text-white' : 'text-[#1A1A1A]/90'}`}>
            Semester {currentSemester.semester} Results
          </h3>
          
          <div className="space-y-3">
            {currentSemester.subjects.map((subject, index) => (
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
                    <span className={`px-3 py-1 rounded-full font-medium ${
                      subject.grade.startsWith('A')
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {subject.grade}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                      Marks: {subject.marks} / {subject.total}
                    </p>
                    
                    <p className={`font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      {((subject.marks / subject.total) * 100).toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INTERNAL MARKS */}
        <div>
          <h3 className={`mb-3 px-2 ${isDark ? 'text-white' : 'text-[#1A1A1A]/90'}`}>
            Internal Marks
          </h3>
          
          <div className="space-y-3">
            {currentSemester.subjects.map((subject, index) => {
              // Sample internal marks data - in a real app this would come from props/API
              const cia1 = 24;
              const cia1Total = 30;
              const cia2 = 22;
              const cia2Total = 30;
              const totalInternal = cia1 + cia2;
              const totalInternalMax = cia1Total + cia2Total;
              
              return (
                <div
                  key={index}
                  className="backdrop-blur-2xl rounded-3xl p-4 shadow-xl transition-all duration-500 hover:scale-[1.02] bg-white/5 border border-white/10"
                >
                  <div className={`absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br ${subject.color} opacity-10`} />
                  
                  <div className="relative">
                    <h4 className={`mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {subject.name}
                    </h4>
                    
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="rounded-2xl p-3 bg-white/5 backdrop-blur-md">
                        <p className={`text-xs mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          CIA 1
                        </p>
                        <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {cia1}/{cia1Total}
                        </p>
                      </div>
                      
                      <div className="rounded-2xl p-3 bg-white/5 backdrop-blur-md">
                        <p className={`text-xs mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          CIA 2
                        </p>
                        <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {cia2}/{cia2Total}
                        </p>
                      </div>
                      
                      <div className="rounded-2xl p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md border border-blue-500/20">
                        <p className={`text-xs mb-1 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                          Total
                        </p>
                        <p className={`font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                          {totalInternal}/{totalInternalMax}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SEMESTER SUMMARY */}
        <div className="backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          
          <div className="relative">
            <h3 className={`mb-4 ${isDark ? 'text-white' : 'text-[#1A1A1A]/90'}`}>
              Semester Summary
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  SGPA
                </span>
                <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {currentSemester.sgpa}
                </span>
              </div>
              
              <div className="h-px bg-white/10" />
              
              <div className="flex items-center justify-between py-2">
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  Percentage
                </span>
                <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {currentSemester.percentage}%
                </span>
              </div>
              
              <div className="h-px bg-white/10" />
              
              <div className="flex items-center justify-between py-2">
                <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                  Overall CGPA
                </span>
                <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {cgpa}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* PREVIOUS SEMESTERS */}
        <div className="backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          
          <div className="relative">
            <h3 className={`mb-4 ${isDark ? 'text-white' : 'text-[#1A1A1A]/90'}`}>
              Previous Semesters
            </h3>
            
            <div className="space-y-3">
              {previousSemesters.map((sem, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-3 backdrop-blur-md transition-all bg-white/5"
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Semester {sem.semester}
                    </span>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          SGPA
                        </p>
                        <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {sem.sgpa}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          Percentage
                        </p>
                        <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {sem.percentage}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="results" onNavigate={onNavigate} />
    </div>
  );
}