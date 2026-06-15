import {
  Database,
  Radio,
  MonitorCheck,
  ArrowUpFromLine,
  Pin,
  ArrowRight,
} from 'lucide-react';
import HowItWorksStep from '../components/docs/HowItWorksStep';

export default function HowItWorks() {
  return (
    <div className="docs-prose">
      <p className="text-sm text-zinc-500">How It Works</p>
      <h1>Architecture Overview</h1>
      <p>
        findchange uses a hybrid communication strategy to sync state between your app and the
        debug popup window in real-time.
      </p>

      <h2 id="flow">Step-by-step Flow</h2>
      <div className="mt-6">
        <HowItWorksStep
          stepNumber={1}
          icon={Database}
          title="useDebugState registers value in DebugStore"
          description="When you call useDebugState('name', value), the hook stores your state value in a central DebugStore singleton, keyed by a unique ID."
        />
        <HowItWorksStep
          stepNumber={2}
          icon={Radio}
          title="Store broadcasts snapshot"
          description="When a state changes, the store broadcasts a snapshot via window.postMessage (primary, direct to popup) and BroadcastChannel (fallback, cross-tab)."
        />
        <HowItWorksStep
          stepNumber={3}
          icon={MonitorCheck}
          title="Debug window renders JSON"
          description="The popup window listens for snapshots on both channels and renders each state as a collapsible JSON block using the native <details> element."
        />
        <HowItWorksStep
          stepNumber={4}
          icon={ArrowUpFromLine}
          title="Recently changed states float to top"
          description="Each state tracks its last-modified timestamp. States with newer timestamps are sorted to the top of the list for quick visibility."
        />
        <HowItWorksStep
          stepNumber={5}
          icon={Pin}
          title="Fold/unfold state persists"
          description="Before each re-render, the window reads fold states from the DOM. This means your fold/unfold preferences survive across snapshot refreshes."
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
        <FlowBox label="Popup Window" sublabel="collapsible JSON" />
      </div>

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
