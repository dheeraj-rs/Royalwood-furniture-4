'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Calendar,
  User,
  Building,
  Star,
  CheckCircle
} from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Our Showroom',
      details: [
        '123 Luxury Avenue',
        'Premium District',
        'Mumbai 400001, India'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: [
        '+91 98765 43210',
        '+91 22 1234 5678',
        'Toll Free: 1800 123 4567'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: [
        'hello@royalwood.com',
        'sales@royalwood.com',
        'support@royalwood.com'
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: [
        'Mon - Sat: 10:00 AM - 8:00 PM',
        'Sunday: 11:00 AM - 6:00 PM',
        'Holidays: By Appointment'
      ],
      color: 'from-yellow-400 to-yellow-600'
    }
  ];

  const inquiryTypes = [
    'General Inquiry',
    'Product Information',
    'Custom Design',
    'Bulk Orders',
    'After Sales Support',
    'Partnership',
    'Media & Press'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        inquiryType: ''
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-6 py-2 mb-6">
              <MessageCircle className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400 tracking-wider uppercase">Get in Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Contact
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Royalwood
              </span>
            </h1>
            
            <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
              Have questions about our furniture? Need design consultation? We're here to help you create 
              the perfect space. Reach out to our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 hover:border-yellow-400/30 rounded-2xl p-8 text-center transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${info.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                  {info.title}
                </h3>
                
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-white/70">
                      {detail}
                    </p>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Send us a Message</h2>
                  <p className="text-white/70">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                    <p className="text-white/70 mb-6">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/80 font-medium mb-2">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-5 h-5 text-white/50" />
                          <Input
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="pl-12 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-white/80 font-medium mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-5 h-5 text-white/50" />
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="pl-12 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/80 font-medium mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 w-5 h-5 text-white/50" />
                          <Input
                            type="tel"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="pl-12 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-white/80 font-medium mb-2">
                          Company (Optional)
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 w-5 h-5 text-white/50" />
                          <Input
                            type="text"
                            placeholder="Enter company name"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            className="pl-12 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/80 font-medium mb-2">
                        Inquiry Type
                      </label>
                      <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent className="bg-black/95 backdrop-blur-xl border-white/10">
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type} value={type} className="text-white hover:bg-white/10">
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-white/80 font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter message subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white/80 font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Tell us about your requirements..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="min-h-[120px] bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50 resize-none"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold py-3 text-lg"
                    >
                      {isSubmitting ? (
                        'Sending Message...'
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Find Our Showroom</h3>
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                    <p className="text-white/70">Interactive Map</p>
                    <p className="text-white/50 text-sm">Coming Soon</p>
                  </div>
                </div>
                <div className="space-y-3 text-white/80">
                  <p className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                    123 Luxury Avenue, Premium District, Mumbai 400001
                  </p>
                  <p className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-green-400" />
                    +91 98765 43210
                  </p>
                  <p className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-blue-400" />
                    Mon-Sat: 10AM-8PM, Sun: 11AM-6PM
                  </p>
                </div>
              </Card>

              {/* Quick Services */}
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Services</h3>
                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-white/20 text-white hover:bg-white/10 hover:border-yellow-400/30"
                  >
                    <Calendar className="w-5 h-5 mr-3 text-yellow-400" />
                    Schedule Design Consultation
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start border-white/20 text-white hover:bg-white/10 hover:border-yellow-400/30"
                  >
                    <Star className="w-5 h-5 mr-3 text-yellow-400" />
                    Request Custom Quote
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start border-white/20 text-white hover:bg-white/10 hover:border-yellow-400/30"
                  >
                    <MessageCircle className="w-5 h-5 mr-3 text-yellow-400" />
                    Live Chat Support
                  </Button>
                </div>
              </Card>

              {/* FAQ */}
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">What's your delivery time?</h4>
                    <p className="text-white/70 text-sm">Standard delivery is 5-7 business days. Express delivery available.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Do you offer assembly service?</h4>
                    <p className="text-white/70 text-sm">Yes, we provide professional assembly service for all furniture.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">What's your return policy?</h4>
                    <p className="text-white/70 text-sm">30-day return policy with free pickup for defective items.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}