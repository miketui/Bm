export default function FinalBibliographyPage() {
  const bibliographyEntries = [
    "Allen, T. D., L. T. Eby, M. L. Poteet, E. Lentz, and L. Lima. \"Career Benefits Associated with Mentoring for Protégés: A Meta‑Analysis.\" Journal of Applied Psychology, 2004. https://psycnet.apa.org/fulltext/2004-15660-007.html.",
    "Allure. \"The Secret Behind Rihanna's Iconic Hairstyles: Meet Ursula Stephen.\" Allure, April 18, 2017. https://www.allure.com/story/ursula-stephen-hairstylist-rihanna.",
    "Allure. \"Kim Kimble: Celebrating Natural Hair.\" 2018. https://www.allure.com/story/kim-kimble-interview.",
    "Allure. \"Jen Atkin: From Couch to Celebrity.\" 2019. https://www.allure.com/story/jen-atkin-profile.",
    "American Association of Cosmetology Schools. \"Innovative Training for Diverse Hair Types.\" 2019. Accessed March 8, 2025. https://www.aacs.org/initiatives/diverse-hair-training.",
    "American College of Sports Medicine. \"Benefits of Stretching and Strength Training.\" 2021. https://www.acsm.org.",
    "American Psychological Association. \"The Importance of Setting Boundaries for Mental Health.\" 2020. Accessed March 8, 2025. https://www.apa.org.",
    "American Psychological Association. \"Building Resilience: How to Bounce Back.\" 2019. Accessed March 8, 2025. https://www.apa.org/topics/resilience.",
    "American Salon. \"Career Development for Hairstylists.\" 2021. https://www.americansalon.com/career-development.",
    "American Salon. \"Jayne Matthews on Small-Group Networking.\" n.d. Accessed March 8, 2025. https://www.americansalon.com.",
    "American Salon. \"How to Prepare for a Master Portfolio Review.\" 2022. Accessed March 8, 2025. https://www.americansalon.com.",
    "Atkin, Jennifer. Blowing My Way to the Top: How to Break the Rules, Find Your Purpose, and Create the Life and Career You Deserve. New York: Harper Wave, 2020.",
    "Aveda. \"Aveda Education.\" 2023. Accessed March 8, 2025. https://www.aveda.com/education.",
    "Aveda Institutes. \"Curriculum Overview: Textured Hair and Product Science.\" 2020. Accessed March 8, 2025. https://www.avedainstitutes.edu/programs/textured-hair.",
    "Bandura, Albert. Self‑Efficacy: The Exercise of Control. New York: Worth Publishers, 1997. Accessed March 8, 2025. https://www.uky.edu/~eushe2/Bandura/Bandura1997EP.pdf."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-blue-500/10"></div>
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-700 to-blue-600 bg-clip-text text-transparent mb-4">
                BIBLIOGRAPHY
              </h1>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                Comprehensive research sources and recommended reading
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-gray-500 to-blue-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 overflow-hidden">
          
          {/* Decorative header */}
          <div className="bg-gradient-to-r from-gray-600 to-blue-600 text-white p-8 text-center">
            <div className="inline-block w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h2 className="text-2xl font-semibold">Sources & References</h2>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            
            <div className="mb-8">
              <p className="text-slate-700 leading-relaxed text-center">
                This comprehensive bibliography contains all the research sources, expert interviews, industry publications, and recommended reading materials that informed the creation of <em>Curls & Contemplation</em>. These resources provide additional depth and context for readers seeking to expand their knowledge and understanding of conscious hairstyling practices.
              </p>
            </div>

            {/* Bibliography List */}
            <div className="space-y-4">
              {bibliographyEntries.map((entry, index) => (
                <div key={index} className="flex items-start p-4 bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 bg-gradient-to-r from-gray-500 to-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-700 leading-relaxed text-sm">{entry}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Resources Note */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Continued Learning</h3>
              <p className="text-slate-700 leading-relaxed text-center">
                This bibliography represents just the beginning of your research journey. The beauty industry evolves rapidly, and staying current with new publications, research studies, and industry innovations is essential for continued growth. Consider these sources as starting points for deeper exploration of topics that resonate with your professional development goals.
              </p>
            </div>

            {/* Academic Note */}
            <div className="mt-8 bg-amber-50 rounded-lg p-6 border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Research Standards</h4>
              <p className="text-amber-700 text-sm leading-relaxed">
                All sources have been carefully selected for their credibility, relevance, and contribution to the advancement of professional hairstyling practices. URLs were accessible as of publication date and may require updated access methods for continued availability.
              </p>
            </div>

          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-gray-600 to-blue-600 text-white rounded-2xl p-6 shadow-xl">
            <p className="text-lg leading-relaxed opacity-95 italic">
              "The more that you read, the more things you will know. 
              The more that you learn, the more places you'll go."
            </p>
            <p className="text-sm mt-2 opacity-80">- Dr. Seuss</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}