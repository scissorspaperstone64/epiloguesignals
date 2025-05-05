export interface Signal {
  id: string;
  title: string;
  description: string;
  category: Category;
  source: string;
  date: string;
  impact: 'high' | 'medium' | 'low';
  imageUrl: string;
  url: string;
}

export type Category = 
  | 'Aging Economy'
  | 'Career Longevity'
  | 'Marketing and Age'
  | 'Workforce Reinvention'
  | 'Generational Strategy'
  | 'Executive Reinvention'
  | '50+ Consumer Markets'
  | 'Longevity in Leadership'
  | 'Intergenerational Design'
  | 'AI and Experienced Workers';

export interface CategoryInfo {
  name: Category;
  description: string;
  color: string;
}

export interface VibeSignal {
  id: string;
  text: string;
  source: string;
  url: string;
}
