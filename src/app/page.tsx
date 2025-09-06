'use client'

import HeroSection from '@/components/HeroSection'
import OurStory from '@/components/OurStory'
import WhySpecial from '@/components/WhySpecial'
import MemoryGallery from '@/components/MemoryGallery'
import LetterSection from '@/components/LetterSection'
import PromiseSection from '@/components/PromiseSection'
import SurpriseSection from '@/components/SurpriseSection'

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="font-playfair text-xl font-bold text-rose-600">
              For Rhydem ❤️
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Created with love by <span className="text-rose-600 font-semibold">Kartik</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        <HeroSection />
        <OurStory />
        <WhySpecial />
        <MemoryGallery />
        <LetterSection />
        <PromiseSection />
        <SurpriseSection />
      </div>

      {/* Footer Credit */}
      <footer className="bg-gradient-to-r from-rose-100 to-pink-100 py-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-playfair text-lg text-rose-700 mb-2">
            Made with endless love and dedication
          </p>
          <p className="text-rose-600 font-medium">
            By <span className="font-bold text-xl">Kartik</span> for the most amazing <span className="font-bold text-xl">Rhydem</span> ❤️
          </p>
          <div className="mt-4 flex items-center justify-center space-x-2 text-rose-500">
            <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </footer>
    </main>
  )
}