import CodeBlock from '../../components/docs/CodeBlock';
import PropTable from '../../components/docs/PropTable';

export default function DebugWatcher() {
  return (
    <div className="docs-prose">
      <p className="text-sm text-zinc-500">API Reference</p>
      <div className="flex items-center gap-3">
        <h1 className="font-mono !mb-0">&lt;DebugWatcher /&gt;</h1>
        <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-badge font-medium">Component</span>
        <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-badge font-medium">Core</span>
      </div>
      <p>Renders a floating button that opens the debug window.</p>

      <h2 id="props">Props</h2>
      <PropTable
        props={[
          {
            prop: 'position',
            type: "'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'",
            default: "'bottom-right'",
            description: 'Position of the floating button on screen',
          },
          {
            prop: 'buttonLabel',
            type: 'string',
            default: "'Debug'",
            description: 'Custom text for the button',
          },
        ]}
      />

      <h2 id="usage">Usage</h2>
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

      <h2 id="custom-position">Custom position and label</h2>
      <CodeBlock code={`<DebugWatcher position="bottom-left" buttonLabel="Inspect" />`} language="tsx" />

      <h2 id="positions">Position Preview</h2>
      <p>The floating button can be placed in any of the four corners:</p>
      <div className="grid grid-cols-2 gap-4 max-w-sm my-4 not-prose">
        {(['top-left', 'top-right', 'bottom-left', 'bottom-right'] as const).map((pos) => (
          <div key={pos} className="relative h-24 rounded-card border border-border bg-bg-surface">
            <span className="text-xs text-zinc-600 absolute top-1 left-2 font-mono">{pos}</span>
            <div
              className={`absolute w-6 h-6 rounded bg-accent/80 ${
                pos.includes('top') ? 'top-2' : 'bottom-2'
              } ${pos.includes('left') ? 'left-2' : 'right-2'}`}
            />
          </div>
        ))}
      </div>

      <h2 id="behavior">Behavior</h2>
      <ul>
        <li>When clicked, opens a separate popup window (not a tab) with the debug watcher</li>
        <li>The button indicator changes from empty circle to filled circle when the window is open</li>
        <li>Automatically detects and updates if the popup window is closed</li>
        <li>Renders <code>null</code> in production</li>
      </ul>
    </div>
  );
}
