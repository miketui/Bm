export default function QuizKeyPage() {
  const quizSections = [
    {
      title: "Chapter 1-4: Foundation Knowledge",
      questions: [
        { number: 1, answer: "B", explanation: "Proper consultation builds trust and ensures client satisfaction" },
        { number: 2, answer: "A", explanation: "Understanding curl patterns is essential for appropriate product selection" },
        { number: 3, answer: "C", explanation: "Continuous education keeps skills current with industry trends" },
        { number: 4, answer: "B", explanation: "Client communication prevents misunderstandings and builds relationships" }
      ]
    },
    {
      title: "Chapter 5-8: Business Development",
      questions: [
        { number: 5, answer: "A", explanation: "Social media presence is crucial for modern hairstylist marketing" },
        { number: 6, answer: "C", explanation: "Pricing should reflect skill level, experience, and market positioning" },
        { number: 7, answer: "B", explanation: "Professional networking opens doors to new opportunities" },
        { number: 8, answer: "A", explanation: "Time management directly impacts client satisfaction and profitability" }
      ]
    },
    {
      title: "Chapter 9-12: Advanced Strategies",
      questions: [
        { number: 9, answer: "C", explanation: "Leadership skills are essential for career advancement" },
        { number: 10, answer: "B", explanation: "Digital presence expands reach beyond physical location" },
        { number: 11, answer: "A", explanation: "Financial planning ensures long-term business sustainability" },
        { number: 12, answer: "C", explanation: "Ethical practices build lasting client relationships and reputation" }
      ]
    }
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
            <p className="text-green-600 text-lg font-medium">
              Complete Solutions & Explanations
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full mt-4"></div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-green-200">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
              <span className="text-white text-sm font-bold">ℹ️</span>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">How to Use This Answer Key</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Review your answers against the correct responses below. Each answer includes an explanation 
                to help reinforce key concepts from the chapters. Use this as a learning tool to deepen your understanding.
              </p>
            </div>
          </div>
        </div>

        {/* Quiz Sections */}
        <div className="space-y-8">
          {quizSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-2xl shadow-lg border border-white/50 overflow-hidden">
              
              {/* Section Header */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">{sectionIndex + 1}</span>
                  </div>
                  <h2 className="text-xl font-bold">{section.title}</h2>
                </div>
              </div>
              
              {/* Questions Grid */}
              <div className="p-6 grid md:grid-cols-2 gap-6">
                {section.questions.map((question, questionIndex) => (
                  <div key={questionIndex} className="border border-green-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                    
                    {/* Question Number and Answer */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-100 text-green-700 rounded-full flex items-center justify-center mr-3 font-bold">
                          {question.number}
                        </div>
                        <span className="text-slate-700 font-medium">Question {question.number}</span>
                      </div>
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full font-bold">
                        {question.answer}
                      </div>
                    </div>
                    
                    {/* Explanation */}
                    <div className="bg-green-50 rounded-lg p-3 border-l-4 border-green-400">
                      <p className="text-green-800 text-sm leading-relaxed">
                        <strong>Explanation:</strong> {question.explanation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scoring Guide */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Scoring Guide</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">A</span>
              </div>
              <h4 className="font-bold text-green-700 mb-2">Excellent (10-12 correct)</h4>
              <p className="text-green-600 text-sm">Outstanding mastery of the material. You're ready to implement these concepts!</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">B</span>
              </div>
              <h4 className="font-bold text-yellow-700 mb-2">Good (7-9 correct)</h4>
              <p className="text-yellow-600 text-sm">Solid understanding. Review the explanations for missed questions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">C</span>
              </div>
              <h4 className="font-bold text-orange-700 mb-2">Review (0-6 correct)</h4>
              <p className="text-orange-600 text-sm">Revisit the chapters and take the quiz again after studying.</p>
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