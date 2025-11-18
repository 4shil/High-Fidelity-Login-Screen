import { DollarSign, FolderOpen, FileText, Bell, Settings, HelpCircle, ArrowRight, Info } from 'lucide-react';
import BottomNav from './BottomNav';

interface MoreProps {
  onNavigate: (page: 'dashboard' | 'attendance' | 'materials' | 'results' | 'profile' | 'more' | 'leave' | 'fees' | 'notifications' | 'settings' | 'helpSupport' | 'about') => void;
  isDark: boolean;
}

export default function More({ onNavigate, isDark }: MoreProps) {
  const menuItems = [
    { 
      icon: FolderOpen, 
      label: 'Study Materials', 
      description: 'Access course materials',
      color: 'from-blue-500 to-blue-600',
      action: () => onNavigate('materials')
    },
    { 
      icon: FileText, 
      label: 'Leave Application', 
      description: 'Apply for leave',
      color: 'from-purple-500 to-purple-600',
      action: () => onNavigate('leave')
    },
    { 
      icon: DollarSign, 
      label: 'Fees', 
      description: 'View and pay fees',
      color: 'from-green-500 to-green-600',
      action: () => onNavigate('fees')
    },
    { 
      icon: Bell, 
      label: 'Notifications', 
      description: 'View all notifications',
      color: 'from-orange-500 to-orange-600',
      action: () => onNavigate('notifications')
    },
    { 
      icon: Settings, 
      label: 'Settings', 
      description: 'App preferences',
      color: 'from-gray-500 to-gray-600',
      action: () => onNavigate('settings')
    },
    { 
      icon: HelpCircle, 
      label: 'Help & Support', 
      description: 'Get help and support',
      color: 'from-pink-500 to-pink-600',
      action: () => onNavigate('helpSupport')
    },
  ];

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
        <div className="backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          
          <div className="relative">
            <h2 className="text-white">
              More
            </h2>
          </div>
        </div>

        {/* MENU ITEMS */}
        <div className="space-y-3">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <button
                key={index}
                className="w-full backdrop-blur-2xl rounded-3xl p-4 shadow-xl transition-all duration-500 hover:scale-[1.02] group bg-white/5 border border-white/10"
                onClick={item.action}
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-br ${item.color} blur-xl -z-10`} />
                
                <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                
                <div className="relative flex items-center gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Text */}
                  <div className="flex-1 text-left">
                    <h3 className="mb-0.5 text-white">
                      {item.label}
                    </h3>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Arrow */}
                  <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>
              </button>
            );
          })}
        </div>

        {/* APP INFO */}
        <div className="backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          
          <div className="relative text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg flex items-center justify-center mx-auto mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md" />
            </div>
            
            <h3 className="mb-1 text-white">
              JPM College App
            </h3>
            <p className="text-gray-400">
              Version 1.0.0
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="dashboard" onNavigate={onNavigate} />
    </div>
  );
}