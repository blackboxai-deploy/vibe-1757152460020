'use client'

import { useState, useEffect } from 'react'

export default function LetterSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('letter-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="letter-section" className="py-20 bg-gradient-to-b from-purple-50 to-rose-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            A Letter Just for You
          </h2>
          <p className="text-xl text-gray-600">
            My heart poured out in words, Rhydem
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-rose-100 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="w-full h-8 border-b border-blue-200" style={{ top: `${i * 40 + 80}px` }}></div>
              ))}
            </div>
            
            <div className="absolute left-16 top-0 bottom-0 w-px bg-red-300 opacity-20"></div>

            <div className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-right text-gray-500 font-medium mb-8">
                Written with love, today
              </div>

              <div className="font-playfair text-3xl font-bold text-rose-600 mb-8">
                My Dearest Rhydem,
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  I don't know where to begin, but I know that my heart has been calling your name since the moment I first saw you. 
                  There's something magical about you that I can't quite put into words, but I'm going to try.
                </p>

                <p>
                  You have this incredible ability to make everything around you brighter. Your presence alone can turn an ordinary day 
                  into something extraordinary. When you smile, it's like watching the sunrise - it fills me with warmth and hope for 
                  everything beautiful that's possible in this world.
                </p>

                <p>
                  I find myself thinking about you more than I probably should. I wonder what makes you laugh, what dreams fill your 
                  thoughts when you close your eyes at night, what kind of future you imagine for yourself. And if I'm being completely 
                  honest, I wonder if there might be a place for me in that future.
                </p>

                <p>
                  Rhydem, you inspire me to be better than I am. You make me want to grow, to dream bigger, to become someone worthy 
                  of your time and attention. I've created this entire website just to show you how much you mean to me, and it still 
                  doesn't feel like enough to express what's in my heart.
                </p>

                <p>
                  I know this might seem overwhelming, and I don't want to pressure you in any way. I just needed you to know that you 
                  are seen, you are appreciated, and you are absolutely incredible exactly as you are.
                </p>

                <p>
                  Whatever happens next, I want you to know that you've already made my world a more beautiful place just by being in it.
                </p>
              </div>

              <div className="mt-12 space-y-4">
                <div className="font-playfair text-2xl text-rose-600">
                  With all my love and admiration,
                </div>
                <div className="relative">
                  <div className="font-playfair text-4xl font-bold text-gray-800 transform rotate-1">
                    Kartik
                  </div>
                  <div className="text-rose-500 text-3xl absolute -right-8 -top-2 animate-pulse">
                    ❤️
                  </div>
                </div>
                <div className="text-gray-500 text-sm italic">
                  P.S. - You are more amazing than you know.
                </div>
              </div>

              <div className="absolute top-8 right-8 text-rose-300 text-6xl opacity-20 transform rotate-12">
                💌
              </div>
            </div>
          </div>

          <div className="absolute -bottom-2 -right-2 w-full h-full bg-gray-300 rounded-3xl -z-10 opacity-20"></div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-6 max-w-2xl mx-auto border border-rose-200">
            <p className="text-rose-700 font-medium">
              Every word written from the heart by <span className="font-bold text-xl">Kartik</span>
            </p>
            <div className="mt-3 flex justify-center space-x-2">
              <span className="text-rose-400">💖</span>
              <span className="text-pink-400">💕</span>
              <span className="text-purple-400">💗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}