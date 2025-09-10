export default function FinalQuizKeyPage() {
  const chaptersColumn1 = [
    { chapter: "Chapter 1: Unveiling Your Creative Odyssey", answers: ["1.C", "2.C", "3.B", "4.C"] },
    { chapter: "Chapter 2: Refining Your Creative Toolkit", answers: ["1.C", "2.B", "3.B", "4.C"] },
    { chapter: "Chapter 3: Reigniting Your Creative Fire", answers: ["1.B", "2.A", "3.C", "4.B"] },
    { chapter: "Chapter 4: The Art of Networking", answers: ["1.B", "2.C", "3.B", "4.B"] },
    { chapter: "Chapter 5: Mentorship", answers: ["1.B", "2.C", "3.B", "4.B"] },
    { chapter: "Chapter 6: Mastering the Business", answers: ["1.B", "2.C", "3.B", "4.A"] },
    { chapter: "Chapter 7: Wellness and Self-Care", answers: ["1.C", "2.C", "3.C", "4.B"] },
    { chapter: "Chapter 8: Continuous Education", answers: ["1.D", "2.C", "3.B", "4.C"] }
  ];

  const chaptersColumn2 = [
    { chapter: "Chapter 9: Stepping Into Leadership", answers: ["1.B", "2.C", "3.C", "4.B"] },
    { chapter: "Chapter 10: Crafting Enduring Legacies", answers: ["1.B", "2.C", "3.C", "4.C"] },
    { chapter: "Chapter 11: Advanced Digital Strategies", answers: ["1.B", "2.C", "3.B", "4.C"] },
    { chapter: "Chapter 12: Financial Wisdom", answers: ["1.B", "2.C", "3.B", "4.C"] },
    { chapter: "Chapter 13: Ethics and Sustainability", answers: ["1.A", "2.B", "3.B", "4.B"] },
    { chapter: "Chapter 14: The Impact of AI", answers: ["1.C", "2.B", "3.C", "4.C"] },
    { chapter: "Chapter 15: Resilience and Well-Being", answers: ["1.B", "2.A", "3.A", "4.B"] },
    { chapter: "Chapter 16: Tresses and Textures", answers: ["1.C", "2.C", "3.B", "4.C"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border border-green-100">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">
              QUIZ ANSWER KEY
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-4"></div>
          </div>
        </div>

        {/* Book Information */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-green-200">
          <div className="text-center space-y-2">
            <p className="text-slate-700"><strong>Book Title:</strong> CURLS & CONTEMPLATION</p>
            <p className="text-slate-700"><strong>Author:</strong> Michael David</p>
            <p className="text-slate-600 text-sm mt-4">
              This master key contains the correct answers for all chapter quizzes. Each chapter has 4 multiple choice questions with options A, B, C, or D.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 overflow-hidden">
          
          {/* Decorative header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-8 text-center">
            <div className="inline-block w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h2 className="text-2xl font-semibold">Complete Answer Key for All Chapters</h2>
          </div>

          {/* Two Column Layout */}
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Column 1 */}
              <div className="space-y-6">
                {chaptersColumn1.map((chapterData, index) => (
                  <div key={index} className="border border-green-100 rounded-lg p-4">
                    <h3 className="font-bold text-slate-800 mb-3 text-sm">
                      {chapterData.chapter}
                    </h3>
                    <div className="flex space-x-4">
                      {chapterData.answers.map((answer, answerIndex) => (
                        <span key={answerIndex} className="bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                          {answer}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-6">
                {chaptersColumn2.map((chapterData, index) => (
                  <div key={index} className="border border-green-100 rounded-lg p-4">
                    <h3 className="font-bold text-slate-800 mb-3 text-sm">
                      {chapterData.chapter}
                    </h3>
                    <div className="flex space-x-4">
                      {chapterData.answers.map((answer, answerIndex) => (
                        <span key={answerIndex} className="bg-green-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                          {answer}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">ℹ️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">How to Use This Answer Key</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Review your answers against the correct responses above. Each chapter contains 4 questions numbered 1-4 
                    with corresponding correct answers (A, B, C, or D). Use this as a learning tool to identify areas for 
                    further study and to reinforce key concepts from each chapter.
                  </p>
                </div>
              </div>
            </div>

            {/* Scoring Guide */}
            <div className="mt-8 bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Scoring Reference</h3>
              
              <div className="grid md:grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <h4 className="font-bold text-green-700 mb-1">Excellent</h4>
                  <p className="text-green-600 text-xs">Outstanding mastery</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">B</span>
                  </div>
                  <h4 className="font-bold text-yellow-700 mb-1">Good</h4>
                  <p className="text-yellow-600 text-xs">Solid understanding</p>
                </div>
                
                <div>
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white font-bold">C</span>
                  </div>
                  <h4 className="font-bold text-orange-700 mb-1">Review</h4>
                  <p className="text-orange-600 text-xs">Needs more study</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-white rounded-lg p-4 shadow-sm border border-slate-200">
            <p className="text-sm text-slate-600 italic">
              "Learning is a journey, not a destination. Every answer teaches us something new."
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}