import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Award, Users, Gem, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="w-10 h-10 text-[#D4AF37]" />,
      title: "30+ Years of Excellence",
      description: "Established in 1995, serving generations with quality craftsmanship"
    },
    {
      icon: <Users className="w-10 h-10 text-[#D4AF37]" />,
      title: "Expert Craftsmen",
      description: "Master artisans with decades of jewelry-making experience"
    },
    {
      icon: <Gem className="w-10 h-10 text-[#D4AF37]" />,
      title: "Premium Quality",
      description: "Only the finest gold and materials for lasting brilliance"
    },
    {
      icon: <Heart className="w-10 h-10 text-[#D4AF37]" />,
      title: "Customer Trust",
      description: "Building relationships that last generations"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#3d2817] via-[#5a3d2b] to-[#2d1810] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A Legacy of Craftsmanship Since 1995
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1655707063496-e1c00b3280de" 
                alt="Craftsmanship" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">Where Tradition Meets Elegance</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                DGM Gold Works was founded in 1995 with a vision to preserve the timeless art of traditional jewelry-making while embracing contemporary design. For over three decades, we have been the trusted name in Proddatur for custom gold ornaments, expert repairs, and exquisite designer jewelry.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our master craftsmen bring decades of experience, combining traditional goldsmithing techniques with modern innovation. Each piece that leaves our workshop is a testament to our commitment to quality, precision, and artistry.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From bridal collections to everyday elegance, from antique restoration to custom designs, we craft your dreams into timeless treasures that become family heirlooms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What Makes Us Different</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-2 border-gray-200 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center">{value.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-4xl font-bold text-gray-800">Masterful Craftsmanship</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every piece of jewelry at DGM Gold Works is handcrafted with meticulous attention to detail. Our artisans use time-honored techniques passed down through generations, ensuring each creation meets the highest standards of quality.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Hand-selected premium gold and materials</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Traditional goldsmithing techniques combined with modern technology</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Rigorous quality control at every stage</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-600">Lifetime support and maintenance services</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1728381031272-ba3f537feadd" 
                alt="Gold Jewelry" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

