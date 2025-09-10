export default function AboutAuthorPage() {
  const achievements = [
    { icon: "🏆", title: "15+ Years", subtitle: "Professional Experience" },
    { icon: "✨", title: "1000+", subtitle: "Clients Transformed" },
    { icon: "🎓", title: "50+", subtitle: "Educational Workshops" },
    { icon: "📸", title: "Featured", subtitle: "Fashion & Beauty Magazines" }
  ];

  const milestones = [
    { year: "2008", event: "Began professional hairstyling career in Los Angeles" },
    { year: "2012", event: "Specialized in natural hair and textured styling techniques" },
    { year: "2016", event: "Launched independent practice and mentorship programs" },
    { year: "2020", event: "Expanded into digital education and content creation" },
    { year: "2024", event: "Published 'Curls & Contemplation' to global acclaim" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-rose-500/10"></div>
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent mb-4">
                ABOUT THE AUTHOR
              </h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Meet the visionary behind Curls & Contemplation
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Main Bio Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Author Image & Basic Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-white/50 text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-amber-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-4xl font-bold">MD</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Michael David</h2>
              <p className="text-slate-600 mb-4">Master Stylist, Entrepreneur & Educator</p>
              <div className="text-sm text-slate-500">
                <p>📍 Los Angeles, California</p>
                <p>📧 hello@michaeldavidstudio.com</p>
                <p>🌐 www.michaeldavidstudio.com</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-orange-100 text-center">
                  <div className="text-2xl mb-2">{achievement.icon}</div>
                  <div className="text-lg font-bold text-slate-800">{achievement.title}</div>
                  <div className="text-xs text-slate-600">{achievement.subtitle}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bio Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-white/50">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">The Journey Behind the Artist</h3>
              
              <div className="prose prose-lg max-w-none text-slate-700 space-y-4">
                <p className="leading-relaxed">
                  <span className="float-left text-6xl font-serif text-amber-500 leading-none mr-3 mt-1">M</span>
                  ichael David's journey into the world of hairstyling began not with scissors and combs, 
                  but with a profound fascination for transformation. Growing up in a diverse Los Angeles 
                  neighborhood, he witnessed firsthand how a great hairstyle could change not just someone's 
                  appearance, but their entire demeanor and confidence.
                </p>
                
                <p className="leading-relaxed">
                  What started as a creative outlet quickly evolved into a calling. Michael discovered that 
                  his true gift wasn't just in cutting and styling hair, but in understanding the deeper 
                  story each client brought to his chair. This insight would later become the foundation 
                  of his "conscious hairstyling" philosophy—the belief that great hair artistry transcends 
                  technique to become a form of healing and empowerment.
                </p>
                
                <p className="leading-relaxed">
                  After building a successful traditional salon practice, Michael felt the familiar stirring 
                  that many artists experience—the need to expand beyond conventional boundaries. This led 
                  to his pioneering work in freelance hairstyling, digital education, and mentorship programs 
                  that have influenced stylists worldwide.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
              <h4 className="text-xl font-bold text-amber-800 mb-4">Michael's Philosophy</h4>
              <blockquote className="text-amber-700 italic text-lg leading-relaxed">
                "Every head of hair tells a story, and every stylist has the opportunity to be part of 
                that narrative. When we approach our craft with consciousness, intention, and artistry, 
                we don't just change hair—we participate in human transformation."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-white/50 mb-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Professional Milestones</h3>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400 to-rose-500"></div>
            
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-sm relative z-10">
                    {index + 1}
                  </div>
                  <div className="ml-6 flex-1">
                    <div className="bg-slate-50 rounded-lg p-4 shadow-sm">
                      <div className="font-bold text-amber-700 text-lg">{milestone.year}</div>
                      <div className="text-slate-700">{milestone.event}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Focus */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h4 className="text-xl font-bold text-slate-800">Current Focus</h4>
            </div>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">→</span>
                Expanding digital education platforms for stylists worldwide
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">→</span>
                Developing sustainable and ethical beauty practices
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">→</span>
                Mentoring the next generation of conscious hairstylists
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">→</span>
                Building community through the Curls & Contemplation collective
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-white/50">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl">💡</span>
              </div>
              <h4 className="text-xl font-bold text-slate-800">Core Beliefs</h4>
            </div>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                Artistry and business acumen can coexist beautifully
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                Every stylist deserves to build their dream practice
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                Continuous learning is the key to lasting success
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                Community and collaboration accelerate growth
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Connect with Michael</h3>
          <p className="text-lg leading-relaxed opacity-95 mb-6">
            Join thousands of stylists worldwide who are transforming their practice through 
            conscious artistry and intentional business building.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/20 rounded-lg p-4 hover:bg-white/30 transition-colors cursor-pointer">
              <div className="text-2xl mb-2">📚</div>
              <div className="font-semibold">Online Courses</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4 hover:bg-white/30 transition-colors cursor-pointer">
              <div className="text-2xl mb-2">👥</div>
              <div className="font-semibold">Mentorship</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4 hover:bg-white/30 transition-colors cursor-pointer">
              <div className="text-2xl mb-2">🌟</div>
              <div className="font-semibold">Speaking</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}