import { useState } from 'react';
import { Utensils, ShoppingBag, TrendingUp, Clock, LogOut, Menu, X } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card } from '../../../components/ui/card';

interface CanteenAdminDashboardProps {
  isDark: boolean;
  email: string;
  onSignOut: () => void;
}

export default function CanteenAdminDashboard({ isDark, email, onSignOut }: CanteenAdminDashboardProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const stats = [
    { label: 'Menu Items', value: '24', icon: Utensils, color: 'from-orange-500 to-orange-600' },
    { label: 'Tokens Sold Today', value: '156', icon: ShoppingBag, color: 'from-green-500 to-green-600' },
    { label: "Today's Revenue", value: '₹4,680', icon: TrendingUp, color: 'from-blue-500 to-blue-600' }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900' : 'bg-gradient-to-br from-orange-50 via-white to-yellow-50'}`}>
      <div className={`sticky top-0 backdrop-blur-xl border-b ${isDark ? 'bg-slate-900/80 border-white/10' : 'bg-white/80 border-gray-200'}`}>
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2">
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Canteen Admin</h1>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Canteen Management</p>
              </div>
            </div>
          </div>
          <Button onClick={onSignOut} className="flex items-center gap-2 px-3 py-2 bg-red-500/20 text-red-400">
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className={`p-6 backdrop-blur-xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-200'}`}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
              <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{stat.value}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
