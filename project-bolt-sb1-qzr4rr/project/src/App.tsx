import React from 'react';
import { Hero } from './components/Hero/Hero';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;