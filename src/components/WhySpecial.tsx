'use client'

import { useState } from 'react'

export default function WhySpecial() {
  const [revealedCards, setRevealedCards] = useState<number[]>([])

  const reasons = [
    {
      title: "Your Beautiful Smile",
      message: "Your smile lights up my entire world, Rhydem. It's the first thing I think about when I wake up and the last thing that makes me smile before I sleep.",
      icon: "😊",
      gradient: "from-rose-400 to-pink-500"
    },
    {
      title: "Your Kind Heart",
      message: "The way you care for others and show compassion makes you incredibly special. Your heart is pure gold, and that's what makes you so beautiful inside and out.",
      icon: "💖",
      gradient: "from-pink-400 to-purple-500"
    },
    {
      title: "Your Intelligence",
      message: "Every conversation with you amazes me. Your thoughts, your perspectives, your wisdom - everything about your mind is absolutely captivating.",
      icon: "🧠",
      gradient: "from-purple-400 to-rose-500"
    },
    {
      title: "Your Laugh",
      message: "Your laugh is my favorite sound in the entire universe. It's music to my ears and brings so much joy to my heart every single time.",
      icon: "😂",
      gradient: "from-rose-500 to-pink-400"
    },
    {
      title: "Your Uniqueness",
      message: "There's no one else like you in this world, Rhydem. Your personality, your quirks, your way of seeing life - everything makes you perfectly unique and perfect for me.",
      icon: "⭐",
      gradient: "from-pink-500 to-purple-400"
    },
    {
      title: "Your Presence",
      message: "Just being around you makes everything better. You have this amazing ability to make ordinary moments feel extraordinary just by being there.",
      icon: "✨",
      gradient: "from-purple-500 to-rose-400"
    }
  ]

  const handleCardClick = (index: number) => {
    if (!revealedCards.includes(index)) {
      setRevealedCards([...revealedCards, index])
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Why You're So Special
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            There are countless reasons why you mean everything to me, Rhydem. Here are just a few...
          </p>
          <p className="text-rose-600 font-medium">
            Click each card to reveal my heartfelt message for you
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Each message written personally by <span className="text-rose-600 font-semibold">Kartik</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`relative cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                revealedCards.includes(index) ? 'rotate-y-180' : ''
              }`}
              style={{ transformStyle: 'preserve-3d', minHeight: '300px' }}
            >
              {/* Front of Card */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} rounded-2xl p-6 shadow-xl backface-hidden flex flex-col items-center justify-center text-white`}
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="text-6xl mb-4">{reason.icon}</div>
                <h3 className="font-playfair text-2xl font-bold text-center mb-4">
                  {reason.title}
                </h3>
                <p className="text-center text-white/90 font-medium">
                  Click to see why this makes you special
                </p>
                <div className="mt-4 w-12 h-1 bg-white/50 rounded-full"></div>
              </div>

              {/* Back of Card */}
              <div 
                className={`absolute inset-0 bg-white rounded-2xl p-6 shadow-xl border border-rose-200 transform rotate-y-180 ${
                  revealedCards.includes(index) ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="h-full flex flex-col justify-center">
                  <div className={`text-4xl text-center mb-4 bg-gradient-to-r ${reason.gradient} bg-clip-text text-transparent`}>
                    {reason.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-center mb-4 text-gray-800">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed text-sm">
                    {reason.message}
                  </p>
                  <div className="mt-4 text-center">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${reason.gradient}`}>
                      With love, Kartik ❤️
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8 max-w-3xl mx-auto border border-rose-200">
            <p className="font-playfair text-2xl text-rose-700 mb-4">
              And these are just the beginning...
            </p>
            <p className="text-gray-700 text-lg">
              Every day I discover new things that make you even more special to me, Rhydem. You are truly one in a million.
            </p>
            <div className="mt-6 flex justify-center space-x-2">
              <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}