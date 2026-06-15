import CodeBlock from '../../components/docs/CodeBlock';
import ParamTable from '../../components/docs/ParamTable';

export default function UseDebugState() {
  return (
    <div className="docs-prose">
      <p className="text-sm text-zinc-500">API Reference</p>
      <div className="flex items-center gap-3">
        <h1 className="font-mono !mb-0">useDebugState()</h1>
        <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-badge font-medium">Hook</span>
        <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-badge font-medium">Core</span>
      </div>
      <p>Watch a state value in the debug window.</p>

      <h2 id="signature">Signature</h2>
      <CodeBlock code="function useDebugState<T>(name: string, value: T): T;" language="ts" />

      <h2 id="parameters">Parameters</h2>
      <ParamTable
        params={[
          { name: 'name', type: 'string', required: true, description: 'Label displayed in the debug window' },
          { name: 'value', type: 'T', required: true, description: 'The state value to watch' },
        ]}
      />

      <h2 id="returns">Returns</h2>
      <p>
        Returns the same value passed in. This makes <code>useDebugState</code> a transparent
        passthrough - safe to wrap around any value without changing behavior. In production,
        this hook is a complete no-op.
      </p>

      <h2 id="example">Example</h2>
      <CodeBlock
        code={`import { useState } from 'react';
import { useDebugState } from 'findchange';

function UserProfile() {
  const [user, setUser] = useState(null);

  // Watch 'user' state in the debug window
  useDebugState('currentUser', user);

  return <div>{user?.name}</div>;
}`}
        filename="UserProfile.tsx"
        highlightLines={[7]}
      />

      <h2 id="notes">Notes</h2>
      <ul>
        <li>The hook uses an internal <code>useRef</code> for stable ID generation, so it can be safely used with any render strategy.</li>
        <li>When <code>value</code> changes, the hook updates the DebugStore and broadcasts a snapshot.</li>
        <li>Cleanup is automatic - when the component unmounts, the state is removed from the store.</li>
      </ul>
    </div>
  );
}
