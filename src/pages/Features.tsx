import {
  AppWindow,
  Zap,
  ChevronsUpDown,
  ArrowUpFromLine,
  ShieldCheck,
  PackageX,
} from 'lucide-react';
import FeatureCard from '../components/docs/FeatureCard';

export default function Features() {
  return (
    <div className="docs-prose">
      <p className="text-sm text-zinc-500">Introduction</p>
      <h1>Features</h1>
      <p>Everything findchange provides for painless state debugging during development.</p>

      <div className="grid md:grid-cols-2 gap-4 not-prose mt-6">
        <FeatureCard icon={AppWindow} title="Separate Debug Window" description="A popup window (not a tab) that stays open while you code. Keep it on a second monitor while you develop." badge="Core" />
        <FeatureCard icon={Zap} title="Real-time Updates" description="States reflect instantly as they change. No manual refresh needed - the window polls and receives push updates." />
        <FeatureCard icon={ChevronsUpDown} title="Collapsible Entries" description="Fold or unfold individual states. Your preference persists across snapshot refreshes, so you control what you see." />
        <FeatureCard icon={ArrowUpFromLine} title="Smart Sorting" description="Recently changed states automatically float to the top. Spot what changed at a glance." />
        <FeatureCard icon={ShieldCheck} title="Safe Serialization" description="Handles circular references, functions, and BigInt safely via custom JSON serialization. No crashes." />
        <FeatureCard icon={PackageX} title="Zero Production Impact" description="Completely no-op in production builds. All hooks and components short-circuit. Zero bundle impact." />
      </div>

      <h2 id="communication">Communication Architecture</h2>
      <p>
        findchange uses a hybrid communication strategy to ensure reliable state syncing between
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
