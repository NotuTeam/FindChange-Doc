import { Link, useLocation } from 'react-router-dom';
import { navSections } from '../../lib/navigation';
import { cn } from '../../lib/utils';

export default function Sidebar({ mobile = false }: { mobile?: boolean }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside
      className={cn(
        'fixed lg:sticky top-14 lg:top-14 left-0 z-30',
        'w-[240px] h-[calc(100vh-3.5rem)] shrink-0',
        'overflow-y-auto border-r border-border',
        'bg-bg hidden lg:block',
        mobile && '!block bg-bg/95 backdrop-blur-sm',
      )}
    >
      <nav className="p-4 space-y-6">
        {navSections.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.section}>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 px-2">
                <Icon size={13} />
                {section.section}
              </div>
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const active = currentPath === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className={cn(
                          'flex items-center justify-between px-2 py-1.5 text-sm rounded-md transition-colors',
                          active
                            ? 'bg-accent/10 text-accent font-medium'
                            : 'text-zinc-400 hover:text-white hover:bg-bg-surface',
                        )}
                      >
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="text-[10px] bg-accent/20 text-accent px-1.5 py-0.5 rounded-badge font-medium">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
