'use client'

export default function PromiseSection() {
  const promises = [
    {
      title: "I Promise to Always Listen",
      description: "To hear not just your words, but your heart. To be there when you need someone to understand you completely.",
      icon: "👂",
      color: "from-rose-400 to-pink-400"
    },
    {
      title: "I Promise to Make You Smile",
      description: "To find new ways every day to bring joy to your life and to be the reason you wake up with happiness.",
      icon: "😊",
      color: "from-pink-400 to-purple-400"
    },
    {
      title: "I Promise to Support Your Dreams",
      description: "To believe in you even when you don't believe in yourself, and to help you reach for every star you desire.",
      icon: "⭐",
      color: "from-purple-400 to-rose-400"
    },
    {
      title: "I Promise to Be Honest",
      description: "To always be truthful with you, to share my thoughts openly, and to build our connection on trust.",
      icon: "💎",
      color: "from-rose-500 to-pink-500"
    },
    {
      title: "I Promise to Cherish Every Moment",
      description: "To treasure every second we spend together and to make each memory with you count for a lifetime.",
      icon: "⏰",
      color: "from-pink-500 to-purple-500"
    },
    {
      title: "I Promise to Love You As You Are",
      description: "To accept you completely, celebrate your uniqueness, and never ask you to change for anyone, including me.",
      icon: "💝",
      color: "from-purple-500 to-rose-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            My Promises to You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            These are the promises I make to you from my heart, Rhydem. Each one is a commitment I intend to keep forever.
          </p>
          <div className="bg-white rounded-full px-6 py-3 inline-block border border-rose-200 shadow-sm">
            <p className="text-rose-700 font-medium">
              Sworn with love and dedication by <span className="font-bold">Kartik</span> ❤️
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-rose-100 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${promise.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${promise.color} text-white text-2xl font-bold shadow-lg`}>
                    {promise.icon}
                  </div>
                </div>

                <h3 className="font-playfair text-xl font-bold text-center text-gray-800 mb-4 group-hover:text-rose-600 transition-colors duration-300">
                  {promise.title}
                </h3>

                <p className="text-gray-600 text-center leading-relaxed mb-6">
                  {promise.description}
                </p>

                <div className="text-center">
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${promise.color} text-white text-sm font-semibold shadow-md`}>
                    Promise #{index + 1}
                  </div>
                </div>
              </div>

              <div className="absolute top-2 right-2 text-rose-200 text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                💖
              </div>
              <div className="absolute bottom-2 left-2 text-pink-200 text-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                ✨
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-gradient-to-r from-white to-rose-50 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-rose-200 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-32 h-32 bg-rose-300 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-300 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-300 rounded-full"></div>
            </div>

            <div className="relative z-10 text-center">
              <div className="text-6xl mb-6">🤝</div>
              <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-6">
                My Solemn Vow
              </h3>
              <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed">
                <p className="italic">
                  "I, Kartik, promise to be the man you deserve - not perfect, but always trying to be better. 
                  I promise to love you with patience, to support you with strength, and to walk beside you through 
                  whatever life brings our way."
                </p>
                <p className="font-semibold text-rose-700">
                  "These aren't just words, Rhydem. They are the foundation of how I want to love you, 
                  today and every day that follows."
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-rose-200">
                <div className="font-playfair text-2xl text-rose-600 mb-2">
                  Sealed with love,
                </div>
                <div className="font-playfair text-3xl font-bold text-gray-800">
                  Kartik
                </div>
                <div className="text-rose-500 text-2xl mt-2">
                  ❤️ Forever Yours ❤️
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}