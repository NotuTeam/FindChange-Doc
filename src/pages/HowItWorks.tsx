import {
  Database,
  Radio,
  MonitorCheck,
  ArrowUpFromLine,
  Pin,
  ArrowRight,
  TerminalSquare,
  Layers,
} from 'lucide-react';
import HowItWorksStep from '../components/docs/HowItWorksStep';

export default function HowItWorks() {
  return (
    <div className="docs-prose">
      <p className="text-sm text-zinc-500">How It Works</p>
      <h1>Architecture Overview</h1>
      <p>
        findchange uses a hybrid communication strategy to sync state and console logs between
        your app and the debug popup window in real-time.
      </p>

      <h2 id="flow">Step-by-step Flow</h2>
      <div className="mt-6">
        <HowItWorksStep
          stepNumber={1}
          icon={Database}
          title="Register states &amp; override console"
          description="useDebugState registers values in DebugStore. setupConsoleCapture overrides all console.* methods, serializing each call with level, timestamp, and file location."
        />
        <HowItWorksStep
          stepNumber={2}
          icon={Radio}
          title="Store broadcasts snapshots &amp; logs"
          description="The store broadcasts both state snapshots and log entries via window.postMessage (primary, direct to popup) and BroadcastChannel (fallback, cross-tab)."
        />
        <HowItWorksStep
          stepNumber={3}
          icon={Layers}
          title="Popup renders with tabs"
          description="The popup detects which features are enabled and automatically shows the appropriate tabs (Watcher, Console, or both)."
        />
        <HowItWorksStep
          stepNumber={4}
          icon={MonitorCheck}
          title="Watcher: collapsible JSON"
          description="States render as collapsible JSON blocks using the native <details> element. Recently changed states float to the top."
        />
        <HowItWorksStep
          stepNumber={5}
          icon={TerminalSquare}
          title="Console: logger with metadata"
          description="Logs render with level badges (color-coded), serialized arguments, millisecond timestamps, and file locations parsed from stack traces."
        />
        <HowItWorksStep
          stepNumber={6}
          icon={Pin}
          title="Fold state persists"
          description="Before each re-render, the window reads fold states from the DOM. Your fold/unfold preferences survive across snapshot refreshes."
          isLast
        />
      </div>

      <h2 id="diagram">Communication Flow</h2>
      <div className="flex flex-col md:flex-row items-center gap-3 my-6 not-prose">
        <FlowBox label="Component" sublabel="useDebugState" />
        <ArrowRight size={20} className="text-zinc-600 rotate-90 md:rotate-0" />
        <FlowBox label="DebugStore" sublabel="singleton" />
        <ArrowRight size={20} className="text-zinc-600 rotate-90 md:rotate-0" />
        <FlowBox label="postMessage" sublabel="+ BroadcastChannel" />
        <ArrowRight size={20} className="text-zinc-600 rotate-90 md:rotate-0" />
        <FlowBox label="Popup Window" sublabel="tabs: watcher + console" />
      </div>

      <h2 id="console-capture">Console Capture Internals</h2>
      <p>
        When you call <code>setupConsoleCapture()</code>, every method on the{' '}
        <code>console</code> object (<code>log</code>, <code>warn</code>, <code>error</code>,{' '}
        <code>info</code>, <code>debug</code>, <code>trace</code>, <code>table</code>,{' '}
        <code>dir</code>, <code>group</code>, <code>groupEnd</code>) is replaced with a capturing
        wrapper. Each wrapper:
      </p>
      <ol>
        <li>Serializes all arguments safely (circular refs become <code>[Circular]</code>, functions become <code>[Function]</code>)</li>
        <li>Captures a stack trace and parses the first frame outside the library to extract <code>file:line:col</code></li>
        <li>Pushes a <code>LogEntry</code> into a ring buffer (max 200 entries)</li>
        <li>Passes the call through to the original console method (dev only)</li>
      </ol>
      <p>
        The store then broadcasts the log buffer alongside state snapshots, so the popup's Console
        tab stays up to date.
      </p>

      <h2 id="tab-detection">Tab Detection</h2>
      <p>
        The popup determines which tabs to show based on feature flags stored in{' '}
        <code>sessionStorage</code>. These flags are set automatically:
      </p>
      <ul>
        <li>When <code>useDebugState</code> is called, the <strong>watcher</strong> flag is enabled</li>
        <li>When <code>setupConsoleCapture()</code> is called, the <strong>console</strong> flag is enabled</li>
      </ul>
      <p>
        If only one feature is active, the popup shows that view directly without a tab bar.
      </p>

      <h2 id="script-injection">Script Injection Strategy</h2>
      <p>
        The popup window is created via <code>window.open()</code> with an empty URL, then the HTML
        structure is written via <code>document.write()</code>. The interactive script is injected
        programmatically by appending a <code>&lt;script&gt;</code> element to the document body.
        This approach avoids issues with inline scripts in <code>document.write</code> that can fail
        to execute in some browser/CSP scenarios.
      </p>

      <h2 id="fallback">Fallback Mechanism</h2>
      <p>
        The popup window also polls for updates every 2 seconds by sending a request-snapshot
        message back to the opener. This ensures the window stays in sync even if a real-time
        broadcast is missed.
      </p>
    </div>
  );
}

function FlowBox({ label, sublabel }: { label: string; sublabel: string }) {
  return (
    <div className="flex-1 min-w-[120px] text-center rounded-card border border-border bg-bg-surface p-3">
      <p className="text-sm font-medium text-white">{label}</p>
      <p className="text-xs text-zinc-500 font-mono">{sublabel}</p>
    </div>
  );
}
