import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CodeBlock from '../../components/docs/CodeBlock';
export default function WindowControls() {
    return (_jsxs("div", { className: "docs-prose", children: [_jsx("p", { className: "text-sm text-zinc-500", children: "API Reference" }), _jsx("h1", { children: "Window Controls" }), _jsx("p", { children: "Programmatic control over the debug window. These functions let you open, close, and check the state of the debug window from anywhere in your code." }), _jsx("h2", { id: "openDebugWindow", children: "openDebugWindow()" }), _jsx("div", { className: "flex items-center gap-2 mb-2", children: _jsx("span", { className: "text-xs bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-badge font-medium", children: "Function" }) }), _jsx("p", { children: "Programmatically open the debug window. If already open, brings it to focus." }), _jsx(CodeBlock, { code: "function openDebugWindow(): void;", language: "ts" }), _jsx("h2", { id: "closeDebugWindow", children: "closeDebugWindow()" }), _jsx("div", { className: "flex items-center gap-2 mb-2", children: _jsx("span", { className: "text-xs bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-badge font-medium", children: "Function" }) }), _jsx("p", { children: "Programmatically close the debug window if it is open." }), _jsx(CodeBlock, { code: "function closeDebugWindow(): void;", language: "ts" }), _jsx("h2", { id: "isDebugWindowOpen", children: "isDebugWindowOpen()" }), _jsx("div", { className: "flex items-center gap-2 mb-2", children: _jsx("span", { className: "text-xs bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-badge font-medium", children: "Function" }) }), _jsx("p", { children: "Returns a boolean indicating whether the debug window is currently open." }), _jsx(CodeBlock, { code: "function isDebugWindowOpen(): boolean;", language: "ts" }), _jsx("h2", { id: "useDebugWindowOpen", children: "useDebugWindowOpen()" }), _jsx("div", { className: "flex items-center gap-2 mb-2", children: _jsx("span", { className: "text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-badge font-medium", children: "Hook" }) }), _jsxs("p", { children: ["Reactive hook that returns a boolean and re-renders when the window open state changes. Uses ", _jsx("code", { children: "useSyncExternalStore" }), " under the hood."] }), _jsx(CodeBlock, { code: "function useDebugWindowOpen(): boolean;", language: "ts" }), _jsx("h2", { id: "example", children: "Example" }), _jsx(CodeBlock, { code: `import { openDebugWindow, useDebugWindowOpen } from 'findchange';

function Toolbar() {
  const isOpen = useDebugWindowOpen();

  return (
    <button onClick={() => openDebugWindow()}>
      {isOpen ? 'Debug window open' : 'Open debug window'}
    </button>
  );
}`, filename: "Toolbar.tsx" })] }));
}
