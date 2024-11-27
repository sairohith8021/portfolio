export const skills = {
  languages: [
    { name: 'Java', level: 90, category: 'languages', icon: '☕' },
    { name: 'Python', level: 85, category: 'languages', icon: '🐍' },
    { name: 'SQL', level: 88, category: 'languages', icon: '📊' }
  ],
  frameworks: [
    { name: 'Spring Boot', level: 85, category: 'frameworks', icon: '🍃' },
    { name: 'Django', level: 80, category: 'frameworks', icon: '🎯' },
    { name: 'Flask', level: 75, category: 'frameworks', icon: '🌶️' }
  ],
  databases: [
    { name: 'PostgreSQL', level: 85, category: 'databases', icon: '🐘' },
    { name: 'MySQL', level: 88, category: 'databases', icon: '🐬' },
    { name: 'MongoDB', level: 75, category: 'databases', icon: '🍃' }
  ]
} as const;