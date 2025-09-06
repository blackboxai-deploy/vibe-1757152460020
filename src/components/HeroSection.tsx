'use client'

import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [currentText, setCurrentText] = useState('')
  const [showSecondary, setShowSecondary] = useState(false)
  const fullText = "Rhydem"
  
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setCurrentText(fullText.slice(0, i))
        i++
      } else {
        clearInterval(timer)
        setTimeout(() => setShowSecondary(true), 1000)
      }
    }, 200)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-pink-100 to-purple-200 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-pink-300 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-200 rounded-full opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-rose-300 rounded-full opacity-35 animate-bounce delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 mb-4">
            Hello, {currentText}
            <span className="animate-pulse">|</span>
          </h1>
          
          {showSecondary && (
            <div className="animate-fade-in-up">
              <p className="font-playfair text-2xl md:text-4xl text-rose-700 mb-6 animate-slide-up">
                This is created especially for you
              </p>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-rose-200 shadow-xl">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  I wanted to create something special to show you how much you mean to me.
                </p>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <div className="font-semibold text-rose-600 text-lg">With all my love,</div>
                  <div className="font-playfair font-bold text-2xl text-purple-600">Kartik</div>
                  <div className="text-rose-500 text-2xl animate-pulse">❤️</div>
                </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={() => document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Discover Our Story
                </button>
                
                <p className="text-rose-600 text-sm animate-bounce">
                  Scroll down to see what I've prepared for you ↓
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-rose-400 text-2xl animate-float">💖</div>
        <div className="absolute top-1/3 right-1/4 text-pink-400 text-xl animate-float-delayed">💕</div>
        <div className="absolute bottom-1/3 left-1/3 text-purple-400 text-2xl animate-float-slow">💗</div>
        <div className="absolute bottom-1/4 right-1/3 text-rose-300 text-xl animate-float">💝</div>
      </div>
    </section>
  )
}