import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Database } from 'lucide-react';
import CodeBlock from '../../components/docs/CodeBlock';
export default function DebugStore() {
    return (_jsxs("div", { className: "docs-prose", children: [_jsx("p", { className: "text-sm text-zinc-500", children: "API Reference" }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("h1", { className: "font-mono !mb-0", children: "debugStore" }), _jsx("span", { className: "text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-badge font-medium", children: "Store" })] }), _jsxs("p", { children: ["The underlying singleton store. Framework-agnostic - no React dependency. This is the core of findchange that ", _jsx("code", { children: "useDebugState" }), " wraps for React."] }), _jsxs("div", { className: "flex items-start gap-3 p-4 rounded-card border border-accent/30 bg-accent/5 my-4", children: [_jsx(Database, { size: 18, className: "text-accent shrink-0 mt-0.5" }), _jsxs("p", { className: "!mb-0 text-sm", children: [_jsx("strong", { children: "Framework-agnostic:" }), " You can use ", _jsx("code", { children: "debugStore" }), " directly in Vue, Svelte, Angular, or vanilla JS to build your own framework adapter."] })] }), _jsx("h2", { id: "methods", children: "Methods" }), _jsx("div", { className: "my-4 overflow-x-auto rounded-card border border-border", children: _jsxs("table", { className: "w-full text-sm", children: [_jsx("thead", { children: _jsxs("tr", { className: "border-b border-border bg-bg-surface", children: [_jsx("th", { className: "text-left font-semibold text-zinc-300 px-4 py-2.5", children: "Method" }), _jsx("th", { className: "text-left font-semibold text-zinc-300 px-4 py-2.5", children: "Description" })] }) }), _jsxs("tbody", { children: [_jsxs("tr", { className: "border-b border-border/50", children: [_jsx("td", { className: "px-4 py-2.5", children: _jsx("code", { className: "font-mono text-accent text-xs", children: "set(id, name, value)" }) }), _jsx("td", { className: "px-4 py-2.5 text-zinc-400", children: "Register or update a state value" })] }), _jsxs("tr", { className: "border-b border-border/50", children: [_jsx("td", { className: "px-4 py-2.5", children: _jsx("code", { className: "font-mono text-accent text-xs", children: "remove(id)" }) }), _jsx("td", { className: "px-4 py-2.5 text-zinc-400", children: "Remove a state from the store" })] }), _jsxs("tr", { className: "border-b border-border/50", children: [_jsx("td", { className: "px-4 py-2.5", children: _jsx("code", { className: "font-mono text-accent text-xs", children: "broadcast()" }) }), _jsx("td", { className: "px-4 py-2.5 text-zinc-400", children: "Broadcast current snapshot to debug window" })] }), _jsxs("tr", { children: [_jsx("td", { className: "px-4 py-2.5", children: _jsx("code", { className: "font-mono text-accent text-xs", children: "getSnapshot()" }) }), _jsx("td", { className: "px-4 py-2.5 text-zinc-400", children: "Get current snapshot of all watched states" })] })] })] }) }), _jsx("h2", { id: "example", children: "Example" }), _jsx(CodeBlock, { code: `import { debugStore } from 'findchange';

// Register a state manually
debugStore.set('my-custom-id', 'myState', someValue);

// Broadcast to the debug window
debugStore.broadcast();

// Get all watched states
const snapshot = debugStore.getSnapshot();`, filename: "example.ts" }), _jsx("h2", { id: "building-adapters", children: "Building Framework Adapters" }), _jsxs("p", { children: ["Since ", _jsx("code", { children: "debugStore" }), " is framework-agnostic, you can build adapters for other frameworks. Here's a conceptual example for Vue:"] }), _jsx(CodeBlock, { code: `import { debugStore } from 'findchange';
import { watch } from 'vue';

export function useDebugState(name, ref) {
  const id = generateId();
  watch(ref, (value) => {
    debugStore.set(id, name, value);
    debugStore.broadcast();
  }, { immediate: true });
}`, filename: "vue-adapter.ts" })] }));
}
