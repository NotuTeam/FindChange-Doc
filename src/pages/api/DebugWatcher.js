import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CodeBlock from '../../components/docs/CodeBlock';
import PropTable from '../../components/docs/PropTable';
export default function DebugWatcher() {
    return (_jsxs("div", { className: "docs-prose", children: [_jsx("p", { className: "text-sm text-zinc-500", children: "API Reference" }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("h1", { className: "font-mono !mb-0", children: "<DebugWatcher />" }), _jsx("span", { className: "text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-badge font-medium", children: "Component" }), _jsx("span", { className: "text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-badge font-medium", children: "Core" })] }), _jsx("p", { children: "Renders a floating button that opens the debug window." }), _jsx("h2", { id: "props", children: "Props" }), _jsx(PropTable, { props: [
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
                ] }), _jsx("h2", { id: "usage", children: "Usage" }), _jsx(CodeBlock, { code: `import { DebugWatcher } from 'findchange';

function App() {
  return (
    <>
      {/* your app content */}
      <DebugWatcher />
    </>
  );
}`, filename: "App.tsx" }), _jsx("h2", { id: "custom-position", children: "Custom position and label" }), _jsx(CodeBlock, { code: `<DebugWatcher position="bottom-left" buttonLabel="Inspect" />`, language: "tsx" }), _jsx("h2", { id: "positions", children: "Position Preview" }), _jsx("p", { children: "The floating button can be placed in any of the four corners:" }), _jsx("div", { className: "grid grid-cols-2 gap-4 max-w-sm my-4 not-prose", children: ['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (_jsxs("div", { className: "relative h-24 rounded-card border border-border bg-bg-surface", children: [_jsx("span", { className: "text-xs text-zinc-600 absolute top-1 left-2 font-mono", children: pos }), _jsx("div", { className: `absolute w-6 h-6 rounded bg-accent/80 ${pos.includes('top') ? 'top-2' : 'bottom-2'} ${pos.includes('left') ? 'left-2' : 'right-2'}` })] }, pos))) }), _jsx("h2", { id: "behavior", children: "Behavior" }), _jsxs("ul", { children: [_jsx("li", { children: "When clicked, opens a separate popup window (not a tab) with the debug watcher" }), _jsx("li", { children: "The button indicator changes from empty circle to filled circle when the window is open" }), _jsx("li", { children: "Automatically detects and updates if the popup window is closed" }), _jsxs("li", { children: ["Renders ", _jsx("code", { children: "null" }), " in production"] })] })] }));
}
