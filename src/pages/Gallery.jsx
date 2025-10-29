import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jewelry = [
    {
      id: 1,
      category: 'necklaces',
      title: 'Traditional Gold Necklace Set',
      image: 'https://images.unsplash.com/photo-1758995115857-2de1eb6283d0',
      description: 'Intricate floral pattern with matching earrings'
    },
    {
      id: 2,
      category: 'necklaces',
      title: 'Bridal Necklace Collection',
      image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed',
      description: 'Exquisite design for your special day'
    },
    {
      id: 3,
      category: 'earrings',
      title: 'Designer Gold Earrings',
      image: 'https://images.unsplash.com/photo-1671644730555-916aa8d8157f',
      description: 'Elegant contemporary design'
    },
    {
      id: 4,
      category: 'earrings',
      title: 'Traditional Red & Gold Earrings',
      image: 'https://images.unsplash.com/photo-1671642883395-0ab89c3ac890',
      description: 'Perfect for festive occasions'
    },
    {
      id: 5,
      category: 'bangles',
      title: 'Intricate Zircon Bangles',
      image: 'https://images.unsplash.com/photo-1690175867343-2af70ea57537',
      description: 'Studded with premium zircon stones'
    },
    {
      id: 6,
      category: 'bangles',
      title: 'Traditional Gold Kada',
      image: 'https://images.unsplash.com/photo-1728381031272-ba3f537feadd',
      description: 'Classic design with intricate patterns'
    },
    {
      id: 7,
      category: 'bangles',
      title: 'Ruby Studded Bangles',
      image: 'https://images.unsplash.com/photo-1611598935678-c88dca238fce',
      description: 'Gold bangles with red gemstones'
    },
    {
      id: 8,
      category: 'rings',
      title: 'Diamond Gold Ring',
      image: 'https://images.unsplash.com/photo-1655707063496-e1c00b3280de',
      description: 'Luxury ring with premium diamonds'
    },
    {
      id: 9,
      category: 'rings',
      title: 'Classic Gold Ring',
      image: 'https://images.unsplash.com/photo-1653903414925-adfc47c69b3c',
      description: 'Timeless elegance in gold'
    },
    {
      id: 10,
      category: 'necklaces',
      title: 'Luxury Collection',
      image: 'https://images.pexels.com/photos/34376048/pexels-photo-34376048.jpeg',
      description: 'Premium designer jewelry'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Jewelry' },
    { value: 'necklaces', label: 'Necklaces' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'bangles', label: 'Bangles & Bracelets' },
    { value: 'rings', label: 'Rings' }
  ];

  const filteredJewelry = selectedCategory === 'all' 
    ? jewelry 
    : jewelry.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#3d2817] via-[#5a3d2b] to-[#2d1810] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Explore our exquisite collection of handcrafted jewelry
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="flex flex-wrap justify-center gap-2 mb-12 bg-transparent">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className="px-6 py-3 data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black border-2 border-gray-200 data-[state=active]:border-[#D4AF37] transition-all duration-300"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJewelry.map((item) => (
              <div 
                key={item.id} 
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-200 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-black px-3 py-1 rounded-full text-sm font-semibold capitalize">
                  {item.category}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredJewelry.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Love What You See?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Visit our showroom to see these pieces in person or discuss custom designs
          </p>
          <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8860B] text-black font-semibold px-8">
            Schedule a Visit
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

