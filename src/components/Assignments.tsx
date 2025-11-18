import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

import { Button } from './ui/button';
import BottomNav from './BottomNav';

interface AssignmentsProps {
  onNavigate: (page: 'dashboard' | 'attendance' | 'assignments' | 'results' | 'profile') => void;
}

export default function Assignments({ onNavigate }: AssignmentsProps) {
  const pendingAssignments = [
    { 
      title: 'Data Structures Project', 
      subject: 'Data Structures', 
      dueDate: '20 Nov 2025', 
      daysLeft: 4,
      color: 'from-blue-500 to-cyan-500' 
    },
    { 
      title: 'Web Development Assignment', 
      subject: 'Web Development', 
      dueDate: '18 Nov 2025', 
      daysLeft: 2,
      color: 'from-purple-500 to-pink-500' 
    },
    { 
      title: 'Database Design Report', 
      subject: 'Database Systems', 
      dueDate: '22 Nov 2025', 
      daysLeft: 6,
      color: 'from-green-500 to-emerald-500' 
    },
  ];

  const completedAssignments = [
    { 
      title: 'Java Lab Exercise 5', 
      subject: 'Java Programming', 
      submittedOn: '14 Nov 2025',
      grade: 'A',
      color: 'from-orange-500 to-red-500' 
    },
    { 
      title: 'Algorithm Analysis', 
      subject: 'Data Structures', 
      submittedOn: '10 Nov 2025',
      grade: 'A+',
      color: 'from-blue-500 to-cyan-500' 
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden transition-colors duration-500 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900">
      {/* Background Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob bg-gradient-to-br from-blue-600 to-blue-500 opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 bg-gradient-to-br from-purple-600 to-pink-500 opacity-30" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 bg-gradient-to-br from-blue-500 to-slate-700 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-shimmer" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-md mx-auto px-4 py-6 space-y-5">
        
        {/* TOP BAR */}
        <div className="backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          
          <div className="relative">
            <h2 className="text-white">
              Assignments
            </h2>
          </div>
        </div>

        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-2 gap-4">
          <div className="backdrop-blur-2xl rounded-3xl p-4 shadow-xl transition-all duration-500 bg-white/5 border border-white/10">
            <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            
            <div className="relative text-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg flex items-center justify-center mx-auto mb-2">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <p className="mb-1 text-white">
                {pendingAssignments.length}
              </p>
              <p className="text-gray-400">
                Pending
              </p>
            </div>
          </div>

          <div className="backdrop-blur-2xl rounded-3xl p-4 shadow-xl transition-all duration-500 bg-white/5 border border-white/10">
            <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            
            <div className="relative text-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <p className="mb-1 text-white">
                {completedAssignments.length}
              </p>
              <p className="text-gray-400">
                Completed
              </p>
            </div>
          </div>
        </div>

        {/* PENDING ASSIGNMENTS */}
        <div>
          <h3 className="mb-3 px-2 text-white">
            Pending Assignments
          </h3>
          
          <div className="space-y-3">
            {pendingAssignments.map((assignment, index) => (
              <div
                key={index}
                className="backdrop-blur-2xl rounded-3xl p-4 shadow-xl transition-all duration-500 hover:scale-[1.02] bg-white/5 border border-white/10"
              >
                <div className={`absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br ${assignment.color} opacity-10`} />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h4 className="mb-1 text-white">
                        {assignment.title}
                      </h4>
                      <p className="text-gray-400">
                        {assignment.subject}
                      </p>
                    </div>
                    
                    {assignment.daysLeft <= 3 && (
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-400">
                        Due: {assignment.dueDate}
                      </span>
                    </div>
                    
                    <span className={`px-3 py-1 rounded-full ${
                      assignment.daysLeft <= 3
                        ? 'bg-red-500/20 text-red-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {assignment.daysLeft} days left
                    </span>
                  </div>
                  
                  <Button
                    className="w-full mt-3 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg transition-all duration-300"
                  >
                    Submit Assignment
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COMPLETED ASSIGNMENTS */}
        <div className="backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          
          <div className="relative">
            <h3 className="mb-4 text-white">
              Completed Assignments
            </h3>
            
            <div className="space-y-3">
              {completedAssignments.map((assignment, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-3 backdrop-blur-md transition-all bg-white/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="text-white">
                          {assignment.title}
                        </p>
                        <p className="text-gray-400">
                          {assignment.subject}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400">
                        Grade: {assignment.grade}
                      </span>
                      <p className="mt-1 text-gray-400">
                        {assignment.submittedOn}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="assignments" onNavigate={onNavigate} />
    </div>
  );
}
