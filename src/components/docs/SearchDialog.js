import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, Rocket, Code2, Workflow, HelpCircle } from 'lucide-react';
import { navSections } from '../../lib/navigation';
import { cn } from '../../lib/utils';
const sectionIcons = {
    Introduction: BookOpen,
    'Getting Started': Rocket,
    'API Reference': Code2,
    'How It Works': Workflow,
    'FAQ & Tips': HelpCircle,
};
const searchDescriptions = {
    '/': 'Watch React state in a live debug popup',
    '/features': 'Key features and capabilities',
    '/getting-started/installation': 'Install via npm, yarn, pnpm, or bun',
    '/getting-started/quick-start': '3-step guide to get going',
    '/api/use-debug-state': 'Watch a state value in the debug window',
    '/api/debug-watcher': 'Floating button that opens the debug window',
    '/api/window-controls': 'openDebugWindow, closeDebugWindow, isDebugWindowOpen',
    '/api/debug-store': 'Underlying singleton store',
    '/how-it-works': 'How findchange tracks and broadcasts state',
    '/how-it-works/production': 'Zero impact no-op in production',
    '/faq/patterns': 'Common usage patterns',
    '/faq/troubleshooting': 'Fix common issues',
};
export default function SearchDialog({ open, onOpenChange, }) {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const searchData = useMemo(() => {
        return navSections.flatMap((s) => s.items.map((item) => ({
            title: item.label,
            href: item.href,
            section: s.section,
            description: searchDescriptions[item.href] || '',
            keywords: item.label.toLowerCase().split(/[\s()]+/).filter(Boolean),
            icon: sectionIcons[s.section] || BookOpen,
        })));
    }, []);
    const filtered = useMemo(() => {
        if (!query)
            return searchData;
        const q = query.toLowerCase();
        return searchData.filter((item) => {
            return (item.title.toLowerCase().includes(q) ||
                item.description.toLowerCase().includes(q) ||
                item.keywords.some((k) => k.includes(q)));
        });
    }, [query, searchData]);
    if (!open)
        return null;
    const grouped = filtered.reduce((acc, item) => {
        (acc[item.section] = acc[item.section] || []).push(item);
        return acc;
    }, {});
    const handleSelect = (href) => {
        navigate(href);
        onOpenChange(false);
        setQuery('');
    };
    return (_jsx("div", { className: "fixed inset-0 z-[60] flex items-start justify-center pt-[15vh] px-4 bg-black/60 backdrop-blur-sm", onClick: () => onOpenChange(false), children: _jsxs("div", { className: "w-full max-w-xl bg-bg-surface border border-border rounded-card shadow-2xl overflow-hidden", onClick: (e) => e.stopPropagation(), children: [_jsxs("div", { className: "flex items-center border-b border-border px-4", children: [_jsx(Search, { size: 18, className: "text-zinc-500 shrink-0" }), _jsx("input", { autoFocus: true, type: "text", placeholder: "Search documentation...", value: query, onChange: (e) => setQuery(e.target.value), className: "flex-1 bg-transparent border-0 outline-none px-3 py-3 text-white placeholder-zinc-600" }), _jsx("button", { onClick: () => onOpenChange(false), className: "text-zinc-500 hover:text-white", children: _jsx(X, { size: 18 }) })] }), _jsxs("div", { className: "max-h-[50vh] overflow-y-auto p-2", children: [Object.entries(grouped).length === 0 && (_jsx("p", { className: "text-center text-zinc-500 py-8 text-sm", children: "No results found." })), Object.entries(grouped).map(([section, items]) => (_jsxs("div", { className: "mb-2", children: [_jsx("p", { className: "text-xs font-semibold text-zinc-600 uppercase tracking-wider px-2 py-1.5", children: section }), items.map((item) => {
                                    const Icon = item.icon;
                                    return (_jsxs("button", { onClick: () => handleSelect(item.href), className: cn('w-full flex items-center gap-3 px-2 py-2 rounded-md text-left', 'hover:bg-bg-elevated transition-colors'), children: [_jsx(Icon, { size: 16, className: "text-zinc-500 shrink-0" }), _jsxs("div", { className: "min-w-0", children: [_jsx("p", { className: "text-sm text-white truncate", children: item.title }), _jsx("p", { className: "text-xs text-zinc-500 truncate", children: item.description })] })] }, item.href));
                                })] }, section)))] })] }) }));
}
