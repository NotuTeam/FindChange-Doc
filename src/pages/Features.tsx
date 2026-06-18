import {
  AppWindow,
  Zap,
  ChevronsUpDown,
  ArrowUpFromLine,
  ShieldCheck,
  PackageX,
  TerminalSquare,
  Layers,
  Server,
} from 'lucide-react';
import FeatureCard from '../components/docs/FeatureCard';

export default function Features() {
  return (
    <div className="docs-prose">
      <p className="text-sm text-zinc-500">Introduction</p>
      <h1>Features</h1>
      <p>Everything findchange provides for painless state debugging and log capture during development.</p>

      <div className="grid md:grid-cols-2 gap-4 not-prose mt-6">
        <FeatureCard icon={AppWindow} title="Separate Debug Window" description="A popup window (not a tab) that stays open while you code. Keep it on a second monitor while you develop." badge="Core" />
        <FeatureCard icon={TerminalSquare} title="Console Capture" description="Override all console.* methods (log, warn, error, info, debug, trace, table, dir, group). Logs appear in the Console tab with timestamps and file locations." badge="New" />
        <FeatureCard icon={Layers} title="Tabbed Popup" description="The popup automatically shows Watcher and Console tabs based on which features you enable. If only one is active, that view shows directly." badge="New" />
        <FeatureCard icon={Zap} title="Real-time Updates" description="States reflect instantly as they change. No manual refresh needed - the window polls and receives push updates." />
        <FeatureCard icon={ChevronsUpDown} title="Collapsible Entries" description="Fold or unfold individual states. Your preference persists across snapshot refreshes, so you control what you see." />
        <FeatureCard icon={ArrowUpFromLine} title="Smart Sorting" description="Recently changed states automatically float to the top. Spot what changed at a glance." />
        <FeatureCard icon={Server} title="SSR-safe" description="Works on both client and server without crashing. Server logs can be hydrated into the popup via HTML injection." badge="New" />
        <FeatureCard icon={ShieldCheck} title="Production-safe" description="No-op in production. Console suppressed (no leakage), states passthrough. Zero bundle impact via dead-code elimination." />
      </div>

      <h2 id="console-capture">Console Capture</h2>
      <p>
        Call <code>setupConsoleCapture()</code> once at your app entry to override every{' '}
        <code>console.*</code> method. Each call is captured with:
      </p>
      <ul>
        <li><strong>Level</strong> - color-coded badge (log, warn, error, info, debug, trace, table, dir)</li>
        <li><strong>Serialized arguments</strong> - circular references become <code>[Circular]</code>, functions become <code>[Function]</code></li>
        <li><strong>Timestamp</strong> - millisecond precision</li>
        <li><strong>File location</strong> - parsed from stack trace (e.g. <code>/src/App.tsx:42:5</code>)</li>
      </ul>
      <p>
        Logs are stored in a ring buffer (200 entries) and displayed in the Console tab with
        filtering by level, full-text search, and clear functionality. In production, all{' '}
        <code>console.*</code> calls are suppressed.
      </p>

      <h2 id="communication">Communication Architecture</h2>
      <p>
        findchange uses a hybrid communication strategy to ensure reliable syncing between
        your app and the debug popup window:
      </p>
      <ul>
        <li><strong>window.postMessage</strong> - Direct parent-to-popup messaging (primary, most reliable)</li>
        <li><strong>BroadcastChannel</strong> - Cross-tab broadcast (fallback, future-proofing)</li>
        <li><strong>Polling fallback</strong> - Periodic snapshot requests every 2 seconds</li>
      </ul>
    </div>
  );
}
