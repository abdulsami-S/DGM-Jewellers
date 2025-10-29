// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '../components/ui/button';
// import { Card, CardContent } from '../components/ui/card';
// import { Sparkles, Award, RefreshCw, Gem, ArrowRight, Phone } from 'lucide-react';

// const Home = () => {
//   const [rates, setRates] = useState({ gold: 6500, silver: 85 });

//   useEffect(() => {
//     // Load rates from localStorage
//     const savedRates = localStorage.getItem('metalRates');
//     if (savedRates) {
//       setRates(JSON.parse(savedRates));
//     }
//   }, []);

//   const services = [
//     {
//       icon: <Sparkles className="w-12 h-12 text-[#D4AF37]" />,
//       title: "Custom Gold Ornaments",
//       description: "Bespoke jewelry designed to your vision with master craftsmanship"
//     },
//     {
//       icon: <RefreshCw className="w-12 h-12 text-[#D4AF37]" />,
//       title: "Gold Repairs & Polishing",
//       description: "Expert restoration services to bring back the original shine"
//     },
//     {
//       icon: <Gem className="w-12 h-12 text-[#D4AF37]" />,
//       title: "Antique & Designer Jewellery",
//       description: "Curated collection of timeless pieces and modern designs"
//     }
//   ];

//   const featuredCollections = [
//     {
//       image: "https://images.unsplash.com/photo-1758995115857-2de1eb6283d0",
//       title: "Traditional Necklaces",
//       description: "Exquisite gold necklaces with intricate patterns"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1671644730555-916aa8d8157f",
//       title: "Designer Earrings",
//       description: "Elegant earrings for every occasion"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1690175867343-2af70ea57537",
//       title: "Gold Bangles",
//       description: "Traditional and contemporary bangle designs"
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Priya Sharma",
//       text: "DGM Gold Works created the perfect custom necklace for my wedding. The craftsmanship is exceptional!",
//       rating: 5
//     },
//     {
//       name: "Rajesh Kumar",
//       text: "Best place for gold repairs. They restored my grandmother's antique jewelry beautifully.",
//       rating: 5
//     },
//     {
//       name: "Anitha Reddy",
//       text: "Trusted them for years. Quality and service are always top-notch!",
//       rating: 5
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#3d2817] via-[#5a3d2b] to-[#2d1810]">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-20 left-10 w-64 h-64 bg-[#D4AF37] rounded-full blur-3xl"></div>
//           <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#B8860B] rounded-full blur-3xl"></div>
//         </div>
        
//         <div className="container mx-auto px-4 z-10">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="text-white space-y-8">
//               <div className="inline-block px-4 py-2 bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-full backdrop-blur-sm">
//                 <p className="text-[#D4AF37] text-sm font-medium">Trusted Since 1995</p>
//               </div>
              
//               <h1 className="text-5xl md:text-7xl font-bold leading-tight">
//                 DGM
//                 <span className="block text-[#D4AF37] italic font-light">Gold</span>
//                 <span className="block">WORKS</span>
//               </h1>
              
//               <p className="text-xl text-gray-300 leading-relaxed">
//                 Where Tradition Meets Elegance
//               </p>
              
//               <p className="text-lg text-gray-400">
//                 Crafting your dreams into timeless treasures. Specialist in custom gold ornaments, repairs & designer jewellery.
//               </p>
              
//               <div className="flex flex-wrap gap-4">
//                 <Link to="/gallery">
//                   <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8860B] text-black font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105">
//                     Explore Collections
//                     <ArrowRight className="ml-2 w-5 h-5" />
//                   </Button>
//                 </Link>
//                 <Link to="/billing">
//                   <Button size="lg" variant="outline" className="border-2 border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-black px-8 py-6 text-lg transition-all duration-300">
//                     Price Calculator
//                   </Button>
//                 </Link>
//               </div>
//             </div>
            
//             <div className="relative">
//               <div className="relative z-10">
//                 <img 
//                   src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed" 
//                   alt="Luxury Gold Jewelry" 
//                   className="rounded-2xl shadow-2xl w-full transform transition-transform duration-500 hover:scale-105"
//                 />
//                 <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
//                   <Award className="w-8 h-8 text-[#D4AF37] mb-2" />
//                   <p className="text-sm font-bold text-gray-800">30+ Years</p>
//                   <p className="text-xs text-gray-600">of Excellence</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Live Rates Section */}
//       <section className="py-16 bg-gradient-to-r from-[#1a1410] to-[#2d1810]">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-white mb-2">Today's Rates</h2>
//             <p className="text-gray-400">Updated Daily</p>
//           </div>
          
