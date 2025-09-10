export default function SMARTGoals() {
  const smartCriteria = [
    {
      letter: "S",
      word: "Specific",
      description: "Clearly defined with no ambiguity",
      color: "from-red-500 to-pink-500",
      questions: [
        "What exactly do I want to achieve?",
        "Who is involved in this goal?",
        "Where will this happen?",
        "What specific outcomes do I want?"
      ]
    },
    {
      letter: "M", 
      word: "Measurable",
      description: "Quantifiable with clear metrics",
      color: "from-blue-500 to-indigo-500",
      questions: [
        "How will I measure progress?",
        "What metrics will I track?",
        "How will I know when it's achieved?",
        "What does success look like numerically?"
      ]
    },
    {
      letter: "A",
      word: "Achievable", 
      description: "Realistic and attainable",
      color: "from-emerald-500 to-teal-500",
      questions: [
        "Is this goal realistic given my resources?",
        "What skills/knowledge do I need?",
        "What obstacles might I face?",
        "Do I have the time and commitment needed?"
      ]
    },
    {
      letter: "R",
      word: "Relevant",
      description: "Aligned with your bigger vision",
      color: "from-purple-500 to-violet-500",
      questions: [
        "Why is this goal important to me?",
        "How does it align with my career vision?",
        "Is this the right time for this goal?",
        "What impact will achieving this have?"
      ]
    },
    {
      letter: "T",
      word: "Time-bound",
      description: "Has a clear deadline",
      color: "from-amber-500 to-orange-500",
      questions: [
        "When will I complete this goal?",
        "What are my key milestones?",
        "How will I track my timeline?",
        "What's my daily/weekly commitment?"
      ]
    }
  ];

  const goalCategories = [
    "Career Growth",
    "Skill Development", 
    "Business Expansion",
    "Creative Projects",
    "Income & Financial",
    "Health & Wellness",
    "Relationships & Network",
    "Personal Growth"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-pink-500/10"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🎯</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent mb-4">
                SMART GOALS
              </h1>
              <h2 className="text-xl text-slate-600 mb-4">Strategic Goal Setting Worksheet</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Transform your dreams into actionable, achievable goals using the proven SMART framework
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* SMART Framework Overview */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-white/50">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">The SMART Framework</h2>
          
          <div className="grid md:grid-cols-5 gap-6">
            {smartCriteria.map((criteria, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${criteria.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white text-2xl font-bold">{criteria.letter}</span>
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2">{criteria.word}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{criteria.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Goal Setting Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-white/50">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Create Your SMART Goal</h3>
          
          {/* Goal Overview */}
          <div className="mb-8 p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border border-slate-200">
            <h4 className="text-lg font-bold text-slate-800 mb-4">Goal Overview</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-700 font-medium mb-2">Goal Category:</label>
                <select className="w-full p-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select a category...</option>
                  {goalCategories.map((category, index) => (
                    <option key={index}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-slate-700 font-medium mb-2">Priority Level:</label>
                <select className="w-full p-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select priority...</option>
                  <option>High Priority</option>
                  <option>Medium Priority</option>
                  <option>Low Priority</option>
                </select>
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-slate-700 font-medium mb-2">Goal Statement (Draft):</label>
              <textarea 
                className="w-full h-20 p-4 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none placeholder-slate-400"
                placeholder="Write your initial goal idea here - we'll refine it using the SMART criteria below..."
              />
            </div>
          </div>

          {/* SMART Criteria Deep Dive */}
          <div className="space-y-8">
            {smartCriteria.map((criteria, index) => (
              <div key={index} className="border-2 border-slate-100 rounded-xl overflow-hidden">
                
                {/* Criteria Header */}
                <div className={`bg-gradient-to-r ${criteria.color} text-white p-6`}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white text-xl font-bold">{criteria.letter}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{criteria.word}</h4>
                      <p className="text-white/90">{criteria.description}</p>
                    </div>
                  </div>
                </div>
                
                {/* Questions and Answers */}
                <div className="p-6 bg-gradient-to-br from-white to-slate-50">
                  <div className="grid md:grid-cols-2 gap-6">
                    
                    {/* Guiding Questions */}
                    <div>
                      <h5 className="font-bold text-slate-800 mb-4">Guiding Questions:</h5>
                      <ul className="space-y-2">
                        {criteria.questions.map((question, qIndex) => (
                          <li key={qIndex} className="flex items-start text-sm text-slate-700">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            {question}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Answer Space */}
                    <div>
                      <h5 className="font-bold text-slate-800 mb-4">Your Response:</h5>
                      <textarea 
                        className="w-full h-32 p-4 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-transparent resize-none text-slate-700 placeholder-slate-400"
                        placeholder={`Answer the ${criteria.word.toLowerCase()} questions to refine this aspect of your goal...`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Goal Statement */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8 border border-emerald-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Your Refined SMART Goal</h3>
          
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <label className="block text-slate-700 font-medium mb-4">
              Based on your responses above, write your final SMART goal statement:
            </label>
            <textarea 
              className="w-full h-32 p-6 border-2 border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none text-slate-700 placeholder-slate-400 text-lg leading-relaxed"
              placeholder="I will [specific action] by [deadline] as measured by [metrics] because [relevance] and I will achieve this by [approach]..."
            />
          </div>
        </div>

        {/* Action Planning */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-white/50">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Action Plan & Milestones</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Milestones */}
            <div>
              <h4 className="text-lg font-bold text-slate-800 mb-4">Key Milestones</h4>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((milestone) => (
                  <div key={milestone} className="flex items-start border-2 border-blue-200 rounded-lg p-4">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 mt-1 text-sm font-bold">
                      {milestone}
                    </div>
                    <div className="flex-1">
                      <input 
                        type="text" 
                        className="w-full mb-2 font-medium text-slate-800 border-none outline-none bg-transparent placeholder-slate-400"
                        placeholder={`Milestone ${milestone} description...`}
                      />
                      <input 
                        type="date" 
                        className="border border-blue-200 rounded px-2 py-1 text-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Action Steps */}
            <div>
              <h4 className="text-lg font-bold text-slate-800 mb-4">Weekly Action Steps</h4>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 mr-3" />
                    <input 
                      type="text" 
                      className="flex-1 p-2 border border-purple-200 rounded focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-slate-400"
                      placeholder={`Action step ${step}...`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress Tracking */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8 border border-purple-200">
          <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Progress Tracking System</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-bold text-purple-800 mb-3">Daily Check-in</h5>
              <textarea 
                className="w-full h-20 p-2 border border-purple-200 rounded text-sm resize-none placeholder-slate-400"
                placeholder="What did I do today toward this goal?"
              />
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-bold text-pink-800 mb-3">Weekly Review</h5>
              <textarea 
                className="w-full h-20 p-2 border border-pink-200 rounded text-sm resize-none placeholder-slate-400"
                placeholder="What progress did I make this week? What adjustments are needed?"
              />
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h5 className="font-bold text-indigo-800 mb-3">Monthly Assessment</h5>
              <textarea 
                className="w-full h-20 p-2 border border-indigo-200 rounded text-sm resize-none placeholder-slate-400"
                placeholder="Am I on track? What's working well? What needs to change?"
              />
            </div>
          </div>
        </div>

        {/* Commitment & Accountability */}
        <div className="bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-2xl p-8 text-center">
          <h4 className="text-xl font-semibold mb-4">Goal Commitment Statement</h4>
          <textarea 
            className="w-full h-24 p-4 border-2 border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 resize-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
            placeholder="I commit to achieving this goal because... I will hold myself accountable by... When I achieve this goal, I will celebrate by..."
          />
          
          <div className="mt-6 grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div>
              <label className="block text-white/90 text-sm mb-2">Accountability Partner:</label>
              <input 
                type="text" 
                className="w-full p-2 border border-white/30 rounded bg-white/10 text-white placeholder-white/70"
                placeholder="Who will support you?"
              />
            </div>
            <div>
              <label className="block text-white/90 text-sm mb-2">Review Date:</label>
              <input 
                type="date" 
                className="w-full p-2 border border-white/30 rounded bg-white/10 text-white"
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}