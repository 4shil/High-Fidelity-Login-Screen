import { ArrowLeft, Upload, FileText, Image, Video, Link as LinkIcon, X, Check, File, Lock } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

interface UploadMaterialProps {
  isDark: boolean;
  onBack: () => void;
}

export default function UploadMaterial({ isDark, onBack }: UploadMaterialProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [chapter, setChapter] = useState('');
  const [materialType, setMaterialType] = useState('');
  const [notifyStudents, setNotifyStudents] = useState(true);
  const [makeVisible, setMakeVisible] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const subjectName = "Data Structures";
  const semester = "Semester 3";

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  const getFileIcon = (fileName: string) => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    if (ext === 'pdf') return { icon: FileText, color: 'from-red-500 to-orange-500', bg: 'bg-red-500/10' };
    if (ext === 'ppt' || ext === 'pptx') return { icon: FileText, color: 'from-orange-500 to-amber-500', bg: 'bg-orange-500/10' };
    if (ext === 'doc' || ext === 'docx') return { icon: FileText, color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-500/10' };
    if (ext === 'jpg' || ext === 'jpeg' || ext === 'png') return { icon: Image, color: 'from-purple-500 to-pink-500', bg: 'bg-purple-500/10' };
    if (ext === 'mp4' || ext === 'mov') return { icon: Video, color: 'from-green-500 to-emerald-500', bg: 'bg-green-500/10' };
    return { icon: File, color: 'from-gray-500 to-slate-500', bg: 'bg-gray-500/10' };
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const handleUpload = () => {
    // Simulate upload
    setShowSuccess(true);
  };

  const handleReset = () => {
    setSelectedFile(null);
    setTitle('');
    setDescription('');
    setChapter('');
    setMaterialType('');
    setNotifyStudents(true);
    setMakeVisible(true);
    setShowSuccess(false);
  };

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
        
        {/* Additional Floating Orbs */}
        <div className={`absolute top-1/4 right-1/4 w-64 h-64 rounded-full filter blur-2xl animate-float animation-delay-1000 ${
          isDark 
            ? 'bg-gradient-to-br from-cyan-500 to-blue-600 opacity-20' 
            : 'bg-gradient-to-br from-cyan-300 to-blue-400 opacity-30'
        }`} />
        <div className={`absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full filter blur-2xl animate-float-reverse animation-delay-3000 ${
          isDark 
            ? 'bg-gradient-to-br from-purple-500 to-indigo-600 opacity-20' 
            : 'bg-gradient-to-br from-purple-300 to-indigo-400 opacity-30'
        }`} />
      </div>

      {/* Main Content */}
      <div className="relative max-w-md mx-auto px-4 py-6 pb-32 space-y-6">
        
        {/* PAGE HEADER */}
        <div className={`backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 ${
          isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/60'
        }`}>
          <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
            isDark 
              ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
              : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
          }`} />
          
          <div className="relative">
            {/* Back Button and Title */}
            <div className="flex items-center gap-3 mb-3">
              <button
                onClick={onBack}
                className={`p-2 rounded-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 border ${
                  isDark 
                    ? 'bg-white/10 hover:bg-white/20 text-white/90 border-white/20'
                    : 'bg-white/30 hover:bg-white/50 text-gray-900 border-white/40'
                }`}
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex-1">
                <h1 className={`transition-colors ${
                  isDark ? 'text-white/95' : 'text-[#1A1A1A]/90'
                }`}>
                  Upload Material
                </h1>
              </div>
            </div>
            
            {/* Subtitle */}
            <p className={`ml-14 transition-colors ${
              isDark ? 'text-white/70' : 'text-[#5A5A5A]/70'
            }`}>
              {subjectName} – {semester}
            </p>
          </div>
        </div>

        {/* FILE UPLOAD AREA */}
        {!selectedFile ? (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`backdrop-blur-2xl rounded-3xl p-8 shadow-2xl transition-all duration-500 relative ${
              isDragging
                ? 'bg-white/15 border-2 border-blue-400/50 scale-[1.02]'
                : 'bg-white/5 border border-white/10 hover:bg-white/10'
            }`}
          >
            {/* Soft Glow Effect */}
            <div className={`absolute inset-0 rounded-3xl opacity-${isDragging ? '40' : '0'} transition-opacity duration-500 bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl -z-10`} />
            
            <div className={`absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-blue-500/10 to-purple-500/10 ${isDragging ? 'opacity-30' : 'opacity-10'}`} />
            
            <div className="relative flex flex-col items-center gap-4">
              {/* Upload Icon */}
              <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30 flex items-center justify-center transition-all duration-300 ${
                isDragging ? 'scale-110' : ''
              }`}>
                <Upload className="w-10 h-10 text-white" />
              </div>
              
              {/* Text */}
              <div className="text-center">
                <p className={`mb-2 ${isDark ? 'text-white/90' : 'text-gray-900'}`}>
                  {isDragging ? 'Drop file here' : 'Select File to Upload'}
                </p>
                <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  PDF, PPT, DOCX, Images, Videos, Links
                </p>
              </div>
              
              {/* Choose File Button */}
              <label htmlFor="file-upload">
                <div className="cursor-pointer px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-blue-400/30 relative overflow-hidden group">
                  <span className="relative z-10">Choose File</span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <input
                  id="file-upload"
                  type="file"
                  onChange={handleFileSelect}
                  className="hidden"
                  accept=".pdf,.ppt,.pptx,.doc,.docx,.jpg,.jpeg,.png,.mp4,.mov"
                />
              </label>
            </div>
          </div>
        ) : (
          // FILE PREVIEW CARD
          <div className="backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 bg-white/5 border border-white/10 relative">
            <div className={`absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br ${getFileIcon(selectedFile.name).color} opacity-5`} />
            
            <div className="relative flex items-center gap-4">
              {/* File Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getFileIcon(selectedFile.name).color} shadow-lg flex items-center justify-center flex-shrink-0`}>
                {(() => {
                  const IconComponent = getFileIcon(selectedFile.name).icon;
                  return <IconComponent className="w-8 h-8 text-white" />;
                })()}
              </div>
              
              {/* File Info */}
              <div className="flex-1 min-w-0">
                <p className={`mb-1 truncate ${isDark ? 'text-white/95' : 'text-gray-900'}`}>
                  {selectedFile.name}
                </p>
                <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  {formatFileSize(selectedFile.size)}
                </p>
              </div>
              
              {/* Remove Button */}
              <button
                onClick={() => setSelectedFile(null)}
                className={`p-2 rounded-xl backdrop-blur-xl transition-all duration-300 hover:scale-110 border ${
                  isDark 
                    ? 'bg-red-500/10 hover:bg-red-500/20 text-red-400 border-red-500/20'
                    : 'bg-red-500/10 hover:bg-red-500/20 text-red-600 border-red-500/30'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* FILE DETAILS FORM */}
        <div className="space-y-4">
          {/* Title Field */}
          <div>
            <label className={`block mb-2 px-2 transition-colors ${
              isDark ? 'text-white/90' : 'text-[#1A1A1A]/90'
            }`}>
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter material title"
              className={`w-full px-4 py-4 rounded-2xl backdrop-blur-2xl transition-all shadow-inner border ${
                isDark 
                  ? 'bg-white/5 border-white/10 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-500 text-white/95' 
                  : 'bg-white/40 border-white/60 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-400 text-gray-900'
              }`}
            />
          </div>

          {/* Description Field */}
          <div>
            <label className={`block mb-2 px-2 transition-colors ${
              isDark ? 'text-white/90' : 'text-[#1A1A1A]/90'
            }`}>
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter material description"
              rows={4}
              className={`w-full px-4 py-4 rounded-2xl backdrop-blur-2xl transition-all shadow-inner border resize-none ${
                isDark 
                  ? 'bg-white/5 border-white/10 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-500 text-white/95' 
                  : 'bg-white/40 border-white/60 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 placeholder:text-gray-400 text-gray-900'
              }`}
            />
          </div>

          {/* Subject Name (Read-only) */}
          <div>
            <label className={`block mb-2 px-2 transition-colors ${
              isDark ? 'text-white/90' : 'text-[#1A1A1A]/90'
            }`}>
              Subject Name
            </label>
            <div className="relative">
              <input
                type="text"
                value={subjectName}
                readOnly
                className={`w-full px-4 py-4 rounded-2xl backdrop-blur-2xl transition-all shadow-inner border cursor-not-allowed ${
                  isDark 
                    ? 'bg-white/[0.03] border-white/10 text-white/70' 
                    : 'bg-white/30 border-white/50 text-gray-700'
                }`}
              />
              {/* Auto Assigned Badge */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <Lock className={`w-4 h-4 ${isDark ? 'text-white/50' : 'text-gray-500'}`} />
                <span className={`text-xs px-2 py-1 rounded-lg backdrop-blur-xl border ${
                  isDark 
                    ? 'bg-white/5 border-white/10 text-white/60' 
                    : 'bg-white/40 border-white/40 text-gray-600'
                }`}>
                  Auto Assigned
                </span>
              </div>
            </div>
          </div>

          {/* Material Type Dropdown */}
          <div>
            <label className={`block mb-2 px-2 transition-colors ${
              isDark ? 'text-white/90' : 'text-[#1A1A1A]/90'
            }`}>
              Material Type
            </label>
            <select
              value={materialType}
              onChange={(e) => setMaterialType(e.target.value)}
              className={`w-full px-4 py-4 rounded-2xl backdrop-blur-2xl transition-all shadow-inner border ${
                isDark 
                  ? 'bg-white/5 border-white/10 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20 text-white/95' 
                  : 'bg-white/40 border-white/60 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 text-gray-900'
              }`}
            >
              <option value="">Select Type</option>
              <option value="pdf">PDF Document</option>
              <option value="ppt">PowerPoint Presentation</option>
              <option value="doc">Word Document</option>
              <option value="image">Image</option>
              <option value="video">Video Link</option>
              <option value="link">External Link</option>
            </select>
          </div>
        </div>

        {/* UPLOAD SETTINGS */}
        <div className={`backdrop-blur-2xl rounded-3xl p-5 shadow-2xl transition-all duration-500 ${
          isDark ? 'bg-white/5 border border-white/10' : 'bg-white/40 border border-white/60'
        }`}>
          <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
            isDark 
              ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
              : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
          }`} />
          
          <div className="relative space-y-4">
            <h3 className={`mb-4 transition-colors ${
              isDark ? 'text-white/95' : 'text-[#1A1A1A]/90'
            }`}>
              Upload Settings
            </h3>

            {/* Make Visible Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <p className={`${isDark ? 'text-white/90' : 'text-gray-900'}`}>
                  Make visible to students
                </p>
                <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  All related students can view this
                </p>
              </div>
              <button
                onClick={() => setMakeVisible(!makeVisible)}
                className={`relative w-14 h-8 rounded-full backdrop-blur-xl transition-all duration-300 border ${
                  makeVisible
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 border-blue-400/30'
                    : isDark
                    ? 'bg-white/10 border-white/20'
                    : 'bg-gray-300/50 border-gray-400/30'
                }`}
              >
                <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-lg transition-all duration-300 ${
                  makeVisible ? 'translate-x-6' : 'translate-x-0'
                }`}>
                  {makeVisible && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-600/30 blur-md" />
                  )}
                </div>
              </button>
            </div>

            {/* Separator */}
            <div className={`h-px ${isDark ? 'bg-white/10' : 'bg-gray-300/30'}`} />

            {/* Notify Students Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <p className={`${isDark ? 'text-white/90' : 'text-gray-900'}`}>
                  Notify students immediately
                </p>
                <p className={`text-sm ${isDark ? 'text-white/60' : 'text-gray-600'}`}>
                  Send push notification
                </p>
              </div>
              <button
                onClick={() => setNotifyStudents(!notifyStudents)}
                className={`relative w-14 h-8 rounded-full backdrop-blur-xl transition-all duration-300 border ${
                  notifyStudents
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 border-blue-400/30'
                    : isDark
                    ? 'bg-white/10 border-white/20'
                    : 'bg-gray-300/50 border-gray-400/30'
                }`}
              >
                <div className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow-lg transition-all duration-300 ${
                  notifyStudents ? 'translate-x-6' : 'translate-x-0'
                }`}>
                  {notifyStudents && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-600/30 blur-md" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 pb-6 px-4">
        <div className={`max-w-md mx-auto backdrop-blur-2xl rounded-3xl px-6 py-4 shadow-2xl transition-all duration-500 border ${
          isDark ? 'bg-white/10 border-white/20' : 'bg-white/50 border-white/60'
        }`}>
          <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
            isDark 
              ? 'bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10' 
              : 'bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20'
          }`} />
          
          <div className="relative flex items-center justify-between gap-4">
            {/* File Info */}
            <div className={`text-sm ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
              {selectedFile ? `${formatFileSize(selectedFile.size)} selected` : 'No file selected'}
            </div>
            
            {/* Upload Button */}
            <button
              onClick={handleUpload}
              disabled={!selectedFile || !title}
              className={`px-8 py-3 rounded-2xl transition-all duration-300 relative overflow-hidden group ${
                !selectedFile || !title
                  ? 'bg-gray-500/30 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-2xl hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Upload Material
              </span>
              {selectedFile && title && (
                <>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-0 group-hover:opacity-50 blur-xl -z-10 transition-opacity duration-500" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className={`relative max-w-sm w-full backdrop-blur-2xl rounded-3xl p-8 shadow-2xl transition-all duration-500 animate-scale-in ${
            isDark ? 'bg-white/10 border border-white/20' : 'bg-white/50 border border-white/60'
          }`}>
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 opacity-20 blur-2xl -z-10" />
            
            <div className={`absolute inset-0 rounded-3xl pointer-events-none ${
              isDark 
                ? 'bg-gradient-to-br from-white/10 via-transparent to-transparent' 
                : 'bg-gradient-to-br from-white/30 via-transparent to-transparent'
            }`} />
            
            <div className="relative text-center">
              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg shadow-green-500/30 flex items-center justify-center animate-bounce-in">
                  <Check className="w-10 h-10 text-white" />
                </div>
              </div>
              
              {/* Title */}
              <h2 className={`mb-2 ${isDark ? 'text-white/95' : 'text-gray-900'}`}>
                Upload Successful!
              </h2>
              
              {/* Subtitle */}
              <p className={`mb-8 ${isDark ? 'text-white/70' : 'text-gray-700'}`}>
                Your material has been shared with the students.
              </p>
              
              {/* Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => {
                    setShowSuccess(false);
                    onBack();
                  }}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-green-400/30 relative overflow-hidden group"
                >
                  <span className="relative z-10">Done</span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                <button
                  onClick={handleReset}
                  className={`w-full py-3 rounded-2xl backdrop-blur-md transition-all duration-300 border ${
                    isDark 
                      ? 'bg-white/10 hover:bg-white/20 border-white/20 text-white/90' 
                      : 'bg-white/30 hover:bg-white/50 border-white/40 text-gray-900'
                  }`}
                >
                  Upload Another
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}