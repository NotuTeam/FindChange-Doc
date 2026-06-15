import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function OnPageTOC() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const main = document.querySelector('.docs-prose');
    if (!main) return;
    const els = main.querySelectorAll('h2, h3');
    const items: Heading[] = Array.from(els)
      .filter((el) => el.id)
      .map((el) => ({
        id: el.id,
        text: el.textContent || '',
        level: el.tagName === 'H2' ? 2 : 3,
      }));
    setHeadings(items);

    if (items.length < 2) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -70% 0px' },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  if (headings.length < 2) return null;

  return (
    <div className="sticky top-20">
      <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
        On this page
      </p>
      <ul className="space-y-2 border-l border-border">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={cn(
                'block border-l-2 -ml-px text-sm transition-colors',
                h.level === 3 ? 'pl-6' : 'pl-3',
                activeId === h.id
                  ? 'border-accent text-accent'
                  : 'border-transparent text-zinc-500 hover:text-zinc-300',
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
