import { DollarSign, CreditCard, Calendar, Check, Clock, X, Receipt, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';
import BottomNav from './BottomNav';

interface FeesProps {
  isDark: boolean;
  onNavigate: (page: 'dashboard' | 'attendance' | 'materials' | 'results' | 'profile' | 'paymentSuccess') => void;
}

export default function Fees({ isDark, onNavigate }: FeesProps) {
  const feeBreakdown = [
    { title: 'Tuition Fee', amount: '₹12,000', status: 'pending' },
    { title: 'Library Fee', amount: '₹1,500', status: 'pending' },
    { title: 'Lab Fee', amount: '₹1,000', status: 'pending' },
    { title: 'Sports Fee', amount: '₹500', status: 'pending' },
  ];

  const paymentHistory = [
    { id: 'PAY001', date: 'Oct 15, 2024', amount: '₹15,000', status: 'Paid', semester: 'Semester 2' },
    { id: 'PAY002', date: 'Jul 10, 2024', amount: '₹15,000', status: 'Paid', semester: 'Semester 1' },
    { id: 'PAY003', date: 'Apr 5, 2024', amount: '₹14,500', status: 'Paid', semester: 'Admission Fee' },
  ];

  const totalDue = '₹15,000';

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
              Fees
            </h2>
            <div className="w-10" />
          </div>
        </div>

        {/* TOTAL AMOUNT DUE CARD */}
        <div className={`backdrop-blur-2xl rounded-3xl p-8 shadow-2xl transition-all duration-500 relative overflow-hidden ${
          isDark 
            ? 'bg-white/5 border border-white/10' 
            : 'bg-white/30 border border-white/40'
        }`}>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 blur-2xl opacity-50" />
          
          <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
            isDark 
              ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
              : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
          }`} />
          
          <div className="relative text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <DollarSign className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
              <span className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Total Amount Due
              </span>
            </div>
            <h1 className={`bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent`}>
              {totalDue}
            </h1>
            <p className={`mt-2 transition-colors ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Semester 3 • Due by Nov 30, 2024
            </p>
          </div>
        </div>

        {/* FEE BREAKDOWN */}
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
            <h3 className={`mb-4 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Fee Breakdown
            </h3>

            <div className="space-y-3">
              {feeBreakdown.map((fee, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between py-2">
                    <span className={`transition-colors ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {fee.title}
                    </span>
                    <span className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      {fee.amount}
                    </span>
                  </div>
                  {index < feeBreakdown.length - 1 && (
                    <div className={`h-px ${isDark ? 'bg-white/10' : 'bg-gray-300/50'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PAY NOW BUTTON */}
        <Button
          onClick={() => onNavigate('paymentSuccess')}
          className={`w-full h-14 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group ${
            isDark 
              ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white' 
              : 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-50 blur-xl transition-opacity" />
          <div className="relative flex items-center justify-center gap-2">
            <CreditCard className="w-5 h-5" />
            <span>Pay Now</span>
          </div>
        </Button>

        {/* PAYMENT HISTORY */}
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
            <h3 className={`mb-4 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Payment History
            </h3>

            <div className="space-y-3">
              {paymentHistory.map((payment, index) => (
                <div key={index}>
                  <div className={`rounded-2xl p-4 backdrop-blur-md transition-all ${
                    isDark ? 'bg-white/5' : 'bg-white/40'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Receipt className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                          <span className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                            {payment.semester}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className={`w-3 h-3 ${isDark ? 'text-gray-500' : 'text-gray-500'}`} />
                          <span className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {payment.date}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`mb-1 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                          {payment.amount}
                        </div>
                        <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg ${
                          isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                        }`}>
                          <Check className="w-3 h-3" />
                          <span className="text-xs">{payment.status}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`text-xs transition-colors ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      Transaction ID: {payment.id}
                    </div>
                  </div>
                  {index < paymentHistory.length - 1 && <div className="h-3" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="dashboard" onNavigate={onNavigate} />
    </div>
  );
}
