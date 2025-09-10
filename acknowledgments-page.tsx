export default function AcknowledgmentsPage() {
  const acknowledgmentSections = [
    {
      title: "My Mentors & Teachers",
      icon: "🏆",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      people: [
        { name: "Yusef Williams", role: "Master Stylist & Creative Director", contribution: "Who taught me that technique without soul is merely mechanics" },
        { name: "Naeemah Lafond", role: "Industry Pioneer & Advocate", contribution: "Who showed me that our work is cultural preservation and celebration" },
        { name: "Vernon François", role: "Celebrity Stylist & Entrepreneur", contribution: "Who opened my eyes to the global language of natural hair artistry" }
      ]
    },
    {
      title: "My Creative Community",
      icon: "✨",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      people: [
        { name: "The Curls & Contemplation Beta Readers", role: "Fellow Stylists", contribution: "Who provided invaluable feedback during the writing process" },
        { name: "My Photography Team", role: "Visual Storytellers", contribution: "Who helped capture the essence of transformation in images" },
        { name: "The Social Media Community", role: "Digital Family", contribution: "Who shared their stories and inspired countless chapters" }
      ]
    },
    {
      title: "My Professional Network",
      icon: "🤝",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      people: [
        { name: "Industry Colleagues", role: "Fellow Entrepreneurs", contribution: "Who generously shared their wisdom and business insights" },
        { name: "Conference Organizers", role: "Platform Providers", contribution: "Who created spaces for learning and connection" },
        { name: "Brand Partners", role: "Innovation Supporters", contribution: "Who believed in my vision and supported this journey" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🙏</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                ACKNOWLEDGMENTS
              </h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                With deep gratitude to all who made this journey possible
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Opening Message */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-slate-200">
          <div className="prose prose-lg max-w-none text-slate-700">
            <div className="float-left text-7xl font-serif text-blue-500 leading-none mr-4 mt-2">T</div>
            <p className="leading-relaxed text-justify">
              hey say it takes a village to raise a child, but I've learned it takes an entire ecosystem 
              to birth a book. <em>Curls & Contemplation</em> exists because of the countless individuals 
              who believed in this vision, shared their wisdom, and supported this labor of love. 
              This work is as much yours as it is mine.
            </p>
            
            <p className="leading-relaxed text-justify mt-6">
              To every stylist who has ever felt the call to grow beyond the chair, every mentor who 
              has generously shared their knowledge, and every client who has trusted me with their 
              transformation—your fingerprints are on every page of this book.
            </p>
          </div>
        </div>

        {/* Acknowledgment Sections */}
        <div className="space-y-8">
          {acknowledgmentSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-2xl shadow-lg border border-white/50 overflow-hidden">
              
              {/* Section Header */}
              <div className={`bg-gradient-to-r ${section.color} text-white p-6`}>
                <h2 className="text-2xl font-bold flex items-center justify-center">
                  <span className="text-3xl mr-3">{section.icon}</span>
                  {section.title}
                </h2>
              </div>
              
              {/* People */}
              <div className={`bg-gradient-to-br ${section.bgColor} p-6 space-y-6`}>
                {section.people.map((person, personIndex) => (
                  <div key={personIndex} className="bg-white/80 rounded-xl p-6 shadow-sm border border-white/50">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-white font-bold text-lg">
                          {person.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-800 mb-1">{person.name}</h3>
                        <p className="text-sm font-medium text-slate-600 mb-3">{person.role}</p>
                        <p className="text-slate-700 leading-relaxed italic">"{person.contribution}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Thanks */}
        <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Special Recognition</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💝</span>
              </div>
              <h4 className="font-bold text-amber-800 mb-3">My Family</h4>
              <p className="text-amber-700 text-sm leading-relaxed">
                To my family who understood the late nights, the scattered notes everywhere, 
                and the passionate conversations about curl patterns over dinner. Your patience 
                and support gave me the foundation to dream bigger.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h4 className="font-bold text-rose-800 mb-3">My Clients</h4>
              <p className="text-rose-700 text-sm leading-relaxed">
                To every person who has sat in my chair and shared their story. You taught me 
                that hairstyling is about so much more than hair—it's about confidence, 
                identity, and transformation. You are my greatest teachers.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Message */}
        <div className="mt-8 bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">A Personal Thank You</h3>
          
          <div className="prose prose-lg max-w-none text-slate-700 text-center">
            <p className="leading-relaxed italic">
              "If I have seen further, it is by standing on the shoulders of giants." - Newton
            </p>
            
            <p className="leading-relaxed mt-6">
              This book exists because of the giants who lifted me up, the peers who walked alongside me, 
              and the community that continues to inspire me daily. To anyone I may have inadvertently 
              missed in these acknowledgments, please know that your contribution matters and is deeply appreciated.
            </p>
          </div>
        </div>

        {/* Final Note */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-6 shadow-lg">
            <h4 className="text-lg font-semibold mb-3">To You, The Reader</h4>
            <p className="leading-relaxed opacity-95">
              And finally, to you who hold this book—thank you for trusting me with your time, 
              your dreams, and your journey. May you find the courage to step beyond the chair 
              and into the fullness of your artistic potential.
            </p>
            <div className="mt-4 flex justify-center">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
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