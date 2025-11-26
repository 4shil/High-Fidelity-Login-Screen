import { useState } from 'react';
import { Eye, EyeOff, Moon, Sun, ArrowRight, GraduationCap, Users, Shield, FileText, BookOpen, Bus, Utensils, DollarSign, Building2, Briefcase } from 'lucide-react';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import Dashboard from './components/Dashboard';
import TeacherDashboard from './components/TeacherDashboard';
import TeacherClassList from './components/TeacherClassList';
import ClassDetails from './components/ClassDetails';
import TeacherAttendanceMarking from './components/TeacherAttendanceMarking';
import UploadMaterial from './components/UploadMaterial';
import Profile from './components/Profile';
import Attendance from './components/Attendance';
import Materials from './components/Materials';
import Results from './components/Results';
import More from './components/More';
import Leave from './components/Leave';
import EditProfile from './components/EditProfile';
import ChangePassword from './components/ChangePassword';
import Fees from './components/Fees';
import Notifications from './components/Notifications';
import Settings from './components/Settings';
import HelpSupport from './components/HelpSupport';
import About from './components/About';
import PaymentSuccess from './components/PaymentSuccess';
import SignUp from './components/SignUp';

// Admin Dashboard Imports
import SuperAdminDashboard from './modules/admin/super-admin/SuperAdminDashboard';
import PrincipalDashboard from './modules/admin/principal/PrincipalDashboard';
import ExamCellDashboard from './modules/admin/exam-cell/ExamCellDashboard';
import LibraryAdminDashboard from './modules/admin/library/LibraryAdminDashboard';
import BusAdminDashboard from './modules/admin/bus/BusAdminDashboard';
import CanteenAdminDashboard from './modules/admin/canteen/CanteenAdminDashboard';
import FeeAdminDashboard from './modules/admin/fee/FeeAdminDashboard';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDark, setIsDark] = useState(true); // Default to dark theme
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isTeacherLogin, setIsTeacherLogin] = useState(false); // Track if on Teacher Login
  const [isAdminLogin, setIsAdminLogin] = useState(false); // Track if on Admin Login
  const [showAdminRoleSelect, setShowAdminRoleSelect] = useState(false); // Track if showing admin role selection
  const [adminRole, setAdminRole] = useState<'super-admin' | 'principal' | 'department-admin' | 'hod' | 'exam-cell' | 'library' | 'bus' | 'canteen' | 'fee' | null>(null); // Track admin role type
  const [currentView, setCurrentView] = useState<'dashboard' | 'attendance' | 'materials' | 'results' | 'profile' | 'more' | 'leave' | 'editProfile' | 'changePassword' | 'forgotPassword' | 'fees' | 'notifications' | 'settings' | 'helpSupport' | 'about' | 'paymentSuccess' | 'signUp' | 'classList' | 'classDetails' | 'attendanceMarking' | 'uploadMaterial'>('dashboard');

  const handleSignIn = () => {
    // If admin login, user must have selected a role first
    if (isAdminLogin && !adminRole) {
      setShowAdminRoleSelect(true);
      return;
    }
    
    setIsSignedIn(true);
    setCurrentView('dashboard');
  };

  const handleAdminRoleSelect = (role: 'super-admin' | 'principal' | 'department-admin' | 'hod' | 'exam-cell' | 'library' | 'bus' | 'canteen' | 'fee') => {
    setAdminRole(role);
    setShowAdminRoleSelect(false); // Hide selection screen to show login form
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setCurrentView('dashboard');
    setEmail('');
    setPassword('');
    setAdminRole(null);
    setShowAdminRoleSelect(false);
  };

  const handleNavigate = (page: 'dashboard' | 'attendance' | 'materials' | 'results' | 'profile' | 'more' | 'leave' | 'editProfile' | 'changePassword' | 'fees' | 'notifications' | 'settings' | 'helpSupport' | 'about' | 'paymentSuccess') => {
    setCurrentView(page);
  };

  const handleForgotPassword = () => {
    setCurrentView('forgotPassword');
  };

  const handleBackToLogin = () => {
    setCurrentView('dashboard');
  };

  const handleBackToProfile = () => {
    setCurrentView('profile');
  };

  // Show Forgot Password page (for non-logged-in users)
  if (currentView === 'forgotPassword') {
    return <ChangePassword isDark={isDark} onBack={handleBackToLogin} isLoggedIn={false} />;
  }

  // Show Sign Up page (for non-logged-in users)
  if (currentView === 'signUp') {
    return <SignUp isDark={isDark} onBack={handleBackToLogin} onSignUpSuccess={handleSignIn} />;
  }

  // Show Admin Role Selection Screen
  if (showAdminRoleSelect && isAdminLogin) {
    const adminRoles = [
      { 
        id: 'super-admin', 
        name: 'Super Admin', 
        desc: 'Full System Control',
        icon: Shield,
        color: 'from-red-500 to-pink-600'
      },
      { 
        id: 'principal', 
        name: 'Principal', 
        desc: 'Academic Governance',
        icon: GraduationCap,
        color: 'from-blue-500 to-indigo-600'
      },
      { 
        id: 'department-admin', 
        name: 'Department Admin', 
        desc: 'Dept Management',
        icon: Building2,
        color: 'from-purple-500 to-indigo-600'
      },
      { 
        id: 'hod', 
        name: 'HoD', 
        desc: 'Head of Department',
        icon: Briefcase,
        color: 'from-teal-500 to-emerald-600'
      },
      { 
        id: 'exam-cell', 
        name: 'Exam Cell Admin', 
        desc: 'Exam Management',
        icon: FileText,
        color: 'from-orange-500 to-red-600'
      },
      { 
        id: 'library', 
        name: 'Library Admin', 
        desc: 'Library Management',
        icon: BookOpen,
        color: 'from-green-500 to-emerald-600'
      },
      { 
        id: 'bus', 
        name: 'Bus Admin', 
        desc: 'Transport Management',
        icon: Bus,
        color: 'from-blue-500 to-cyan-600'
      },
      { 
        id: 'canteen', 
        name: 'Canteen Admin', 
        desc: 'Canteen Management',
        icon: Utensils,
        color: 'from-orange-500 to-yellow-600'
      },
      { 
        id: 'fee', 
        name: 'Finance/Fee Admin', 
        desc: 'Finance Management',
        icon: DollarSign,
        color: 'from-green-500 to-emerald-600'
      }
    ];

    return (
      <div className={`relative min-h-screen w-full overflow-hidden flex items-center justify-center p-4 transition-colors duration-500 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900' 
          : 'bg-gradient-to-br from-blue-100 via-white to-purple-100'
      }`}>
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob ${
            isDark ? 'bg-gradient-to-br from-red-600 to-pink-500 opacity-30' : 'bg-gradient-to-br from-red-400 to-pink-300 opacity-40'
          }`} />
          <div className={`absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 ${
            isDark ? 'bg-gradient-to-br from-purple-600 to-pink-500 opacity-30' : 'bg-gradient-to-br from-purple-400 to-pink-300 opacity-40'
          }`} />
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setIsDark(!isDark)}
          className={`absolute top-6 right-6 p-3 rounded-full backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-110 z-50 ${
            isDark ? 'bg-white/10 hover:bg-white/20 text-yellow-300 border border-white/20' : 'bg-white/40 hover:bg-white/60 text-gray-700 border border-white/50'
          }`}
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Back Button */}
        <button
          onClick={() => setShowAdminRoleSelect(false)}
          className={`absolute top-6 left-6 px-4 py-2 rounded-full backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-105 z-50 flex items-center gap-2 ${
            isDark ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20' : 'bg-white/40 hover:bg-white/60 text-gray-700 border border-white/50'
          }`}
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          <span>Back</span>
        </button>

        {/* Main Content */}
        <div className="relative w-full max-w-4xl z-10">
          <div className={`backdrop-blur-2xl rounded-3xl p-8 shadow-2xl transition-all duration-500 ${
            isDark ? 'bg-white/5 border border-white/10' : 'bg-white/30 border border-white/40'
          }`}>
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
              </div>
              <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Select Admin Role
              </h1>
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Choose your administrative role to continue
              </p>
            </div>

            {/* Role Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {adminRoles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => handleAdminRoleSelect(role.id as any)}
                  className={`group p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    isDark 
                      ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20' 
                      : 'bg-white/40 border-white/50 hover:bg-white/60 hover:border-white/70'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <role.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {role.name}
                  </h3>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {role.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isSignedIn) {
    // Admin Dashboard Routing
    if (isAdminLogin && adminRole) {
      switch (adminRole) {
        case 'super-admin':
          return <SuperAdminDashboard isDark={isDark} email={email} onSignOut={handleSignOut} onNavigate={handleNavigate} />;
        case 'principal':
          return <PrincipalDashboard isDark={isDark} email={email} onSignOut={handleSignOut} />;
        case 'exam-cell':
          return <ExamCellDashboard isDark={isDark} email={email} onSignOut={handleSignOut} />;
        case 'library':
          return <LibraryAdminDashboard isDark={isDark} email={email} onSignOut={handleSignOut} />;
        case 'bus':
          return <BusAdminDashboard isDark={isDark} email={email} onSignOut={handleSignOut} />;
        case 'canteen':
          return <CanteenAdminDashboard isDark={isDark} email={email} onSignOut={handleSignOut} />;
        case 'fee':
          return <FeeAdminDashboard isDark={isDark} email={email} onSignOut={handleSignOut} />;
        default:
          return <SuperAdminDashboard isDark={isDark} email={email} onSignOut={handleSignOut} onNavigate={handleNavigate} />;
      }
    }

    // Teacher/Student Dashboard Routing (existing)
    const commonProps = {
      isDark,
      setIsDark,
      onNavigate: handleNavigate,
      onSignOut: handleSignOut,
      email,
    };

    switch (currentView) {
      case 'attendance':
        return <Attendance onNavigate={handleNavigate} isDark={isDark} />;
      case 'materials':
        return <Materials onNavigate={handleNavigate} isDark={isDark} />;
      case 'results':
        return <Results onNavigate={handleNavigate} isDark={isDark} />;
      case 'profile':
        return <Profile isDark={isDark} setIsDark={setIsDark} onNavigate={handleNavigate} onSignOut={handleSignOut} email={email} />;
      case 'editProfile':
        return <EditProfile isDark={isDark} onNavigate={handleNavigate} email={email} />;
      case 'changePassword':
        return <ChangePassword isDark={isDark} onBack={handleBackToProfile} isLoggedIn={true} />;
      case 'more':
        return <More onNavigate={handleNavigate} isDark={isDark} />;
      case 'leave':
        return <Leave onNavigate={handleNavigate} isDark={isDark} />;
      case 'fees':
        return <Fees onNavigate={handleNavigate} isDark={isDark} />;
      case 'notifications':
        return <Notifications onNavigate={handleNavigate} isDark={isDark} />;
      case 'settings':
        return <Settings onNavigate={handleNavigate} isDark={isDark} setIsDark={setIsDark} />;
      case 'helpSupport':
        return <HelpSupport onNavigate={handleNavigate} isDark={isDark} />;
      case 'about':
        return <About onNavigate={handleNavigate} isDark={isDark} />;
      case 'paymentSuccess':
        return <PaymentSuccess onNavigate={handleNavigate} isDark={isDark} />;
      case 'classList':
        return <TeacherClassList isDark={isDark} onNavigate={(page) => setCurrentView(page)} onBack={() => setCurrentView('dashboard')} />;
      case 'classDetails':
        return <ClassDetails isDark={isDark} onBack={() => setCurrentView('dashboard')} />;
      case 'attendanceMarking':
        return <TeacherAttendanceMarking isDark={isDark} onBack={() => setCurrentView('dashboard')} />;
      case 'uploadMaterial':
        return <UploadMaterial isDark={isDark} onBack={() => setCurrentView('dashboard')} />;
      default:
        return isTeacherLogin ? <TeacherDashboard onNavigate={handleNavigate} email={email} onSignOut={handleSignOut} isDark={isDark} /> : <Dashboard onNavigate={handleNavigate} email={email} onSignOut={handleSignOut} isDark={isDark} />;
    }
  }

  return (
    <div className={`relative min-h-screen w-full overflow-hidden flex items-center justify-center p-4 transition-colors duration-500 ${
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

      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`absolute top-6 right-6 p-3 rounded-full backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-110 z-50 ${
          isDark 
            ? 'bg-white/10 hover:bg-white/20 text-yellow-300 border border-white/20' 
            : 'bg-white/40 hover:bg-white/60 text-gray-700 border border-white/50'
        }`}
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Main Login Card Container */}
      <div className="relative w-full max-w-sm">
        {/* Glassmorphic Login Card */}
        <div className={`relative backdrop-blur-2xl rounded-3xl p-6 shadow-2xl transition-all duration-500 ${
          isDark 
            ? 'bg-white/5 border border-white/10' 
            : 'bg-white/30 border border-white/40'
        }`}>
          {/* Subtle glow effect */}
          <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
            isDark 
              ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
              : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
          }`} />
          
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <div className={`w-16 h-16 rounded-2xl shadow-lg flex items-center justify-center backdrop-blur-sm ${
              isAdminLogin
                ? 'bg-gradient-to-br from-red-500 to-pink-600'
                : isTeacherLogin 
                ? 'bg-gradient-to-br from-emerald-500 to-teal-600' 
                : 'bg-gradient-to-br from-blue-500 to-purple-600'
            }`}>
              {isAdminLogin ? (
                <Shield className="w-8 h-8 text-white" />
              ) : isTeacherLogin ? (
                <Users className="w-8 h-8 text-white" />
              ) : (
                <GraduationCap className="w-8 h-8 text-white" />
              )}
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <h1 className={`mb-1 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
              {isAdminLogin 
                ? (adminRole ? `${adminRole.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Login` : 'Admin Login') 
                : isTeacherLogin ? 'Teacher Login' : 'Student Login'}
            </h1>
            <p className={`transition-colors ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Sign in to continue</p>
          </div>

          {/* Change Role Button (Only for Admin) */}
          {isAdminLogin && adminRole && (
            <div className="mb-4 text-center">
              <button 
                onClick={() => setShowAdminRoleSelect(true)}
                className={`text-sm flex items-center justify-center gap-1 mx-auto ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
              >
                <ArrowRight className="w-3 h-3 rotate-180" />
                Change Role
              </button>
            </div>
          )}

          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className={`block mb-1.5 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
              Email / Username
            </label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`w-full px-4 py-5 rounded-2xl backdrop-blur-md transition-all shadow-inner ${
                  isDark 
                    ? 'bg-white/10 border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-400 text-white' 
                    : 'bg-white/40 border border-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-400'
                }`}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-2">
            <label htmlFor="password" className={`block mb-1.5 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className={`w-full px-4 py-5 rounded-2xl backdrop-blur-md transition-all shadow-inner pr-12 ${
                  isDark 
                    ? 'bg-white/10 border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-400 text-white' 
                    : 'bg-white/40 border border-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-400'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors ${
                  isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right mb-4">
            <button className={`transition-colors ${
              isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
            }`} onClick={handleForgotPassword}>
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <Button
            onClick={handleSignIn}
            className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-blue-400/30 relative overflow-hidden group"
          >
            <span className="relative z-10">Sign In</span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>

          {/* Create Account Link */}
          <div className="text-center mt-4">
            <p className={`transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Don't have an account?{' '}
              <button className={`transition-colors ${
                isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
              }`} onClick={() => setCurrentView('signUp')}>
                Create an account
              </button>
            </p>
          </div>

          {/* Teacher/Student/Admin Login Switch */}
          <div className={`text-center mt-4 pt-4 border-t ${isDark ? 'border-white/10' : 'border-gray-300/30'}`}>
            <button
              onClick={() => {
                if (!isTeacherLogin && !isAdminLogin) {
                  setIsTeacherLogin(true);
                  setIsAdminLogin(false);
                } else if (isTeacherLogin) {
                  setIsTeacherLogin(false);
                  setIsAdminLogin(true);
                  setShowAdminRoleSelect(true); // Show role selection immediately when switching to Admin
                } else {
                  setIsTeacherLogin(false);
                  setIsAdminLogin(false);
                  setAdminRole(null);
                }
              }}
              className={`group inline-flex items-center gap-2 transition-all duration-300 hover:gap-3 ${
                isDark 
                  ? 'text-[#7AB8FF]/90 hover:text-[#7AB8FF]' 
                  : 'text-[#005ACF]/85 hover:text-[#005ACF]'
              }`}
              style={{ fontSize: '15px', fontWeight: 500 }}
            >
              <span className="relative">
                {!isTeacherLogin && !isAdminLogin ? 'Login as Teacher' : 
                 isTeacherLogin ? 'Login as Admin' : 
                 'Login as Student'}
                <span className={`absolute -bottom-0.5 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                  isDark ? 'bg-[#7AB8FF]/50' : 'bg-[#005ACF]/50'
                }`} />
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Reflection Effect */}
        <div className={`absolute -bottom-2 left-4 right-4 h-16 rounded-b-3xl blur-xl -z-10 transition-colors ${
          isDark ? 'bg-gradient-to-b from-white/10 to-transparent' : 'bg-gradient-to-b from-white/20 to-transparent'
        }`} />
      </div>

      {/* Bottom Safe Area Spacer (iOS keyboard safe) */}
      <div className="h-8" />
    </div>
  );
}