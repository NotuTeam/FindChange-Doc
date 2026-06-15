import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function typeColor(type) {
    if (type === 'string')
        return 'text-blue-400 bg-blue-950/50';
    if (type.startsWith('T'))
        return 'text-purple-400 bg-purple-950/50';
    if (type === 'boolean')
        return 'text-green-400 bg-green-950/50';
    return 'text-zinc-400 bg-zinc-900';
}
export default function ParamTable({ params }) {
    return (_jsx("div", { className: "my-4 overflow-x-auto rounded-card border border-border", children: _jsxs("table", { className: "w-full text-sm", children: [_jsx("thead", { children: _jsxs("tr", { className: "border-b border-border bg-bg-surface", children: [_jsx("th", { className: "text-left font-semibold text-zinc-300 px-4 py-2.5", children: "Parameter" }), _jsx("th", { className: "text-left font-semibold text-zinc-300 px-4 py-2.5", children: "Type" }), _jsx("th", { className: "text-left font-semibold text-zinc-300 px-4 py-2.5", children: "Description" })] }) }), _jsx("tbody", { children: params.map((p) => (_jsxs("tr", { className: "border-b border-border/50 last:border-0", children: [_jsxs("td", { className: "px-4 py-2.5", children: [_jsx("code", { className: "font-mono text-accent", children: p.name }), p.required && _jsx("span", { className: "text-red-400 ml-1", children: "*" })] }), _jsx("td", { className: "px-4 py-2.5", children: _jsx("code", { className: `font-mono text-xs px-1.5 py-0.5 rounded ${typeColor(p.type)}`, children: p.type }) }), _jsx("td", { className: "px-4 py-2.5 text-zinc-400", children: p.description })] }, p.name))) })] }) }));
}
