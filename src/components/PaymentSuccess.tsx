import { Check, Receipt, ArrowLeft, Calendar, Hash, DollarSign } from 'lucide-react';
import { Button } from './ui/button';

interface PaymentSuccessProps {
  isDark: boolean;
  onNavigate: (page: 'dashboard') => void;
  amount?: string;
  transactionId?: string;
  date?: string;
}

export default function PaymentSuccess({ 
  isDark, 
  onNavigate,
  amount = "₹15,000",
  transactionId = "TXN2024111600123",
  date = "Nov 16, 2025 at 2:30 PM"
}: PaymentSuccessProps) {
  return (
    <div className={`relative min-h-screen w-full overflow-hidden transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900' 
        : 'bg-gradient-to-br from-blue-100 via-white to-purple-100'
    }`}>
      {/* Background Decorative Blobs with Neon Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob ${
          isDark 
            ? 'bg-gradient-to-br from-green-600 to-emerald-500 opacity-40' 
            : 'bg-gradient-to-br from-green-400 to-emerald-300 opacity-50'
        }`} />
        <div className={`absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 ${
          isDark 
            ? 'bg-gradient-to-br from-blue-600 to-cyan-500 opacity-40' 
            : 'bg-gradient-to-br from-blue-400 to-cyan-300 opacity-50'
        }`} />
        <div className={`absolute -bottom-8 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 ${
          isDark 
            ? 'bg-gradient-to-br from-purple-500 to-pink-500 opacity-40' 
            : 'bg-gradient-to-br from-purple-300 to-pink-300 opacity-50'
        }`} />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-shimmer" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-md mx-auto px-6 py-8 flex flex-col items-center justify-center min-h-screen">
        
        {/* Large Frosted Glass Circle with Glowing Checkmark */}
        <div className="relative mb-8 animate-scale-in">
          {/* Outer Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 blur-3xl opacity-60 animate-pulse-slow scale-110" />
          
          {/* Glass Circle */}
          <div className={`relative w-32 h-32 rounded-full backdrop-blur-2xl shadow-2xl flex items-center justify-center ${
            isDark 
              ? 'bg-white/10 border border-white/20' 
              : 'bg-white/40 border border-white/60'
          }`}>
            {/* Inner gradient overlay */}
            <div className={`absolute inset-0 rounded-full pointer-events-none ${
              isDark 
                ? 'bg-gradient-to-br from-white/20 via-transparent to-transparent' 
                : 'bg-gradient-to-br from-white/40 via-transparent to-transparent'
            }`} />
            
            {/* Checkmark with glow */}
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 blur-xl opacity-80" />
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl">
                <Check className="w-10 h-10 text-white stroke-[3]" />
              </div>
            </div>
          </div>
        </div>

        {/* Success Text */}
        <div className="text-center mb-3 animate-fade-in-up animation-delay-200">
          <h1 className={`mb-2 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
            Payment Successful
          </h1>
          <p className={`transition-colors ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Your fee has been processed
          </p>
        </div>

        {/* Payment Details Card */}
        <div className={`w-full backdrop-blur-2xl rounded-3xl p-6 shadow-2xl mb-6 transition-all duration-500 animate-fade-in-up animation-delay-400 ${
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
            {/* Amount Paid */}
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg flex items-center justify-center ${
                  isDark ? 'shadow-green-500/50' : 'shadow-green-600/30'
                }`}>
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <span className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Amount Paid
                </span>
              </div>
              <span className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {amount}
              </span>
            </div>

            <div className={`h-px ${isDark ? 'bg-white/10' : 'bg-gray-300/50'}`} />

            {/* Transaction ID */}
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg flex items-center justify-center ${
                  isDark ? 'shadow-blue-500/50' : 'shadow-blue-600/30'
                }`}>
                  <Hash className="w-5 h-5 text-white" />
                </div>
                <span className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Transaction ID
                </span>
              </div>
              <span className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {transactionId}
              </span>
            </div>

            <div className={`h-px ${isDark ? 'bg-white/10' : 'bg-gray-300/50'}`} />

            {/* Date & Time */}
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg flex items-center justify-center ${
                  isDark ? 'shadow-purple-500/50' : 'shadow-purple-600/30'
                }`}>
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Date & Time
                </span>
              </div>
              <span className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {date}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-3 animate-fade-in-up animation-delay-600">
          {/* Primary Button - Back to Dashboard */}
          <Button
            onClick={() => onNavigate('dashboard')}
            className={`w-full h-14 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group ${
              isDark 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white' 
                : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white'
            }`}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-50 blur-xl transition-opacity" />
            <div className="relative flex items-center justify-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </div>
          </Button>

          {/* Secondary Ghost Button - View Receipt */}
          <Button
            variant="ghost"
            className={`w-full h-14 rounded-2xl backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98] ${
              isDark 
                ? 'bg-white/5 hover:bg-white/10 text-white border border-white/10' 
                : 'bg-white/40 hover:bg-white/60 text-gray-800 border border-white/40'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Receipt className="w-5 h-5" />
              <span>View Receipt</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
