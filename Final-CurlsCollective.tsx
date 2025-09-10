export default function FinalCurlsCollectivePage() {
  const platformLinks = [
    {
      platform: "Discord",
      description: "Join our vibrant, real-time community where conversations flow, questions find immediate answers, and spontaneous inspiration abounds:",
      link: "https://discord.gg/4C8jDu78",
      icon: "💬"
    },
    {
      platform: "Website",
      description: "Discover in-depth resources, submit your story, and access our calendar of virtual and in-person events:",
      link: "www.unconventionalstylist.com",
      icon: "🌐"
    },
    {
      platform: "Social Media",
      description: "Stay updated with daily inspiration, quick tips, and community highlights:",
      links: [
        { platform: "Instagram", handle: "@curlscontemplation" },
        { platform: "TikTok", handle: "@curlscontemplation" },
        { platform: "Pinterest", handle: "@curlscontemplation" }
      ],
      icon: "📱"
    }
  ];

  const benefits = [
    {
      title: "Supportive Network",
      description: "Connect with fellow hairstylists who understand your unique challenges and celebrate your creative vision. Our community spans the globe, bringing together diverse perspectives and approaches that expand your horizons."
    },
    {
      title: "Exclusive Learning Resources", 
      description: "Access a growing library of tutorials, masterclasses, and guides created by industry leaders and innovative stylists. These resources cover everything from advanced technical skills to business development and client communication."
    },
    {
      title: "Mentorship Opportunities",
      description: "Benefit from the wisdom of experienced professionals who have navigated the path before you. Our structured mentorship program pairs developing stylists with seasoned experts for personalized guidance and support."
    },
    {
      title: "Creative Collaboration",
      description: "Find partners for artistic projects, styled shoots, educational content creation, and innovative business ventures. The collective actively facilitates connections between members with complementary skills and interests."
    },
    {
      title: "Engaging Discussions",
      description: "Participate in thoughtful conversations about the evolving role of hairstyling in personal expression, cultural movements, and societal transformation. These discussions deepen your understanding of your craft's significance beyond mere aesthetics."
    }
  ];

  return (
    <>
      <link rel="stylesheet" href="styles/style.css" />
      <link rel="stylesheet" href="styles/fonts.css" />
      <link rel="stylesheet" href="styles/print.css" media="print" />
    <div className="min-h-screen backmatter-curlscollective p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-teal-500/10"></div>
            <div className="relative">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent mb-4">
                JOIN THE CURLS & CONTEMPLATION COLLECTIVE
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-white/50">
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              As you turn the final pages of this book, you stand not at an ending but at the threshold of a new beginning. The journey you've embarked on through these chapters—exploring the artistry and soulful expression of hairstyling—has equipped you with insights, techniques, and reflections that can transform both your creative practice and personal growth.
            </p>
            <p>
              Now is the perfect moment to extend this journey beyond these pages by connecting with a community of like-minded hairstylists who share your passion for artistic excellence, authentic expression, and continual evolution.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl border border-white/50 overflow-hidden">
          
          {/* Decorative header */}
          <div className="bg-gradient-to-r from-purple-500 to-teal-500 text-white p-8 text-center">
            <div className="inline-block w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🌀</span>
            </div>
            <h2 className="text-2xl font-semibold">Your Story Matters</h2>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-8">
            
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>
                The Curls & Contemplation Collective thrives on the diverse experiences and unique perspectives that each member brings. By sharing your own journey—the challenges you've overcome, the techniques you've mastered, the insights you've gathered—you contribute to our collective wisdom and inspire others who may be facing similar situations.
              </p>

              <p>
                We invite you to submit your personal "How You Really Feel" letter through our website. This confidential reflection allows you to express the realities of your hairstyling journey—both the triumphs and the struggles—in a supportive environment where vulnerability is honored and celebrated.
              </p>

              <p>
                These shared experiences become powerful beacons of hope and guidance for others, creating a tapestry of authentic stories that illuminate the path for the entire community.
              </p>
            </div>

            {/* Community Benefits Section */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Embrace the Community, Share Your Passion</h3>
              <p className="text-slate-700 leading-relaxed mb-6">
                The Curls & Contemplation Collective is more than just a network—it's a dynamic ecosystem where creativity flourishes, knowledge is freely shared, and every member's growth is celebrated. In a profession that can sometimes feel isolating, our community provides the connection, support, and inspiration that fuels sustained passion and innovation.
              </p>
              
              <p className="text-slate-700 font-semibold mb-6">What Awaits You in the Collective:</p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="border-l-4 border-purple-400 bg-purple-50/50 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-purple-800 mb-3">{benefit.title}</h4>
                    <p className="text-slate-700 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Join Us Section */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Join Us and Let's Embark on This Journey Together</h3>
              
              <div className="space-y-8">
                {platformLinks.map((platform, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-white text-lg">{platform.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-slate-800 mb-2">Connect on {platform.platform}</h4>
                        <p className="text-slate-700 leading-relaxed mb-3">{platform.description}</p>
                        {platform.link ? (
                          <p className="text-blue-600 font-medium">{platform.link}</p>
                        ) : platform.links ? (
                          <div className="space-y-2">
                            {platform.links.map((social, socialIndex) => (
                              <div key={socialIndex} className="flex items-center">
                                <span className="text-slate-600 mr-2">{social.platform}:</span>
                                <span className="text-blue-600 font-medium">{social.handle}</span>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Closing Message */}
            <div className="mt-10 space-y-6 text-slate-700 leading-relaxed">
              <p>
                Your voice, experiences, and presence are invaluable to our growing community. By joining the Curls & Contemplation Collective, you're not only investing in your own growth but contributing to the elevation of our entire profession. Together, we can redefine hairstyling as a powerful form of artistry, healing, and transformation—one story, one technique, one breakthrough at a time.
              </p>

              <p>
                Welcome to the next chapter of your journey. We can't wait to see how you'll grow, what you'll create, and whose lives you'll touch through your evolving mastery of curls and contemplation.
              </p>
            </div>

            {/* Quote */}
            <div className="mt-10 bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-6 border border-teal-200 text-center">
              <p className="text-lg italic text-slate-800 leading-relaxed">
                "Alone, we can do so little; together, we can do so much." — Helen Keller
              </p>
            </div>

          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-teal-500 text-white rounded-2xl p-8 shadow-xl">
            <h4 className="text-xl font-semibold mb-4">Ready to Join Our Community?</h4>
            <p className="text-lg leading-relaxed opacity-95 mb-6">
              Take the next step in your journey and connect with hairstylists who share your passion for growth, creativity, and conscious artistry.
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
    </>
  );
}