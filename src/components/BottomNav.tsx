import { Home, Calendar, FolderOpen, Award, User } from 'lucide-react';

interface BottomNavProps {
  currentPage: 'dashboard' | 'attendance' | 'materials' | 'results' | 'profile';
  onNavigate: (page: 'dashboard' | 'attendance' | 'materials' | 'results' | 'profile') => void;
}

export default function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  const navItems = [
    { id: 'dashboard' as const, icon: Home },
    { id: 'attendance' as const, icon: Calendar },
    { id: 'materials' as const, icon: FolderOpen },
    { id: 'results' as const, icon: Award },
    { id: 'profile' as const, icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-4 px-4">
      <div className="max-w-md mx-auto backdrop-blur-2xl rounded-[28px] p-2.5 shadow-2xl transition-all duration-500 bg-white/10 border border-white/20">
        {/* Gradient Glow Effect */}
        <div className="absolute inset-0 rounded-[28px] pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        
        <div className="relative flex justify-around items-center">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            const Icon = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative flex items-center justify-center w-12 h-12 rounded-2xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-white/20 shadow-lg'
                    : 'hover:bg-white/10'
                }`}
              >
                {/* Active Glow */}
                {isActive && (
                  <div className="absolute inset-0 rounded-2xl blur-lg bg-gradient-to-br from-blue-500/40 to-purple-500/40" />
                )}
                
                <div className="relative">
                  <Icon 
                    className={`w-6 h-6 transition-colors ${
                      isActive
                        ? 'text-blue-400'
                        : 'text-gray-400'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}