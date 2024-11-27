import React from 'react';
import type { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}