export default function ManifestingJournal() {
  const manifestationSteps = [
    {
      step: "1",
      title: "Clarify Your Vision",
      description: "Be specific about what you want to manifest in your hairstyling career",
      color: "from-pink-500 to-rose-500"
    },
    {
      step: "2", 
      title: "Feel the Emotion",
      description: "Connect deeply with how achieving this goal will make you feel",
      color: "from-purple-500 to-indigo-500"
    },
    {
      step: "3",
      title: "Take Inspired Action",
      description: "Write down concrete steps you'll take to move toward your goal",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "4",
      title: "Release & Trust",
      description: "Let go of the 'how' and trust the process of manifestation",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const manifestationCategories = [
    {
      title: "Career & Business Goals",
      icon: "💼",
      prompts: [
        "My ideal client base looks like...",
        "My dream workspace feels like...",
        "The income I'm manifesting is...",
        "My professional reputation includes..."
      ]
    },
    {
      title: "Creative & Artistic Vision",
      icon: "🎨",
      prompts: [
        "My signature style is recognized for...",
        "The creative projects I'm attracting are...",
        "My artistic collaborations include...", 
        "The impact of my creativity is..."
      ]
    },
    {
      title: "Personal Growth & Fulfillment",
      icon: "✨",
      prompts: [
        "I am becoming more confident in...",
        "My work-life balance allows me to...",
        "I attract supportive relationships that...",
        "My personal growth journey includes..."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-indigo-500/10"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                MANIFESTING JOURNAL
              </h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Align your thoughts, feelings, and actions to create your dream hairstyling practice
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Manifestation Process */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-white/50">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">The Manifestation Process</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {manifestationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Manifestation Focus */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 mb-8 border border-rose-200">
          <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Today's Manifestation Focus</h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-slate-700 font-medium mb-3">
                What am I manifesting today? (Be specific and positive)
              </label>
              <textarea 
                className="w-full h-24 p-4 border-2 border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400 bg-white/80"
                placeholder="I am attracting..."
              />
            </div>
            
            <div>
              <label className="block text-slate-700 font-medium mb-3">
                How will I feel when this manifests?
              </label>
              <textarea 
                className="w-full h-20 p-4 border-2 border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400 bg-white/80"
                placeholder="I will feel confident, abundant, creative..."
              />
            </div>
            
            <div>
              <label className="block text-slate-700 font-medium mb-3">
                What inspired action will I take today?
              </label>
              <textarea 
                className="w-full h-20 p-4 border-2 border-rose-200 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400 bg-white/80"
                placeholder="Today I will..."
              />
            </div>
          </div>
        </div>

        {/* Manifestation Categories */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold text-center text-slate-800">Deep Manifestation Work</h3>
          
          {manifestationCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg border border-white/50 overflow-hidden">
              
              {/* Category Header */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6">
                <h4 className="text-xl font-bold flex items-center justify-center">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  {category.title}
                </h4>
              </div>
              
              {/* Prompts */}
              <div className="p-6 space-y-6">
                {category.prompts.map((prompt, promptIndex) => (
                  <div key={promptIndex} className="group">
                    <label className="block">
                      <div className="flex items-start mb-3">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                          <span className="text-purple-600 font-bold text-sm">{promptIndex + 1}</span>
                        </div>
                        <span className="text-slate-700 font-medium leading-relaxed">{prompt}</span>
                      </div>
                      
                      <div className="ml-9">
                        <textarea 
                          className="w-full h-24 p-4 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400"
                          placeholder="Write your manifestation in present tense as if it's already happening..."
                        />
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Gratitude & Celebration */}
        <div className="mt-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
          <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Gratitude & Celebration</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-700 font-medium mb-3">
                What am I grateful for in my career right now?
              </label>
              <textarea 
                className="w-full h-32 p-4 border-2 border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400 bg-white/80"
                placeholder="I'm grateful for..."
              />
            </div>
            
            <div>
              <label className="block text-slate-700 font-medium mb-3">
                What recent wins can I celebrate? (Big or small!)
              </label>
              <textarea 
                className="w-full h-32 p-4 border-2 border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400 bg-white/80"
                placeholder="I'm celebrating..."
              />
            </div>
          </div>
        </div>

        {/* Affirmation Creation */}
        <div className="mt-8 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-200">
          <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Personal Manifestation Affirmation</h3>
          
          <p className="text-slate-600 text-center mb-6">
            Create a powerful affirmation based on today's manifestation work. Write it in present tense as if it's already true.
          </p>
          
          <textarea 
            className="w-full h-32 p-6 border-2 border-amber-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400 bg-white/90 text-lg leading-relaxed text-center"
            placeholder="I am... I have... I create... I attract..."
          />
          
          <div className="mt-4 text-center">
            <p className="text-sm text-amber-700">
              💡 Repeat this affirmation throughout your day with feeling and conviction
            </p>
          </div>
        </div>

        {/* Closing Ritual */}
        <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-8 text-center">
          <h4 className="text-xl font-semibold mb-4">Manifestation Closing Ritual</h4>
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl mb-2">🙏</div>
              <div className="text-sm">Express gratitude for what's coming</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl mb-2">💫</div>
              <div className="text-sm">Visualize your goals as reality</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl mb-2">🌟</div>
              <div className="text-sm">Release and trust the process</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}