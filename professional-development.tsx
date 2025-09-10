export default function ProfessionalDevelopment() {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: "✂️",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      skills: [
        "Advanced cutting techniques",
        "Color theory and application", 
        "Texture and curl specialization",
        "Chemical services mastery",
        "Styling and finishing techniques"
      ]
    },
    {
      title: "Business & Marketing",
      icon: "📈",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      skills: [
        "Social media marketing",
        "Client relationship management",
        "Pricing and financial planning",
        "Brand development",
        "Customer service excellence"
      ]
    },
    {
      title: "Creative & Artistic",
      icon: "🎨",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      skills: [
        "Editorial and fashion styling",
        "Photography and portfolio building",
        "Trend forecasting and interpretation",
        "Creative collaboration",
        "Artistic vision development"
      ]
    },
    {
      title: "Leadership & Communication",
      icon: "👥",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      skills: [
        "Team management and mentoring",
        "Public speaking and education",
        "Conflict resolution",
        "Professional networking",
        "Industry advocacy and representation"
      ]
    }
  ];

  const learningMethods = [
    { method: "Workshops/Classes", icon: "🎓" },
    { method: "Online Courses", icon: "💻" },
    { method: "Mentorship", icon: "👨‍🏫" },
    { method: "Industry Events", icon: "🏢" },
    { method: "Self-Study", icon: "📚" },
    { method: "Practice/Experimentation", icon: "🔬" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-pink-500/10"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4">
                PROFESSIONAL DEVELOPMENT
              </h1>
              <h2 className="text-xl text-slate-600 mb-4">Growth Tracker & Planning Tool</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Map your skills, plan your growth, and track your professional evolution
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Current Skills Assessment */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-white/50">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">Skills Assessment Matrix</h2>
          
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} text-white p-4`}>
                  <h3 className="text-lg font-bold flex items-center">
                    <span className="text-xl mr-3">{category.icon}</span>
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills Grid */}
                <div className={`bg-gradient-to-br ${category.bgColor} p-6`}>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between bg-white/80 rounded-lg p-4 shadow-sm">
                        <span className="text-slate-700 font-medium flex-1">{skill}</span>
                        
                        {/* Skill Level Selector */}
                        <div className="flex items-center space-x-2 ml-4">
                          <span className="text-xs text-slate-500 mr-2">Level:</span>
                          {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((level, levelIndex) => (
                            <label key={levelIndex} className="flex items-center">
                              <input 
                                type="radio" 
                                name={`skill-${categoryIndex}-${skillIndex}`}
                                className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" 
                              />
                              <span className="ml-1 text-xs text-slate-600">{level[0]}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Goals */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          
          {/* This Quarter's Goals */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-lg">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800">This Quarter's Learning Goals</h3>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((goal) => (
                <div key={goal} className="border-2 border-green-200 rounded-lg p-4">
                  <div className="flex items-start mb-2">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      {goal}
                    </span>
                    <input 
                      type="text" 
                      className="flex-1 text-lg font-medium border-none outline-none bg-transparent placeholder-slate-400"
                      placeholder="Enter learning goal..."
                    />
                  </div>
                  <div className="ml-9">
                    <textarea 
                      className="w-full h-16 p-2 border border-green-200 rounded text-sm resize-none placeholder-slate-400"
                      placeholder="How will you achieve this? What resources will you use?"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Resources */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-lg">📚</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800">Learning Methods & Resources</h3>
            </div>
            
            <div className="space-y-3">
              {learningMethods.map((method, index) => (
                <div key={index} className="flex items-center p-3 bg-purple-50 rounded-lg border border-purple-100">
                  <input type="checkbox" className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 mr-3" />
                  <span className="text-lg mr-3">{method.icon}</span>
                  <span className="text-slate-700 font-medium flex-1">{method.method}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <label className="block text-slate-700 font-medium mb-2">
                Specific Resources (courses, books, mentors, etc.):
              </label>
              <textarea 
                className="w-full h-24 p-3 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                placeholder="List specific courses, books, mentors, websites, or other resources you plan to use..."
              />
            </div>
          </div>
        </div>

        {/* Progress Tracking */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-8 border border-amber-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Progress Tracking</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-amber-800 mb-4">Weekly Check-in</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <label className="block text-slate-600 mb-1">Hours spent learning this week:</label>
                  <input type="number" className="w-full p-2 border border-amber-200 rounded" />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">Key takeaway:</label>
                  <textarea className="w-full h-16 p-2 border border-amber-200 rounded resize-none text-xs" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-orange-800 mb-4">Monthly Review</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <label className="block text-slate-600 mb-1">Goals completed:</label>
                  <input type="text" className="w-full p-2 border border-orange-200 rounded" />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">Biggest challenge:</label>
                  <textarea className="w-full h-16 p-2 border border-orange-200 rounded resize-none text-xs" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-red-800 mb-4">Quarterly Assessment</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <label className="block text-slate-600 mb-1">Skills improved:</label>
                  <input type="text" className="w-full p-2 border border-red-200 rounded" />
                </div>
                <div>
                  <label className="block text-slate-600 mb-1">Next focus area:</label>
                  <textarea className="w-full h-16 p-2 border border-red-200 rounded resize-none text-xs" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Career Development Plan */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-white/50">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Long-term Career Development Plan</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1Y</span>
              </div>
              <h4 className="font-bold text-slate-800 mb-4">1 Year Vision</h4>
              <textarea 
                className="w-full h-32 p-4 border-2 border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-slate-700 placeholder-slate-400 text-sm"
                placeholder="Where do you see your skills and career in 1 year? What specific competencies will you have developed?"
              />
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3Y</span>
              </div>
              <h4 className="font-bold text-slate-800 mb-4">3 Year Vision</h4>
              <textarea 
                className="w-full h-32 p-4 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-slate-700 placeholder-slate-400 text-sm"
                placeholder="What leadership roles or expertise areas will you have developed? How will you be recognized in the industry?"
              />
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">5Y</span>
              </div>
              <h4 className="font-bold text-slate-800 mb-4">5 Year Vision</h4>
              <textarea 
                className="w-full h-32 p-4 border-2 border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-slate-700 placeholder-slate-400 text-sm"
                placeholder="What mastery level will you have achieved? How will you be contributing to the industry and mentoring others?"
              />
            </div>
          </div>
        </div>

        {/* Action Commitment */}
        <div className="mt-8 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-2xl p-8 text-center">
          <h4 className="text-xl font-semibold mb-4">My Professional Development Commitment</h4>
          <textarea 
            className="w-full h-24 p-4 border-2 border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 resize-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
            placeholder="I commit to developing my skills by... I will invest time and energy in... My professional growth matters because..."
          />
        </div>
        
      </div>
    </div>
  );
}