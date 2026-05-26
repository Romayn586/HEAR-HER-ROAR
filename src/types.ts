export interface Artist {
  id: string;
  name: string;
  type: 'Solo' | 'Band' | '独唱歌手' | '乐队';
  origin: string;
  genre: string;
  bio: string;
  quoteSelection: string;
  setlist: { title: string; desc: string }[];
  members?: { name: string; role: string; bio: string }[];
  posterTitle: string;
}

export interface TimelineEvent {
  id: string;
  date: string; // Formatting: DD/MM/YYYY description
  title: string;
  category: 'coordination' | 'marketing' | 'sponsorship' | 'execution' | 'challenges' | 'wrapup';
  description: string;
  notes?: string;
  artifact?: {
    type: 'chat' | 'email' | 'receipt' | 'contract' | 'stats' | 'moments';
    title: string;
    englishTitle: string;
    sender?: string;
    recipient?: string;
    details: string; // raw content/dialogue text or JSON-like representation
    translation?: string; // translations if original was bilingual/Chinese
  };
}

export interface Sponsor {
  id: string;
  name: string;
  type: string;
  logoText: string;
  logoBg: string;
  contribution: string;
  alignedValue: string;
  description: string;
  linkText?: string;
}

export interface MetricItem {
  id: string;
  label: string;
  value: string | number;
  suffix?: string;
  prefix?: string;
  desc: string;
}

export interface ReflectionItem {
  id: string;
  title: string;
  theory: string;
  problem: string;
  impact: string;
  resolution: string;
  learning: string;
}
