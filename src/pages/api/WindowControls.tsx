import CodeBlock from '../../components/docs/CodeBlock';

export default function WindowControls() {
  return (
    <div className="docs-prose">
      <p className="text-sm text-zinc-500">API Reference</p>
      <h1>Window Controls</h1>
      <p>
        Programmatic control over the debug window. These functions let you open, close, and check
        the state of the debug window from anywhere in your code.
      </p>

      <h2 id="openDebugWindow">openDebugWindow()</h2>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-badge font-medium">Function</span>
      </div>
      <p>Programmatically open the debug window. If already open, brings it to focus.</p>
      <CodeBlock code="function openDebugWindow(): void;" language="ts" />

      <h2 id="closeDebugWindow">closeDebugWindow()</h2>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-badge font-medium">Function</span>
      </div>
      <p>Programmatically close the debug window if it is open.</p>
      <CodeBlock code="function closeDebugWindow(): void;" language="ts" />

      <h2 id="isDebugWindowOpen">isDebugWindowOpen()</h2>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-badge font-medium">Function</span>
      </div>
      <p>Returns a boolean indicating whether the debug window is currently open.</p>
      <CodeBlock code="function isDebugWindowOpen(): boolean;" language="ts" />

      <h2 id="useDebugWindowOpen">useDebugWindowOpen()</h2>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-badge font-medium">Hook</span>
      </div>
      <p>
        Reactive hook that returns a boolean and re-renders when the window open state changes.
        Uses <code>useSyncExternalStore</code> under the hood.
      </p>
      <CodeBlock code="function useDebugWindowOpen(): boolean;" language="ts" />

      <h2 id="example">Example</h2>
      <CodeBlock
        code={`import { openDebugWindow, useDebugWindowOpen } from 'findchange';

function Toolbar() {
  const isOpen = useDebugWindowOpen();

  return (
    <button onClick={() => openDebugWindow()}>
      {isOpen ? 'Debug window open' : 'Open debug window'}
    </button>
  );
}`}
        filename="Toolbar.tsx"
      />
    </div>
  );
}
