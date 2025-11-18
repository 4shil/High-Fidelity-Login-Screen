import { Calendar, Paperclip, AlertCircle, CheckCircle, XCircle, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import BottomNav from './BottomNav';

interface LeaveProps {
  onNavigate: (page: 'dashboard' | 'attendance' | 'materials' | 'results' | 'profile') => void;
  isDark: boolean;
}

export default function Leave({ onNavigate, isDark }: LeaveProps) {
  const [reason, setReason] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const leaveHistory = [
    {
      reason: 'Medical Emergency',
      fromDate: '10 Nov 2025',
      toDate: '12 Nov 2025',
      status: 'pending',
      appliedOn: '09 Nov 2025',
      days: 3
    },
    {
      reason: 'Family Function',
      fromDate: '25 Oct 2025',
      toDate: '26 Oct 2025',
      status: 'approved',
      appliedOn: '20 Oct 2025',
      days: 2
    },
    {
      reason: 'Personal Work',
      fromDate: '15 Oct 2025',
      toDate: '15 Oct 2025',
      status: 'rejected',
      appliedOn: '14 Oct 2025',
      rejectionReason: 'No parent confirmation received',
      days: 1
    },
    {
      reason: 'Fever and Cold',
      fromDate: '05 Oct 2025',
      toDate: '07 Oct 2025',
      status: 'approved',
      appliedOn: '04 Oct 2025',
      days: 3
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ reason, fromDate, toDate });
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
        <div className="backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          
          <div className="relative">
            <h2 className="text-white">
              Leave Application
            </h2>
          </div>
        </div>

        {/* WARNING BANNER */}
        <div className="backdrop-blur-2xl rounded-3xl p-4 shadow-2xl transition-all duration-500 bg-orange-500/10 border border-orange-400/30">
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-orange-400/20 via-transparent to-transparent" />
          
          <div className="relative flex gap-3">
            <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="mb-1 text-orange-300">
                Important Notice
              </h4>
              <p className="text-orange-200/90">
                Before applying for leave, parents MUST call the class teacher. Leave requests without parent confirmation may be rejected.
              </p>
            </div>
          </div>
        </div>

        {/* LEAVE APPLICATION FORM */}
        <form onSubmit={handleSubmit} className="backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          
          <div className="relative space-y-4">
            <h3 className="mb-4 text-white">
              Apply for Leave
            </h3>

            {/* Leave Reason */}
            <div>
              <label className="block mb-2 text-gray-300">
                Leave Reason
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Enter reason for leave..."
                rows={4}
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all backdrop-blur-xl resize-none"
                required
              />
            </div>

            {/* Date Range */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block mb-2 text-gray-300">
                  From Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all backdrop-blur-xl"
                    required
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  To Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all backdrop-blur-xl"
                    required
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Attachment */}
            <div>
              <label className="block mb-2 text-gray-300">
                Attachment (Optional)
              </label>
              <button
                type="button"
                className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:border-blue-400/50 transition-all backdrop-blur-xl flex items-center justify-center gap-2"
              >
                <Paperclip className="w-5 h-5" />
                <span>Upload doctor's note or document</span>
              </button>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-400/30 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Apply for Leave
              </span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </form>

        {/* LEAVE HISTORY */}
        <div className="backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 bg-white/5 border border-white/10">
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          
          <div className="relative">
            <h3 className="mb-4 text-white">
              Leave History
            </h3>
            
            <div className="space-y-3">
              {leaveHistory.map((leave, index) => {
                const statusConfig = {
                  pending: {
                    icon: Clock,
                    color: 'text-orange-400',
                    bgColor: 'bg-orange-500/20',
                    borderColor: 'border-orange-400/30',
                    label: 'Pending'
                  },
                  approved: {
                    icon: CheckCircle,
                    color: 'text-green-400',
                    bgColor: 'bg-green-500/20',
                    borderColor: 'border-green-400/30',
                    label: 'Approved'
                  },
                  rejected: {
                    icon: XCircle,
                    color: 'text-red-400',
                    bgColor: 'bg-red-500/20',
                    borderColor: 'border-red-400/30',
                    label: 'Rejected'
                  }
                };

                const config = statusConfig[leave.status as keyof typeof statusConfig];
                const StatusIcon = config.icon;

                return (
                  <div
                    key={index}
                    className="rounded-2xl p-4 backdrop-blur-md transition-all hover:scale-[1.02] bg-white/5 border border-white/10"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="mb-1 text-white">
                          {leave.reason}
                        </h4>
                        <p className="text-gray-400">
                          {leave.fromDate} to {leave.toDate} ({leave.days} {leave.days === 1 ? 'day' : 'days'})
                        </p>
                        <p className="mt-1 text-gray-500">
                          Applied on: {leave.appliedOn}
                        </p>
                      </div>
                      
                      <div className={`px-3 py-1.5 rounded-full ${config.bgColor} ${config.borderColor} border flex items-center gap-2 flex-shrink-0`}>
                        <StatusIcon className={`w-4 h-4 ${config.color}`} />
                        <span className={config.color}>
                          {config.label}
                        </span>
                      </div>
                    </div>

                    {leave.status === 'rejected' && leave.rejectionReason && (
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <p className="text-red-400">
                          Reason: {leave.rejectionReason}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="dashboard" onNavigate={onNavigate} />
    </div>
  );
}