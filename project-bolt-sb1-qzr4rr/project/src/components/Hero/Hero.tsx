import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500"
          />
          <h1 className="text-5xl font-bold mb-4">John Developer</h1>
          <p className="text-xl text-gray-300 mb-8">Senior Software Engineer</p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Passionate about building scalable applications with Java, Python, and SQL.
            10+ years of experience in enterprise software development.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a href="#" className="transform hover:scale-110 transition-transform">
            <Github className="w-8 h-8" />
          </a>
          <a href="#" className="transform hover:scale-110 transition-transform">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="#" className="transform hover:scale-110 transition-transform">
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}