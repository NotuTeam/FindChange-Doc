import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { allPages } from '../../lib/navigation';
export default function PrevNext() {
    const location = useLocation();
    const currentIndex = allPages.findIndex((p) => p.href === location.pathname);
    if (currentIndex === -1)
        return null;
    const prev = currentIndex > 0 ? allPages[currentIndex - 1] : null;
    const next = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;
    return (_jsxs("div", { className: "flex justify-between gap-4 mt-12 pt-6 border-t border-border", children: [prev ? (_jsxs(Link, { to: prev.href, className: "flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group", children: [_jsx(ArrowLeft, { size: 16, className: "group-hover:-translate-x-0.5 transition-transform" }), _jsxs("div", { children: [_jsx("p", { className: "text-xs text-zinc-600", children: "Previous" }), _jsx("p", { children: prev.label })] })] })) : (_jsx("div", {})), next ? (_jsxs(Link, { to: next.href, className: "flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group text-right", children: [_jsxs("div", { children: [_jsx("p", { className: "text-xs text-zinc-600", children: "Next" }), _jsx("p", { children: next.label })] }), _jsx(ArrowRight, { size: 16, className: "group-hover:translate-x-0.5 transition-transform" })] })) : (_jsx("div", {}))] }));
}
