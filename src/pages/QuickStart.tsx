import { Lightbulb } from 'lucide-react';
import CodeBlock from '../components/docs/CodeBlock';

export default function QuickStart() {
  return (
    <div className="docs-prose">
      <p className="text-sm text-zinc-500">Getting Started</p>
      <h1>Quick Start</h1>
      <p>Get up and running with findchange in 3 steps.</p>

      <h2 id="step-1">Step 1: Place the DebugWatcher component</h2>
      <p>
        Add <code>&lt;DebugWatcher /&gt;</code> anywhere in your app, typically in your root layout
        or App component:
      </p>
      <CodeBlock
        code={`import { DebugWatcher } from 'findchange';

function App() {
  return (
    <>
      {/* your app content */}
      <DebugWatcher />
    </>
  );
}`}
        filename="App.tsx"
      />
      <p className="text-sm">
        This renders a floating Debug button in the bottom-right corner (development only).
      </p>

      <h2 id="step-2">Step 2: Watch your states</h2>
      <p>
        Use the <code>useDebugState</code> hook to track any state value. It works just like a
        transparent passthrough:
      </p>
      <CodeBlock
        code={`import { useState } from 'react';
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
}`}
        filename="CheckoutForm.tsx"
        highlightLines={[10, 11, 12]}
      />
      <p className="text-sm">
        <code>useDebugState</code> returns the same value you passed in. It does not modify your
        state or trigger re-renders.
      </p>

      <h2 id="step-3">Step 3: Click the Debug button</h2>
      <p>
        Click the floating Debug button to open a separate popup window showing all watched states
        as collapsible JSON blocks.
      </p>
      <div className="flex items-start gap-3 p-4 rounded-card border border-accent/30 bg-accent/5 my-4">
        <Lightbulb size={18} className="text-accent shrink-0 mt-0.5" />
        <p className="!mb-0 text-sm">
          <strong>Tip:</strong> The popup stays in sync as your states change. Keep it open on a
          second monitor while you develop for continuous state tracing.
        </p>
      </div>
    </div>
  );
}
