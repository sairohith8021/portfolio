import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-400">john.developer@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-gray-400">San Francisco, CA</p>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}