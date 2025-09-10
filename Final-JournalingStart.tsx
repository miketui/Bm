export default function FinalJournalingStartPage() {
  const journalActivities = [
    {
      number: 1,
      title: "Manifesting Journal",
      description: "Transform dreams into reality through focused intention and visualization."
    },
    {
      number: 2,
      title: "SMART Goals Worksheet", 
      description: "Structure your ambitions with specific, measurable, achievable goals."
    },
    {
      number: 3,
      title: "Professional Development",
      description: "Chart your career path and identify growth opportunities."
    },
    {
      number: 4,
      title: "Self-Care Planning",
      description: "Design sustainable practices that nurture your well-being."
    },
    {
      number: 5,
      title: "Vision Journal",
      description: "Clarify your long-term vision and align daily actions with purpose."
    },
    {
      number: 6,
      title: "Creative Expression",
      description: "Explore ideas through doodling, sketching, and free writing."
    }
  ];

  const journalingTips = [
    { icon: "📝", title: "Be Honest", description: "These exercises work best when you're completely truthful with yourself." },
    { icon: "🎯", title: "Take Your Time", description: "Don't rush. Deep reflection requires patience and space." },
    { icon: "💡", title: "Revisit Often", description: "Your answers may evolve. Return to these pages as you grow." },
    { icon: "✨", title: "Trust the Process", description: "Transformation happens one insight at a time." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                INTERACTIVE JOURNALING GUIDE
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-white/50">
          <p className="text-slate-700 leading-relaxed text-center text-lg">
            Welcome to your personal transformation toolkit! This collection of interactive worksheets is designed to guide you through deep self-reflection, goal setting, and professional growth. Each page is a stepping stone on your journey to becoming the stylist—and person—you're meant to be.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 overflow-hidden">
          
          {/* Decorative header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 text-center">
            <div className="inline-block w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">✍️</span>
            </div>
            <h2 className="text-2xl font-semibold">Your Journey Ahead</h2>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            
            {/* Journey Activities */}
            <div className="space-y-6">
              {journalActivities.map((activity, index) => (
                <div key={index} className="flex items-start p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-white font-bold text-lg">{activity.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{activity.title}</h3>
                    <p className="text-slate-700 leading-relaxed">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* How to Use These Tools Section */}
            <div className="mt-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">How to Use These Tools</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {journalingTips.map((tip, index) => (
                  <div key={index} className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-white text-lg">{tip.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800 mb-2">{tip.title}:</h4>
                        <p className="text-slate-700 leading-relaxed">{tip.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Message */}
            <div className="mt-10 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200 text-center">
              <p className="text-lg italic text-slate-800 leading-relaxed">
                Your greatest masterpiece isn't just the hair you style—it's the life you create for yourself. Let's begin this beautiful work together.
              </p>
            </div>

          </div>
        </div>

        {/* Getting Started CTA */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-8 shadow-xl">
            <h4 className="text-xl font-semibold mb-4">Ready to Begin Your Journaling Journey?</h4>
            <p className="text-lg leading-relaxed opacity-95 mb-6">
              Take the first step toward deeper self-awareness and intentional growth through the power of reflective writing.
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