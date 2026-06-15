import { Info, ShieldCheck, Terminal } from 'lucide-react';
import CodeBlock from '../components/docs/CodeBlock';

export default function Installation() {
  return (
    <div className="docs-prose">
      <p className="text-sm text-zinc-500">Getting Started</p>
      <h1>Installation</h1>
      <p>Add findchange to your React project using your preferred package manager.</p>

      <h2 id="npm">npm</h2>
      <CodeBlock code="npm install findchange" language="bash" />

      <h2 id="yarn">yarn</h2>
      <CodeBlock code="yarn add findchange" language="bash" />

      <h2 id="pnpm">pnpm</h2>
      <CodeBlock code="pnpm add findchange" language="bash" />

      <h2 id="bun">bun</h2>
      <CodeBlock code="bun add findchange" language="bash" />

      <h2 id="requirements">Requirements</h2>
      <div className="flex items-start gap-3 p-4 rounded-card border border-border bg-bg-surface my-4">
        <Info size={18} className="text-accent shrink-0 mt-0.5" />
        <div>
          <p className="!mb-1 text-white font-medium">Works with any React app</p>
          <p className="!mb-0 text-sm">
            findchange requires React 16.8 or later (hooks support). The core debugStore is
            framework-agnostic and can be extended to other frameworks.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 p-4 rounded-card border border-accent/30 bg-accent/5 my-4">
        <ShieldCheck size={18} className="text-accent shrink-0 mt-0.5" />
        <div>
          <p className="!mb-1 text-white font-medium">Safe for production</p>
          <p className="!mb-0 text-sm">
            All hooks and components automatically become no-ops when{' '}
            <code>NODE_ENV === 'production'</code>. No need to remove imports before deploying.
          </p>
        </div>
      </div>

      <h2 id="verify">Verify Installation</h2>
      <p>Check that the package is installed correctly:</p>
      <div className="flex items-start gap-3 p-4 rounded-card border border-border bg-bg-surface my-4">
        <Terminal size={18} className="text-accent shrink-0 mt-0.5" />
        <p className="!mb-0 text-sm">
          Run your dev server and look for the floating Debug button in the bottom-right corner.
        </p>
      </div>
    </div>
  );
}
