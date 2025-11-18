import { GraduationCap, Mail, Phone, MapPin, Globe, ArrowLeft, Award, Users, BookOpen } from 'lucide-react';
import BottomNav from './BottomNav';

interface AboutProps {
  isDark: boolean;
  onNavigate: (page: 'dashboard' | 'attendance' | 'materials' | 'results' | 'profile') => void;
}

export default function About({ isDark, onNavigate }: AboutProps) {
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
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-shimmer" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-md mx-auto px-4 py-6 space-y-5 pb-24">
        
        {/* TOP BAR */}
        <div className={`backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 ${
          isDark 
            ? 'bg-white/5 border border-white/10' 
            : 'bg-white/30 border border-white/40'
        }`}>
          <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
            isDark 
              ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
              : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
          }`} />
          
          <div className="relative flex items-center justify-between">
            <button 
              onClick={() => onNavigate('dashboard')}
              className={`w-10 h-10 rounded-xl backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 ${
                isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-white/40 hover:bg-white/60'
              }`}
            >
              <ArrowLeft className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-800'}`} />
            </button>
            <h2 className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
              About
            </h2>
            <div className="w-10" />
          </div>
        </div>

        {/* APP INFO CARD */}
        <div className={`backdrop-blur-2xl rounded-3xl p-8 shadow-2xl transition-all duration-500 ${
          isDark 
            ? 'bg-white/5 border border-white/10' 
            : 'bg-white/30 border border-white/40'
        }`}>
          <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
            isDark 
              ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
              : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
          }`} />
          
          <div className="relative flex flex-col items-center text-center">
            {/* App Icon with Glow */}
            <div className="relative mb-4">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl opacity-60 animate-pulse-slow" />
              <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl flex items-center justify-center ring-4 ring-white/20">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
            </div>
            
            <h2 className={`mb-1 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
              JPM College App
            </h2>
            <p className={`mb-3 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Version 1.0.0
            </p>
            <p className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Your all-in-one college companion for academics, attendance, and more.
            </p>
          </div>
        </div>

        {/* COLLEGE STATS */}
        <div className={`backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 ${
          isDark 
            ? 'bg-white/5 border border-white/10' 
            : 'bg-white/30 border border-white/40'
        }`}>
          <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
            isDark 
              ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
              : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
          }`} />
          
          <div className="relative">
            <h3 className={`mb-4 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
              College Highlights
            </h3>

            <div className="grid grid-cols-3 gap-3">
              <div className={`rounded-2xl p-4 backdrop-blur-md text-center ${
                isDark ? 'bg-white/5' : 'bg-white/40'
              }`}>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg flex items-center justify-center mx-auto mb-2 ${
                  isDark ? 'shadow-blue-500/50' : 'shadow-blue-600/30'
                }`}>
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className={`mb-1 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  2500+
                </div>
                <div className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Students
                </div>
              </div>

              <div className={`rounded-2xl p-4 backdrop-blur-md text-center ${
                isDark ? 'bg-white/5' : 'bg-white/40'
              }`}>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg flex items-center justify-center mx-auto mb-2 ${
                  isDark ? 'shadow-purple-500/50' : 'shadow-purple-600/30'
                }`}>
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div className={`mb-1 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  50+
                </div>
                <div className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Courses
                </div>
              </div>

              <div className={`rounded-2xl p-4 backdrop-blur-md text-center ${
                isDark ? 'bg-white/5' : 'bg-white/40'
              }`}>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg flex items-center justify-center mx-auto mb-2 ${
                  isDark ? 'shadow-green-500/50' : 'shadow-green-600/30'
                }`}>
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div className={`mb-1 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  A+
                </div>
                <div className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Accredited
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COLLEGE CONTACT INFO */}
        <div className={`backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 ${
          isDark 
            ? 'bg-white/5 border border-white/10' 
            : 'bg-white/30 border border-white/40'
        }`}>
          <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
            isDark 
              ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
              : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
          }`} />
          
          <div className="relative">
            <h3 className={`mb-4 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Contact Information
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3 py-2">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg flex items-center justify-center ${
                  isDark ? 'shadow-blue-500/50' : 'shadow-blue-600/30'
                }`}>
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Phone
                  </div>
                  <div className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    +91 22 1234 5678
                  </div>
                </div>
              </div>

              <div className={`h-px ${isDark ? 'bg-white/10' : 'bg-gray-300/50'}`} />

              <div className="flex items-center gap-3 py-2">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg flex items-center justify-center ${
                  isDark ? 'shadow-purple-500/50' : 'shadow-purple-600/30'
                }`}>
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Email
                  </div>
                  <div className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    info@jpmcollege.edu
                  </div>
                </div>
              </div>

              <div className={`h-px ${isDark ? 'bg-white/10' : 'bg-gray-300/50'}`} />

              <div className="flex items-start gap-3 py-2">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg flex items-center justify-center ${
                  isDark ? 'shadow-green-500/50' : 'shadow-green-600/30'
                }`}>
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Address
                  </div>
                  <div className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    Mumbai, Maharashtra 400001
                  </div>
                </div>
              </div>

              <div className={`h-px ${isDark ? 'bg-white/10' : 'bg-gray-300/50'}`} />

              <div className="flex items-center gap-3 py-2">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg flex items-center justify-center ${
                  isDark ? 'shadow-orange-500/50' : 'shadow-orange-600/30'
                }`}>
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Website
                  </div>
                  <div className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    www.jpmcollege.edu
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CREDITS */}
        <div className={`backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 ${
          isDark 
            ? 'bg-white/5 border border-white/10' 
            : 'bg-white/30 border border-white/40'
        }`}>
          <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
            isDark 
              ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
              : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
          }`} />
          
          <div className="relative text-center">
            <p className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Developed with ❤️ by JPM IT Department
            </p>
            <p className={`mt-2 transition-colors ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
              © 2024 JPM College. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="dashboard" onNavigate={onNavigate} />
    </div>
  );
}
