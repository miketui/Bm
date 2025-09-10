export default function FinalSelfAssessmentPage() {
  const reflectionQuestions = [
    {
      number: 1,
      question: "Reflecting on your journey through these chapters, what new insights or strategies have you discovered that will help you advance your skills and well-being as a hairstylist?"
    },
    {
      number: 2,
      question: "How has your understanding of leadership and mentorship in the hairstyling industry evolved, and what steps will you take to inspire and uplift others?"
    },
    {
      number: 3,
      question: "Which self-care practices or wellness strategies discussed in the chapters resonated with you the most, and how do you plan to integrate them into your daily routine?"
    },
    {
      number: 4,
      question: "How has your perspective on continuous education and skill development changed, and what specific actions will you take to keep growing professionally?"
    },
    {
      number: 5,
      question: "In what ways do you feel more empowered to make a positive impact on your clients, community, and the hairstyling industry as a whole?"
    },
    {
      number: 6,
      question: "Looking back at your initial goals when you began this book, which ones have you made progress toward? What new goals have emerged?"
    }
  ];

  const confidenceAreas = [
    "Technical hairstyling skills",
    "Business and entrepreneurial mindset",
    "Self-care and personal wellness", 
    "Client communication and relationship building",
    "Creative expression and artistic vision"
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
                POST-READING REFLECTION QUESTIONS
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border border-purple-100">
          <div className="text-center">
            <p className="text-slate-700 leading-relaxed">
              Now that you've completed your journey through <em>Curls & Contemplation</em>, take some time to reflect deeply on what you've learned and how you'll integrate these insights into your professional practice and personal growth. These thought-provoking questions will help you solidify your learning and create an actionable path forward.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 overflow-hidden">
          
          {/* Decorative header */}
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-8 text-center">
            <div className="inline-block w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h2 className="text-2xl font-semibold">Deep Reflection Worksheet</h2>
          </div>

          {/* Reflection Questions */}
          <div className="p-8 md:p-12 space-y-8">
            {reflectionQuestions.map((item, index) => (
              <div key={index} className="border border-purple-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold">{item.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 leading-relaxed">
                      {item.question}
                    </h3>
                  </div>
                </div>
                <div className="ml-14">
                  <div className="h-24 border-2 border-purple-100 rounded-lg bg-purple-50/30 p-3">
                    <div className="text-purple-400 text-sm italic">
                      Reflection space for your thoughts and insights...
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Confidence Rating Section */}
            <div className="border border-purple-100 rounded-xl p-6 bg-gradient-to-r from-purple-50 to-blue-50">
              <div className="flex items-start mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">7</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800 leading-relaxed mb-4">
                    On a scale of 1 to 5, how would you rate your confidence in these areas?
                  </h3>
                  
                  <div className="space-y-4">
                    {confidenceAreas.map((area, areaIndex) => (
                      <div key={areaIndex} className="bg-white rounded-lg p-4 border border-purple-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-slate-700">{area}</span>
                          <div className="text-sm text-slate-500">Low to High Confidence</div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex space-x-4">
                            {[1, 2, 3, 4, 5].map((num) => (
                              <div key={num} className="flex flex-col items-center">
                                <div className="w-8 h-8 border-2 border-purple-300 rounded-full flex items-center justify-center text-purple-600 font-bold text-sm">
                                  {num}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Final Commitment */}
            <div className="border border-purple-100 rounded-xl p-6">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white font-bold">8</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800 leading-relaxed">
                    What is your personal commitment statement as you move forward in your hairstyling journey?
                  </h3>
                </div>
              </div>
              <div className="ml-14">
                <div className="h-32 border-2 border-purple-100 rounded-lg bg-purple-50/30 p-3">
                  <div className="text-purple-400 text-sm italic">
                    Write your commitment to your continued growth and excellence...
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl p-6 shadow-xl">
            <p className="text-lg leading-relaxed opacity-95 italic">
              "The journey of transformation begins with honest reflection and bold commitment to growth."
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}