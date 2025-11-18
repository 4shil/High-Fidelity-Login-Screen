import { Phone, Mail, MessageCircle, HelpCircle, ArrowLeft, User, Building } from 'lucide-react';
import { Button } from './ui/button';
import BottomNav from './BottomNav';

interface HelpSupportProps {
  isDark: boolean;
  onNavigate: (page: 'dashboard' | 'attendance' | 'materials' | 'results' | 'profile') => void;
}

export default function HelpSupport({ isDark, onNavigate }: HelpSupportProps) {
  const contactOptions = [
    {
      icon: Phone,
      title: 'Call Warden',
      subtitle: '+91 98765 43210',
      color: 'from-blue-500 to-blue-600',
      action: 'tel:+919876543210'
    },
    {
      icon: User,
      title: 'Call Class Advisor',
      subtitle: 'Dr. Smith: +91 98765 43211',
      color: 'from-green-500 to-green-600',
      action: 'tel:+919876543211'
    },
    {
      icon: Building,
      title: 'Email College Office',
      subtitle: 'office@jpmcollege.edu',
      color: 'from-purple-500 to-purple-600',
      action: 'mailto:office@jpmcollege.edu'
    },
  ];

  const faqs = [
    {
      question: 'How do I apply for leave?',
      answer: 'Go to More > Leave Application and fill the form. Parents must call the class teacher before applying.'
    },
    {
      question: 'Where can I check my attendance?',
      answer: 'Tap on the Attendance icon in the bottom navigation to view your attendance details.'
    },
    {
      question: 'How do I pay fees online?',
      answer: 'Go to More > Fees and tap on the Pay Now button to proceed with the payment.'
    },
    {
      question: 'How can I download study materials?',
      answer: 'Navigate to Materials tab and tap the download icon next to any study material.'
    },
  ];

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
              Help & Support
            </h2>
            <div className="w-10" />
          </div>
        </div>

        {/* CONTACT OPTIONS */}
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
              Contact Options
            </h3>

            <div className="space-y-3">
              {contactOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <a
                    key={index}
                    href={option.action}
                    className={`block w-full rounded-2xl p-4 backdrop-blur-md transition-all hover:scale-[1.02] ${
                      isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-white/40 hover:bg-white/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.color} shadow-lg flex items-center justify-center ${
                        isDark ? 'shadow-blue-500/50' : 'shadow-blue-600/30'
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <span className={`block transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                          {option.title}
                        </span>
                        <span className={`block transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {option.subtitle}
                        </span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* QUICK HELP CARD */}
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
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <h3 className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                Need Immediate Help?
              </h3>
            </div>
            <p className={`mb-4 transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              For urgent issues, please contact the college office directly or reach out to your class advisor.
            </p>
            <Button
              className={`w-full h-12 rounded-2xl transition-all hover:scale-[1.02] relative overflow-hidden group ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-50 blur-xl transition-opacity" />
              <div className="relative flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                <span>Send Email to Office</span>
              </div>
            </Button>
          </div>
        </div>

        {/* FAQ SECTION */}
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
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className={`w-5 h-5 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
              <h3 className={`transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-4 backdrop-blur-md transition-all ${
                    isDark ? 'bg-white/5' : 'bg-white/40'
                  }`}
                >
                  <h4 className={`mb-2 transition-colors ${isDark ? 'text-white' : 'text-gray-800'}`}>
                    {faq.question}
                  </h4>
                  <p className={`transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {faq.answer}
                  </p>
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
