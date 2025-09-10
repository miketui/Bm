export default function FinalAffirmationsClosePage() {
  const sampleAffirmations = [
    "I am a visionary hairstylist who transforms not just appearances, but experiences.",
    "I honor the unique beauty in every client and bring it to life through my artistry.",
    "My hands create with confidence, skill, and an ever-evolving mastery.",
    "I embrace continuous learning as the pathway to limitless creative expression.",
    "My well-being is essential—I nurture myself so I can fully show up for others.",
    "I deserve prosperity and abundance through my authentic creative offerings.",
    "I am resilient in the face of challenges, seeing them as opportunities for growth."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-orange-500/10 to-amber-500/10"></div>
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 bg-clip-text text-transparent mb-4">
                FINAL AFFIRMATION WORKSHEET
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-rose-500 to-amber-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-lg border border-orange-100">
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              As you stand at this significant milestone in your creative journey, it's time to weave the essence of your discoveries into a unique, powerful affirmation. This is more than just a collection of words—it's a personal manifesto that captures the core of your inner wisdom and professional identity.
            </p>
            <p>
              The power of affirmations lies in their ability to rewire our thought patterns and beliefs. When crafted with intention and repeated regularly, they can transform how we see ourselves and our creative potential. This final affirmation will serve as both a celebration of your journey and a compass for your continued growth.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 overflow-hidden">
          
          {/* Decorative header */}
          <div className="bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 text-white p-8 text-center">
            <div className="inline-block w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h2 className="text-2xl font-semibold">Craft Your Personal Affirmation</h2>
          </div>

          {/* Sample Affirmations */}
          <div className="p-8 md:p-12">
            <div className="mb-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Sample Affirmations for Inspiration</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-amber-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-3">
                {sampleAffirmations.map((affirmation, index) => (
                  <div key={index} className="flex items-start p-4 bg-gradient-to-r from-rose-50 to-amber-50 rounded-xl border border-orange-100">
                    <div className="w-6 h-6 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-xs font-bold">•</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {affirmation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reflection Prompt */}
            <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
              <p className="text-slate-700 leading-relaxed">
                Reflect on your journey through this book, the insights you've gained, and the self-awareness you've cultivated. Consider the transformations you've experienced and the vision you hold for your future as a creative professional. Now, craft your personal 12-line affirmation below, making each line a powerful declaration of who you are becoming.
              </p>
            </div>

            {/* 12-Line Affirmation Section */}
            <div className="mb-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Your Complete 12-Line Affirmation</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-amber-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                {Array.from({ length: 12 }, (_, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 h-12 border-2 border-orange-200 rounded-lg bg-orange-50/30 p-3">
                      <div className="text-orange-400 text-sm italic">
                        Write your powerful affirmation line here...
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Guidelines */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Making Your Affirmation a Practice</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">•</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-1">Morning ritual:</h4>
                    <p className="text-green-700 text-sm">Read your affirmation aloud each morning as you begin your day, allowing the words to set your intention.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">•</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-1">Visual reminder:</h4>
                    <p className="text-green-700 text-sm">Consider writing your affirmation on beautiful paper and placing it in your workspace where you'll see it regularly.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">•</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-1">Embodiment:</h4>
                    <p className="text-green-700 text-sm">As you recite each line, visualize yourself already embodying these qualities and living these truths.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">•</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-1">Evolution:</h4>
                    <p className="text-green-700 text-sm">Revisit your affirmation every few months and refine it as you continue to grow and evolve in your creative practice.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">•</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-800 mb-1">Voice recording:</h4>
                    <p className="text-green-700 text-sm">Record yourself speaking your affirmation with conviction and listen to it during moments when you need inspiration or confidence.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Closing Message */}
        <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
          <p className="text-slate-700 leading-relaxed text-center italic text-lg">
            This affirmation is more than words; it's a crafted symbol of your path, a guiding light for your future. As you articulate each line, let the vibration of the words resonate deeply, affirming your capabilities, dreams, and the evolving artist you are becoming. Your words have power—use them to create the reality you envision.
          </p>
        </div>
        
      </div>
    </div>
  );
}