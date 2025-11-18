import { GraduationCap } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

interface DepartmentSelectProps {
  value: string;
  onChange: (value: string) => void;
  isDark: boolean;
}

export const DEPARTMENTS = [
  'BCA',
  'BBA',
  'B.Com Finance and Tax',
  'B.Com Co-Operation',
  'B.Com Logistics',
  'BSW',
  'BTTM',
  'BA English',
  'M.Sc (CS)',
  'M.Com',
  'MA HRM',
  'MSW',
] as const;

export type Department = typeof DEPARTMENTS[number];

export default function DepartmentSelect({ value, onChange, isDark }: DepartmentSelectProps) {
  return (
    <div>
      <label htmlFor="department" className={`block mb-1.5 transition-colors ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
        Department
      </label>
      <div className="relative">
        <GraduationCap className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 z-10 ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`} />
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger className={`w-full pl-12 pr-4 py-5 rounded-2xl backdrop-blur-md transition-all shadow-inner ${
            isDark 
              ? 'bg-white/10 border border-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-white' 
              : 'bg-white/40 border border-white/50 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'
          }`}>
            <SelectValue placeholder="Select department" />
          </SelectTrigger>
          <SelectContent className={`backdrop-blur-2xl rounded-2xl ${
            isDark 
              ? 'bg-slate-800/95 border border-white/20 text-white' 
              : 'bg-white/95 border border-white/50'
          }`}>
            {DEPARTMENTS.map((dept) => (
              <SelectItem key={dept} value={dept}>
                {dept}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
