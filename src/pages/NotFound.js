import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { SearchX } from 'lucide-react';
export default function NotFound() {
    return (_jsxs("div", { className: "docs-prose text-center pt-20", children: [_jsx(SearchX, { size: 64, className: "text-zinc-700 mx-auto mb-4" }), _jsx("h1", { className: "!text-center", children: "Page not found" }), _jsx("p", { className: "!text-center", children: "The docs page you're looking for doesn't exist." }), _jsx(Link, { to: "/", className: "inline-flex items-center gap-2 mt-4 bg-accent text-black font-semibold px-5 py-2.5 rounded-card hover:bg-accent/90 transition-colors", children: "Back to homepage" })] }));
}
