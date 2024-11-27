export interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frameworks' | 'databases' | 'tools';
  icon: string;
}