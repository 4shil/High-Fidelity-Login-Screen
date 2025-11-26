import { useState } from 'react';
import { FileCheck, Calendar, BarChart3, Users, Bell, LogOut, Menu, X, Eye, CheckCircle } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card } from '../../../components/ui/card';

interface PrincipalDashboardProps {
  isDark: boolean;
  email: string;
  onSignOut: () => void;
}

export default function PrincipalDashboard({ isDark, email, onSignOut }: PrincipalDashboardProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  const stats = [
    { label: 'Pending Work Diaries', value: '12', icon: FileCheck, color: 'from-orange-500 to-red-600' },
    { label: 'Lesson Planners', value: '45', icon: Calendar, color: 'from-blue-500 to-blue-600' },
    { label: 'Dept Reports', value: '8', icon: BarChart3, color: 'from-green-500 to-green-600' },
    { label: 'Active Users', value: '1,124', icon: Users, color: 'from-purple-500 to-purple-600' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900' : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'
    }`}>
      <div className={`sticky top-0 z-40 backdrop-blur-xl border-b ${
        isDark ? 'bg-slate-900/80 border-white/10' : 'bg-white/80 border-gray-200'
      }`}>
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-lg">
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>Principal</h1>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Academic Governance</p>
              </div>
            </div>
          </div>
          <Button onClick={onSignOut} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/20 text-red-400">
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="flex">
        {isSidebarOpen && (
          <div className={`w-64 min-h-screen border-r ${isDark ? 'bg-slate-900/50 border-white/10' : 'bg-white/50 border-gray-200'}`}>
            <div className="p-4 space-y-2">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'workdiary', label: 'Work Diary Approval', icon: FileCheck },
                { id: 'planner', label: 'Lesson Planner', icon: Calendar },
                { id: 'analytics', label: 'Analytics', icon: BarChart3 },
                { id: 'users', label: 'User Management', icon: Users }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-white border border-blue-500/30'
                      : 'text-gray-400 hover:bg-white/5'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, index) => (
              <Card key={index} className={`p-6 backdrop-blur-xl border ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-200'
              }`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className={`text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
                <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{stat.value}</p>
              </Card>
            ))}
          </div>

          <Card className={`p-12 backdrop-blur-xl border text-center ${
            isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-200'
          }`}>
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-blue-500" />
            <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Principal Dashboard
            </h3>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              Approve work diaries, monitor lesson planners, and view analytics
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
