import { useState } from 'react';
import { 
  Shield, Users, GraduationCap, Building2, BookOpen, Calendar, 
  FileText, Settings, BarChart3, Bell, LogOut, Menu, X, 
  UserPlus, Trash2, Edit, Eye, Lock, Database, AlertCircle 
} from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { Card } from '../../../components/ui/card';

interface SuperAdminDashboardProps {
  isDark: boolean;
  email: string;
  onSignOut: () => void;
  onNavigate: (page: string) => void;
}

export default function SuperAdminDashboard({ isDark, email, onSignOut, onNavigate }: SuperAdminDashboardProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('overview');

  const stats = [
    { label: 'Total Users', value: '1,248', icon: Users, color: 'from-blue-500 to-blue-600' },
    { label: 'Active Admins', value: '24', icon: Shield, color: 'from-purple-500 to-purple-600' },
    { label: 'Departments', value: '12', icon: Building2, color: 'from-green-500 to-green-600' },
    { label: 'Total Students', value: '892', icon: GraduationCap, color: 'from-orange-500 to-orange-600' }
  ];

  const adminModules = [
    { name: 'User Management', icon: Users, desc: 'Create, edit, delete users' },
    { name: 'Role Assignment', icon: Shield, desc: 'Assign admin & teacher roles' },
    { name: 'Academic Structure', icon: Building2, desc: 'Manage depts, years, divisions' },
    { name: 'Timetable Control', icon: Calendar, desc: 'Full timetable management' },
    { name: 'Exam Management', icon: FileText, desc: 'Exam dates & verification' },
    { name: 'Library System', icon: BookOpen, desc: 'Book management & tracking' },
    { name: 'Analytics', icon: BarChart3, desc: 'College-wide analytics' },
    { name: 'System Settings', icon: Settings, desc: 'App configuration' }
  ];

  const recentActivity = [
    { action: 'Created new admin', user: 'John Doe', time: '2 min ago', type: 'success' },
    { action: 'Updated timetable', user: 'Jane Smith', time: '15 min ago', type: 'info' },
    { action: 'Deleted user account', user: 'Bob Wilson', time: '1 hour ago', type: 'danger' },
    { action: 'Assigned HoD role', user: 'Alice Brown', time: '2 hours ago', type: 'success' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      
      {/* Header */}
      <div className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors ${
        isDark ? 'bg-slate-900/80 border-white/10' : 'bg-white/80 border-gray-200'
      }`}>
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`p-2 rounded-lg ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Super Admin
                </h1>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Full System Control</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button className="relative p-2 rounded-lg bg-white/10 hover:bg-white/20">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                5
              </span>
            </Button>
            <Button 
              onClick={onSignOut}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        {isSidebarOpen && (
          <div className={`w-64 min-h-screen border-r transition-colors ${
            isDark ? 'bg-slate-900/50 border-white/10' : 'bg-white/50 border-gray-200'
          }`}>
            <div className="p-4 space-y-2">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'users', label: 'User Management', icon: Users },
                { id: 'roles', label: 'Role Assignment', icon: Shield },
                { id: 'academic', label: 'Academic Structure', icon: Building2 },
                { id: 'timetable', label: 'Timetable', icon: Calendar },
                { id: 'exams', label: 'Exams', icon: FileText },
                { id: 'library', label: 'Library', icon: BookOpen },
                { id: 'analytics', label: 'Analytics', icon: BarChart3 },
                { id: 'settings', label: 'Settings', icon: Settings }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeSection === item.id
                      ? isDark
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white border border-purple-500/30'
                        : 'bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border border-purple-200'
                      : isDark
                        ? 'text-gray-400 hover:bg-white/5'
                        : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 p-6">
          {activeSection === 'overview' && (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <Card key={index} className={`p-6 backdrop-blur-xl border transition-all hover:scale-105 ${
                    isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-200'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className={`text-sm mb-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</p>
                      <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>{stat.value}</p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Admin Modules */}
              <div className="mb-6">
                <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Admin Modules
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {adminModules.map((module, index) => (
                    <Card key={index} className={`p-6 backdrop-blur-xl border transition-all hover:scale-105 cursor-pointer ${
                      isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-white/60 border-gray-200 hover:bg-white'
                    }`}>
                      <module.icon className={`w-10 h-10 mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                      <h3 className={`font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>{module.name}</h3>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{module.desc}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Recent Activity
                </h2>
                <Card className={`p-6 backdrop-blur-xl border ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-200'
                }`}>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className={`flex items-center justify-between pb-4 ${
                        index !== recentActivity.length - 1 ? 'border-b' : ''
                      } ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${
                            activity.type === 'success' ? 'bg-green-500' : 
                            activity.type === 'danger' ? 'bg-red-500' : 'bg-blue-500'
                          }`} />
                          <div>
                            <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              {activity.action}
                            </p>
                            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                              by {activity.user}
                            </p>
                          </div>
                        </div>
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {activity.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </>
          )}

          {activeSection === 'users' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  User Management
                </h2>
                <Button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <UserPlus className="w-4 h-4" />
                  Create User
                </Button>
              </div>
              
              <Card className={`p-6 backdrop-blur-xl border ${
                isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-200'
              }`}>
                <div className="space-y-4">
                  {['Teachers', 'Students', 'Admins'].map((type, i) => (
                    <div key={i} className={`p-4 rounded-xl ${isDark ? 'bg-white/5' : 'bg-gray-50'}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>{type}</h3>
                          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Manage {type.toLowerCase()}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button className={`p-2 rounded-lg ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-white hover:bg-gray-100'}`}>
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button className={`p-2 rounded-lg ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-white hover:bg-gray-100'}`}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button className={`p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-400`}>
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Placeholder for other sections */}
          {activeSection !== 'overview' && activeSection !== 'users' && (
            <Card className={`p-12 backdrop-blur-xl border text-center ${
              isDark ? 'bg-white/5 border-white/10' : 'bg-white/60 border-gray-200'
            }`}>
              <AlertCircle className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'text-gray-400' : 'text-gray-400'}`} />
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Module
              </h3>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                This section is under development. Full features coming soon.
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
