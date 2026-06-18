import { TerminalSquare, ShieldCheck, Layers, Clock, FileCode } from 'lucide-react';
import CodeBlock from '../../components/docs/CodeBlock';
import FeatureCard from '../../components/docs/FeatureCard';

export default function ConsoleCapture() {
  return (
    <div className="docs-prose">
      <p className="text-sm text-zinc-500">API Reference</p>
      <div className="flex items-center gap-3">
        <h1 className="font-mono !mb-0">setupConsoleCapture()</h1>
        <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-badge font-medium">Function</span>
        <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-badge font-medium">New</span>
      </div>
      <p>
        Override all <code>console.*</code> methods (<code>log</code>, <code>warn</code>,{' '}
        <code>error</code>, <code>info</code>, <code>debug</code>, <code>trace</code>,{' '}
        <code>table</code>, <code>dir</code>, <code>group</code>, <code>groupEnd</code>) so they
        are captured into the debug window's <strong>Console</strong> tab. In production, all
        calls become silent no-ops.
      </p>

      <div className="flex items-start gap-3 p-4 rounded-card border border-accent/30 bg-accent/5 my-4">
        <TerminalSquare size={18} className="text-accent shrink-0 mt-0.5" />
        <p className="!mb-0 text-sm">
          <strong>One call, full coverage:</strong> Call <code>setupConsoleCapture()</code> once
          at your app entry point. Every <code>console.*</code> call across your entire app and
          all libraries will be captured automatically.
        </p>
      </div>

      <h2 id="signature">Signature</h2>
      <CodeBlock code="function setupConsoleCapture(): void;" language="ts" />

      <h2 id="usage">Usage</h2>
      <CodeBlock
        code={`import { setupConsoleCapture } from 'findchange';

// Call once at app entry (e.g. main.tsx, index.tsx)
setupConsoleCapture();

// All console.* calls are now captured
console.log('Hello');        // appears in Console tab
console.warn('Warning!');    // appears with warn badge
console.error('Oops', err);  // appears with error badge
console.table({ a: 1, b: 2 }); // rendered as formatted object`}
        filename="main.tsx"
        highlightLines={[4]}
      />

      <h2 id="what-it-captures">What Each Log Entry Contains</h2>
      <div className="grid md:grid-cols-2 gap-4 my-6 not-prose">
        <FeatureCard
          icon={Layers}
          title="Level"
          description="The console method used (log, warn, error, info, debug, trace, table, dir). Color-coded in the popup."
        />
        <FeatureCard
          icon={TerminalSquare}
          title="Serialized Arguments"
          description="All arguments are safely serialized. Circular references become [Circular], functions become [Function], BigInt is handled."
        />
        <FeatureCard
          icon={Clock}
          title="Timestamp"
          description="Precise to the millisecond. Displayed in HH:MM:SS.mmm format."
        />
        <FeatureCard
          icon={FileCode}
          title="File Location"
          description="The caller's file:line:col is parsed from the stack trace. Shortened to remove the origin for readability."
        />
      </div>

      <h2 id="popup-console-tab">Console Tab in the Popup</h2>
      <p>
        When you enable console capture, the debug window automatically shows a{' '}
        <strong>Console</strong> tab (alongside the Watcher tab if you also use{' '}
        <code>useDebugState</code>). The Console tab provides:
      </p>
      <ul>
        <li><strong>Level filter</strong> - filter by log, info, warn, error, debug, trace, table, dir</li>
        <li><strong>Search</strong> - full-text search across log content and file locations</li>
        <li><strong>Clear</strong> - clear all captured logs</li>
        <li><strong>Auto-scroll</strong> - new logs appear at the bottom and the view auto-scrolls</li>
        <li><strong>Count badges</strong> - each tab shows the number of entries</li>
      </ul>

      <div className="rounded-card border border-border bg-bg-surface overflow-hidden my-6 not-prose">
        <div className="flex border-b border-border">
          <div className="px-4 py-2 text-xs font-medium text-white border-b-2 border-accent">Watcher <span className="ml-1 text-[10px] bg-zinc-700 px-1.5 py-0.5 rounded">4</span></div>
          <div className="px-4 py-2 text-xs font-medium text-zinc-400">Console <span className="ml-1 text-[10px] bg-accent/20 text-accent px-1.5 py-0.5 rounded">12</span></div>
        </div>
        <div className="p-3 space-y-1 font-mono text-xs">
          <div className="flex gap-2 py-1">
            <span className="bg-zinc-700 text-zinc-300 px-1.5 py-0.5 rounded text-[10px] font-bold min-w-[40px] text-center">LOG</span>
            <div className="flex-1">
              <div className="text-zinc-300">[form] update fullName -&gt; Alice</div>
              <div className="text-[10px] text-zinc-600 mt-0.5">14:23:01.234 /src/App.tsx:42:5</div>
            </div>
          </div>
          <div className="flex gap-2 py-1">
            <span className="bg-yellow-900 text-yellow-300 px-1.5 py-0.5 rounded text-[10px] font-bold min-w-[40px] text-center">WARN</span>
            <div className="flex-1">
              <div className="text-zinc-300">[validation] step 0 has errors: {`{...}`}</div>
              <div className="text-[10px] text-zinc-600 mt-0.5">14:23:02.891 /src/App.tsx:67:5</div>
            </div>
          </div>
          <div className="flex gap-2 py-1">
            <span className="bg-red-900 text-red-300 px-1.5 py-0.5 rounded text-[10px] font-bold min-w-[40px] text-center">ERROR</span>
            <div className="flex-1">
              <div className="text-zinc-300">[demo] simulated error Error: Something went wrong!</div>
              <div className="text-[10px] text-zinc-600 mt-0.5">14:23:03.102 /src/App.tsx:95:5</div>
            </div>
          </div>
        </div>
      </div>

      <h2 id="production">Production Behavior</h2>
      <div className="flex items-start gap-3 p-4 rounded-card border border-green-900/50 bg-green-950/20 my-4">
        <ShieldCheck size={18} className="text-green-400 shrink-0 mt-0.5" />
        <p className="!mb-0 text-sm">
          In production, <strong>all <code>console.*</code> calls are suppressed</strong> (silent
          no-ops). This prevents log leakage to end users and keeps the browser console clean. No
          data is collected or stored in production.
        </p>
      </div>

      <h2 id="buffer">Ring Buffer</h2>
      <p>
        Captured logs are stored in a ring buffer limited to <strong>200 entries</strong>. When
        the buffer is full, the oldest entries are removed. This keeps memory usage bounded
        during long debugging sessions.
      </p>

      <h2 id="teardown">teardownConsoleCapture()</h2>
      <p>Restore the original <code>console.*</code> methods.</p>
      <CodeBlock
        code={`import { teardownConsoleCapture } from 'findchange';

teardownConsoleCapture();
// console.* now behaves as the native implementation`}
        filename="test-setup.ts"
      />

      <h2 id="ssr">SSR / Server-Side</h2>
      <p>
        <code>setupConsoleCapture()</code> is safe to call on the server. It will override{' '}
        <code>console.*</code> without crashing. However, server-side logs do not automatically
        appear in the browser popup. For SSR log hydration, see{' '}
        <a href="/api/server-logs" className="text-accent hover:underline">Server Logs (SSR)</a>.
      </p>
    </div>
  );
}
