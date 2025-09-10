export default function CurlsContempCollective() {
  const benefits = [
    {
      icon: "🎓",
      title: "Exclusive Education",
      description: "Access to advanced workshops, masterclasses, and technique tutorials not available anywhere else",
      features: ["Monthly live workshops", "Recorded technique library", "Guest expert sessions"]
    },
    {
      icon: "👥",
      title: "Community Support",
      description: "Connect with like-minded stylists from around the world who share your passion for conscious artistry",
      features: ["Private discussion forums", "Peer mentorship circles", "Local meetup coordination"]
    },
    {
      icon: "💼",
      title: "Business Resources",
      description: "Tools, templates, and strategies to build and scale your dream hairstyling practice",
      features: ["Business plan templates", "Pricing calculators", "Marketing toolkits"]
    },
    {
      icon: "✨",
      title: "Creative Inspiration",
      description: "Regular challenges, inspiration boards, and collaborative projects to fuel your artistic growth",
      features: ["Monthly style challenges", "Inspiration galleries", "Collaborative lookbooks"]
    }
  ];

  const membershipTiers = [
    {
      name: "Emerging Artist",
      price: "$29",
      period: "month",
      color: "from-green-500 to-emerald-500",
      features: [
        "Access to community forums",
        "Monthly group workshops",
        "Basic business templates",
        "Technique video library",
        "Peer support network"
      ]
    },
    {
      name: "Conscious Professional",
      price: "$79",
      period: "month",
      color: "from-blue-500 to-purple-500",
      popular: true,
      features: [
        "Everything in Emerging Artist",
        "1-on-1 monthly mentorship call",
        "Advanced business resources",
        "Early access to new content",
        "Guest expert sessions",
        "Custom feedback on your work"
      ]
    },
    {
      name: "Master Collective",
      price: "$149",
      period: "month",
      color: "from-purple-500 to-pink-500",
      features: [
        "Everything in Conscious Professional",
        "Weekly group coaching calls",
        "Direct access to Michael David",
        "Co-creation opportunities",
        "Speaking/teaching opportunities",
        "Annual retreat invitation"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-teal-500/10"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl">🌀</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent mb-4">
                CURLS & CONTEMPLATION
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-4">
                COLLECTIVE
              </h2>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
                A global community of conscious hairstylists committed to artistic excellence, 
                business growth, and transformative impact
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto rounded-full mt-6"></div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg border border-white/50">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Our Mission</h3>
            <div className="prose prose-lg max-w-none text-slate-700">
              <p className="text-xl leading-relaxed text-center italic">
                "To create a supportive ecosystem where hairstylists can evolve beyond traditional boundaries, 
                building sustainable practices that honor both artistry and entrepreneurship while making 
                a meaningful impact in their communities."
              </p>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">What's Inside the Collective</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-teal-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h4>
                    <p className="text-slate-600 mb-4 leading-relaxed">{benefit.description}</p>
                    <ul className="space-y-2">
                      {benefit.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                          <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-8">Choose Your Journey</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border border-white/50 overflow-hidden ${tier.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-2 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`bg-gradient-to-r ${tier.color} text-white p-6 ${tier.popular ? 'pt-10' : ''}`}>
                  <h4 className="text-xl font-bold text-center mb-2">{tier.name}</h4>
                  <div className="text-center">
                    <span className="text-3xl font-bold">${tier.price}</span>
                    <span className="text-white/80">/{tier.period}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-slate-700">
                        <span className="text-green-500 mr-3 mt-1 flex-shrink-0">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full mt-6 bg-gradient-to-r ${tier.color} text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-shadow`}>
                    Join This Tier
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Stats */}
        <div className="bg-gradient-to-r from-purple-500 to-teal-500 text-white rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Our Growing Community</h3>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">2,500+</div>
              <div className="text-white/90 text-sm">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">45</div>
              <div className="text-white/90 text-sm">Countries Represented</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-white/90 text-sm">Monthly Workshops</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-white/90 text-sm">Member Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">What Members Say</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Sarah M.</div>
                  <div className="text-sm text-slate-600">Freelance Stylist, NYC</div>
                </div>
              </div>
              <p className="text-slate-700 italic leading-relaxed">
                "The Collective transformed my business. I went from struggling freelancer to 
                booked-solid artist with a six-month waiting list. The mentorship and community 
                support are priceless."
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-teal-100">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-800">Marcus L.</div>
                  <div className="text-sm text-slate-600">Salon Owner, Atlanta</div>
                </div>
              </div>
              <p className="text-slate-700 italic leading-relaxed">
                "Being part of this community opened doors I never knew existed. The education 
                is world-class, but it's the relationships and support that make this special."
              </p>
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-white/50 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Transform Your Practice?</h3>
          <p className="text-slate-600 text-lg mb-6 max-w-2xl mx-auto">
            Join hundreds of stylists who are building sustainable, profitable practices while 
            making a meaningful impact in their communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-gradient-to-r from-purple-500 to-teal-500 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-shadow">
              Start Your Journey
            </button>
            <button className="border-2 border-purple-500 text-purple-600 font-semibold py-3 px-8 rounded-lg hover:bg-purple-50 transition-colors">
              Learn More
            </button>
          </div>
          
          <p className="text-xs text-slate-500 mt-4">
            30-day money-back guarantee • Cancel anytime • Join thousands of satisfied members
          </p>
        </div>
        
      </div>
    </div>
  );
}