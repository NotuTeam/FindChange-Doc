import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
export default function BackToTop() {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const handler = () => setVisible(window.scrollY > 300);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);
    if (!visible)
        return null;
    return (_jsx("button", { onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }), className: "fixed bottom-6 right-6 z-40 w-10 h-10 flex items-center justify-center rounded-full border border-border bg-bg-surface text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors shadow-lg", children: _jsx(ArrowUp, { size: 18 }) }));
}
