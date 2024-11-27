import React from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  icon: string;
}

export function SkillBar({ name, level, icon }: SkillBarProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <span className="text-2xl mr-2">{icon}</span>
        <span className="font-medium">{name}</span>
        <span className="ml-auto">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-500"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}