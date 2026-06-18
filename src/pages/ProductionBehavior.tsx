import { ShieldCheck, TerminalSquare } from 'lucide-react';
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
          no-ops with zero side effects. Additionally, if you called{' '}
          <code>setupConsoleCapture()</code>, all <code>console.*</code> calls are suppressed
          (silent no-ops) to prevent log leakage to end users.
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
            <li>console.* captured into Console tab <strong>and</strong> passed through to real console</li>
            <li>BroadcastChannel and postMessage active</li>
          </ul>
        </div>
        <div className="rounded-card border border-border bg-bg-surface p-4">
          <h3 className="text-sm font-semibold text-zinc-400 mb-2">Production</h3>
          <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
            <li><code>useDebugState</code> returns value as-is (passthrough)</li>
            <li><code>&lt;DebugWatcher /&gt;</code> renders <code>null</code></li>
            <li>No popup window, no side effects</li>
            <li><code>console.*</code> calls are suppressed (silent no-ops, no output)</li>
            <li>Zero bundle impact</li>
          </ul>
        </div>
      </div>

      <h2 id="console-suppression">Console Suppression</h2>
      <div className="flex items-start gap-3 p-4 rounded-card border border-green-900/50 bg-green-950/20 my-4">
        <TerminalSquare size={18} className="text-green-400 shrink-0 mt-0.5" />
        <div>
          <p className="!mb-1 text-white font-medium">No log leakage in production</p>
          <p className="!mb-0 text-sm">
            When <code>setupConsoleCapture()</code> is called and the app runs in production, every{' '}
            <code>console.*</code> method becomes a no-op. This means no output reaches the browser
            console, preventing sensitive data or debug information from leaking to end users.
            No log entries are collected or stored in production.
          </p>
        </div>
      </div>
      <p>
        This applies to <strong>all</strong> <code>console.*</code> calls across your entire app,
        including those from third-party libraries, because the override happens at the{' '}
        <code>console</code> object level.
      </p>

      <h2 id="same-code">Same Code, Both Environments</h2>
      <p>Your code stays identical in both environments. No conditional imports needed:</p>
      <CodeBlock
        code={`// Same code works in both dev and production
import { useDebugState, DebugWatcher, setupConsoleCapture } from 'findchange';

// Dev: tracked in debug window | Prod: passthrough, no-op
useDebugState('user', user);

// Dev: renders floating button | Prod: renders nothing
<DebugWatcher />

// Dev: captures + passes through | Prod: suppresses all console.*
setupConsoleCapture();`}
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
