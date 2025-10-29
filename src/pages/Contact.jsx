import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save appointment to localStorage
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    appointments.push({
      ...formData,
      id: Date.now(),
      status: 'pending',
      createdAt: new Date().toISOString()
    });
    localStorage.setItem('appointments', JSON.stringify(appointments));
    
    toast({
      title: "Appointment Request Sent!",
      description: "We'll contact you shortly to confirm your appointment.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#3d2817] via-[#5a3d2b] to-[#2d1810] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Get in touch with us for personalized consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-[#faf8f5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-gray-200 hover:border-[#D4AF37] transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Phone className="w-10 h-10 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
                <a href="tel:+917013174340" className="text-gray-600 hover:text-[#D4AF37] transition-colors">
                  +91 70131 74340
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-gray-200 hover:border-[#D4AF37] transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Mail className="w-10 h-10 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="font-bold text-gray-800 mb-2">Email</h3>
                <a href="mailto:info@dgmgoldworks.com" className="text-gray-600 hover:text-[#D4AF37] transition-colors">
                  info@dgmgoldworks.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-gray-200 hover:border-[#D4AF37] transition-all duration-300">
              <CardContent className="p-6 text-center">
                <MapPin className="w-10 h-10 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="font-bold text-gray-800 mb-2">Location</h3>
                <p className="text-gray-600 text-sm">
                  11/156, Mokshagundam St<br />Proddatur, AP - 516360
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-gray-200 hover:border-[#D4AF37] transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Clock className="w-10 h-10 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="font-bold text-gray-800 mb-2">Hours</h3>
                <p className="text-gray-600 text-sm">
                  Mon - Sat: 10AM - 8PM<br />Sunday: Closed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Appointment Form & Map */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Appointment Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Book an Appointment</h2>
              <p className="text-gray-600 mb-8">
                Schedule a consultation with our experts to discuss your jewelry needs
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input 
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Preferred Time *</Label>
                    <Input 
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1"
                    placeholder="Tell us about your jewelry requirements..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-[#D4AF37] hover:bg-[#B8860B] text-black font-semibold"
                >
                  Book Appointment
                </Button>
              </form>
            </div>
            
            {/* Map & WhatsApp */}
            <div className="space-y-6">
              <Card className="border-2 border-gray-200">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.6!2d78.5!3d14.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQ1JzAwLjAiTiA3OMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-[#25D366] bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">WhatsApp Us</h3>
                  <p className="mb-6">Quick response via WhatsApp for urgent inquiries</p>
                  <a href="https://wa.me/917013174340" target="_blank" rel="noopener noreferrer">
                    <Button 
                      size="lg" 
                      className="w-full bg-white text-[#25D366] hover:bg-gray-100 font-semibold"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Chat on WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
