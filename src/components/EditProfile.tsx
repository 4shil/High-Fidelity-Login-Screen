import { Camera, User, Mail, Phone, MapPin, GraduationCap, Shield, IdCard, BookOpen, Save, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import BottomNav from './BottomNav';

interface EditProfileProps {
  isDark: boolean;
  onNavigate: (page: 'dashboard' | 'attendance' | 'materials' | 'results' | 'profile') => void;
  email: string;
}

export default function EditProfile({ isDark, onNavigate, email }: EditProfileProps) {
  const [formData, setFormData] = useState({
    fullName: 'Ash',
    email: email,
    phone: '+91 98765 43210',
    address: 'Mumbai, Maharashtra',
  });

  const readOnlyData = {
    department: 'BCA',
    rollNumber: 'BCA2023001',
    apaarId: '1234567890123456',
    semester: 'Semester 3',
    admissionNumber: 'ADM2023456',
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Handle save logic here
    console.log('Saving profile:', formData);
    onNavigate('profile');
  };

  const handleCancel = () => {
    onNavigate('profile');
  };

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
              Edit Profile
            </h2>
          </div>
        </div>

        {/* PROFILE PHOTO SECTION */}
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
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl flex items-center justify-center ring-4 ring-white/20">
                <span className="text-5xl">👤</span>
              </div>
              
              {/* Edit Photo Button */}
              <button className="absolute bottom-0 right-0 p-2.5 rounded-full backdrop-blur-xl shadow-lg transition-all duration-300 hover:scale-110 bg-blue-500 hover:bg-blue-600 border border-white/20">
                <div className="absolute inset-0 rounded-full opacity-50 bg-gradient-to-br from-blue-400 to-purple-500 blur-md -z-10" />
                <Camera className="w-4 h-4 text-white" />
              </button>
            </div>
            
            <h3 className={`mb-1 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Change Profile Photo
            </h3>
            <p className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Click the camera icon to upload
            </p>
          </div>
        </div>

        {/* EDITABLE FIELDS */}
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
          
          <div className="relative space-y-4">
            <h3 className={`mb-4 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Personal Information
            </h3>

            {/* Full Name */}
            <div>
              <label className={`block mb-2 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Full Name</span>
                </div>
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                className={`w-full px-4 py-3 rounded-2xl backdrop-blur-xl outline-none transition-all ${
                  isDark
                    ? 'bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-blue-400/50 focus:bg-white/10'
                    : 'bg-white/40 border border-white/30 text-gray-800 placeholder:text-gray-500 focus:border-blue-400/50 focus:bg-white/60'
                }`}
              />
            </div>

            {/* Email */}
            <div>
              <label className={`block mb-2 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </div>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`w-full px-4 py-3 rounded-2xl backdrop-blur-xl outline-none transition-all ${
                  isDark
                    ? 'bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-blue-400/50 focus:bg-white/10'
                    : 'bg-white/40 border border-white/30 text-gray-800 placeholder:text-gray-500 focus:border-blue-400/50 focus:bg-white/60'
                }`}
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className={`block mb-2 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Phone Number</span>
                </div>
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={`w-full px-4 py-3 rounded-2xl backdrop-blur-xl outline-none transition-all ${
                  isDark
                    ? 'bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-blue-400/50 focus:bg-white/10'
                    : 'bg-white/40 border border-white/30 text-gray-800 placeholder:text-gray-500 focus:border-blue-400/50 focus:bg-white/60'
                }`}
              />
            </div>

            {/* Address */}
            <div>
              <label className={`block mb-2 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Address</span>
                </div>
              </label>
              <textarea
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                rows={3}
                className={`w-full px-4 py-3 rounded-2xl backdrop-blur-xl outline-none transition-all resize-none ${
                  isDark
                    ? 'bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-blue-400/50 focus:bg-white/10'
                    : 'bg-white/40 border border-white/30 text-gray-800 placeholder:text-gray-500 focus:border-blue-400/50 focus:bg-white/60'
                }`}
              />
            </div>
          </div>
        </div>

        {/* READ-ONLY FIELDS */}
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
          
          <div className="relative space-y-4">
            <h3 className={`mb-4 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Academic Information (Read Only)
            </h3>

            {/* APAAR ID */}
            <div>
              <label className={`block mb-2 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>APAAR ID</span>
                </div>
              </label>
              <div className={`w-full px-4 py-3 rounded-2xl backdrop-blur-xl ${
                isDark
                  ? 'bg-white/5 border border-white/10 text-gray-400'
                  : 'bg-white/20 border border-white/20 text-gray-600'
              }`}>
                {readOnlyData.apaarId}
              </div>
            </div>

            {/* PRN / Roll Number */}
            <div>
              <label className={`block mb-2 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="flex items-center gap-2">
                  <IdCard className="w-4 h-4" />
                  <span>PRN / Roll Number</span>
                </div>
              </label>
              <div className={`w-full px-4 py-3 rounded-2xl backdrop-blur-xl ${
                isDark
                  ? 'bg-white/5 border border-white/10 text-gray-400'
                  : 'bg-white/20 border border-white/20 text-gray-600'
              }`}>
                {readOnlyData.rollNumber}
              </div>
            </div>

            {/* Department */}
            <div>
              <label className={`block mb-2 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Department</span>
                </div>
              </label>
              <div className={`w-full px-4 py-3 rounded-2xl backdrop-blur-xl ${
                isDark
                  ? 'bg-white/5 border border-white/10 text-gray-400'
                  : 'bg-white/20 border border-white/20 text-gray-600'
              }`}>
                {readOnlyData.department}
              </div>
            </div>

            {/* Current Semester */}
            <div>
              <label className={`block mb-2 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>Current Semester</span>
                </div>
              </label>
              <div className={`w-full px-4 py-3 rounded-2xl backdrop-blur-xl ${
                isDark
                  ? 'bg-white/5 border border-white/10 text-gray-400'
                  : 'bg-white/20 border border-white/20 text-gray-600'
              }`}>
                {readOnlyData.semester}
              </div>
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3">
          <Button
            onClick={handleSave}
            className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-400/30 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Save className="w-5 h-5" />
              Save Changes
            </span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>

          <Button
            onClick={handleCancel}
            className={`flex-1 py-4 rounded-2xl backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 border ${
              isDark
                ? 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                : 'bg-white/30 hover:bg-white/50 text-gray-800 border-white/40'
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              <X className="w-5 h-5" />
              Cancel
            </span>
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="profile" onNavigate={onNavigate} />
    </div>
  );
}
