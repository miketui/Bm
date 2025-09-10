export default function SelfAssessmentFinal() {
  const assessmentCategories = [
    {
      title: "Professional Growth Reflection",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      questions: [
        "How has your understanding of hairstyling as both art and business evolved throughout this journey?",
        "What specific skills or knowledge areas do you feel most confident about now?",
        "Which concepts from this book challenged your previous assumptions the most?"
      ]
    },
    {
      title: "Implementation Planning",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      questions: [
        "What are the first three strategies from this book you plan to implement?",
        "How will you measure the success of these new approaches?",
        "What potential obstacles do you anticipate, and how will you overcome them?"
      ]
    },
    {
      title: "Future Vision",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      questions: [
        "How do you envision your practice evolving over the next 12 months?",
        "What impact do you want to have on your clients and community?",
        "What legacy do you want to create through your work?"
      ]
    },
    {
      title: "Personal Development",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      questions: [
        "How have your personal values and professional goals aligned during this process?",
        "What self-care practices will you prioritize to sustain your growth?",
        "How will you continue learning and evolving as a conscious hairstylist?"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-3xl p-8 shadow-xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"></div>
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
                FINAL SELF-ASSESSMENT
              </h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Reflect on your transformation and chart your path forward
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border border-purple-100">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
              <span className="text-white text-lg">🎯</span>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Completing Your Journey</h3>
              <div className="text-slate-600 text-sm leading-relaxed space-y-1">
                <p>• Take time to thoughtfully reflect on each question below</p>
                <p>• Consider how your perspectives have shifted since beginning this book</p>
                <p>• Use your responses to create actionable goals for your continued growth</p>
                <p>• Return to this assessment periodically to track your evolution</p>
              </div>
            </div>
          </div>
        </div>

        {/* Assessment Categories */}
        <div className="space-y-8">
          {assessmentCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg border border-white/50 overflow-hidden">
              
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} text-white p-6`}>
                <h2 className="text-xl font-bold flex items-center">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold">{categoryIndex + 1}</span>
                  </div>
                  {category.title}
                </h2>
              </div>
              
              {/* Questions */}
              <div className={`bg-gradient-to-br ${category.bgColor} p-6 space-y-6`}>
                {category.questions.map((question, questionIndex) => (
                  <div key={questionIndex} className="group">
                    <label className="block">
                      <div className="flex items-start mb-3">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3 mt-1 shadow-sm">
                          <span className="text-xs font-medium text-slate-600">
                            {questionIndex + 1}
                          </span>
                        </div>
                        <span className="text-slate-700 font-medium leading-relaxed">
                          {question}
                        </span>
                      </div>
                      
                      <div className="ml-9">
                        <textarea 
                          className="w-full h-32 p-4 border-2 border-white/70 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400 bg-white/80 shadow-sm"
                          placeholder="Reflect deeply on your journey and growth..."
                        />
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Action Planning Section */}
        <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center flex items-center justify-center">
            <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-lg">📝</span>
            </span>
            Your Action Plan
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-amber-800 mb-3">Next 30 Days</h4>
              <textarea 
                className="w-full h-24 p-3 border-2 border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400 bg-white/70"
                placeholder="What specific actions will you take in the next month?"
              />
            </div>
            
            <div>
              <h4 className="font-semibold text-amber-800 mb-3">Next 90 Days</h4>
              <textarea 
                className="w-full h-24 p-3 border-2 border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400 bg-white/70"
                placeholder="What larger goals will you work toward?"
              />
            </div>
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="mt-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl p-8 text-center">
          <h4 className="text-xl font-semibold mb-4">Your Commitment to Growth</h4>
          <textarea 
            className="w-full h-20 p-4 border-2 border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 resize-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
            placeholder="Write a personal commitment statement about your continued journey as a conscious hairstylist..."
          />
          <p className="text-sm mt-4 opacity-90">
            Sign and date this commitment to make it official!
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-lg p-6 shadow-sm border border-slate-200">
            <p className="text-lg text-slate-700 italic mb-2">
              "The journey of a thousand miles begins with a single step."
            </p>
            <p className="text-sm text-slate-500">
              Congratulations on completing your transformative journey!
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}