export default function SelfCareJournal() {
  const selfCareCategories = [
    {
      title: "Physical Wellness",
      icon: "💪",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      activities: [
        "Take a 20-minute walk outside",
        "Do gentle stretching or yoga",
        "Take a relaxing bath or shower", 
        "Get 7-8 hours of quality sleep",
        "Eat a nourishing, balanced meal",
        "Stay hydrated throughout the day"
      ]
    },
    {
      title: "Mental & Emotional",
      icon: "🧠",
      color: "from-purple-500 to-indigo-500", 
      bgColor: "from-purple-50 to-indigo-50",
      activities: [
        "Practice 10 minutes of meditation",
        "Write in a gratitude journal",
        "Do breathing exercises",
        "Listen to calming music",
        "Read something inspiring",
        "Practice positive self-talk"
      ]
    },
    {
      title: "Creative & Spiritual",
      icon: "✨",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50", 
      activities: [
        "Spend time in nature",
        "Practice art or creative expression",
        "Listen to uplifting music",
        "Write freely without judgment",
        "Practice visualization or prayer",
        "Connect with your values and purpose"
      ]
    },
    {
      title: "Social & Relationship",
      icon: "❤️",
      color: "from-orange-500 to-yellow-500",
      bgColor: "from-orange-50 to-yellow-50",
      activities: [
        "Call a friend or family member",
        "Schedule quality time with loved ones",
        "Set healthy boundaries",
        "Practice saying 'no' when needed",
        "Join a supportive community",
        "Express appreciation to someone"
      ]
    }
  ];

  const moodOptions = ["😊", "😌", "🤔", "😔", "😴", "🤗", "😤", "🥰"];
  const energyLevels = ["Very Low", "Low", "Moderate", "High", "Very High"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-blue-50 p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-blue-500/10"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌸</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-blue-600 bg-clip-text text-transparent mb-4">
                SELF-CARE JOURNAL
              </h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Nurture your mind, body, and spirit with intentional self-care practices
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-rose-500 to-blue-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Daily Check-in */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-white/50">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Daily Self-Care Check-in</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <label className="block text-slate-700 font-medium mb-3">Today's Date</label>
              <input 
                type="date" 
                className="w-full p-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent text-center"
              />
            </div>
            
            <div className="text-center">
              <label className="block text-slate-700 font-medium mb-3">Current Mood</label>
              <div className="flex justify-center flex-wrap gap-2">
                {moodOptions.map((mood, index) => (
                  <button key={index} className="w-10 h-10 text-2xl hover:bg-rose-100 rounded-full transition-colors">
                    {mood}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <label className="block text-slate-700 font-medium mb-3">Energy Level</label>
              <select className="w-full p-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent">
                <option>Select energy level...</option>
                {energyLevels.map((level, index) => (
                  <option key={index}>{level}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-700 font-medium mb-3">
                How am I feeling emotionally right now?
              </label>
              <textarea 
                className="w-full h-24 p-4 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none placeholder-slate-400"
                placeholder="Describe your emotional state, any stress, excitement, concerns..."
              />
            </div>
            
            <div>
              <label className="block text-slate-700 font-medium mb-3">
                What does my body need today?
              </label>
              <textarea 
                className="w-full h-24 p-4 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none placeholder-slate-400"
                placeholder="Rest, movement, nourishment, relaxation, comfort..."
              />
            </div>
          </div>
        </div>

        {/* Self-Care Categories */}
        <div className="space-y-8 mb-8">
          <h3 className="text-2xl font-bold text-center text-slate-800">Self-Care Practice Areas</h3>
          
          {selfCareCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg border border-white/50 overflow-hidden">
              
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} text-white p-6`}>
                <h4 className="text-xl font-bold flex items-center justify-center">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  {category.title}
                </h4>
              </div>
              
              {/* Activities */}
              <div className={`bg-gradient-to-br ${category.bgColor} p-6`}>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.activities.map((activity, activityIndex) => (
                    <div key={activityIndex} className="flex items-center p-3 bg-white/80 rounded-lg border border-white/50 hover:shadow-sm transition-shadow">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500 mr-3" 
                      />
                      <span className="text-slate-700 font-medium flex-1">{activity}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <label className="block text-slate-700 font-medium mb-2">
                    Additional {category.title.toLowerCase()} practices I want to try:
                  </label>
                  <textarea 
                    className="w-full h-16 p-3 border-2 border-white/50 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none bg-white/80 placeholder-slate-400 text-sm"
                    placeholder="Write your own ideas for this category..."
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly Self-Care Plan */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-8 border border-amber-200">
          <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">My Weekly Self-Care Intentions</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-700 font-medium mb-3">
                3 self-care practices I commit to this week:
              </label>
              <div className="space-y-3">
                {[1, 2, 3].map((num) => (
                  <input 
                    key={num}
                    type="text" 
                    className="w-full p-3 border-2 border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-slate-400"
                    placeholder={`Self-care commitment ${num}...`}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-slate-700 font-medium mb-3">
                How I'll hold myself accountable:
              </label>
              <textarea 
                className="w-full h-32 p-4 border-2 border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none placeholder-slate-400"
                placeholder="Reminders, calendar blocks, accountability partner, rewards..."
              />
            </div>
          </div>
        </div>

        {/* Reflection & Gratitude */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          
          {/* Self-Compassion Check */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-lg">💜</span>
              </div>
              <h4 className="text-lg font-bold text-slate-800">Self-Compassion Check</h4>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-slate-700 text-sm font-medium mb-2">
                  What would I tell a good friend in my situation?
                </label>
                <textarea 
                  className="w-full h-20 p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm placeholder-slate-400"
                  placeholder="Practice speaking to yourself with kindness..."
                />
              </div>
              
              <div>
                <label className="block text-slate-700 text-sm font-medium mb-2">
                  How can I be gentler with myself today?
                </label>
                <textarea 
                  className="w-full h-20 p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm placeholder-slate-400"
                  placeholder="Small acts of self-kindness..."
                />
              </div>
            </div>
          </div>

          {/* Gratitude for Self */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-lg">🙏</span>
              </div>
              <h4 className="text-lg font-bold text-slate-800">Gratitude for Myself</h4>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-slate-700 text-sm font-medium mb-1">
                  I appreciate my body for:
                </label>
                <input 
                  type="text" 
                  className="w-full p-2 border-2 border-green-200 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  placeholder="All the ways your body serves you..."
                />
              </div>
              
              <div>
                <label className="block text-slate-700 text-sm font-medium mb-1">
                  I'm proud of myself for:
                </label>
                <input 
                  type="text" 
                  className="w-full p-2 border-2 border-green-200 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  placeholder="Recent achievements, big or small..."
                />
              </div>
              
              <div>
                <label className="block text-slate-700 text-sm font-medium mb-1">
                  A strength I'm grateful for:
                </label>
                <input 
                  type="text" 
                  className="w-full p-2 border-2 border-green-200 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  placeholder="A personal quality you value..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Evening Reflection */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 mb-8 border border-indigo-200">
          <h4 className="text-xl font-bold text-slate-800 mb-6 text-center">Evening Self-Care Reflection</h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-700 font-medium mb-3">
                What self-care did I practice today?
              </label>
              <textarea 
                className="w-full h-24 p-4 border-2 border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none placeholder-slate-400"
                placeholder="Acknowledge all the ways you cared for yourself..."
              />
            </div>
            
            <div>
              <label className="block text-slate-700 font-medium mb-3">
                What does my soul need tonight?
              </label>
              <textarea 
                className="w-full h-24 p-4 border-2 border-indigo-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none placeholder-slate-400"
                placeholder="Rest, connection, peace, comfort, inspiration..."
              />
            </div>
          </div>
        </div>

        {/* Self-Care Affirmation */}
        <div className="bg-gradient-to-r from-rose-500 to-purple-500 text-white rounded-2xl p-8 text-center">
          <h4 className="text-xl font-semibold mb-4">Today's Self-Care Affirmation</h4>
          <textarea 
            className="w-full h-20 p-4 border-2 border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 resize-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200 text-center"
            placeholder="I deserve love and care. I am worthy of gentleness. I honor my needs..."
          />
          <p className="text-white/90 text-sm mt-4">
            Speak this affirmation to yourself with love and conviction 💕
          </p>
        </div>
        
      </div>
    </div>
  );
}