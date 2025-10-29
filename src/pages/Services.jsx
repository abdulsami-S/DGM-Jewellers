import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles, RefreshCw, Gem, Palette, Settings, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Sparkles className="w-16 h-16 text-[#D4AF37]" />,
      title: "Custom Gold Ornaments",
      description: "Bring your vision to life with our bespoke jewelry design service. Our expert craftsmen work closely with you to create unique pieces that reflect your personal style and story.",
      features: [
        "Personalized design consultation",
        "3D design previews available",
        "Choice of gold purity (18K, 22K, 24K)",
        "Gemstone selection and setting",
        "Traditional and contemporary designs"
      ],
      image: "https://images.unsplash.com/photo-1758995115857-2de1eb6283d0"
    },
    {
      icon: <RefreshCw className="w-16 h-16 text-[#D4AF37]" />,
      title: "Gold Repairs & Polishing",
      description: "Restore the brilliance of your precious jewelry with our expert repair and polishing services. We handle everything from minor fixes to complete restorations.",
      features: [
        "Chain and clasp repairs",
        "Stone replacement and resetting",
        "Professional polishing and buffing",
        "Size adjustments for rings and bangles",
        "Quick turnaround time"
      ],
      image: "https://images.unsplash.com/photo-1653903414925-adfc47c69b3c"
    },
    {
      icon: <Gem className="w-16 h-16 text-[#D4AF37]" />,
      title: "Antique Jewellery Restoration",
      description: "Preserve family heirlooms with our specialized antique jewelry restoration. We maintain the historical integrity while ensuring structural soundness.",
      features: [
        "Careful assessment and documentation",
        "Period-appropriate restoration techniques",
        "Cleaning and preservation",
        "Stone replacement with matching",
        "Certification available"
      ],
      image: "https://images.unsplash.com/photo-1611598935678-c88dca238fce"
    },
    {
      icon: <Palette className="w-16 h-16 text-[#D4AF37]" />,
      title: "Designer Jewellery Collection",
      description: "Explore our curated collection of contemporary and traditional designer jewelry, featuring the latest trends and timeless classics.",
      features: [
        "Exclusive designer collaborations",
        "Latest fashion trends",
        "Bridal and wedding collections",
        "Everyday wear jewelry",
        "Limited edition pieces"
      ],
      image: "https://images.unsplash.com/photo-1671642883395-0ab89c3ac890"
    },
    {
      icon: <Settings className="w-16 h-16 text-[#D4AF37]" />,
      title: "Gold Exchange & Buyback",
      description: "Trade in your old gold jewelry for new designs or cash. We offer competitive rates based on current market prices with transparent evaluation.",
      features: [
        "Free gold purity testing",
        "Current market rate pricing",
        "Instant evaluation",
        "Exchange for new jewelry",
        "Cash buyback option"
      ],
      image: "https://images.unsplash.com/photo-1690175867343-2af70ea57537"
    },
    {
      icon: <Award className="w-16 h-16 text-[#D4AF37]" />,
      title: "Certification & Appraisal",
      description: "Get professional certification and appraisal services for your jewelry for insurance, resale, or personal records.",
      features: [
        "Gold purity certification",
        "Gemstone authentication",
        "Detailed appraisal reports",
        "Insurance documentation",
        "Heritage jewelry valuation"
      ],
      image: "https://images.pexels.com/photos/34376048/pexels-photo-34376048.jpeg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#3d2817] via-[#5a3d2b] to-[#2d1810] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Comprehensive jewelry services tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-[#D4AF37] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-[#D4AF37] bg-gradient-to-br from-[#3d2817] to-[#5a3d2b] text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your jewelry needs or schedule a consultation
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8860B] text-black font-semibold px-8">
                    Book Consultation
                  </Button>
                </Link>
                <Link to="/billing">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#3d2817] px-8">
                    Calculate Price
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;

