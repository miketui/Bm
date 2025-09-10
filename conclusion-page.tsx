export default function ConclusionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              CONCLUSION
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-slate-600 mt-6 italic">
            Your Journey Beyond the Chair Begins Now
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 overflow-hidden">
          
          {/* Decorative header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 text-center">
            <div className="inline-block w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h2 className="text-2xl font-semibold">The End of One Journey, The Beginning of Another</h2>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            
            {/* Opening reflection */}
            <div className="prose prose-lg max-w-none">
              <div className="float-left text-7xl font-serif text-blue-500 leading-none mr-4 mt-2">A</div>
              <p className="text-slate-700 leading-relaxed">
                s you close this chapter of learning and open the door to your expanded practice, 
                remember that every master was once a beginner who refused to give up. The techniques, 
                philosophies, and frameworks you've encountered in these pages are not destinations—they 
                are compass points guiding you toward your own unique expression of artistry.
              </p>
            </div>

            {/* Key takeaways section */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
              <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
                <span className="w-6 h-6 bg-amber-500 rounded-full mr-3"></span>
                Your Transformation Toolkit
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-amber-600 mr-2">→</span>
                    <span className="text-amber-800">Technical mastery as your foundation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-600 mr-2">→</span>
                    <span className="text-amber-800">Business acumen as your vehicle</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-600 mr-2">→</span>
                    <span className="text-amber-800">Creative vision as your compass</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-amber-600 mr-2">→</span>
                    <span className="text-amber-800">Self-care as your sustainability</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-600 mr-2">→</span>
                    <span className="text-amber-800">Community as your strength</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-amber-600 mr-2">→</span>
                    <span className="text-amber-800">Courage as your catalyst</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-slate-800">What Happens Next?</h3>
              <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
                The real work begins when you step away from these pages and into your practice. 
                Use the worksheets, implement the strategies, and most importantly—trust your instincts. 
                Your unique perspective is exactly what the world needs.
              </p>
            </div>

            {/* Final message */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-8 text-center">
              <h4 className="text-xl font-semibold mb-4">Remember This Always</h4>
              <p className="text-lg leading-relaxed opacity-95">
                You are not just a hairstylist. You are an artist, an entrepreneur, a healer, and a visionary. 
                The chair was just your starting point—the world is your canvas.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/80 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="text-center pt-8 border-t border-slate-200">
              <p className="text-slate-500 text-sm mb-2">With endless admiration for your journey,</p>
              <p className="text-xl font-serif text-slate-700 italic">Michael David</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}