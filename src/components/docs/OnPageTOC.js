import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
export default function OnPageTOC() {
    const [headings, setHeadings] = useState([]);
    const [activeId, setActiveId] = useState('');
    useEffect(() => {
        const main = document.querySelector('.docs-prose');
        if (!main)
            return;
        const els = main.querySelectorAll('h2, h3');
        const items = Array.from(els)
            .filter((el) => el.id)
            .map((el) => ({
            id: el.id,
            text: el.textContent || '',
            level: el.tagName === 'H2' ? 2 : 3,
        }));
        setHeadings(items);
        if (items.length < 2)
            return;
        const observer = new IntersectionObserver((entries) => {
            const visible = entries.filter((e) => e.isIntersecting);
            if (visible.length > 0) {
                setActiveId(visible[0].target.id);
            }
        }, { rootMargin: '-80px 0px -70% 0px' });
        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [location.pathname]);
    if (headings.length < 2)
        return null;
    return (_jsxs("div", { className: "sticky top-20", children: [_jsx("p", { className: "text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3", children: "On this page" }), _jsx("ul", { className: "space-y-2 border-l border-border", children: headings.map((h) => (_jsx("li", { children: _jsx("a", { href: `#${h.id}`, onClick: (e) => {
                            e.preventDefault();
                            document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                        }, className: cn('block border-l-2 -ml-px text-sm transition-colors', h.level === 3 ? 'pl-6' : 'pl-3', activeId === h.id
                            ? 'border-accent text-accent'
                            : 'border-transparent text-zinc-500 hover:text-zinc-300'), children: h.text }) }, h.id))) })] }));
}
