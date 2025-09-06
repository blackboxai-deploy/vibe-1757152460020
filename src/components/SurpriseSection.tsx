'use client'

import { useState } from 'react'

export default function SurpriseSection() {
  const [surpriseRevealed, setSurpriseRevealed] = useState(false)
  const [heartAnimation, setHeartAnimation] = useState(false)

  const handleSurpriseClick = () => {
    setSurpriseRevealed(true)
    setHeartAnimation(true)
    
    // Confetti effect simulation
    setTimeout(() => setHeartAnimation(false), 3000)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-purple-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            A Special Surprise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I saved the best for last, Rhydem. Click the heart below to reveal my special surprise for you.
          </p>
        </div>

        {!surpriseRevealed ? (
          <div className="text-center">
            <div className="relative inline-block">
              <button
                onClick={handleSurpriseClick}
                className="group relative w-32 h-32 mx-auto bg-gradient-to-br from-rose-400 to-pink-500 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center border-4 border-white"
              >
                <span className="text-white text-6xl group-hover:scale-125 transition-transform duration-300">
                  💖
                </span>
                
                {/* Pulsing rings */}
                <div className="absolute inset-0 rounded-full bg-rose-400 opacity-30 animate-ping"></div>
                <div className="absolute inset-0 rounded-full bg-pink-400 opacity-20 animate-ping delay-100"></div>
              </button>
              
              <p className="mt-6 text-rose-600 font-medium text-lg animate-bounce">
                Click me, Rhydem! ❤️
              </p>
            </div>
          </div>
        ) : (
          <div className="relative">
            {/* Heart Rain Animation */}
            {heartAnimation && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-2xl animate-bounce"
                    style={{
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  >
                    {['❤️', '💖', '💕', '💗', '💝'][Math.floor(Math.random() * 5)]}
                  </div>
                ))}
              </div>
            )}

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-rose-200 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100"></div>
              </div>

              <div className="relative z-10 text-center">
                <div className="text-8xl mb-8 animate-bounce">🎁</div>
                
                <h3 className="font-playfair text-4xl font-bold text-gray-800 mb-8">
                  My Special Promise to You
                </h3>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-200">
                    <p className="font-semibold text-rose-700 text-xl mb-4">
                      🌹 A Date Promise 🌹
                    </p>
                    <p>
                      If you say yes to getting to know me better, I promise to plan the most beautiful first date you could imagine. 
                      Not to impress you with expensive things, but to create a moment where we can truly connect and you can see 
                      how much I genuinely care about making you happy.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200">
                    <p className="font-semibold text-purple-700 text-xl mb-4">
                      💝 My Commitment 💝
                    </p>
                    <p>
                      I created this entire website in one sitting because you inspire me to put my whole heart into everything I do. 
                      This is just a small preview of the effort and dedication I'm willing to put into making you feel special every single day.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-rose-50 rounded-2xl p-6 border border-purple-200">
                    <p className="font-semibold text-rose-700 text-xl mb-4">
                      ✨ No Pressure, Just Hope ✨
                    </p>
                    <p>
                      I want you to know that there's no pressure at all. Whether you feel the same way or not, I'm grateful that 
                      you exist and that I got the chance to create something beautiful inspired by you. You've already made my world brighter.
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-rose-200">
                  <p className="font-playfair text-2xl text-gray-800 mb-4">
                    The question in my heart:
                  </p>
                  <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl p-6 text-2xl font-bold">
                    "Would you like to get to know each other better, Rhydem?"
                  </div>
                  
                  <div className="mt-8">
                    <p className="text-gray-600 mb-4">This entire experience was crafted with love by:</p>
                    <div className="font-playfair text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600">
                      Kartik
                    </div>
                    <div className="text-rose-500 text-3xl mt-2 animate-pulse">
                      ❤️ 💕 ❤️
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-rose-300 text-4xl animate-pulse opacity-30">🌸</div>
        <div className="absolute top-40 right-16 text-pink-300 text-3xl animate-bounce opacity-30">🦋</div>
        <div className="absolute bottom-32 left-20 text-purple-300 text-5xl animate-pulse opacity-30">✨</div>
        <div className="absolute bottom-20 right-12 text-rose-400 text-4xl animate-bounce opacity-30">🌺</div>
      </div>
    </section>
  )
}