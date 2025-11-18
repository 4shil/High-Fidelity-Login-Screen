import { ArrowLeft, Lock, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface ChangePasswordProps {
  isDark: boolean;
  onBack: () => void;
  isLoggedIn?: boolean;
}

export default function ChangePassword({ isDark, onBack, isLoggedIn = false }: ChangePasswordProps) {
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoggedIn) {
      // Handle password change for logged-in users
      console.log('Password change requested');
    } else {
      // Handle password reset for non-logged-in users
      console.log('Password reset requested for:', email);
    }
  };

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

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          
          {/* Main Card */}
          <div className={`backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl transition-all duration-500 ${
            isDark 
              ? 'bg-white/5 border border-white/10' 
              : 'bg-white/30 border border-white/40'
          }`}>
            {/* Gradient Glow Effect */}
            <div className={`absolute inset-0 rounded-[40px] pointer-events-none ${
              isDark 
                ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
                : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
            }`} />
            
            <div className="relative">
              {/* Lock Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl opacity-60 animate-pulse-slow" />
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl flex items-center justify-center ring-4 ring-white/20">
                    <Lock className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className={`text-center mb-2 transition-colors ${
                isDark ? 'text-white' : 'text-gray-800'
              }`}>
                {isLoggedIn ? 'Change Password' : 'Reset Password'}
              </h1>
              
              <p className={`text-center mb-8 transition-colors ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {isLoggedIn ? 'Enter your current and new password' : 'Enter your email to receive a reset link'}
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {isLoggedIn ? (
                  <>
                    {/* Current Password */}
                    <div>
                      <label className={`block mb-2 transition-colors ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Current Password
                      </label>
                      <div className="relative">
                        <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <Lock className="w-5 h-5" />
                        </div>
                        <input
                          type="password"
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                          placeholder="Enter current password"
                          className={`w-full pl-12 pr-4 py-4 rounded-2xl backdrop-blur-xl outline-none transition-all ${
                            isDark
                              ? 'bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-blue-400/50 focus:bg-white/10'
                              : 'bg-white/40 border border-white/30 text-gray-800 placeholder:text-gray-500 focus:border-blue-400/50 focus:bg-white/60'
                          }`}
                          required
                        />
                      </div>
                    </div>

                    {/* New Password */}
                    <div>
                      <label className={`block mb-2 transition-colors ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        New Password
                      </label>
                      <div className="relative">
                        <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <Lock className="w-5 h-5" />
                        </div>
                        <input
                          type="password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Enter new password"
                          className={`w-full pl-12 pr-4 py-4 rounded-2xl backdrop-blur-xl outline-none transition-all ${
                            isDark
                              ? 'bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-blue-400/50 focus:bg-white/10'
                              : 'bg-white/40 border border-white/30 text-gray-800 placeholder:text-gray-500 focus:border-blue-400/50 focus:bg-white/60'
                          }`}
                          required
                        />
                      </div>
                    </div>

                    {/* Confirm New Password */}
                    <div>
                      <label className={`block mb-2 transition-colors ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          <Lock className="w-5 h-5" />
                        </div>
                        <input
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          placeholder="Confirm new password"
                          className={`w-full pl-12 pr-4 py-4 rounded-2xl backdrop-blur-xl outline-none transition-all ${
                            isDark
                              ? 'bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-blue-400/50 focus:bg-white/10'
                              : 'bg-white/40 border border-white/30 text-gray-800 placeholder:text-gray-500 focus:border-blue-400/50 focus:bg-white/60'
                          }`}
                          required
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  // Email Input for non-logged-in users
                  <div>
                    <label className={`block mb-2 transition-colors ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email / Username
                    </label>
                    <div className="relative">
                      <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="student@example.com"
                        className={`w-full pl-12 pr-4 py-4 rounded-2xl backdrop-blur-xl outline-none transition-all ${
                          isDark
                            ? 'bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-blue-400/50 focus:bg-white/10'
                            : 'bg-white/40 border border-white/30 text-gray-800 placeholder:text-gray-500 focus:border-blue-400/50 focus:bg-white/60'
                        }`}
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-400/30 relative overflow-hidden group"
                >
                  <span className="relative z-10">
                    {isLoggedIn ? 'Change Password' : 'Send Reset Link'}
                  </span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-br from-blue-400 to-purple-500 blur-xl -z-10" />
                </Button>

                {/* Back Link */}
                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={onBack}
                    className={`inline-flex items-center gap-2 transition-colors hover:underline ${
                      isDark 
                        ? 'text-blue-400 hover:text-blue-300' 
                        : 'text-blue-600 hover:text-blue-700'
                    }`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {isLoggedIn ? 'Back to Profile' : 'Back to Login'}
                  </button>
                </div>
              </form>

              {/* Additional Info */}
              {!isLoggedIn && (
                <div className={`mt-6 p-4 rounded-2xl backdrop-blur-md ${
                  isDark 
                    ? 'bg-blue-500/10 border border-blue-400/20' 
                    : 'bg-blue-100/50 border border-blue-200'
                }`}>
                  <p className={`transition-colors ${
                    isDark ? 'text-blue-300' : 'text-blue-700'
                  }`}>
                    <strong>Note:</strong> If you don't receive the email within 5 minutes, check your spam folder or contact support.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Footer Text */}
          {!isLoggedIn && (
            <p className={`text-center mt-6 transition-colors ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Need help? Contact support@jpmcollege.edu
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
