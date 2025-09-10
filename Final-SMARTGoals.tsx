export default function FinalSMARTGoalsPage() {
  const smartCriteria = [
    {
      letter: "S",
      title: "Specific",
      description: "Define what exactly will be accomplished, who's involved, where it will happen, and why it's important.",
      example: "Vague: \"I want to improve my coloring skills.\" Specific: \"I will master balayage techniques for creating natural-looking dimension on dark hair.\""
    },
    {
      letter: "M",
      title: "Measurable", 
      description: "Include concrete criteria for tracking progress and determining goal achievement.",
      example: "Vague: \"I want to grow my social media presence.\" Measurable: \"I will increase my Instagram followers from 500 to 2,000 and maintain a 5% engagement rate.\""
    },
    {
      letter: "A",
      title: "Achievable",
      description: "Ensure the goal is possible with current resources and constraints while still stretching abilities.",
      example: "Unrealistic: \"I will double my client base in one month without marketing.\" Achievable: \"I will add 2 new clients per week through referrals and optimizing my online presence.\""
    },
    {
      letter: "R", 
      title: "Relevant",
      description: "Align the goal with broader professional vision and core values to ensure it's worthwhile.",
      example: "Irrelevant: \"I'll learn nail art\" (for a hairstylist building a hair-only salon) Relevant: \"I'll develop expertise in creative updos to expand bridal services.\""
    },
    {
      letter: "T",
      title: "Time-bound",
      description: "Set a clear deadline to create urgency and support prioritization.",
      example: "Open-ended: \"I'll eventually take a business course.\" Time-bound: \"I will complete a salon business certification by December 31st.\""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-purple-500/10"></div>
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent mb-4">
                SMART GOAL SETTING WORKSHEET
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-purple-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-white/50">
          <p className="text-slate-700 leading-relaxed text-center text-lg">
            Setting clear, well-defined goals is the foundation of all professional achievement. The SMART framework transforms vague aspirations into powerful, actionable objectives that dramatically increase your likelihood of success. Each letter in SMART represents a critical quality that your goal must possess: <strong>Specific</strong>, <strong>Measurable</strong>, <strong>Achievable</strong>, <strong>Relevant</strong>, and <strong>Time-bound</strong>.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 overflow-hidden">
          
          {/* Decorative header */}
          <div className="bg-gradient-to-r from-emerald-500 to-purple-500 text-white p-8 text-center">
            <div className="inline-block w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h2 className="text-2xl font-semibold">The SMART Goal Framework</h2>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            
            {/* SMART Criteria */}
            <div className="space-y-6">
              {smartCriteria.map((criterion, index) => (
                <div key={index} className="border border-emerald-100 rounded-xl p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                      <span className="text-white font-bold text-2xl">{criterion.letter}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{criterion.letter} - {criterion.title}</h3>
                      <p className="text-slate-700 leading-relaxed mb-3">{criterion.description}</p>
                      <div className="bg-slate-50 rounded-lg p-3 border-l-4 border-emerald-400">
                        <p className="text-slate-600 text-sm leading-relaxed">{criterion.example}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SMART Goal Worksheet */}
            <div className="mt-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">SMART Goal Worksheet</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-purple-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-8">
                {/* Goal Description */}
                <div className="border border-purple-100 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-purple-800 mb-3">Goal Description</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">Write a brief description of what you want to achieve. Don't worry about making it SMART yet.</p>
                  <div className="h-24 border border-slate-200 rounded-lg bg-slate-50/30 p-3">
                    <div className="text-slate-400 text-sm italic">Describe your goal here...</div>
                  </div>
                </div>

                {/* SMART Components */}
                <div className="border border-purple-100 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-purple-800 mb-6">SMART Components</h4>
                  
                  <div className="space-y-6">
                    {smartCriteria.map((criterion, index) => (
                      <div key={index}>
                        <h5 className="font-semibold text-slate-800 mb-2">{criterion.letter} - {criterion.title}: What exactly will you accomplish? What specific skills, knowledge, or outcomes are you targeting?</h5>
                        <div className="h-20 border border-slate-200 rounded-lg bg-slate-50/30 p-3">
                          <div className="text-slate-400 text-sm italic">Your {criterion.title.toLowerCase()} details here...</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Refined SMART Goal Statement */}
                <div className="border border-purple-100 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-purple-800 mb-3">Refined SMART Goal Statement</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">Rewrite your goal in a complete SMART format.</p>
                  <div className="h-32 border border-slate-200 rounded-lg bg-slate-50/30 p-3">
                    <div className="text-slate-400 text-sm italic">Your complete SMART goal statement...</div>
                  </div>
                </div>

                {/* Action Plan and Accountability */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-green-100 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-green-800 mb-3">Action Plan</h4>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">List the key steps you'll take to achieve this goal.</p>
                    <div className="space-y-3">
                      {[1, 2, 3].map((num) => (
                        <div key={num} className="flex items-center">
                          <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">{num}</span>
                          <div className="flex-1 h-8 border border-slate-200 rounded bg-slate-50/30"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border border-blue-100 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-blue-800 mb-3">Accountability & Resources</h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-slate-700 font-medium mb-2">Who will support you?</p>
                        <div className="h-8 border border-slate-200 rounded bg-slate-50/30"></div>
                      </div>
                      <div>
                        <p className="text-slate-700 font-medium mb-2">What resources do you need?</p>
                        <div className="h-8 border border-slate-200 rounded bg-slate-50/30"></div>
                      </div>
                      <div>
                        <p className="text-slate-700 font-medium mb-2">How will you track progress?</p>
                        <div className="h-8 border border-slate-200 rounded bg-slate-50/30"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Review and Reflection */}
                <div className="border border-amber-100 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-amber-800 mb-3">Review and Reflection</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-slate-700 font-medium mb-2">Potential obstacles:</p>
                      <div className="h-20 border border-slate-200 rounded bg-slate-50/30"></div>
                    </div>
                    <div>
                      <p className="text-slate-700 font-medium mb-2">How you'll overcome them:</p>
                      <div className="h-20 border border-slate-200 rounded bg-slate-50/30"></div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-emerald-500 to-purple-500 text-white rounded-2xl p-8 shadow-xl">
            <h4 className="text-xl font-semibold mb-4">Transform Dreams Into Achievable Goals</h4>
            <p className="text-lg leading-relaxed opacity-95 mb-6">
              Use the SMART framework to create clear, actionable objectives that will accelerate your hairstyling career success.
            </p>
            <div className="flex justify-center">
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