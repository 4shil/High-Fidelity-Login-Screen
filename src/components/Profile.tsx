import { Moon, Sun, User, GraduationCap, Mail, Phone, MapPin, Calendar, Edit, Lock, LogOut, Shield, IdCard, BookOpen } from 'lucide-react';
import { Button } from './ui/button';
import BottomNav from './BottomNav';

interface ProfileProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  onNavigate: (page: 'dashboard' | 'attendance' | 'materials' | 'results' | 'profile' | 'editProfile' | 'changePassword') => void;
  onSignOut: () => void;
  email: string;
}

export default function Profile({ isDark, setIsDark, onNavigate, onSignOut, email }: ProfileProps) {
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
      <div className="relative max-w-md mx-auto px-4 py-6 space-y-5">
        
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
          
          <div className="relative">
            <h2 className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Profile
            </h2>
          </div>
        </div>

        {/* PROFILE PHOTO & NAME */}
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
          
          <div className="relative flex flex-col items-center">
            {/* Profile Photo with Glow */}
            <div className="relative mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-xl opacity-60 animate-pulse-slow" />
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl flex items-center justify-center ring-4 ring-white/20">
                <span className="text-4xl">👤</span>
              </div>
            </div>
            
            <h2 className={`mb-1 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Ash
            </h2>
            <p className={`transition-colors ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              BCA — Semester 3
            </p>
          </div>
        </div>

        {/* ACADEMIC DETAILS CARD */}
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
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg flex items-center justify-center ${
                isDark ? 'shadow-blue-500/50' : 'shadow-blue-600/30'
              }`}>
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                Academic Details
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <Shield className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    APAAR ID
                  </span>
                </div>
                <span className={`transition-colors font-mono tracking-wider ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  ••••••••••••3456
                </span>
              </div>

              <div className={`h-px ${isDark ? 'bg-white/10' : 'bg-gray-300/50'}`} />

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <IdCard className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    PRN / Roll Number
                  </span>
                </div>
                <span className={`transition-colors font-mono ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  BCA••••001
                </span>
              </div>

              <div className={`h-px ${isDark ? 'bg-white/10' : 'bg-gray-300/50'}`} />

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <BookOpen className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Admission Number
                  </span>
                </div>
                <span className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  ADM2023456
                </span>
              </div>

              <div className={`h-px ${isDark ? 'bg-white/10' : 'bg-gray-300/50'}`} />

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <GraduationCap className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Current Semester
                  </span>
                </div>
                <span className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  Semester 3
                </span>
              </div>

              <div className={`h-px ${isDark ? 'bg-white/10' : 'bg-gray-300/50'}`} />

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <BookOpen className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Department
                  </span>
                </div>
                <span className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  BCA
                </span>
              </div>

              <div className={`h-px ${isDark ? 'bg-white/10' : 'bg-gray-300/50'}`} />

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <User className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Class Advisor
                  </span>
                </div>
                <span className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  Dr. Smith
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* PERSONAL INFORMATION CARD */}
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
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg flex items-center justify-center ${
                isDark ? 'shadow-purple-500/50' : 'shadow-purple-600/30'
              }`}>
                <User className="w-5 h-5 text-white" />
              </div>
              <h3 className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                Personal Information
              </h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <Calendar className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Date of Birth
                  </span>
                </div>
                <span className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  15 Jan 2005
                </span>
              </div>

              <div className={`h-px ${isDark ? 'bg-white/10' : 'bg-gray-300/50'}`} />

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <Mail className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Email
                  </span>
                </div>
                <span className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  {email}
                </span>
              </div>

              <div className={`h-px ${isDark ? 'bg-white/10' : 'bg-gray-300/50'}`} />

              <div className="flex items-center justify-between py-2">
                <div className="flex items-center gap-2">
                  <Phone className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Phone Number
                  </span>
                </div>
                <span className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  +91 98765 43210
                </span>
              </div>

              <div className={`h-px ${isDark ? 'bg-white/10' : 'bg-gray-300/50'}`} />

              <div className="flex items-start justify-between py-2">
                <div className="flex items-center gap-2">
                  <MapPin className={`w-4 h-4 mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                  <span className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Address
                  </span>
                </div>
                <span className={`text-right transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  Mumbai, Maharashtra
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* APP SETTINGS CARD */}
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
              App Settings
            </h3>

            <div className="space-y-3">
              <button 
                onClick={() => onNavigate('editProfile')}
                className={`w-full rounded-2xl p-3 backdrop-blur-md transition-all hover:scale-[1.02] flex items-center gap-3 ${
                  isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white/40 hover:bg-white/60'
                }`}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg flex items-center justify-center">
                  <Edit className="w-5 h-5 text-white" />
                </div>
                <span className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  Edit Profile
                </span>
              </button>

              <button 
                onClick={() => onNavigate('changePassword')}
                className={`w-full rounded-2xl p-3 backdrop-blur-md transition-all hover:scale-[1.02] flex items-center gap-3 ${
                  isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white/40 hover:bg-white/60'
                }`}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <span className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  Change Password
                </span>
              </button>

              <div className={`rounded-2xl p-3 backdrop-blur-md transition-all flex items-center justify-between ${
                isDark ? 'bg-white/5' : 'bg-white/40'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg flex items-center justify-center">
                    {isDark ? <Moon className="w-5 h-5 text-white" /> : <Sun className="w-5 h-5 text-white" />}
                  </div>
                  <div>
                    <span className={`block transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      Appearance
                    </span>
                    <span className={`block transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {isDark ? 'Dark Mode' : 'Light Mode'}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
                    isDark ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-lg transition-transform duration-300 ${
                    isDark ? 'translate-x-7' : 'translate-x-1'
                  }`} />
                </button>
              </div>

              <Button
                onClick={onSignOut}
                className={`w-full rounded-2xl p-3 backdrop-blur-md transition-all hover:scale-[1.02] flex items-center gap-3 ${
                  isDark ? 'bg-white/5 hover:bg-white/10 text-red-400' : 'bg-white/40 hover:bg-white/60 text-red-600'
                }`}
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg flex items-center justify-center">
                  <LogOut className="w-4 h-4 text-white" />
                </div>
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Safe Area Spacer */}
        <div className="h-20" />
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="profile" onNavigate={onNavigate} />
    </div>
  );
}