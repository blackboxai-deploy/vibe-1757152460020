'use client'

export default function OurStory() {
  const storyPoints = [
    {
      title: "The Beginning",
      description: "From the moment I first saw you, I knew there was something special about you, Rhydem. Your smile, your laugh, the way you light up every room you enter.",
      time: "The Start",
      color: "from-rose-400 to-pink-400"
    },
    {
      title: "Getting to Know You",
      description: "Every conversation we had made me realize how amazing you are. Your kindness, intelligence, and beautiful personality made me fall for you more each day.",
      time: "Growing Closer",
      color: "from-pink-400 to-purple-400"
    },
    {
      title: "Realizing My Feelings",
      description: "I realized that you're not just someone special - you're THE someone special. You make me want to be a better person, and you bring out the best in me.",
      time: "The Realization",
      color: "from-purple-400 to-rose-400"
    },
    {
      title: "This Moment",
      description: "Creating this for you is my way of showing how much you mean to me. Rhydem, you are my inspiration, my joy, and the reason I smile every day.",
      time: "Right Now",
      color: "from-rose-500 to-pink-500"
    }
  ]

  return (
    <section id="our-story" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The beautiful journey that led me to create this for you, Rhydem
          </p>
          <div className="mt-6 text-rose-600 font-medium">
            Written with love by <span className="font-bold">Kartik</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-200 via-pink-200 to-purple-200 rounded-full"></div>
          
          <div className="space-y-16">
            {storyPoints.map((story, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-rose-400 rounded-full shadow-lg z-10"></div>
                
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-xl border border-rose-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <div className={`inline-block px-4 py-2 rounded-full text-white font-semibold text-sm mb-4 bg-gradient-to-r ${story.color}`}>
                      {story.time}
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-3">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {story.description}
                    </p>
                  </div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8 max-w-2xl mx-auto border border-rose-200">
            <p className="font-playfair text-xl text-rose-700 italic">
              "Every moment with you in mind has been a blessing, Rhydem. This story is just the beginning of what I hope will be our beautiful journey together."
            </p>
            <div className="mt-4 text-rose-600 font-semibold">
              - Kartik ❤️
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}