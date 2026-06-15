import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Radar, Github, Package2, Search, Menu, X } from 'lucide-react';
import SearchDialog from '../docs/SearchDialog';
import Sidebar from './Sidebar';
export default function Navbar() {
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const handler = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setSearchOpen(true);
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);
    // Close mobile menu on navigation
    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);
    return (_jsxs(_Fragment, { children: [_jsxs("header", { className: "fixed top-0 left-0 right-0 h-14 z-50 flex items-center justify-between px-4 md:px-6 bg-bg/80 backdrop-blur-md border-b border-border", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("button", { className: "lg:hidden p-1.5 hover:bg-bg-surface rounded-md", onClick: () => setMobileOpen(!mobileOpen), children: mobileOpen ? _jsx(X, { size: 20 }) : _jsx(Menu, { size: 20 }) }), _jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [_jsx(Radar, { className: "text-accent", size: 22 }), _jsx("span", { className: "font-bold text-white", children: "findchange" }), _jsx("span", { className: "text-xs text-zinc-500 border border-border rounded-badge px-1.5 py-0.5", children: "v1.0.0" })] })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("button", { onClick: () => setSearchOpen(true), className: "flex items-center gap-2 px-3 py-1.5 bg-bg-surface border border-border rounded-card text-sm text-zinc-500 hover:border-zinc-600 transition-colors", children: [_jsx(Search, { size: 15 }), _jsx("span", { className: "hidden md:inline", children: "Search..." }), _jsx("kbd", { className: "hidden md:inline text-xs bg-bg-elevated px-1.5 py-0.5 rounded border border-border", children: "\u2318K" })] }), _jsx("a", { href: "https://github.com/swula/findchange", target: "_blank", rel: "noopener noreferrer", className: "p-1.5 hover:bg-bg-surface rounded-md text-zinc-400 hover:text-white transition-colors", children: _jsx(Github, { size: 20 }) }), _jsx("a", { href: "https://www.npmjs.com/package/findchange", target: "_blank", rel: "noopener noreferrer", className: "p-1.5 hover:bg-bg-surface rounded-md text-zinc-400 hover:text-white transition-colors", children: _jsx(Package2, { size: 20 }) })] })] }), mobileOpen && (_jsx("div", { className: "fixed top-14 left-0 right-0 bottom-0 z-40 lg:hidden bg-bg/95 backdrop-blur-sm overflow-y-auto pt-4 px-4", children: _jsx(MobileNav, {}) })), _jsx(SearchDialog, { open: searchOpen, onOpenChange: setSearchOpen })] }));
}
function MobileNav() {
    return (_jsx("nav", { children: _jsx(Sidebar, { mobile: true }) }));
}