//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             <Card className="bg-gradient-to-br from-[#D4AF37] to-[#B8860B] border-0 transform transition-transform duration-300 hover:scale-105">
//               <CardContent className="p-8 text-center">
//                 <Sparkles className="w-12 h-12 mx-auto mb-4 text-white" />
//                 <h3 className="text-2xl font-bold text-white mb-2">Gold Rate</h3>
//                 <p className="text-5xl font-bold text-white mb-2">₹{rates.gold}</p>
//                 <p className="text-white/80">per gram</p>
//               </CardContent>
//             </Card>
            
//             <Card className="bg-gradient-to-br from-gray-300 to-gray-400 border-0 transform transition-transform duration-300 hover:scale-105">
//               <CardContent className="p-8 text-center">
//                 <Gem className="w-12 h-12 mx-auto mb-4 text-gray-700" />
//                 <h3 className="text-2xl font-bold text-gray-800 mb-2">Silver Rate</h3>
//                 <p className="text-5xl font-bold text-gray-800 mb-2">₹{rates.silver}</p>
//                 <p className="text-gray-700">per gram</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 bg-[#faf8f5]">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
//             <p className="text-xl text-gray-600">Excellence in Every Detail</p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <Card key={index} className="border-2 border-gray-200 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2">
//                 <CardContent className="p-8 text-center">
//                   <div className="mb-6 flex justify-center">{service.icon}</div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
//                   <p className="text-gray-600 leading-relaxed">{service.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
          
//           <div className="text-center mt-12">
//             <Link to="/services">
//               <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8860B] text-black font-semibold px-8">
//                 View All Services
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Featured Collections */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Featured Collections</h2>
//             <p className="text-xl text-gray-600">Timeless Elegance</p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {featuredCollections.map((item, index) => (
//               <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-transform duration-500 hover:scale-105">
//                 <img 
//                   src={item.image} 
//                   alt={item.title} 
//                   className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
//                   <div className="text-white">
//                     <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
//                     <p className="text-gray-200">{item.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="text-center mt-12">
//             <Link to="/gallery">
//               <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8860B] text-black font-semibold px-8">
//                 View Full Gallery
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 bg-[#faf8f5]">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
//             <p className="text-xl text-gray-600">Trusted by Thousands</p>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <Card key={index} className="border-2 border-gray-200 hover:shadow-xl transition-shadow duration-300">
//                 <CardContent className="p-8">
//                   <div className="flex mb-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Sparkles key={i} className="w-5 h-5 text-[#D4AF37] fill-current" />
//                     ))}
//                   </div>
//                   <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
//                   <p className="font-bold text-gray-800">- {testimonial.name}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-br from-[#3d2817] via-[#5a3d2b] to-[#2d1810] text-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
//         </div>
        
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Create Your Dream Jewelry?</h2>
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Visit our showroom or contact us today for personalized consultation
//           </p>
          
//           <div className="flex flex-wrap justify-center gap-4">
//             <Link to="/contact">
//               <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8860B] text-black font-semibold px-8 py-6 text-lg">
//                 Book Appointment
//               </Button>
//             </Link>
//             <a href="tel:+917013174340">
//               <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#3d2817] px-8 py-6 text-lg">
//                 <Phone className="mr-2 w-5 h-5" />
//                 Call Now
//               </Button>
//             </a>
//           </div>
          
//           <div className="mt-12 pt-8 border-t border-white/20">
//             <p className="text-gray-300">📍 11/156, Mokshagundam Street, Proddatur, Kadapa Dist, Andhra Pradesh - 516360</p>
//             <p className="text-gray-300 mt-2">📞 +91 70131 74340</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold text-[var(--gold-primary)]">
        Welcome to DGM Jewellers 💎
      </h1>
      <p className="mt-4 text-lg text-[var(--dark-brown)]">
        Explore our exquisite collection of gold and diamond jewellery.
      </p>
      <button className="mt-8 bg-[var(--gold-primary)] text-white px-8 py-3 rounded-lg hover:bg-yellow-600">
        Discover More
      </button>
    </div>
  );
}
