import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function PropTable({ props }) {
    return (_jsx("div", { className: "my-4 overflow-x-auto rounded-card border border-border", children: _jsxs("table", { className: "w-full text-sm", children: [_jsx("thead", { children: _jsxs("tr", { className: "border-b border-border bg-bg-surface", children: [_jsx("th", { className: "text-left font-semibold text-zinc-300 px-4 py-2.5", children: "Prop" }), _jsx("th", { className: "text-left font-semibold text-zinc-300 px-4 py-2.5", children: "Type" }), _jsx("th", { className: "text-left font-semibold text-zinc-300 px-4 py-2.5", children: "Default" }), _jsx("th", { className: "text-left font-semibold text-zinc-300 px-4 py-2.5", children: "Description" })] }) }), _jsx("tbody", { children: props.map((p) => {
                        const isUnion = p.type.includes('|');
                        const types = isUnion
                            ? p.type.split('|').map((t) => t.trim().replace(/'/g, ''))
                            : [p.type];
                        return (_jsxs("tr", { className: "border-b border-border/50 last:border-0", children: [_jsx("td", { className: "px-4 py-2.5", children: _jsx("code", { className: "font-mono text-accent", children: p.prop }) }), _jsx("td", { className: "px-4 py-2.5", children: _jsx("div", { className: "flex flex-wrap gap-1", children: types.map((t) => (_jsx("code", { className: "font-mono text-xs px-1.5 py-0.5 rounded text-zinc-400 bg-zinc-900", children: t }, t))) }) }), _jsx("td", { className: "px-4 py-2.5", children: p.default ? (_jsx("code", { className: "font-mono text-xs text-zinc-400 bg-zinc-900 px-1.5 py-0.5 rounded", children: p.default })) : (_jsx("span", { className: "text-zinc-600", children: "\u2014" })) }), _jsx("td", { className: "px-4 py-2.5 text-zinc-400", children: p.description })] }, p.prop));
                    }) })] }) }));
}
