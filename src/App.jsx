import React, { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heart, ShoppingCart, Star, Filter, Instagram, Facebook, Pinterest, ChevronRight } from 'lucide-react'

function App() {
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const colors = ['#FF69B4', '#FF1493', '#DB7093', '#C71585', '#8B008B']
  const sizes = ['2T', '3T', '4T', '5', '6']

  const dresses = [
    { id: 1, name: 'Butterfly Princess Dress', price: 49.99, image: 'https://images.unsplash.com/photo-1612635276807-55b4a954312d?w=800&q=80', colors: ['#FF69B4', '#DB7093'], sizes: ['3T', '4T'] },
    { id: 2, name: 'Sparkle Unicorn Gown', price: 59.99, image: 'https://images.unsplash.com/photo-1620539996401-0fce5ad7f769?w=800&q=80', colors: ['#FF1493', '#C71585'], sizes: ['4T', '5'] },
    { id: 3, name: 'Mermaid Magic Dress', price: 54.99, image: 'https://images.unsplash.com/photo-1626624340240-ded9dd757cca?w=800&q=80', colors: ['#8B008B', '#FF69B4'], sizes: ['2T', '6'] }
  ]

  const filteredDresses = dresses.filter(dress => 
    (!selectedColor || dress.colors.includes(selectedColor)) &&
    (!selectedSize || dress.sizes.includes(selectedSize))
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-princess-pink-50 via-white to-princess-pink-100">
      {/* HEADER */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-princess-pink-200/50">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-princess-pink-500" />
            <span className="text-2xl font-bold text-princess-pink-700">Little Princesses</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#dresses" className="text-princess-pink-700 hover:text-princess-pink-500 transition-colors">Dresses</a>
            <a href="#reviews" className="text-princess-pink-700 hover:text-princess-pink-500 transition-colors">Reviews</a>
            <a href="#order" className="text-princess-pink-700 hover:text-princess-pink-500 transition-colors">Order</a>
          </div>
          <button className="bg-princess-pink-500 hover:bg-princess-pink-600 text-white px-6 py-2 rounded-full font-semibold transition-colors flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" /> Cart
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black text-princess-pink-700 mb-6 tracking-tight"
          >
            Magical Dresses
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl text-princess-pink-500 mb-8 font-bold"
          >
            Dress Your Little Princess in Enchantment
          </motion.p>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-princess-pink-500 hover:bg-princess-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Shop Now <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* DRESS GALLERY */}
      <section id="dresses" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-princess-pink-700 text-center mb-12">
            Our Magical Collection
          </h2>
          
          {/* FILTERS */}
          <div className="flex justify-center gap-8 mb-12">
            <div>
              <h3 className="text-princess-pink-700 mb-2 flex items-center gap-2">
                <Filter className="w-5 h-5" /> Color
              </h3>
              <div className="flex gap-2">
                {colors.map(color => (
                  <button 
                    key={color} 
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color }}
                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-white ring-2 ring-princess-pink-500' : 'border-transparent'}`}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-princess-pink-700 mb-2 flex items-center gap-2">
                <Filter className="w-5 h-5" /> Size
              </h3>
              <div className="flex gap-2">
                {sizes.map(size => (
                  <button 
                    key={size} 
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 rounded-full text-sm ${selectedSize === size ? 'bg-princess-pink-500 text-white' : 'bg-white text-princess-pink-700 border border-princess-pink-200'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* DRESS GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {filteredDresses.map(dress => (
              <motion.div 
                key={dress.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <img 
                  src={dress.image} 
                  alt={dress.name} 
                  className="w-full h-96 object-cover hover:scale-105 transition-transform"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-princess-pink-700 mb-2">{dress.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-princess-pink-500">${dress.price}</span>
                    <button className="bg-princess-pink-500 text-white px-4 py-2 rounded-full hover:bg-princess-pink-600 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-5xl font-black text-princess-pink-700 text-center mb-12">
            What Parents Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', review: 'Absolutely adorable dresses! My daughter loves the unicorn dress.', stars: 5 },
              { name: 'Emily R.', review: 'Great quality, beautiful designs. Will definitely order again!', stars: 5 },
              { name: 'Lisa K.', review: 'Perfect fit and magical details. Highly recommend!', stars: 5 }
            ].map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="bg-princess-pink-50 p-8 rounded-2xl hover:shadow-lg transition-all"
              >
                <div className="flex text-princess-pink-500 mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.review}"</p>
                <div className="font-bold text-princess-pink-700">{review.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-princess-pink-700 py-12 px-6 text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Heart className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold">Little Princesses</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-princess-pink-200 transition-colors"><Instagram /></a>
            <a href="#" className="hover:text-princess-pink-200 transition-colors"><Facebook /></a>
            <a href="#" className="hover:text-princess-pink-200 transition-colors"><Pinterest /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App