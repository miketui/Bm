export default function FinalManifestingJournalPage() {
  const manifestationPillars = [
    {
      title: "1. Clarity",
      description: "Define your desires with precision. Vague wishes produce vague results, while detailed visions create detailed outcomes. When you can see, feel, hear, and sense your goal with vivid specificity, you've created a blueprint for manifestation."
    },
    {
      title: "2. Belief", 
      description: "Cultivate unwavering faith in both the possibility and your worthiness of your desires. Doubt creates resistance; confidence creates flow. Your mind must accept your vision as an eventual reality before your external world can reflect it."
    },
    {
      title: "3. Aligned Action",
      description: "Take consistent steps that harmonize with your vision. Manifestation isn't passive wishing—it's co-creation through inspired movement. When your actions align with your intentions, you become a powerful conduit for manifestation."
    }
  ];

  const journalSections = [
    {
      title: "Gratitude Alignment",
      description: "Begin by acknowledging what you already appreciate in your hairstyling practice. Gratitude connects you to abundance and primes your energy for receiving more.",
      prompt: "I am grateful for:",
      type: "single"
    },
    {
      title: "Milestones on Your Path",
      description: "Describe 3 specific scenarios that represent milestones on your path to manifesting your hairstyling dreams. Envision them happening and feel the positive emotions they evoke. Be as detailed and sensory as possible.",
      prompts: [
        "Milestone 1: Near Future (1-3 months)",
        "Milestone 2: Mid-Term (6-12 months)", 
        "Milestone 3: Long-Term Vision (1-3 years)"
      ],
      type: "multiple"
    },
    {
      title: "Your Ideal Future",
      description: "Close your eyes and imagine your ideal future as a hairstylist. What does success look and feel like to you? Describe your vision in vivid detail, engaging all your senses.",
      type: "single"
    },
    {
      title: "Positive Affirmations", 
      description: "Write 3 positive affirmations that align with your hairstyling vision. Craft them in present tense, as if they are already true. Repeat them to yourself daily to reinforce a mindset of growth and opportunity.",
      prompts: [
        "Affirmation 1: Professional Identity",
        "Affirmation 2: Creative Expression",
        "Affirmation 3: Abundance and Impact"
      ],
      type: "multiple"
    },
    {
      title: "Aligned Actions",
      description: "Identify specific steps you can take today that move you toward your vision. Choose actions that feel energizing and inspired rather than forced.",
      type: "single"
    },
    {
      title: "Evidence and Synchronicities",
      description: "Record any signs, coincidences, or progress indicators that suggest your manifestation is underway. Recognizing evidence reinforces your belief and accelerates the manifestation process.",
      type: "single"
    },
    {
      title: "Releasing Blocks",
      description: "Identify any limiting beliefs, fears, or doubts that may be hindering your manifestation. Write them down, then consciously release them by writing a new, empowering perspective for each.",
      prompts: [
        "Limiting Belief 1:",
        "New Perspective 1:",
        "Limiting Belief 2:", 
        "New Perspective 2:"
      ],
      type: "multiple"
    },
    {
      title: "Daily Reflection",
      description: "End your manifestation practice with a moment of reflection. How did this journaling session shift your energy or perspective? What insights emerged?",
      type: "single"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 p-6 md:p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-indigo-500/10"></div>
            <div className="relative">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                MANIFESTING JOURNAL
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-white/50">
          <p className="text-slate-700 leading-relaxed text-center text-lg">
            Manifestation is the art of bringing your innermost desires into tangible reality through the alignment of thought, emotion, and action. As a hairstylist, your creative vision has the power to materialize when you focus your intentions with clarity and purpose. This journal provides a framework for articulating, energizing, and activating your professional dreams with deliberate practice.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 overflow-hidden">
          
          {/* Decorative header */}
          <div className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white p-8 text-center">
            <div className="inline-block w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h2 className="text-2xl font-semibold">The Three Pillars of Effective Manifestation</h2>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            
            {/* Three Pillars */}
            <div className="space-y-6">
              {manifestationPillars.map((pillar, index) => (
                <div key={index} className="border-l-4 border-pink-400 bg-pink-50/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-pink-800 mb-3">{pillar.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>

            {/* Practice Instructions */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
              <p className="text-slate-700 leading-relaxed text-center">
                Use this journal regularly—ideally daily—to maintain focus on your vision and strengthen your manifestation practice. Date each entry to track your journey and notice patterns in your manifestation process. Remember that manifestation is both an art and a science; approach it with both creativity and discipline.
              </p>
            </div>

            {/* Date Section */}
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <label className="block text-slate-700 font-semibold mb-2">Date:</label>
              <div className="border-b-2 border-slate-300 pb-2 w-64"></div>
            </div>

            {/* Journal Sections */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-8">
                {journalSections.slice(0, Math.ceil(journalSections.length/2)).map((section, index) => (
                  <div key={index} className="border border-purple-100 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-800 mb-3">{section.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{section.description}</p>
                    
                    {section.type === "single" ? (
                      <div>
                        {section.prompt && <p className="font-medium text-slate-700 mb-2">{section.prompt}</p>}
                        <div className="h-24 border border-slate-200 rounded-lg bg-slate-50/30 p-3">
                          <div className="text-slate-400 text-sm italic">Writing space for your manifestation practice...</div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {section.prompts?.map((prompt, promptIndex) => (
                          <div key={promptIndex}>
                            <p className="font-medium text-slate-700 mb-2">{prompt}</p>
                            <div className="h-20 border border-slate-200 rounded-lg bg-slate-50/30 p-3">
                              <div className="text-slate-400 text-sm italic">Your response here...</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {journalSections.slice(Math.ceil(journalSections.length/2)).map((section, index) => (
                  <div key={index} className="border border-purple-100 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-purple-800 mb-3">{section.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{section.description}</p>
                    
                    {section.type === "single" ? (
                      <div>
                        {section.prompt && <p className="font-medium text-slate-700 mb-2">{section.prompt}</p>}
                        <div className="h-24 border border-slate-200 rounded-lg bg-slate-50/30 p-3">
                          <div className="text-slate-400 text-sm italic">Writing space for your manifestation practice...</div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {section.prompts?.map((prompt, promptIndex) => (
                          <div key={promptIndex}>
                            <p className="font-medium text-slate-700 mb-2">{prompt}</p>
                            <div className="h-20 border border-slate-200 rounded-lg bg-slate-50/30 p-3">
                              <div className="text-slate-400 text-sm italic">Your response here...</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Message */}
            <div className="mt-10 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200 text-center">
              <p className="text-lg italic text-slate-800 leading-relaxed">
                Remember: Manifestation thrives on consistency and emotional connection. Return to this journal regularly, infusing your writing with genuine feeling and expectation. The universe responds not just to your words, but to the energy behind them.
              </p>
            </div>

          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-2xl p-8 shadow-xl">
            <h4 className="text-xl font-semibold mb-4">Begin Your Manifestation Practice</h4>
            <p className="text-lg leading-relaxed opacity-95 mb-6">
              Transform your dreams into reality through focused intention, clear vision, and inspired action.
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