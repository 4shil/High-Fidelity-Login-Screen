import { Search, Filter, Download, FileText, FileImage, FileVideo, File } from 'lucide-react';
import { useState } from 'react';
import BottomNav from './BottomNav';

interface MaterialsProps {
  onNavigate: (page: 'dashboard' | 'attendance' | 'materials' | 'results' | 'profile') => void;
  isDark: boolean;
}

export default function Materials({ onNavigate, isDark }: MaterialsProps) {
  const [selectedSubject, setSelectedSubject] = useState('All');

  const subjects = ['All', 'BCA', 'DBMS', 'Python', 'DS', 'English', 'Maths', 'Web Dev'];

  const materials = [
    {
      title: 'Data Structures - Chapter 5: Trees',
      subject: 'DS',
      fileType: 'PDF',
      size: '2.4 MB',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      date: '10 Nov 2025'
    },
    {
      title: 'Python Programming - Lab Manual',
      subject: 'Python',
      fileType: 'PDF',
      size: '5.1 MB',
      icon: FileText,
      color: 'from-green-500 to-emerald-500',
      date: '08 Nov 2025'
    },
    {
      title: 'Database Design Tutorial',
      subject: 'DBMS',
      fileType: 'Video',
      size: '124 MB',
      icon: FileVideo,
      color: 'from-purple-500 to-pink-500',
      date: '05 Nov 2025'
    },
    {
      title: 'Web Development - React Basics',
      subject: 'Web Dev',
      fileType: 'PDF',
      size: '3.2 MB',
      icon: FileText,
      color: 'from-orange-500 to-red-500',
      date: '03 Nov 2025'
    },
    {
      title: 'English Literature Notes',
      subject: 'English',
      fileType: 'DOCX',
      size: '1.8 MB',
      icon: File,
      color: 'from-pink-500 to-rose-500',
      date: '01 Nov 2025'
    },
    {
      title: 'Mathematics - Calculus Lecture',
      subject: 'Maths',
      fileType: 'PDF',
      size: '4.5 MB',
      icon: FileText,
      color: 'from-indigo-500 to-blue-500',
      date: '28 Oct 2025'
    },
    {
      title: 'BCA Syllabus 2025',
      subject: 'BCA',
      fileType: 'PDF',
      size: '892 KB',
      icon: FileText,
      color: 'from-cyan-500 to-teal-500',
      date: '20 Oct 2025'
    },
    {
      title: 'Data Structures - Assignment Solutions',
      subject: 'DS',
      fileType: 'Images',
      size: '8.2 MB',
      icon: FileImage,
      color: 'from-blue-500 to-cyan-500',
      date: '15 Oct 2025'
    },
  ];

  const filteredMaterials = selectedSubject === 'All' 
    ? materials 
    : materials.filter(m => m.subject === selectedSubject);

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
        
        {/* TOP BAR WITH FILTER */}
        <div className="flex items-center gap-3">
          <div className="flex-1 backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
            <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            
            <div className="relative">
              <h2 className={isDark ? 'text-white' : 'text-[#1A1A1A]/90'}>
                Study Materials
              </h2>
            </div>
          </div>

          <button className="backdrop-blur-2xl rounded-2xl p-4 shadow-2xl transition-all duration-500 hover:scale-110 bg-white/5 border border-white/10 group">
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br from-blue-500 to-purple-600 blur-lg -z-10" />
            <Filter className="w-6 h-6 text-blue-400" />
          </button>
        </div>

        {/* SEARCH BAR */}
        <div className="backdrop-blur-2xl rounded-3xl p-4 shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          
          <div className="relative flex items-center gap-3">
            <Search className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              type="text"
              placeholder="Search materials..."
              className={`flex-1 bg-transparent border-none outline-none ${
                isDark ? 'text-white placeholder:text-gray-500' : 'text-gray-900 placeholder:text-gray-400'
              }`}
            />
          </div>
        </div>

        {/* SUBJECT FILTER CHIPS */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {subjects.map((subject, index) => (
            <button
              key={index}
              onClick={() => setSelectedSubject(subject)}
              className={`px-5 py-2.5 rounded-full backdrop-blur-2xl shadow-lg transition-all duration-300 whitespace-nowrap ${
                selectedSubject === subject
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border border-blue-400/30 scale-105'
                  : isDark
                    ? 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                    : 'bg-white/5 text-gray-700 border border-white/20 hover:bg-white/10'
              }`}
            >
              {selectedSubject === subject && (
                <div className="absolute inset-0 rounded-full blur-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-50 -z-10" />
              )}
              {subject}
            </button>
          ))}
        </div>

        {/* MATERIALS LIST */}
        <div className="space-y-3">
          {filteredMaterials.map((material, index) => {
            const Icon = material.icon;
            
            return (
              <div
                key={index}
                className="backdrop-blur-2xl rounded-3xl p-4 shadow-xl transition-all duration-500 hover:scale-[1.02] group bg-white/5 border border-white/10"
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${material.color} blur-xl -z-10`} />
                
                <div className={`absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br ${material.color} opacity-5`} />
                
                <div className="relative flex items-center gap-4">
                  {/* File Type Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${material.color} shadow-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Material Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`mb-1 truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {material.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 text-xs rounded-full ${
                        isDark ? 'bg-white/10 text-gray-300' : 'bg-white/20 text-gray-700'
                      }`}>
                        {material.fileType}
                      </span>
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        {material.size}
                      </span>
                    </div>
                    <p className={`mt-1 text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      {material.date}
                    </p>
                  </div>
                  
                  {/* Download Button */}
                  <button className="backdrop-blur-xl rounded-xl p-3 shadow-lg transition-all duration-300 hover:scale-110 bg-white/10 hover:bg-white/20 border border-white/20 flex-shrink-0 group/btn">
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover/btn:opacity-50 transition-opacity duration-300 bg-gradient-to-br from-blue-500 to-purple-600 blur-md -z-10" />
                    <Download className="w-5 h-5 text-blue-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredMaterials.length === 0 && (
          <div className="backdrop-blur-2xl rounded-3xl p-12 shadow-2xl text-center bg-white/5 border border-white/10">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-500 to-gray-600 shadow-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="mb-2 text-white">
              No materials found
            </h3>
            <p className="text-gray-400">
              Try selecting a different subject
            </p>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="materials" onNavigate={onNavigate} />

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