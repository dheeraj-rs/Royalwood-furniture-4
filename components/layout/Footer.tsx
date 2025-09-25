'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Send,
  Heart,
  Crown
} from 'lucide-react';

export function Footer() {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Story', href: '/story' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' },
        { label: 'Sustainability', href: '/sustainability' }
      ]
    },
    {
      title: 'Products',
      links: [
        { label: 'Living Room', href: '/categories/living-room' },
        { label: 'Bedroom', href: '/categories/bedroom' },
        { label: 'Dining', href: '/categories/dining' },
        { label: 'Office', href: '/categories/office' },
        { label: 'Storage', href: '/categories/storage' }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Design Consultation', href: '/services/consultation' },
        { label: 'Custom Furniture', href: '/services/custom' },
        { label: 'Installation', href: '/services/installation' },
        { label: 'Maintenance', href: '/services/maintenance' },
        { label: 'Warranty', href: '/services/warranty' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'Shipping Info', href: '/shipping' },
        { label: 'Returns', href: '/returns' },
        { label: 'Size Guide', href: '/size-guide' }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', color: 'hover:text-blue-400' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', color: 'hover:text-sky-400' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', color: 'hover:text-pink-400' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', color: 'hover:text-red-400' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', color: 'hover:text-blue-500' }
  ];

  const contactInfo = [
    { 
      icon: <MapPin className="w-5 h-5" />, 
      title: 'Visit Our Showroom',
      content: '123 Luxury Avenue, Premium District, Mumbai 400001' 
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      title: 'Call Us',
      content: '+91 98765 43210' 
    },
    { 
      icon: <Mail className="w-5 h-5" />, 
      title: 'Email Us',
      content: 'hello@royalwood.com' 
    }
  ];

  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.02)_25%,rgba(255,255,255,.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,.02)_75%)] bg-[length:60px_60px]"></div>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 backdrop-blur-sm border border-yellow-400/20 rounded-full px-6 py-2 mb-6">
              <Crown className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400 tracking-wider uppercase">Stay Updated</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Be the first to know about new collections, exclusive offers, and design inspiration.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-yellow-400/50 focus:bg-white/15"
              />
              <Button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700 font-semibold px-8 transition-all duration-300 hover:scale-105">
                <Send className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-black font-bold text-2xl">R</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                Royalwood
              </span>
            </Link>
            
            <p className="text-white/70 leading-relaxed">
              Crafting luxury furniture that transforms spaces into masterpieces. 
              Quality, elegance, and comfort in every piece.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/70 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/20`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Awards */}
            <div className="pt-4">
              <div className="text-sm text-white/50 mb-2">Trusted by 50,000+ customers</div>
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Crown className="w-3 h-3 text-black" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="text-white font-semibold text-lg mb-4 relative">
                  {section.title}
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-yellow-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="text-white font-semibold text-lg relative">
              Get in Touch
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
            </h4>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="p-2 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-lg text-yellow-400 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{info.title}</div>
                    <div className="text-white/70 text-sm leading-relaxed">{info.content}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <h5 className="text-white font-medium mb-2">Business Hours</h5>
              <div className="text-white/70 text-sm space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Sat:</span>
                  <span>10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>11:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 Royalwood Furniture. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-white/60 hover:text-yellow-400 text-sm transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-yellow-400 text-sm transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-white/60 hover:text-yellow-400 text-sm transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}