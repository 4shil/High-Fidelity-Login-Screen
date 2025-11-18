import { Bell, Calendar, AlertCircle, CheckCircle, Info, ArrowLeft, Clock } from 'lucide-react';
import BottomNav from './BottomNav';

interface NotificationsProps {
  isDark: boolean;
  onNavigate: (page: 'dashboard' | 'attendance' | 'materials' | 'results' | 'profile') => void;
}

export default function Notifications({ isDark, onNavigate }: NotificationsProps) {
  const notifications = [
    {
      id: 1,
      type: 'alert',
      title: 'Assignment Due Tomorrow',
      description: 'Data Structures Lab Assignment 3 is due tomorrow at 11:59 PM',
      timestamp: '2 hours ago',
      read: false,
    },
    {
      id: 2,
      type: 'success',
      title: 'Fee Payment Successful',
      description: 'Your semester fee payment of ₹15,000 has been processed successfully',
      timestamp: '5 hours ago',
      read: false,
    },
    {
      id: 3,
      type: 'info',
      title: 'New Study Material Available',
      description: 'Dr. Smith uploaded notes for Database Management Systems - Unit 3',
      timestamp: '1 day ago',
      read: true,
    },
    {
      id: 4,
      type: 'alert',
      title: 'Low Attendance Warning',
      description: 'Your attendance in Web Development is below 75%. Current: 72%',
      timestamp: '2 days ago',
      read: true,
    },
    {
      id: 5,
      type: 'info',
      title: 'Holiday Notice',
      description: 'College will remain closed on Nov 18 for public holiday',
      timestamp: '3 days ago',
      read: true,
    },
    {
      id: 6,
      type: 'success',
      title: 'Leave Application Approved',
      description: 'Your leave application for Nov 20-22 has been approved',
      timestamp: '4 days ago',
      read: true,
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'alert':
        return AlertCircle;
      case 'success':
        return CheckCircle;
      case 'info':
      default:
        return Info;
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'alert':
        return 'from-orange-500 to-red-500';
      case 'success':
        return 'from-green-500 to-emerald-500';
      case 'info':
      default:
        return 'from-blue-500 to-cyan-500';
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
              Notifications
            </h2>
            <div className="relative">
              <Bell className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-800'}`} />
              {notifications.filter(n => !n.read).length > 0 && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">{notifications.filter(n => !n.read).length}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* NOTIFICATIONS LIST */}
        <div className="space-y-3">
          {notifications.map((notification) => {
            const Icon = getIcon(notification.type);
            const iconColor = getIconColor(notification.type);
            
            return (
              <div
                key={notification.id}
                className={`backdrop-blur-2xl rounded-3xl p-4 shadow-2xl transition-all duration-500 cursor-pointer hover:scale-[1.02] ${
                  isDark 
                    ? notification.read 
                      ? 'bg-white/5 border border-white/10' 
                      : 'bg-white/10 border border-white/20'
                    : notification.read 
                      ? 'bg-white/30 border border-white/40' 
                      : 'bg-white/50 border border-white/60'
                }`}
              >
                <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
                  isDark 
                    ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
                    : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
                }`} />
                
                <div className="relative flex gap-3">
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${iconColor} shadow-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                        {notification.title}
                      </h3>
                      {!notification.read && (
                        <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0 mt-1" />
                      )}
                    </div>
                    <p className={`mb-2 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {notification.description}
                    </p>
                    <div className="flex items-center gap-1">
                      <Clock className={`w-3 h-3 ${isDark ? 'text-gray-500' : 'text-gray-500'}`} />
                      <span className={`text-xs transition-colors ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        {notification.timestamp}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="dashboard" onNavigate={onNavigate} />
    </div>
  );
}
