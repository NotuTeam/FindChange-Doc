import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Lightbulb } from 'lucide-react';
import CodeBlock from '../components/docs/CodeBlock';
export default function QuickStart() {
    return (_jsxs("div", { className: "docs-prose", children: [_jsx("p", { className: "text-sm text-zinc-500", children: "Getting Started" }), _jsx("h1", { children: "Quick Start" }), _jsx("p", { children: "Get up and running with findchange in 3 steps." }), _jsx("h2", { id: "step-1", children: "Step 1: Place the DebugWatcher component" }), _jsxs("p", { children: ["Add ", _jsx("code", { children: "<DebugWatcher />" }), " anywhere in your app, typically in your root layout or App component:"] }), _jsx(CodeBlock, { code: `import { DebugWatcher } from 'findchange';

function App() {
  return (
    <>
      {/* your app content */}
      <DebugWatcher />
    </>
  );
}`, filename: "App.tsx" }), _jsx("p", { className: "text-sm", children: "This renders a floating Debug button in the bottom-right corner (development only)." }), _jsx("h2", { id: "step-2", children: "Step 2: Watch your states" }), _jsxs("p", { children: ["Use the ", _jsx("code", { children: "useDebugState" }), " hook to track any state value. It works just like a transparent passthrough:"] }), _jsx(CodeBlock, { code: `import { useState } from 'react';
import { useDebugState } from 'findchange';

function CheckoutForm() {
  const [form, setForm] = useState({ name: '', email: '', items: [] });
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({});

  // Watch these in the debug window
  useDebugState('checkoutForm', form);
  useDebugState('currentStep', step);
  useDebugState('validationErrors', errors);

  return <>{/* your form UI */}</>;
}`, filename: "CheckoutForm.tsx", highlightLines: [10, 11, 12] }), _jsxs("p", { className: "text-sm", children: [_jsx("code", { children: "useDebugState" }), " returns the same value you passed in. It does not modify your state or trigger re-renders."] }), _jsx("h2", { id: "step-3", children: "Step 3: Click the Debug button" }), _jsx("p", { children: "Click the floating Debug button to open a separate popup window showing all watched states as collapsible JSON blocks." }), _jsxs("div", { className: "flex items-start gap-3 p-4 rounded-card border border-accent/30 bg-accent/5 my-4", children: [_jsx(Lightbulb, { size: 18, className: "text-accent shrink-0 mt-0.5" }), _jsxs("p", { className: "!mb-0 text-sm", children: [_jsx("strong", { children: "Tip:" }), " The popup stays in sync as your states change. Keep it open on a second monitor while you develop for continuous state tracing."] })] })] }));
}
