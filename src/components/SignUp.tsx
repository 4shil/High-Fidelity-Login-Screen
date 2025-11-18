import { useState } from 'react';
import { Eye, EyeOff, User, Mail, Phone, Lock, FileText, IdCard, Calendar, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import DepartmentSelect from './DepartmentSelect';

interface SignUpProps {
  isDark: boolean;
  onBack: () => void;
  onSignUpSuccess: () => void;
}

export default function SignUp({ isDark, onBack, onSignUpSuccess }: SignUpProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    prn: '',
    apaarId: '',
    department: '',
    semester: '',
  });

  const handleSubmit = () => {
    // Validate and submit
    if (!agreeToTerms) {
      alert('Please agree to Terms & Privacy Policy');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    // Success - navigate to dashboard
    onSignUpSuccess();
  };

  return (
    <div className={`relative min-h-screen w-full overflow-auto flex items-start justify-center p-4 transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900' 
        : 'bg-gradient-to-br from-blue-100 via-white to-purple-100'
    }`}>
      {/* Background Decorative Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
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

      {/* Back Button */}
      <button
        onClick={onBack}
        className={`fixed top-6 left-6 p-3 rounded-full backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-110 z-50 group ${
          isDark 
            ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20' 
            : 'bg-white/40 hover:bg-white/60 text-gray-700 border border-white/50'
        }`}
      >
        <ArrowLeft className="w-5 h-5" />
        <div className="absolute inset-0 rounded-full bg-blue-400/30 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10" />
      </button>

      {/* Main Sign Up Container */}
      <div className="relative w-full max-w-md my-8">
        {/* Title Section */}
        <div className="text-center mb-6">
          <h1 className={`mb-2 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Create Account
          </h1>
          <p className={`transition-colors ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Let's get you started
          </p>
        </div>

        {/* Glassmorphic Sign Up Card */}
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
          
          <div className="relative space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className={`block mb-1.5 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                Full Name
              </label>
              <div className="relative">
                <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  placeholder="Enter your full name"
                  className={`w-full pl-12 pr-4 py-5 rounded-2xl backdrop-blur-md transition-all shadow-inner ${
                    isDark 
                      ? 'bg-white/10 border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-400 text-white' 
                      : 'bg-white/40 border border-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-400'
                  }`}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={`block mb-1.5 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                Email Address
              </label>
              <div className="relative">
                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Enter your email"
                  className={`w-full pl-12 pr-4 py-5 rounded-2xl backdrop-blur-md transition-all shadow-inner ${
                    isDark 
                      ? 'bg-white/10 border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-400 text-white' 
                      : 'bg-white/40 border border-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-400'
                  }`}
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className={`block mb-1.5 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                Phone Number
              </label>
              <div className="relative">
                <Phone className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="Enter your phone number"
                  className={`w-full pl-12 pr-4 py-5 rounded-2xl backdrop-blur-md transition-all shadow-inner ${
                    isDark 
                      ? 'bg-white/10 border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-400 text-white' 
                      : 'bg-white/40 border border-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-400'
                  }`}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className={`block mb-1.5 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                Password
              </label>
              <div className="relative">
                <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="Create a password"
                  className={`w-full pl-12 pr-12 py-5 rounded-2xl backdrop-blur-md transition-all shadow-inner ${
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
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className={`block mb-1.5 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                Confirm Password
              </label>
              <div className="relative">
                <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  placeholder="Confirm your password"
                  className={`w-full pl-12 pr-12 py-5 rounded-2xl backdrop-blur-md transition-all shadow-inner ${
                    isDark 
                      ? 'bg-white/10 border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-400 text-white' 
                      : 'bg-white/40 border border-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-400'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className={`absolute right-4 top-1/2 -translate-y-1/2 transition-colors ${
                    isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* PRN */}
            <div>
              <label htmlFor="prn" className={`block mb-1.5 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                PRN (College Roll Number) <span className={isDark ? 'text-gray-500' : 'text-gray-400'}>- Optional</span>
              </label>
              <div className="relative">
                <FileText className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <Input
                  id="prn"
                  type="text"
                  value={formData.prn}
                  onChange={(e) => setFormData({...formData, prn: e.target.value})}
                  placeholder="BCA2023001"
                  className={`w-full pl-12 pr-4 py-5 rounded-2xl backdrop-blur-md transition-all shadow-inner font-mono ${
                    isDark 
                      ? 'bg-white/10 border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-400 text-white' 
                      : 'bg-white/40 border border-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-400'
                  }`}
                />
              </div>
            </div>

            {/* APAAR ID */}
            <div>
              <label htmlFor="apaarId" className={`block mb-1.5 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                APAAR ID
              </label>
              <div className="relative">
                <IdCard className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <Input
                  id="apaarId"
                  type="text"
                  value={formData.apaarId}
                  onChange={(e) => setFormData({...formData, apaarId: e.target.value})}
                  placeholder="1234567890123456"
                  maxLength={16}
                  className={`w-full pl-12 pr-4 py-5 rounded-2xl backdrop-blur-md transition-all shadow-inner font-mono tracking-wider ${
                    isDark 
                      ? 'bg-white/10 border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-400 text-white' 
                      : 'bg-white/40 border border-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-400'
                  }`}
                />
              </div>
            </div>

            {/* Department */}
            <DepartmentSelect
              value={formData.department}
              onChange={(value) => setFormData({...formData, department: value})}
              isDark={isDark}
            />

            {/* Semester */}
            <div>
              <label htmlFor="semester" className={`block mb-1.5 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                Semester
              </label>
              <div className="relative">
                <Calendar className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 z-10 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <Select value={formData.semester} onValueChange={(value) => setFormData({...formData, semester: value})}>
                  <SelectTrigger className={`w-full pl-12 pr-4 py-5 rounded-2xl backdrop-blur-md transition-all shadow-inner ${
                    isDark 
                      ? 'bg-white/10 border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white' 
                      : 'bg-white/40 border border-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'
                  }`}>
                    <SelectValue placeholder="Select semester" />
                  </SelectTrigger>
                  <SelectContent className={`backdrop-blur-2xl rounded-2xl ${
                    isDark 
                      ? 'bg-slate-800/95 border border-white/20 text-white' 
                      : 'bg-white/95 border border-white/50'
                  }`}>
                    <SelectItem value="1">Semester 1</SelectItem>
                    <SelectItem value="2">Semester 2</SelectItem>
                    <SelectItem value="3">Semester 3</SelectItem>
                    <SelectItem value="4">Semester 4</SelectItem>
                    <SelectItem value="5">Semester 5</SelectItem>
                    <SelectItem value="6">Semester 6</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setAgreeToTerms(!agreeToTerms)}
                className={`flex items-center gap-3 w-full p-4 rounded-2xl backdrop-blur-md transition-all ${
                  isDark 
                    ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                    : 'bg-white/30 hover:bg-white/40 border border-white/30'
                }`}
              >
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition-all ${
                  agreeToTerms 
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50' 
                    : isDark 
                      ? 'bg-white/10 border border-white/20' 
                      : 'bg-white/40 border border-white/50'
                }`}>
                  {agreeToTerms && <CheckCircle2 className="w-4 h-4 text-white" />}
                </div>
                <span className={`flex-1 text-left ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  I agree to the Terms & Privacy Policy
                </span>
              </button>
            </div>

            {/* Sign Up Button */}
            <Button
              onClick={handleSubmit}
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-blue-400/30 relative overflow-hidden group mt-2"
            >
              <span className="relative z-10">Sign Up</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10" />
            </Button>

            {/* Login Link */}
            <div className="text-center pt-2">
              <p className={`transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Already have an account?{' '}
                <button 
                  onClick={onBack}
                  className={`transition-colors ${
                    isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  Log in
                </button>
              </p>
            </div>

            {/* Terms Note */}
            <div className="text-center pt-2">
              <p className={`transition-colors ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                By creating an account, you agree to our<br />Terms & Privacy Policy.
              </p>
            </div>
          </div>
        </div>

        {/* Reflection Effect */}
        <div className={`absolute -bottom-2 left-4 right-4 h-16 rounded-b-3xl blur-xl -z-10 transition-colors ${
          isDark ? 'bg-gradient-to-b from-white/10 to-transparent' : 'bg-gradient-to-b from-white/20 to-transparent'
        }`} />
      </div>

      {/* Bottom Safe Area Spacer */}
      <div className="h-8" />
    </div>
  );
}