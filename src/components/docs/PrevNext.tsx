import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { allPages } from '../../lib/navigation';

export default function PrevNext() {
  const location = useLocation();
  const currentIndex = allPages.findIndex((p) => p.href === location.pathname);
  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const next = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  return (
    <div className="flex justify-between gap-4 mt-12 pt-6 border-t border-border">
      {prev ? (
        <Link
          to={prev.href}
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          <div>
            <p className="text-xs text-zinc-600">Previous</p>
            <p>{prev.label}</p>
          </div>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          to={next.href}
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group text-right"
        >
          <div>
            <p className="text-xs text-zinc-600">Next</p>
            <p>{next.label}</p>
          </div>
          <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
