import { Database } from 'lucide-react';
import CodeBlock from '../../components/docs/CodeBlock';

export default function DebugStore() {
  return (
    <div className="docs-prose">
      <p className="text-sm text-zinc-500">API Reference</p>
      <div className="flex items-center gap-3">
        <h1 className="font-mono !mb-0">debugStore</h1>
        <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-badge font-medium">Store</span>
      </div>
      <p>
        The underlying singleton store. Framework-agnostic - no React dependency. This is the core
        of findchange that <code>useDebugState</code> wraps for React.
      </p>

      <div className="flex items-start gap-3 p-4 rounded-card border border-accent/30 bg-accent/5 my-4">
        <Database size={18} className="text-accent shrink-0 mt-0.5" />
        <p className="!mb-0 text-sm">
          <strong>Framework-agnostic:</strong> You can use <code>debugStore</code> directly in
          Vue, Svelte, Angular, or vanilla JS to build your own framework adapter.
        </p>
      </div>

      <h2 id="methods">Methods</h2>
      <div className="my-4 overflow-x-auto rounded-card border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-bg-surface">
              <th className="text-left font-semibold text-zinc-300 px-4 py-2.5">Method</th>
              <th className="text-left font-semibold text-zinc-300 px-4 py-2.5">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50">
              <td className="px-4 py-2.5"><code className="font-mono text-accent text-xs">set(id, name, value)</code></td>
              <td className="px-4 py-2.5 text-zinc-400">Register or update a state value</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="px-4 py-2.5"><code className="font-mono text-accent text-xs">remove(id)</code></td>
              <td className="px-4 py-2.5 text-zinc-400">Remove a state from the store</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="px-4 py-2.5"><code className="font-mono text-accent text-xs">broadcast()</code></td>
              <td className="px-4 py-2.5 text-zinc-400">Broadcast current snapshot to debug window</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5"><code className="font-mono text-accent text-xs">getSnapshot()</code></td>
              <td className="px-4 py-2.5 text-zinc-400">Get current snapshot of all watched states</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="example">Example</h2>
      <CodeBlock
        code={`import { debugStore } from 'findchange';

// Register a state manually
debugStore.set('my-custom-id', 'myState', someValue);

// Broadcast to the debug window
debugStore.broadcast();

// Get all watched states
const snapshot = debugStore.getSnapshot();`}
        filename="example.ts"
      />

      <h2 id="building-adapters">Building Framework Adapters</h2>
      <p>
        Since <code>debugStore</code> is framework-agnostic, you can build adapters for other
        frameworks. Here's a conceptual example for Vue:
      </p>
      <CodeBlock
        code={`import { debugStore } from 'findchange';
import { watch } from 'vue';

export function useDebugState(name, ref) {
  const id = generateId();
  watch(ref, (value) => {
    debugStore.set(id, name, value);
    debugStore.broadcast();
  }, { immediate: true });
}`}
        filename="vue-adapter.ts"
      />
    </div>
  );
}
