import { Moon, Sun, Lock, Edit, Shield, Bell, ArrowLeft } from 'lucide-react';
import BottomNav from './BottomNav';

interface SettingsProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  onNavigate: (page: 'dashboard' | 'attendance' | 'materials' | 'results' | 'profile' | 'editProfile' | 'changePassword') => void;
}

export default function Settings({ isDark, setIsDark, onNavigate }: SettingsProps) {
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
              Settings
            </h2>
            <div className="w-10" />
          </div>
        </div>

        {/* APPEARANCE SECTION */}
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
              Appearance
            </h3>

            <div className={`rounded-2xl p-4 backdrop-blur-md transition-all flex items-center justify-between ${
              isDark ? 'bg-white/5' : 'bg-white/40'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg flex items-center justify-center ${
                  isDark ? 'shadow-purple-500/50' : 'shadow-purple-600/30'
                }`}>
                  {isDark ? <Moon className="w-5 h-5 text-white" /> : <Sun className="w-5 h-5 text-white" />}
                </div>
                <div>
                  <span className={`block transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    Theme
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
          </div>
        </div>

        {/* ACCOUNT SECTION */}
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
              Account
            </h3>

            <div className="space-y-3">
              <button 
                onClick={() => onNavigate('editProfile')}
                className={`w-full rounded-2xl p-4 backdrop-blur-md transition-all hover:scale-[1.02] flex items-center gap-3 ${
                  isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white/40 hover:bg-white/60'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg flex items-center justify-center ${
                  isDark ? 'shadow-blue-500/50' : 'shadow-blue-600/30'
                }`}>
                  <Edit className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <span className={`block transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    Edit Profile
                  </span>
                  <span className={`block transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Update your personal information
                  </span>
                </div>
              </button>

              <button 
                onClick={() => onNavigate('changePassword')}
                className={`w-full rounded-2xl p-4 backdrop-blur-md transition-all hover:scale-[1.02] flex items-center gap-3 ${
                  isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white/40 hover:bg-white/60'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg flex items-center justify-center ${
                  isDark ? 'shadow-green-500/50' : 'shadow-green-600/30'
                }`}>
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <span className={`block transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    Change Password
                  </span>
                  <span className={`block transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Update your security credentials
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* PRIVACY & SECURITY SECTION */}
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
              Privacy & Security
            </h3>

            <div className="space-y-3">
              <button className={`w-full rounded-2xl p-4 backdrop-blur-md transition-all hover:scale-[1.02] flex items-center gap-3 ${
                isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white/40 hover:bg-white/60'
              }`}>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg flex items-center justify-center ${
                  isDark ? 'shadow-orange-500/50' : 'shadow-orange-600/30'
                }`}>
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <span className={`block transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    Privacy Policy
                  </span>
                  <span className={`block transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    View our privacy policy
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* NOTIFICATIONS SECTION */}
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
              Notifications
            </h3>

            <div className={`rounded-2xl p-4 backdrop-blur-md transition-all flex items-center justify-between ${
              isDark ? 'bg-white/5' : 'bg-white/40'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 shadow-lg flex items-center justify-center ${
                  isDark ? 'shadow-pink-500/50' : 'shadow-pink-600/30'
                }`}>
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className={`block transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    Push Notifications
                  </span>
                  <span className={`block transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Enabled
                  </span>
                </div>
              </div>
              <button
                className={`relative w-14 h-8 rounded-full transition-colors duration-300 bg-blue-600`}
              >
                <div className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-lg transition-transform duration-300 translate-x-7`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="dashboard" onNavigate={onNavigate} />
    </div>
  );
}