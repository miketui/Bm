export default function JournalPage() {
  const moods = ["😊", "😌", "🤔", "💪", "🎨", "🙏", "✨", "🔥"];
  const priorities = ["High", "Medium", "Low"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg border border-white/50">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Daily Journal
              </h1>
              <p className="text-slate-600">Capture your thoughts, ideas, and reflections</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-500 mb-1">Date</div>
              <input 
                type="date" 
                className="border-2 border-amber-200 rounded-lg p-2 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>
          
          {/* Quick Check-ins */}
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-slate-700 text-sm font-medium mb-2">Today's Mood</label>
              <div className="flex flex-wrap gap-2">
                {moods.map((mood, index) => (
                  <button key={index} className="w-8 h-8 text-lg hover:bg-amber-100 rounded-full transition-colors">
                    {mood}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-slate-700 text-sm font-medium mb-2">Energy Level</label>
              <div className="flex items-center space-x-2">
                {[1,2,3,4,5].map((level) => (
                  <button key={level} className="w-6 h-6 border-2 border-amber-300 rounded-full hover:bg-amber-300 transition-colors">
                    <span className="sr-only">{level}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-slate-700 text-sm font-medium mb-2">Focus Priority</label>
              <select className="w-full p-2 border-2 border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                <option>Select priority</option>
                {priorities.map((priority, index) => (
                  <option key={index}>{priority}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Main Journal Sections */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Left Column */}
          <div className="space-y-6">
            
            {/* Morning Intention */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🌅</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">Morning Intention</h3>
              </div>
              <textarea 
                className="w-full h-24 p-3 border-2 border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400"
                placeholder="How do I want to show up today? What's my main intention?"
              />
            </div>

            {/* Gratitude */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-yellow-100">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🙏</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">Gratitude</h3>
              </div>
              <div className="space-y-3">
                {[1,2,3].map((num) => (
                  <div key={num} className="flex items-center">
                    <span className="text-yellow-600 mr-3 font-bold">{num}.</span>
                    <input 
                      type="text" 
                      className="flex-1 p-2 border-2 border-yellow-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="I'm grateful for..."
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Creative Ideas */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">💡</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">Creative Ideas & Inspiration</h3>
              </div>
              <textarea 
                className="w-full h-32 p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400"
                placeholder="New techniques to try, color inspirations, styling ideas, artistic visions..."
              />
            </div>

          </div>

          {/* Right Column */}
          <div className="space-y-6">
            
            {/* Daily Highlights */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">⭐</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">Today's Highlights</h3>
              </div>
              <textarea 
                className="w-full h-24 p-3 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400"
                placeholder="What went well? What am I proud of? Any wins or breakthroughs?"
              />
            </div>

            {/* Challenges & Learning */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🧗</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">Challenges & Lessons</h3>
              </div>
              <textarea 
                className="w-full h-24 p-3 border-2 border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400"
                placeholder="What challenged me today? What did I learn from it?"
              />
            </div>

            {/* Tomorrow's Focus */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-indigo-100">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm">🎯</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">Tomorrow's Focus</h3>
              </div>
              <div className="space-y-3">
                <input 
                  type="text" 
                  className="w-full p-2 border-2 border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Top priority for tomorrow..."
                />
                <input 
                  type="text" 
                  className="w-full p-2 border-2 border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Secondary goal..."
                />
                <input 
                  type="text" 
                  className="w-full p-2 border-2 border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Something to explore..."
                />
              </div>
            </div>

          </div>
        </div>

        {/* Free Writing Space */}
        <div className="mt-6 bg-white rounded-2xl p-8 shadow-lg border border-white/50">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-lg">✍️</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Free Writing Space</h3>
              <p className="text-slate-600 text-sm">Let your thoughts flow freely without judgment</p>
            </div>
          </div>
          
          <textarea 
            className="w-full h-48 p-6 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400 leading-relaxed"
            placeholder="Stream of consciousness writing... What's on your mind? What patterns are you noticing? What insights are emerging? Write whatever comes to you..."
          />
        </div>

        {/* Daily Affirmation */}
        <div className="mt-6 bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-2xl p-6 text-center">
          <h4 className="text-lg font-semibold mb-4">Today's Personal Affirmation</h4>
          <textarea 
            className="w-full h-20 p-4 border-2 border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 resize-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200 text-center"
            placeholder="I am... I create... I attract... (Write an affirmation that speaks to your heart today)"
          />
        </div>

        {/* Footer Quote */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-white rounded-lg p-4 shadow-sm border border-slate-200">
            <p className="text-slate-600 italic text-sm">
              "The pen is the tongue of the mind." - Cervantes
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}