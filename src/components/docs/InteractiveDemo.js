import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useDebugState, DebugWatcher } from 'findchange';
import { Bug, ChevronRight, ChevronLeft, Check, ShoppingBag, User, CreditCard, RotateCcw, } from 'lucide-react';
const EMPTY_FORM = {
    name: '',
    email: '',
    product: 'T-Shirt',
    quantity: 1,
    shipping: 'standard',
    paymentMethod: 'card',
};
const STEPS = ['Profile', 'Order', 'Payment'];
const STEP_ICONS = [User, ShoppingBag, CreditCard];
export default function InteractiveDemo() {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState(EMPTY_FORM);
    const [completed, setCompleted] = useState(false);
    // These states are watched by findchange in real-time
    useDebugState('demo.form', form);
    useDebugState('demo.currentStep', step);
    useDebugState('demo.completed', completed);
    const update = (key, value) => {
        setForm((prev) => ({ ...prev, [key]: value }));
    };
    const reset = () => {
        setForm(EMPTY_FORM);
        setStep(0);
        setCompleted(false);
    };
    if (completed) {
        return (_jsx("div", { className: "not-prose", children: _jsx(DemoShell, { onReset: reset, children: _jsxs("div", { className: "text-center py-8", children: [_jsx("div", { className: "w-14 h-14 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-4", children: _jsx(Check, { className: "text-green-400", size: 28 }) }), _jsx("h3", { className: "text-lg font-semibold text-white mb-1", children: "Order placed!" }), _jsxs("p", { className: "text-sm text-zinc-400 mb-6", children: [form.quantity, "x ", form.product, " for ", form.name] }), _jsxs("button", { onClick: reset, className: "inline-flex items-center gap-2 text-sm text-accent hover:underline", children: [_jsx(RotateCcw, { size: 14 }), " Try again"] })] }) }) }));
    }
    return (_jsxs("div", { className: "not-prose", children: [_jsxs(DemoShell, { onReset: step !== 0 || form !== EMPTY_FORM ? reset : undefined, children: [_jsx("div", { className: "flex items-center gap-2 mb-6", children: STEPS.map((label, i) => {
                            const Icon = STEP_ICONS[i];
                            const isActive = i === step;
                            const isDone = i < step;
                            return (_jsxs("div", { className: "flex items-center flex-1 last:flex-none", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: `w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${isActive
                                                    ? 'bg-accent text-black'
                                                    : isDone
                                                        ? 'bg-green-500/20 text-green-400'
                                                        : 'bg-zinc-800 text-zinc-500'}`, children: isDone ? _jsx(Check, { size: 14 }) : _jsx(Icon, { size: 13 }) }), _jsx("span", { className: `text-xs hidden sm:inline ${isActive ? 'text-white font-medium' : 'text-zinc-500'}`, children: label })] }), i < STEPS.length - 1 && (_jsx("div", { className: `h-px flex-1 mx-2 ${isDone ? 'bg-green-500/30' : 'bg-border'}` }))] }, label));
                        }) }), step === 0 && (_jsxs("div", { className: "space-y-3", children: [_jsx(Field, { label: "Name", children: _jsx("input", { type: "text", value: form.name, onChange: (e) => update('name', e.target.value), placeholder: "Jane Doe", className: "demo-input" }) }), _jsx(Field, { label: "Email", children: _jsx("input", { type: "email", value: form.email, onChange: (e) => update('email', e.target.value), placeholder: "jane@example.com", className: "demo-input" }) })] })), step === 1 && (_jsxs("div", { className: "space-y-3", children: [_jsx(Field, { label: "Product", children: _jsxs("select", { value: form.product, onChange: (e) => update('product', e.target.value), className: "demo-input", children: [_jsx("option", { children: "T-Shirt" }), _jsx("option", { children: "Hoodie" }), _jsx("option", { children: "Mug" }), _jsx("option", { children: "Sticker Pack" })] }) }), _jsx(Field, { label: `Quantity: ${form.quantity}`, children: _jsx("input", { type: "range", min: 1, max: 10, value: form.quantity, onChange: (e) => update('quantity', Number(e.target.value)), className: "w-full accent-amber-500" }) }), _jsx(Field, { label: "Shipping", children: _jsx("div", { className: "flex gap-2", children: ['standard', 'express'].map((s) => (_jsx("button", { onClick: () => update('shipping', s), className: `flex-1 py-2 px-3 rounded-md text-sm border transition-colors capitalize ${form.shipping === s
                                            ? 'border-accent bg-accent/10 text-accent'
                                            : 'border-border text-zinc-400 hover:border-zinc-600'}`, children: s }, s))) }) })] })), step === 2 && (_jsxs("div", { className: "space-y-3", children: [_jsx(Field, { label: "Payment Method", children: _jsx("div", { className: "flex gap-2", children: ['card', 'paypal', 'crypto'].map((m) => (_jsx("button", { onClick: () => update('paymentMethod', m), className: `flex-1 py-2 px-3 rounded-md text-sm border transition-colors capitalize ${form.paymentMethod === m
                                            ? 'border-accent bg-accent/10 text-accent'
                                            : 'border-border text-zinc-400 hover:border-zinc-600'}`, children: m }, m))) }) }), _jsxs("div", { className: "rounded-md border border-border bg-bg p-3 mt-4", children: [_jsx("p", { className: "text-xs text-zinc-500 mb-2", children: "Order Summary" }), _jsxs("div", { className: "flex justify-between text-sm text-zinc-300", children: [_jsxs("span", { children: [form.quantity, "x ", form.product] }), _jsxs("span", { children: ["$", (form.quantity * (form.product === 'Hoodie' ? 45 : form.product === 'Mug' ? 12 : form.product === 'Sticker Pack' ? 8 : 25)).toFixed(2)] })] }), _jsxs("div", { className: "flex justify-between text-sm text-zinc-300", children: [_jsxs("span", { children: ["Shipping (", form.shipping, ")"] }), _jsx("span", { children: form.shipping === 'express' ? '$9.99' : '$4.99' })] }), _jsxs("div", { className: "flex justify-between text-sm font-medium text-white border-t border-border mt-2 pt-2", children: [_jsx("span", { children: "Total" }), _jsxs("span", { children: ["$", (form.quantity * (form.product === 'Hoodie' ? 45 : form.product === 'Mug' ? 12 : form.product === 'Sticker Pack' ? 8 : 25) +
                                                        (form.shipping === 'express' ? 9.99 : 4.99)).toFixed(2)] })] })] })] })), _jsxs("div", { className: "flex justify-between gap-2 mt-6", children: [_jsxs("button", { onClick: () => setStep((s) => Math.max(0, s - 1)), disabled: step === 0, className: "inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-border text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed", children: [_jsx(ChevronLeft, { size: 14 }), " Back"] }), step < STEPS.length - 1 ? (_jsxs("button", { onClick: () => setStep((s) => Math.min(STEPS.length - 1, s + 1)), className: "inline-flex items-center gap-1 text-sm px-4 py-1.5 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition-colors", children: ["Next ", _jsx(ChevronRight, { size: 14 })] })) : (_jsxs("button", { onClick: () => setCompleted(true), className: "inline-flex items-center gap-1 text-sm px-4 py-1.5 rounded-md bg-green-600 text-white font-medium hover:bg-green-500 transition-colors", children: [_jsx(Check, { size: 14 }), " Place Order"] }))] })] }), _jsx(DebugWatcher, {})] }));
}
function Field({ label, children }) {
    return (_jsxs("div", { children: [_jsx("label", { className: "block text-xs font-medium text-zinc-400 mb-1.5", children: label }), children] }));
}
function DemoShell({ children, onReset, }) {
    return (_jsxs("div", { className: "rounded-card border border-border bg-bg-surface overflow-hidden", children: [_jsxs("div", { className: "flex items-center justify-between px-4 py-2.5 border-b border-border bg-bg-elevated", children: [_jsxs("span", { className: "text-xs text-zinc-400 flex items-center gap-1.5", children: [_jsx(Bug, { size: 12, className: "text-accent" }), "Live Demo - states are watched by findchange"] }), onReset && (_jsxs("button", { onClick: onReset, className: "text-xs text-zinc-500 hover:text-accent transition-colors flex items-center gap-1", children: [_jsx(RotateCcw, { size: 11 }), " Reset"] }))] }), _jsx("div", { className: "p-5", children: children })] }));
}
