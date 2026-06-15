import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Copy, CheckCheck } from 'lucide-react';
export default function CodeBlock({ code, language = 'tsx', filename, highlightLines = [], }) {
    const [copied, setCopied] = useState(false);
    const lines = code.trim().split('\n');
    const handleCopy = () => {
        navigator.clipboard.writeText(code.trim());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (_jsxs("div", { className: "rounded-card overflow-hidden border border-border bg-[#0a0a0a] my-4", children: [_jsxs("div", { className: "flex items-center justify-between px-3 py-2 border-b border-border bg-bg-surface", children: [_jsx("span", { className: "text-xs text-zinc-400 font-mono", children: filename || language }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-[10px] uppercase text-zinc-600", children: language }), _jsx("button", { onClick: handleCopy, className: "p-1 hover:bg-bg-elevated rounded text-zinc-400 hover:text-white transition-colors", children: copied ? _jsx(CheckCheck, { size: 14, className: "text-green-500" }) : _jsx(Copy, { size: 14 }) })] })] }), _jsx("pre", { className: "p-4 overflow-x-auto text-[13px] leading-relaxed", children: _jsx("code", { className: "font-mono", children: lines.map((line, i) => {
                        const lineNum = i + 1;
                        const isHighlighted = highlightLines.includes(lineNum);
                        return (_jsx("div", { className: isHighlighted ? '-mx-4 px-4 bg-accent/10 border-l-2 border-accent' : '', children: line || ' ' }, i));
                    }) }) })] }));
}
