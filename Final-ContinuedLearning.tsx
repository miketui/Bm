export default function FinalContinuedLearningPage() {
  const pledgeSections = [
    {
      title: "1. Prioritize Learning by:",
      items: [
        "Dedicating _____ hours each week specifically for education and skill development",
        "Attending _____ industry workshops, courses, or training events per year", 
        "Investing _____% of my annual income back into my professional development",
        "Other: _________________________________"
      ]
    },
    {
      title: "2. Seek Diverse Knowledge by:",
      items: [
        "Reading industry publications and books related to hairstyling and beauty",
        "Following master stylists and educators on social media and online platforms",
        "Learning techniques from different cultural traditions and backgrounds",
        "Exploring related disciplines such as art, fashion, photography, or business",
        "Other: _________________________________"
      ]
    },
    {
      title: "3. Surround Myself with Mentors by:",
      items: [
        "Identifying and reaching out to _____ mentors in my field within the next 3 months",
        "Scheduling regular check-ins with experienced colleagues for feedback and guidance",
        "Participating in a mastermind group or community of fellow hairstylists",
        "Other: _________________________________"
      ]
    },
    {
      title: "4. Embrace Curiosity and Feedback by:",
      items: [
        "Seeking constructive criticism on my work from trusted colleagues and mentors",
        "Implementing a system to collect and review client feedback regularly",
        "Approaching new trends and techniques with open-minded curiosity",
        "Keeping a learning journal to track my questions, insights, and growth",
        "Other: _________________________________"
      ]
    },
    {
      title: "5. Pay It Forward by:",
      items: [
        "Mentoring _____ emerging stylists or assistants within the next year",
        "Sharing valuable techniques and insights with colleagues",
        "Creating educational content to help others in the industry",
        "Contributing to industry events, competitions, or educational platforms",
        "Other: _________________________________"
      ]
    },
    {
      title: "6. Embrace the Endless Journey by:",
      items: [
        "Reviewing and updating this pledge every 6 months to reflect my evolving journey",
        "Celebrating my growth and achievements along the way",
        "Approaching each day with humility and a beginner's mindset",
        "Setting progressive learning goals that continuously challenge and inspire me",
        "Other: _________________________________"
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
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4">
                CONTINUING LEARNING PLEDGE
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg border border-indigo-100">
          <p className="text-slate-700 leading-relaxed text-center">
            The most successful hairstylists understand that excellence is not a destination, but a journey of continuous growth and evolution. This pledge represents your formal commitment to lifelong learning—a powerful promise to yourself and to those you serve that will elevate your craft, expand your possibilities, and sustain your passion throughout your career.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 overflow-hidden">
          
          {/* Decorative header */}
          <div className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white p-8 text-center">
            <div className="inline-block w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📜</span>
            </div>
            <h2 className="text-2xl font-semibold">My Formal Commitment to Excellence</h2>
          </div>

          {/* Pledge Statement */}
          <div className="p-8 md:p-12">
            <div className="mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
              <p className="text-slate-700 leading-relaxed text-center">
                As a dedicated hairstylist committed to excellence in my craft, I solemnly pledge to embrace lifelong learning as my pathway to mastery. I recognize that in our ever-evolving industry, continuous education and skill development are not optional luxuries but essential foundations for success.
              </p>
            </div>

            {/* Pledge Sections */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">I vow to:</h3>
              
              <div className="space-y-6">
                {pledgeSections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="border border-indigo-100 rounded-xl p-6">
                    <h4 className="font-bold text-indigo-800 mb-4 text-lg">{section.title}</h4>
                    <div className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start">
                          <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                            <span className="text-white text-xs font-bold">•</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-slate-700 leading-relaxed">
                              {item.includes('_____') ? (
                                <span dangerouslySetInnerHTML={{
                                  __html: item.replace(/_____/g, '<span class="border-b-2 border-indigo-200 px-2 py-1 mx-1 bg-indigo-50 inline-block min-w-16 text-center">_____</span>')
                                    .replace(/__________/g, '<span class="border-b-2 border-indigo-200 px-2 py-1 mx-1 bg-indigo-50 inline-block min-w-24 text-center">__________</span>')
                                }} />
                              ) : (
                                item
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Statement */}
            <div className="mb-8 p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200">
              <p className="text-slate-700 leading-relaxed text-center">
                Through this commitment to continuous learning and growth, I invest not only in my abilities but in the positive impact I can have on the lives of those I serve. I recognize that my evolution as a hairstylist opens new doors of opportunity and allows me to add greater value to my clients. This vow is my promise to myself and to those I serve, to continually evolve and contribute positively, one hairstyle at a time.
              </p>
            </div>

            {/* Signature Section */}
            <div className="border-t border-slate-200 pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">Signature:</label>
                  <div className="border-b-2 border-slate-300 pb-2 h-12 bg-slate-50/50"></div>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-3">Date:</label>
                  <div className="border-b-2 border-slate-300 pb-2 h-12 bg-slate-50/50"></div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-slate-600 italic">
                  By signing above, I make this formal commitment to my ongoing growth and excellence as a hairstylist.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-2xl p-6 shadow-xl">
            <p className="text-lg leading-relaxed opacity-95 italic">
              "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution; it represents the wise choice of many alternatives."
            </p>
            <p className="text-sm mt-2 opacity-80">- Aristotle</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}