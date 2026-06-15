import { Link } from 'react-router-dom';
import { Radar, Github, Package2, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-surface mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-2">
            <Radar className="text-accent" size={20} />
            <span className="font-bold text-white">findchange</span>
          </Link>
          <p className="text-sm text-zinc-500">Watch React state in a live debug popup.</p>
          <p className="text-xs text-zinc-600 mt-2">MIT License</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link to="/" className="text-zinc-400 hover:text-white transition-colors">Documentation</Link>
          <a
            href="https://github.com/swula/findchange"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
          >
            GitHub <ExternalLink size={12} />
          </a>
          <a
            href="https://www.npmjs.com/package/findchange"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
          >
            npm <ExternalLink size={12} />
          </a>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-zinc-600">
        &copy; 2026 findchange
      </div>
    </footer>
  );
}
