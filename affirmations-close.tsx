export default function AffirmationsClose() {
  const finalAffirmations = [
    {
      category: "Professional Mastery",
      affirmations: [
        "I am a skilled artist whose talents grow stronger each day",
        "My work transforms not just hair, but lives and confidence",
        "I approach each client with expertise, creativity, and compassion",
        "My professional journey is guided by continuous learning and excellence"
      ]
    },
    {
      category: "Business Success",
      affirmations: [
        "I create abundant opportunities through my unique vision",
        "My business grows sustainably while honoring my values",
        "I attract clients who appreciate and value my artistry",
        "Success flows to me as I serve others with authenticity"
      ]
    },
    {
      category: "Personal Empowerment",
      affirmations: [
        "I trust my instincts and make decisions with confidence",
        "My creativity is limitless and constantly evolving",
        "I deserve success, recognition, and financial abundance",
        "I balance ambition with self-care and inner peace"
      ]
    },
    {
      category: "Community Impact",
      affirmations: [
        "My work contributes to a more beautiful and confident world",
        "I inspire others through my dedication and passion",
        "I build meaningful connections that enrich my life and career",
        "My legacy is one of positive transformation and artistic excellence"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-orange-500/10 to-amber-500/10"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
                CLOSING AFFIRMATIONS
              </h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Carry these powerful declarations with you as you step into your expanded practice
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-rose-500 to-amber-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg border border-orange-100">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
              <span className="text-white text-lg">💫</span>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Your Affirmation Practice</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                These affirmations represent the culmination of your journey through this book. Read them daily, 
                speak them with conviction, and let them guide your thoughts and actions as you build your conscious practice. 
                Your words have power—use them to create the reality you desire.
              </p>
            </div>
          </div>
        </div>

        {/* Affirmation Categories */}
        <div className="space-y-6">
          {finalAffirmations.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg border border-white/50 overflow-hidden">
              
              {/* Category Header */}
              <div className="bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 text-white p-6">
                <h2 className="text-xl font-bold text-center">{category.category}</h2>
              </div>
              
              {/* Affirmations */}
              <div className="p-6 space-y-4">
                {category.affirmations.map((affirmation, affirmationIndex) => (
                  <div key={affirmationIndex} className="group">
                    <div className="flex items-start p-4 bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl border border-orange-100 hover:shadow-md transition-all duration-200">
                      <div className="w-8 h-8 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <span className="text-white text-sm font-bold">{affirmationIndex + 1}</span>
                      </div>
                      <p className="text-slate-700 font-medium leading-relaxed text-lg">
                        {affirmation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Personal Affirmation Section */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center flex items-center justify-center">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-lg">🌟</span>
            </span>
            Create Your Personal Power Affirmation
          </h3>
          
          <p className="text-slate-600 text-center mb-6">
            Combine elements from above or create something entirely your own. This will be your signature affirmation.
          </p>
          
          <textarea 
            className="w-full h-32 p-6 border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400 bg-white/80 text-lg leading-relaxed"
            placeholder="I am a conscious hairstylist who..."
          />
          
          <div className="mt-4 text-center">
            <p className="text-sm text-purple-600 italic">
              Write this affirmation somewhere you'll see it daily—your mirror, phone, or workspace
            </p>
          </div>
        </div>

        {/* Daily Practice Guide */}
        <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Daily Affirmation Ritual</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌅</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Morning (5 minutes)</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Begin your day by reading your affirmations aloud with intention and feeling
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💼</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Before Work</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Recite your personal power affirmation to center yourself before seeing clients
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌙</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Evening Reflection</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Review how your affirmations manifested in your day and express gratitude
              </p>
            </div>
          </div>
        </div>

        {/* Final Blessing */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 text-white rounded-2xl p-8 shadow-xl">
            <h4 className="text-xl font-semibold mb-4">A Closing Blessing</h4>
            <p className="text-lg leading-relaxed opacity-95 italic">
              "May your hands create beauty, your heart inspire confidence, 
              and your spirit remain forever connected to the transformative power of your art. 
              You are exactly where you need to be, becoming exactly who you're meant to be."
            </p>
            <div className="mt-6 flex justify-center">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}