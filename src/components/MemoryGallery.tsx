'use client'

export default function MemoryGallery() {
  const futureMemories = [
    {
      title: "Our First Adventure",
      caption: "When we create our first beautiful memory together",
      placeholder: "https://placehold.co/400x300?text=Romantic+sunset+walk+together+holding+hands",
      alt: "Romantic sunset walk together holding hands"
    },
    {
      title: "Your Beautiful Smile",
      caption: "The smile that stole my heart",
      placeholder: "https://placehold.co/400x300?text=Beautiful+woman+with+radiant+smile+in+garden",
      alt: "Beautiful woman with radiant smile in garden setting"
    },
    {
      title: "Special Moments",
      caption: "Every moment with you feels magical",
      placeholder: "https://placehold.co/400x300?text=Couple+sharing+coffee+and+laughter+in+cozy+cafe",
      alt: "Couple sharing coffee and laughter in cozy cafe"
    },
    {
      title: "Dreams Come True",
      caption: "When all our dreams become reality",
      placeholder: "https://placehold.co/400x300?text=Couple+dancing+under+starry+night+sky",
      alt: "Couple dancing under starry night sky"
    },
    {
      title: "Your Happiness",
      caption: "Nothing makes me happier than seeing you happy",
      placeholder: "https://placehold.co/400x300?text=Joyful+woman+laughing+in+sunlit+field+of+flowers",
      alt: "Joyful woman laughing in sunlit field of flowers"
    },
    {
      title: "Our Future",
      caption: "All the beautiful tomorrows waiting for us",
      placeholder: "https://placehold.co/400x300?text=Couple+watching+sunrise+from+mountain+top",
      alt: "Couple watching sunrise from mountain top together"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Our Memory Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            These spaces are waiting to be filled with all the beautiful memories we'll create together, Rhydem
          </p>
          <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-full px-6 py-3 inline-block border border-rose-200">
            <p className="text-rose-700 font-medium">
              Lovingly prepared by <span className="font-bold">Kartik</span> for our future together ❤️
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futureMemories.map((memory, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-rose-100"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={memory.placeholder}
                  alt={memory.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.background = 'linear-gradient(135deg, #f3e8ff 0%, #fce7f3 50%, #fef3c7 100%)';
                    target.style.display = 'flex';
                    target.style.alignItems = 'center';
                    target.style.justifyContent = 'center';
                    target.innerHTML = '<div class="text-gray-500 text-center p-4"><div class="text-4xl mb-2">💖</div><div>Beautiful Memory<br/>Coming Soon</div></div>';
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <span className="text-rose-500 text-xl">❤️</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-gray-800 mb-2">
                  {memory.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {memory.caption}
                </p>
                
                <div className="mt-4 pt-4 border-t border-rose-100">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-rose-500 font-medium">
                      Future Memory #{index + 1}
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-rose-300 rounded-full"></div>
                      <div className="w-1 h-1 bg-pink-300 rounded-full"></div>
                      <div className="w-1 h-1 bg-purple-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 max-w-3xl mx-auto shadow-lg border border-rose-200">
            <div className="text-6xl mb-4">📸</div>
            <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
              These Memories Are Waiting
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Each empty frame represents a beautiful moment we haven't created yet, Rhydem. 
              I can't wait to fill these spaces with real photos of our smiles, our adventures, 
              and all the joy we'll share together.
            </p>
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full inline-block font-semibold">
              Made with anticipation by Kartik ❤️
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}