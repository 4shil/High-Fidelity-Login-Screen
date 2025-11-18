import { ArrowLeft, Calendar, Check, X, Users, Clock } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface TeacherAttendanceMarkingProps {
  isDark: boolean;
  onBack: () => void;
}

export default function TeacherAttendanceMarking({ isDark, onBack }: TeacherAttendanceMarkingProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Today, Dec 18, 2024');
  
  const classInfo = {
    subject: 'Data Structures',
    semester: 'BCA - Sem 3',
    time: '9:00 - 10:30 AM',
    totalStudents: 45,
    isOngoing: true,
    color: 'from-blue-500 to-cyan-500'
  };

  const [students, setStudents] = useState([
    { id: 1, name: 'Rahul Sharma', prn: 'BCA2023001', present: true, overallAttendance: 92 },
    { id: 2, name: 'Priya Singh', prn: 'BCA2023002', present: true, overallAttendance: 88 },
    { id: 3, name: 'Amit Patel', prn: 'BCA2023003', present: false, overallAttendance: 72 },
    { id: 4, name: 'Sneha Reddy', prn: 'BCA2023004', present: true, overallAttendance: 95 },
    { id: 5, name: 'Vikram Kumar', prn: 'BCA2023005', present: true, overallAttendance: 68 },
    { id: 6, name: 'Anjali Verma', prn: 'BCA2023006', present: true, overallAttendance: 85 },
    { id: 7, name: 'Rohan Gupta', prn: 'BCA2023007', present: true, overallAttendance: 90 },
    { id: 8, name: 'Kavya Nair', prn: 'BCA2023008', present: false, overallAttendance: 78 },
    { id: 9, name: 'Arjun Mehta', prn: 'BCA2023009', present: true, overallAttendance: 65 },
    { id: 10, name: 'Divya Shah', prn: 'BCA2023010', present: true, overallAttendance: 82 },
  ]);

  const toggleAttendance = (id: number) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, present: !student.present } : student
    ));
  };

  const markAllPresent = () => {
    setStudents(students.map(student => ({ ...student, present: true })));
  };

  const handleSubmit = () => {
    setShowConfirmation(true);
  };

  const confirmSubmit = () => {
    setShowConfirmation(false);
    // Handle actual submission
    onBack();
  };

  const presentCount = students.filter(s => s.present).length;

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
      <div className="relative max-w-md mx-auto px-4 py-6 pb-32">
        
        {/* HEADER */}
        <div className={`backdrop-blur-2xl rounded-3xl p-5 mb-6 shadow-2xl transition-all duration-500 relative ${
          isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/60'
        } ${classInfo.isOngoing ? 'ring-2 ring-blue-400/50' : ''}`}>
          {/* Ongoing Glow Effect */}
          {classInfo.isOngoing && (
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 blur-xl -z-10 animate-pulse" />
          )}
          
          <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
            isDark 
              ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
              : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
          }`} />
          
          <div className="relative">
            {/* Back Button Row */}
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

              {classInfo.isOngoing && (
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-medium animate-pulse border border-blue-400/30">
                  Class Ongoing
                </span>
              )}
            </div>

            {/* Class Info */}
            <div className="mb-4">
              <h1 className={`mb-1 transition-colors ${
                isDark ? 'text-white/95' : 'text-[#1A1A1A]/90'
              }`}>
                {classInfo.subject}
              </h1>
              <p className={`mb-2 transition-colors ${
                isDark ? 'text-white/70' : 'text-[#5A5A5A]/70'
              }`}>
                {classInfo.semester}
              </p>
              <div className="flex items-center gap-3 text-sm">
                <div className={`flex items-center gap-1.5 ${
                  isDark ? 'text-white/60' : 'text-gray-600'
                }`}>
                  <Clock className="w-4 h-4" />
                  {classInfo.time}
                </div>
                <span className={isDark ? 'text-gray-500' : 'text-gray-400'}>•</span>
                <div className={`flex items-center gap-1.5 ${
                  isDark ? 'text-white/60' : 'text-gray-600'
                }`}>
                  <Users className="w-4 h-4" />
                  {presentCount}/{classInfo.totalStudents} Present
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* Mark All Present */}
          <button
            onClick={markAllPresent}
            className={`backdrop-blur-2xl rounded-3xl p-4 shadow-xl transition-all duration-500 hover:scale-105 group relative border ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-white/40 border border-white/60'
            }`}
          >
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br from-green-500 to-emerald-600 blur-2xl -z-10" />
            <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-green-500 to-emerald-600 opacity-5" />
            
            <div className="relative flex items-center justify-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className={`font-medium ${isDark ? 'text-white/90' : 'text-gray-900'}`}>
                Mark All
              </span>
            </div>
          </button>

          {/* Select Date */}
          <button
            className={`backdrop-blur-2xl rounded-3xl p-4 shadow-xl transition-all duration-500 hover:scale-105 group relative border ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-white/40 border border-white/60'
            }`}
          >
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br from-blue-500 to-cyan-600 blur-2xl -z-10" />
            <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-blue-500 to-cyan-600 opacity-5" />
            
            <div className="relative flex items-center justify-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <span className={`font-medium ${isDark ? 'text-white/90' : 'text-gray-900'}`}>
                Select Date
              </span>
            </div>
          </button>
        </div>

        {/* STUDENTS LIST */}
        <div className={`backdrop-blur-2xl rounded-3xl p-4 shadow-2xl transition-all duration-500 ${
          isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/60'
        }`}>
          <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
            isDark 
              ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
              : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
          }`} />
          
          <div className="relative max-h-96 overflow-y-auto space-y-3">
            {students.map((student, index) => (
              <div key={student.id}>
                <div className="rounded-2xl p-4 backdrop-blur-md transition-all bg-white/5 hover:bg-white/10">
                  <div className="flex items-center gap-3">
                    {/* Student Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <p className={`${isDark ? 'text-white/90' : 'text-gray-900'}`}>
                          {student.name}
                        </p>
                        {/* Low Attendance Indicator */}
                        {student.overallAttendance < 75 && (
                          <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-xs font-medium border border-red-500/30 whitespace-nowrap">
                            Low Attendance
                          </span>
                        )}
                      </div>
                      <p className={`text-sm mb-1 ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                        {student.prn}
                      </p>
                      <p className={`text-xs ${isDark ? 'text-white/50' : 'text-gray-500'}`}>
                        Overall: {student.overallAttendance}%
                      </p>
                    </div>
                    
                    {/* Glass Toggle Switch */}
                    <button
                      onClick={() => toggleAttendance(student.id)}
                      className={`relative w-16 h-8 rounded-full backdrop-blur-xl transition-all duration-300 border ${
                        student.present
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600 border-green-400/50 shadow-lg shadow-green-500/50'
                          : 'bg-gradient-to-r from-red-500 to-rose-600 border-red-400/50 shadow-lg shadow-red-500/50'
                      }`}
                    >
                      {/* Switch Thumb */}
                      <div
                        className={`absolute top-0.5 w-7 h-7 rounded-full bg-white shadow-xl transition-all duration-300 flex items-center justify-center ${
                          student.present ? 'left-0.5' : 'left-8'
                        }`}
                      >
                        {student.present ? (
                          <Check className="w-3.5 h-3.5 text-green-600" />
                        ) : (
                          <X className="w-3.5 h-3.5 text-red-600" />
                        )}
                      </div>
                    </button>
                  </div>
                </div>
                
                {/* Separator */}
                {index < students.length - 1 && (
                  <div className={`h-px my-2 ${isDark ? 'bg-white/5' : 'bg-gray-300/20'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM SUBMISSION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 pb-6 px-4">
        <div className="max-w-md mx-auto">
          <Button
            onClick={handleSubmit}
            className="w-full py-5 rounded-3xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 backdrop-blur-sm border border-blue-400/30 relative overflow-hidden group"
          >
            <span className="relative z-10 font-medium">Submit Attendance ({presentCount}/{classInfo.totalStudents})</span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>
      </div>

      {/* CONFIRMATION MODAL */}
      {showConfirmation && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div
            className={`w-full max-w-sm backdrop-blur-2xl rounded-3xl p-6 shadow-2xl transition-all duration-500 animate-in zoom-in-95 ${
              isDark ? 'bg-white/10 border border-white/20' : 'bg-white/60 border border-white/80'
            }`}
          >
            <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
              isDark 
                ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
                : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
            }`} />
            
            <div className="relative">
              <h3 className={`mb-2 ${isDark ? 'text-white/95' : 'text-gray-900'}`}>
                Submit Attendance?
              </h3>
              <p className={`mb-6 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                You can still edit later from Attendance History.
              </p>
              <p className={`mb-6 text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                Present: {presentCount} / Absent: {classInfo.totalStudents - presentCount}
              </p>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className={`flex-1 py-3 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 border ${
                    isDark 
                      ? 'bg-white/5 hover:bg-white/10 text-white/90 border-white/20'
                      : 'bg-white/40 hover:bg-white/60 text-gray-900 border-white/60'
                  }`}
                >
                  Cancel
                </button>
                <button
                  onClick={confirmSubmit}
                  className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-xl hover:shadow-blue-500/50 transition-all duration-300 backdrop-blur-sm border border-blue-400/30"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}