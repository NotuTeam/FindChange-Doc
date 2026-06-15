import {
  BookOpen,
  Rocket,
  Code2,
  Workflow,
  HelpCircle,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface NavSection {
  section: string;
  icon: LucideIcon;
  items: NavItem[];
}

export const navSections: NavSection[] = [
  {
    section: 'Introduction',
    icon: BookOpen,
    items: [
      { label: 'What is findchange?', href: '/' },
      { label: 'Features', href: '/features' },
    ],
  },
  {
    section: 'Getting Started',
    icon: Rocket,
    items: [
      { label: 'Installation', href: '/getting-started/installation' },
      { label: 'Quick Start', href: '/getting-started/quick-start' },
    ],
  },
  {
    section: 'API Reference',
    icon: Code2,
    items: [
      { label: 'useDebugState()', href: '/api/use-debug-state', badge: 'Core' },
      { label: '<DebugWatcher />', href: '/api/debug-watcher', badge: 'Core' },
      { label: 'Window Controls', href: '/api/window-controls' },
      { label: 'debugStore', href: '/api/debug-store' },
    ],
  },
  {
    section: 'How It Works',
    icon: Workflow,
    items: [
      { label: 'Architecture Overview', href: '/how-it-works' },
      { label: 'Production Behavior', href: '/how-it-works/production' },
    ],
  },
  {
    section: 'FAQ & Tips',
    icon: HelpCircle,
    items: [
      { label: 'Common Patterns', href: '/faq/patterns' },
      { label: 'Troubleshooting', href: '/faq/troubleshooting' },
    ],
  },
];

export const allPages = navSections.flatMap((s) => s.items);
