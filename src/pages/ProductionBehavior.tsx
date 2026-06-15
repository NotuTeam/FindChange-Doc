import { ShieldCheck } from 'lucide-react';
import CodeBlock from '../components/docs/CodeBlock';
import FeatureCard from '../components/docs/FeatureCard';

export default function ProductionBehavior() {
  return (
    <div className="docs-prose">
      <p className="text-sm text-zinc-500">How It Works</p>
      <h1>Production Behavior</h1>
      <p>How findchange behaves when deployed to production.</p>

      <div className="flex items-start gap-3 p-4 rounded-card border border-accent/30 bg-accent/5 my-4">
        <ShieldCheck size={18} className="text-accent shrink-0 mt-0.5" />
        <p className="!mb-0">
          In production (<code>NODE_ENV === 'production'</code>), all hooks and components are
          no-ops with zero side effects.
        </p>
      </div>

      <h2 id="dev-vs-prod">Development vs Production</h2>
      <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
        <div className="rounded-card border border-border bg-bg-surface p-4">
          <h3 className="text-sm font-semibold text-green-400 mb-2">Development</h3>
          <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
            <li><code>useDebugState</code> registers value in DebugStore</li>
            <li><code>&lt;DebugWatcher /&gt;</code> renders floating button</li>
            <li>Popup window available and synced</li>
            <li>BroadcastChannel and postMessage active</li>
          </ul>
        </div>
        <div className="rounded-card border border-border bg-bg-surface p-4">
          <h3 className="text-sm font-semibold text-zinc-400 mb-2">Production</h3>
          <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
            <li><code>useDebugState</code> returns value as-is (passthrough)</li>
            <li><code>&lt;DebugWatcher /&gt;</code> renders <code>null</code></li>
            <li>No popup window, no side effects</li>
            <li>Zero bundle impact</li>
          </ul>
        </div>
      </div>

      <h2 id="same-code">Same Code, Both Environments</h2>
      <p>Your code stays identical in both environments. No conditional imports needed:</p>
      <CodeBlock
        code={`// Same code works in both dev and production
import { useDebugState, DebugWatcher } from 'findchange';

// Dev: tracked in debug window | Prod: passthrough, no-op
useDebugState('user', user);

// Dev: renders floating button | Prod: renders nothing
<DebugWatcher />`}
        filename="App.tsx"
      />

      <h2 id="no-config">No Build Config Needed</h2>
      <div className="mt-4 not-prose">
        <FeatureCard
          icon={ShieldCheck}
          title="No build config needed"
          description="No babel plugins, no environment-specific imports, no webpack config. Just works out of the box."
        />
      </div>
      <p className="mt-4">
        The <code>isDevelopment()</code> utility checks <code>process.env.NODE_ENV</code> which is
        replaced at build time by all major bundlers (Vite, webpack, Rollup, etc.), so the
        production dead-code elimination removes all debug logic automatically.
      </p>
    </div>
  );
}
