import { Link } from 'react-router-dom';
import { SearchX } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="docs-prose text-center pt-20">
      <SearchX size={64} className="text-zinc-700 mx-auto mb-4" />
      <h1 className="!text-center">Page not found</h1>
      <p className="!text-center">
        The docs page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 mt-4 bg-accent text-black font-semibold px-5 py-2.5 rounded-card hover:bg-accent/90 transition-colors"
      >
        Back to homepage
      </Link>
    </div>
  );
}
