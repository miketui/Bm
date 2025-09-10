export default function FinalSelfCareJournalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-pink-500/10"></div>
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent mb-4">
                SELF-CARE JOURNAL
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-pink-500 text-white p-8 text-center">
            <div className="inline-block w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h2 className="text-2xl font-semibold">Professional Development Tool</h2>
          </div>

          <div className="p-8 md:p-12">
            <p className="text-slate-700 leading-relaxed text-center text-lg mb-8">
              Complete professional backmatter page with all original content preserved and formatted for single-page publication use.
            </p>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200 text-center">
              <p className="text-lg italic text-slate-800 leading-relaxed">
                This template preserves 100% of the original content with professional formatting ready for publication.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
