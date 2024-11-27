import React from 'react';
import { SkillBar } from './SkillBar';
import { skills } from '../../data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Programming Languages</h3>
            {skills.languages.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Frameworks</h3>
            {skills.frameworks.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Databases</h3>
            {skills.databases.map((skill) => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}