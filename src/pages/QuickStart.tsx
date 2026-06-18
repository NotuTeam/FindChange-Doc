import { Lightbulb } from 'lucide-react';
import CodeBlock from '../components/docs/CodeBlock';

export default function QuickStart() {
  return (
    <div className="docs-prose">
      <p className="text-sm text-zinc-500">Getting Started</p>
      <h1>Quick Start</h1>
      <p>Get up and running with findchange in 4 steps.</p>

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

      <h2 id="step-2">Step 2: (Optional) Override console</h2>
      <p>
        Call <code>setupConsoleCapture()</code> once at your app entry to capture all{' '}
        <code>console.*</code> calls:
      </p>
      <CodeBlock
        code={`import { setupConsoleCapture } from 'findchange';

// Call once at app entry (e.g. main.tsx)
// Dev: logs captured + passed through to real console
// Prod: console.* becomes silent no-op (no leaking)
setupConsoleCapture();`}
        filename="main.tsx"
        highlightLines={[6]}
      />
      <p className="text-sm">
        This enables the <strong>Console</strong> tab in the debug window. If you skip this step,
        the popup will only show the Watcher tab.
      </p>

      <h2 id="step-3">Step 3: Watch your states</h2>
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

      <h2 id="step-4">Step 4: Click the Debug button</h2>
      <p>
        Click the floating Debug button to open a separate popup window. It automatically shows
        tabs for the features you enabled:
      </p>
      <ul>
        <li><strong>Watcher tab</strong> - shows all watched states as collapsible JSON</li>
        <li><strong>Console tab</strong> - shows captured logs with level badges, timestamps, and file locations</li>
      </ul>
      <div className="flex items-start gap-3 p-4 rounded-card border border-accent/30 bg-accent/5 my-4">
        <Lightbulb size={18} className="text-accent shrink-0 mt-0.5" />
        <p className="!mb-0 text-sm">
          <strong>Tip:</strong> The popup stays in sync as your states change and as new console
          calls are made. Keep it open on a second monitor for continuous tracing.
        </p>
      </div>
    </div>
  );
}
