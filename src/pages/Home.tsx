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
          Stop sprinkling <code className="text-accent">console.log</code>{" "}
          everywhere
        </h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
          Watch any React state in a dedicated popup window that updates in
          real-time. Trace state changes continuously without polluting your
          console.
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
            <ShieldCheck size={12} /> Framework-agnostic core
          </span>
        </div>
      </section>

      {/* Visual Mockup */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {/* Browser window mockup */}
          <div className="rounded-card border border-border bg-bg-surface overflow-hidden">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            </div>
            <div className="p-4 h-48 flex items-end justify-end relative">
              <div className="text-xs text-zinc-600 absolute top-4 left-4">
                Your App
              </div>
              <div className="flex items-center gap-1.5 bg-accent/90 text-black text-xs font-medium px-3 py-1.5 rounded-card shadow-lg">
                <Bug size={12} />
                Debug
              </div>
            </div>
          </div>
          {/* Popup window mockup */}
          <div className="rounded-card border border-accent/30 bg-bg-surface overflow-hidden shadow-lg shadow-accent/5">
            <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-bg-elevated">
              <span className="text-xs font-medium text-zinc-300">
                Debug Watcher
              </span>
              <span className="text-[10px] text-green-500 bg-green-950/50 px-1.5 py-0.5 rounded">
                Connected
              </span>
            </div>
            <div className="p-3 space-y-2">
              <div className="rounded-md border border-accent/40 bg-accent/5 p-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-accent font-medium">
                    {"{chevron}"} checkoutForm
                  </span>
                  <span className="text-zinc-600">object</span>
                </div>
                <pre className="text-[10px] text-amber-300/80 mt-1 font-mono">{`{ "name": "Alice",
  "step": 2 }`}</pre>
              </div>
              <div className="rounded-md border border-border bg-bg p-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-300 font-medium">
                    {"{chevron}"} currentStep
                  </span>
                  <span className="text-zinc-600">number</span>
                </div>
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
          Everything you need for painless state debugging
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
          <FeatureCard
            icon={AppWindow}
            title="Separate Debug Window"
            description="A popup window, not a tab, that stays open while you code."
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
            title="Safe Serialization"
            description="Handles circular references and functions safely via JSON serialization."
          />
          <FeatureCard
            icon={PackageX}
            title="Zero Production Impact"
            description="Completely no-op in production builds. Zero bundle impact."
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
                3
              </span>
              <h3 className="!my-0 !text-white">Click the Debug button</h3>
            </div>
            <p>
              Click the floating Debug button to open a separate window showing
              all watched states as collapsible JSON. The window stays in sync
              as your states change.
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
            title="useDebugState registers value"
            description="Your state value is registered in a central DebugStore."
          />
          <HowItWorksStep
            stepNumber={2}
            icon={Radio}
            title="Store broadcasts snapshot"
            description="The store broadcasts via window.postMessage and BroadcastChannel."
          />
          <HowItWorksStep
            stepNumber={3}
            icon={MonitorCheck}
            title="Debug window renders JSON"
            description="The popup window renders states as collapsible JSON blocks."
          />
          <HowItWorksStep
            stepNumber={4}
            icon={ArrowUpFromLine}
            title="Changed states float to top"
            description="Recently changed states are sorted to the top for visibility."
          />
          <HowItWorksStep
            stepNumber={5}
            icon={Pin}
            title="Fold state persists"
            description="Your fold/unfold preferences are preserved across refreshes."
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
