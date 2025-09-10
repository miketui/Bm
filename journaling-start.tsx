export default function JournalingStart() {
  const journalingPrompts = [
    {
      category: "Creative Exploration",
      color: "from-purple-500 to-pink-500",
      prompts: [
        "What does 'conscious hairstyling' mean to me personally?",
        "Describe a moment when you felt most creative and alive in your work",
        "What artistic vision do you want to bring to life this year?",
        "How has your relationship with beauty and creativity evolved?"
      ]
    },
    {
      category: "Professional Reflection",
      color: "from-blue-500 to-indigo-500",
      prompts: [
        "What inspired you to become a hairstylist originally?",
        "Describe your ideal client interaction from start to finish",
        "What skills do you want to master in the next 6 months?",
        "How do you want to be remembered by your clients?"
      ]
    },
    {
      category: "Business Vision",
      color: "from-emerald-500 to-teal-500",
      prompts: [
        "What does your dream practice look like in 5 years?",
        "What impact do you want to have on the beauty industry?",
        "How do you want to balance creativity and profitability?",
        "What legacy do you want to build through your work?"
      ]
    },
    {
      category: "Personal Growth",
      color: "from-amber-500 to-orange-500",
      prompts: [
        "What fears or limiting beliefs are holding you back?",
        "How has your confidence as an artist grown recently?",
        "What does work-life balance mean to you?",
        "How do you nurture your own well-being and creativity?"
      ]
    }
  ];

  const journalingTips = [
    { icon: "⏰", tip: "Set aside 10-15 minutes daily for uninterrupted writing" },
    { icon: "🚫", tip: "Don't worry about grammar, spelling, or perfect sentences" },
    { icon: "💭", tip: "Write whatever comes to mind - let your thoughts flow freely" },
    { icon: "🎯", tip: "Focus on honesty and authenticity rather than 'right' answers" },
    { icon: "📅", tip: "Date your entries to track your growth over time" },
    { icon: "🔒", tip: "Keep your journal private to encourage complete openness" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✍️</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                JOURNALING START
              </h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Begin your reflective practice with guided prompts and intentional writing
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg border border-white/50">
          <div className="prose prose-lg max-w-none text-slate-700">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Why Journal Your Journey?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="float-left text-6xl font-serif text-blue-500 leading-none mr-3 mt-1">J</div>
                <p className="leading-relaxed">
                  ournaling is one of the most powerful tools for personal and professional growth. 
                  When you put pen to paper (or fingers to keyboard), you create space for reflection, 
                  clarity, and insight that might otherwise remain buried beneath the busy-ness of daily life.
                </p>
                
                <p className="leading-relaxed mt-4">
                  For hairstylists, journaling becomes even more valuable. It helps you process your 
                  artistic journey, clarify your vision, and track your evolution as both artist and entrepreneur.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
                <h3 className="font-bold text-slate-800 mb-4">Benefits of Regular Journaling:</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Increased self-awareness and clarity
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Better emotional processing and stress relief
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Enhanced creativity and problem-solving
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Tracking of personal and professional growth
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">•</span>
                    Goal clarification and intention setting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Journaling Tips */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-12 border border-amber-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Getting Started: Essential Tips</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journalingTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-amber-100">
                <div className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0">{tip.icon}</span>
                  <p className="text-slate-700 text-sm leading-relaxed">{tip.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prompt Categories */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">Guided Prompts to Spark Your Writing</h3>
          
          {journalingPrompts.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg border border-white/50 overflow-hidden">
              
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} text-white p-6`}>
                <h4 className="text-xl font-bold text-center">{category.category}</h4>
              </div>
              
              {/* Prompts */}
              <div className="p-6 space-y-6">
                {category.prompts.map((prompt, promptIndex) => (
                  <div key={promptIndex} className="group">
                    <div className="flex items-start mb-4">
                      <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:bg-slate-200 transition-colors">
                        <span className="text-slate-600 font-bold text-sm">{promptIndex + 1}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-700 font-medium leading-relaxed mb-3">{prompt}</p>
                        <textarea 
                          className="w-full h-32 p-4 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400"
                          placeholder="Let your thoughts flow freely here..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Daily Practice Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-6">Establishing Your Daily Practice</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌅</span>
              </div>
              <h4 className="font-bold mb-2">Morning Pages</h4>
              <p className="text-white/90 text-sm">
                Start your day with 3 pages of stream-of-consciousness writing to clear your mind
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="font-bold mb-2">Creative Insights</h4>
              <p className="text-white/90 text-sm">
                Capture ideas, inspirations, and artistic breakthroughs as they happen throughout your day
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌙</span>
              </div>
              <h4 className="font-bold mb-2">Evening Reflection</h4>
              <p className="text-white/90 text-sm">
                End your day by reflecting on lessons learned, gratitude, and tomorrow's intentions
              </p>
            </div>
          </div>
        </div>

        {/* Personal Commitment */}
        <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">My Journaling Commitment</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                I commit to journaling:
              </label>
              <select className="w-full p-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Daily (recommended)</option>
                <option>Every other day</option>
                <option>3 times per week</option>
                <option>Weekly</option>
              </select>
            </div>
            
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                My preferred journaling time:
              </label>
              <select className="w-full p-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Morning (5-7 AM)</option>
                <option>Mid-morning (7-10 AM)</option>
                <option>Afternoon (12-3 PM)</option>
                <option>Evening (6-9 PM)</option>
                <option>Before bed (9-11 PM)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                My intention for this journaling practice:
              </label>
              <textarea 
                className="w-full h-24 p-4 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400"
                placeholder="What do you hope to gain from regular journaling? How will it support your growth?"
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}