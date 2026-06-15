import { AlertCircle } from 'lucide-react';

export default function Troubleshooting() {
  return (
    <div className="docs-prose">
      <p className="text-sm text-zinc-500">FAQ & Tips</p>
      <h1>Troubleshooting</h1>
      <p>Common issues and how to fix them.</p>

      <div className="space-y-3 mt-6">
        <FaqItem
          question="Debug button doesn't appear"
          answer={
            <>
              <p>Check the following:</p>
              <ul>
                <li>Ensure you are in development mode (<code>NODE_ENV !== 'production'</code>)</li>
                <li>Make sure <code>&lt;DebugWatcher /&gt;</code> is rendered in your component tree</li>
                <li>Check that your bundler is not tree-shaking the import in development</li>
              </ul>
            </>
          }
        />
        <FaqItem
          question="Popup window blocked by browser"
          answer={
            <>
              <p>
                Browser popup blockers may prevent the window from opening. Since{' '}
                <code>window.open()</code> is called in direct response to a user click (the Debug
                button), most browsers will allow it. If blocked:
              </p>
              <ul>
                <li>Allow popups for <code>localhost</code> or your dev domain</li>
                <li>Check your browser's popup blocker settings</li>
                <li>Some ad-blockers may also interfere - try disabling temporarily</li>
              </ul>
            </>
          }
        />
        <FaqItem
          question="States not updating in real-time"
          answer={
            <>
              <p>If the debug window is not reflecting state changes:</p>
              <ul>
                <li>Ensure the value you pass actually changes reference (for objects/arrays, React won't trigger the effect if the reference is the same)</li>
                <li>The popup window polls every 2 seconds as a fallback, so there may be a brief delay</li>
                <li>Check that <code>useDebugState</code> is called after the state declaration, not conditionally</li>
              </ul>
            </>
          }
        />
        <FaqItem
          question="Circular reference errors"
          answer={
            <>
              <p>
                findchange handles circular references automatically via custom JSON serialization.
                Circular objects are replaced with <code>[Circular]</code>, functions with{' '}
                <code>[Function]</code>, and BigInt values are converted to strings. If you still
                see errors, ensure the value is serializable.
              </p>
            </>
          }
        />
        <FaqItem
          question="Fold/unfold preference not persisting"
          answer={
            <>
              <p>
                Fold preferences are maintained within the popup window's session and are read from
                the DOM before each re-render. If the popup is closed and reopened, preferences
                reset to default (all expanded). This is by design.
              </p>
            </>
          }
        />
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: React.ReactNode }) {
  return (
    <details className="rounded-card border border-border bg-bg-surface overflow-hidden group">
      <summary className="flex items-center gap-3 px-4 py-3 cursor-pointer font-medium text-white hover:bg-bg-elevated transition-colors list-none">
        <AlertCircle size={16} className="text-accent shrink-0" />
        {question}
      </summary>
      <div className="px-4 pb-4 pl-12 docs-prose">{answer}</div>
    </details>
  );
}
