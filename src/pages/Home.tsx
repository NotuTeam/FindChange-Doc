import { Link } from "react-router-dom";
import {
  ArrowRight,
  Github,
  Bug,
  AppWindow,
  Zap,
  ChevronsUpDown,
  ArrowUpFromLine,
  ShieldCheck,
  PackageX,
  Database,
  Radio,
  MonitorCheck,
  Pin,
  Code2,
  TerminalSquare,
  Layers,
} from "lucide-react";
import FeatureCard from "../components/docs/FeatureCard";
import CodeBlock from "../components/docs/CodeBlock";
import HowItWorksStep from "../components/docs/HowItWorksStep";
import InteractiveDemo from "../components/docs/InteractiveDemo";

export default function Home() {
  return (
    <div className="docs-prose">
      {/* Hero */}
      <section className="text-center pt-8 pb-12">
        <div className="inline-flex items-center gap-2 text-xs bg-accent/10 text-accent px-3 py-1 rounded-full mb-6 border border-accent/20">
          <Code2 size={12} />
          <span>Dev-only tool for React developers</span>
        </div>
        <h1 className="!text-4xl md:!text-5xl font-bold mb-4 !text-white">
          Watch state &amp; capture{" "}
          <code className="text-accent">console</code> in one debug window
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
          Trace state changes and capture all <code>console.*</code> output in a
          dedicated popup window with timestamps and file locations. Safe for
          production - logs are suppressed, states are no-ops.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <Link
            to="/getting-started/quick-start"
            className="inline-flex items-center gap-2 bg-accent !text-white font-semibold px-5 py-2.5 rounded-card hover:bg-accent/90 transition-colors"
          >
            Get Started <ArrowRight size={18} />
          </Link>
          <a
            href="https://github.com/swula/findchange"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border bg-bg-surface text-white font-medium px-5 py-2.5 rounded-card hover:border-zinc-600 transition-colors"
          >
            <Github size={18} /> View on GitHub
          </a>
        </div>
        <div className="inline-block">
          <CodeBlock code="npm install findchange" language="bash" />
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs text-zinc-500">
          <span className="flex items-center gap-1">
            <PackageX size={12} /> Zero bundle impact in production
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck size={12} /> SSR-safe
          </span>
          <span className="flex items-center gap-1">
            <TerminalSquare size={12} /> Console suppression in prod
          </span>
        </div>
      </section>

      {/* Visual Mockup */}
      <section className="mb-16">
        <div className="rounded-card border border-accent/30 bg-bg-surface overflow-hidden shadow-lg shadow-accent/5 max-w-2xl mx-auto">
          {/* Tab bar mockup */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-bg-elevated">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            </div>
            <span className="text-[10px] text-green-500 bg-green-950/50 px-1.5 py-0.5 rounded">
              Connected
            </span>
          </div>
          <div className="flex border-b border-border">
            <div className="px-3 py-2 text-xs font-medium text-white border-b-2 border-accent flex items-center gap-1">
              Watcher <span className="text-[10px] bg-zinc-700 px-1 py-0.5 rounded">3</span>
            </div>
            <div className="px-3 py-2 text-xs font-medium text-zinc-500 flex items-center gap-1">
              Console <span className="text-[10px] bg-accent/20 text-accent px-1 py-0.5 rounded">5</span>
            </div>
          </div>
          {/* Console content mockup */}
          <div className="p-3 space-y-1 font-mono text-xs">
            <div className="flex gap-2 py-1">
              <span className="bg-zinc-700 text-zinc-300 px-1.5 py-0.5 rounded text-[10px] font-bold min-w-[40px] text-center">LOG</span>
              <div className="flex-1">
                <div className="text-zinc-300">[form] update email -&gt; alice@test.com</div>
                <div className="text-[10px] text-zinc-600">14:23:01.234 /src/App.tsx:42</div>
              </div>
            </div>
            <div className="flex gap-2 py-1">
              <span className="bg-yellow-900 text-yellow-300 px-1.5 py-0.5 rounded text-[10px] font-bold min-w-[40px] text-center">WARN</span>
              <div className="flex-1">
                <div className="text-zinc-300">Validation failed on step 0</div>
                <div className="text-[10px] text-zinc-600">14:23:02.891 /src/App.tsx:67</div>
              </div>
            </div>
            <div className="flex gap-2 py-1">
              <span className="bg-red-900 text-red-300 px-1.5 py-0.5 rounded text-[10px] font-bold min-w-[40px] text-center">ERROR</span>
              <div className="flex-1">
                <div className="text-zinc-300">API request failed: timeout</div>
                <div className="text-[10px] text-zinc-600">14:23:03.102 /src/api.ts:15</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="!text-center !text-2xl font-bold !text-white mb-2">
          Features
        </h2>
        <p className="!text-center text-zinc-500 mb-8">
          Everything you need for painless state debugging and log capture
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
          <FeatureCard
            icon={AppWindow}
            title="Separate Debug Window"
            description="A popup window, not a tab, that stays open while you code."
          />
          <FeatureCard
            icon={TerminalSquare}
            title="Console Capture"
            description="Override all console.* methods. Logs appear in the Console tab with timestamps and file locations."
            badge="New"
          />
          <FeatureCard
            icon={Layers}
            title="Tabbed Popup"
            description="Automatically shows Watcher and Console tabs based on which features you enable."
            badge="New"
          />
          <FeatureCard
            icon={Zap}
            title="Real-time Updates"
            description="States reflect instantly as they change, no manual refresh."
          />
          <FeatureCard
            icon={ChevronsUpDown}
            title="Collapsible Entries"
            description="Fold or unfold individual states - your preference persists across refreshes."
          />
          <FeatureCard
            icon={ArrowUpFromLine}
            title="Smart Sorting"
            description="Recently changed states automatically float to the top."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="SSR-safe"
            description="Works on both client and server without crashing. Server logs hydrate into the popup."
            badge="New"
          />
          <FeatureCard
            icon={PackageX}
            title="Zero Production Impact"
            description="No-op in production. Console suppressed, states passthrough. Zero bundle impact."
          />
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="mb-16">
        <h2 id="demo" className="!text-2xl font-bold !text-white mb-2">
          Try It Live
        </h2>
        <p className="!text-zinc-400 mb-2">
          Fill out the form below, then click the floating{" "}
          <strong className="text-accent">Debug</strong> button (bottom-right)
          to open a real popup window. Watch the states update in real-time as
          you interact with the form. This is the actual findchange library
          running live.
        </p>
        <div className="flex items-start gap-3 p-4 rounded-card border border-accent/30 bg-accent/5 mb-6">
          <p className="!mb-0 text-sm">
            <strong>How to test:</strong> Fill the form and navigate between
            steps. Click the Debug button to open the popup, then interact with
            the form again - you'll see <code>demo.form</code>,{" "}
            <code>demo.currentStep</code>, and <code>demo.completed</code>{" "}
            update instantly in the separate window.
          </p>
        </div>
        <InteractiveDemo />
      </section>

      {/* Quick Start */}
      <section className="mb-16">
        <h2 id="quick-start" className="!text-2xl font-bold !text-white mb-6">
          Quick Start
        </h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-accent text-black flex items-center justify-center text-xs font-bold">
                1
              </span>
              <h3 className="!my-0 !text-white">
                Place the DebugWatcher component
              </h3>
            </div>
            <CodeBlock
              code={`import { DebugWatcher } from 'findchange';

function App() {
  return (
    <>
      {/* your app content */}
      <DebugWatcher />
    </>
  );
}`}
              filename="App.tsx"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-accent text-black flex items-center justify-center text-xs font-bold">
                2
              </span>
              <h3 className="!my-0 !text-white">
                (Optional) Override console
              </h3>
            </div>
            <CodeBlock
              code={`import { setupConsoleCapture } from 'findchange';

// Call once at app entry - captures all console.*
// Dev: logs appear in Console tab + real console
// Prod: console.* becomes silent no-op
setupConsoleCapture();`}
              filename="main.tsx"
              highlightLines={[6]}
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-accent text-black flex items-center justify-center text-xs font-bold">
                3
              </span>
              <h3 className="!my-0 !text-white">Watch your states</h3>
            </div>
            <CodeBlock
              code={`import { useState } from 'react';
import { useDebugState } from 'findchange';

function CheckoutForm() {
  const [form, setForm] = useState({ name: '', step: 0 });
  useDebugState('checkoutForm', form);

  return <>{/* your form UI */}</>;
}`}
              filename="CheckoutForm.tsx"
              highlightLines={[5]}
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-6 rounded-full bg-accent text-black flex items-center justify-center text-xs font-bold">
                4
              </span>
              <h3 className="!my-0 !text-white">Click the Debug button</h3>
            </div>
            <p>
              Click the floating Debug button to open a separate window. It
              automatically shows tabs for the features you enabled: Watcher for
              states, Console for captured logs.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="mb-8">
        <h2 className="!text-2xl font-bold !text-white mb-2">How It Works</h2>
        <div className="mt-6">
          <HowItWorksStep
            stepNumber={1}
            icon={Database}
            title="Register &amp; capture"
            description="useDebugState registers state values, setupConsoleCapture overrides all console.* methods."
          />
          <HowItWorksStep
            stepNumber={2}
            icon={Radio}
            title="Store broadcasts"
            description="The store broadcasts snapshots and log entries via window.postMessage and BroadcastChannel."
          />
          <HowItWorksStep
            stepNumber={3}
            icon={MonitorCheck}
            title="Popup renders with tabs"
            description="The popup automatically shows Watcher and Console tabs based on which features you enabled."
          />
          <HowItWorksStep
            stepNumber={4}
            icon={ArrowUpFromLine}
            title="Smart organization"
            description="Changed states float to top. Logs show level badges, timestamps, and file locations."
            isLast
          />
        </div>
        <Link
          to="/how-it-works"
          className="inline-flex items-center gap-1 text-accent hover:underline mt-4"
        >
          Read full architecture <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}
