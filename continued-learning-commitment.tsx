export default function ContinuedLearningCommitment() {
  const commitmentAreas = [
    {
      title: "Technical Skill Development",
      icon: "✂️",
      commitments: [
        "Attend at least 2 advanced education workshops or classes per year",
        "Practice new techniques regularly, dedicating time for skill refinement",
        "Stay current with industry trends and emerging cutting/styling methods",
        "Seek feedback from mentors and peers to continuously improve my craft"
      ]
    },
    {
      title: "Business & Entrepreneurial Growth",
      icon: "📈",
      commitments: [
        "Read at least 1 business or personal development book per quarter",
        "Attend industry conferences or networking events annually",
        "Review and update my business plan and goals every 6 months",
        "Invest in tools, software, or resources that enhance my practice"
      ]
    },
    {
      title: "Creative & Artistic Expansion",
      icon: "🎨",
      commitments: [
        "Experiment with new creative techniques and artistic expressions",
        "Document my work through photography to track my artistic evolution",
        "Collaborate with other artists and creatives for inspiration",
        "Maintain a creative journal or inspiration board for ongoing ideas"
      ]
    },
    {
      title: "Personal Well-being & Mindfulness",
      icon: "🧘‍♀️",
      commitments: [
        "Prioritize self-care practices that support my physical and mental health",
        "Maintain work-life balance to prevent burnout and sustain creativity",
        "Practice mindfulness and reflection to stay connected to my purpose",
        "Seek support when needed and maintain healthy professional relationships"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-pink-500/10"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4">
                CONTINUED LEARNING COMMITMENT
              </h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                A formal pledge to yourself for ongoing growth and excellence
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Commitment Preamble */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-indigo-100">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">My Pledge to Continuous Growth</h2>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p className="text-justify leading-relaxed">
                I, <span className="border-b-2 border-indigo-200 px-2 py-1 mx-2 bg-indigo-50">_______________________</span>, 
                understand that mastery in hairstyling is not a destination but a lifelong journey. 
                I commit to being a conscious learner, continuously expanding my skills, knowledge, 
                and artistic vision. This commitment represents my dedication to excellence, growth, 
                and service to my clients and community.
              </p>
            </div>
          </div>
        </div>

        {/* Commitment Areas */}
        <div className="space-y-6">
          {commitmentAreas.map((area, areaIndex) => (
            <div key={areaIndex} className="bg-white rounded-2xl shadow-lg border border-white/50 overflow-hidden">
              
              {/* Area Header */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6">
                <h3 className="text-xl font-bold flex items-center">
                  <span className="text-2xl mr-3">{area.icon}</span>
                  {area.title}
                </h3>
              </div>
              
              {/* Commitments */}
              <div className="p-6 space-y-4">
                {area.commitments.map((commitment, commitmentIndex) => (
                  <div key={commitmentIndex} className="flex items-start group">
                    <div className="flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full mr-4 mt-1 group-hover:bg-indigo-200 transition-colors">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 text-indigo-600 border-indigo-300 rounded focus:ring-indigo-500" 
                      />
                    </div>
                    <label className="text-slate-700 leading-relaxed cursor-pointer group-hover:text-slate-900 transition-colors">
                      {commitment}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Personal Commitments */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
          <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Additional Personal Commitments</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Specific skills or areas I want to develop this year:
              </label>
              <textarea 
                className="w-full h-24 p-4 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400"
                placeholder="E.g., advanced color theory, business marketing, specific cutting techniques..."
              />
            </div>
            
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Learning resources I will utilize (books, courses, mentors):
              </label>
              <textarea 
                className="w-full h-24 p-4 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400"
                placeholder="List specific books, online courses, workshops, or mentors you plan to engage with..."
              />
            </div>
            
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                How I will measure my progress:
              </label>
              <textarea 
                className="w-full h-24 p-4 border-2 border-purple-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none text-slate-700 placeholder-slate-400"
                placeholder="Define specific metrics, milestones, or feedback mechanisms..."
              />
            </div>
          </div>
        </div>

        {/* Accountability Section */}
        <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Accountability Partners</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Professional Mentor/Accountability Partner:
              </label>
              <input 
                type="text" 
                className="w-full p-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="Name and contact information"
              />
            </div>
            
            <div>
              <label className="block text-slate-700 font-medium mb-2">
                Check-in Schedule:
              </label>
              <select className="w-full p-3 border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200">
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Bi-annually</option>
                <option>Annually</option>
              </select>
            </div>
          </div>
        </div>

        {/* Signature Section */}
        <div className="mt-8 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-6 text-center">Official Commitment</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white/90 font-medium mb-2">Your Signature:</label>
              <div className="border-b-2 border-white/50 pb-2 h-12"></div>
            </div>
            
            <div>
              <label className="block text-white/90 font-medium mb-2">Date:</label>
              <input 
                type="date" 
                className="w-full p-3 border-2 border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200"
              />
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-white/90 text-sm leading-relaxed">
              By signing above, I commit to this learning journey and promise to review and update 
              this commitment annually. I understand that my growth benefits not only myself but 
              also my clients and the broader beauty community.
            </p>
          </div>
        </div>

        {/* Reminder Section */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-center justify-center mb-3">
              <span className="text-2xl mr-2">⏰</span>
              <h4 className="text-lg font-semibold text-amber-800">Annual Review Reminder</h4>
            </div>
            <p className="text-amber-700 text-sm">
              Set a calendar reminder to review and update this commitment on: 
              <span className="border-b border-amber-400 mx-2 px-2">____________</span>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}