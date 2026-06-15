import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from 'react-router-dom';
import { navSections } from '../../lib/navigation';
import { cn } from '../../lib/utils';
export default function Sidebar({ mobile = false }) {
    const location = useLocation();
    const currentPath = location.pathname;
    return (_jsx("aside", { className: cn('fixed lg:sticky top-14 lg:top-14 left-0 z-30', 'w-[240px] h-[calc(100vh-3.5rem)] shrink-0', 'overflow-y-auto border-r border-border', 'bg-bg hidden lg:block', mobile && '!block bg-bg/95 backdrop-blur-sm'), children: _jsx("nav", { className: "p-4 space-y-6", children: navSections.map((section) => {
                const Icon = section.icon;
                return (_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-1.5 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 px-2", children: [_jsx(Icon, { size: 13 }), section.section] }), _jsx("ul", { className: "space-y-0.5", children: section.items.map((item) => {
                                const active = currentPath === item.href;
                                return (_jsx("li", { children: _jsxs(Link, { to: item.href, className: cn('flex items-center justify-between px-2 py-1.5 text-sm rounded-md transition-colors', active
                                            ? 'bg-accent/10 text-accent font-medium'
                                            : 'text-zinc-400 hover:text-white hover:bg-bg-surface'), children: [_jsx("span", { children: item.label }), item.badge && (_jsx("span", { className: "text-[10px] bg-accent/20 text-accent px-1.5 py-0.5 rounded-badge font-medium", children: item.badge }))] }) }, item.href));
                            }) })] }, section.section));
            }) }) }));
}
