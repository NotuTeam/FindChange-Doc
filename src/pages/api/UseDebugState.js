import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CodeBlock from '../../components/docs/CodeBlock';
import ParamTable from '../../components/docs/ParamTable';
export default function UseDebugState() {
    return (_jsxs("div", { className: "docs-prose", children: [_jsx("p", { className: "text-sm text-zinc-500", children: "API Reference" }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("h1", { className: "font-mono !mb-0", children: "useDebugState()" }), _jsx("span", { className: "text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-badge font-medium", children: "Hook" }), _jsx("span", { className: "text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-badge font-medium", children: "Core" })] }), _jsx("p", { children: "Watch a state value in the debug window." }), _jsx("h2", { id: "signature", children: "Signature" }), _jsx(CodeBlock, { code: "function useDebugState<T>(name: string, value: T): T;", language: "ts" }), _jsx("h2", { id: "parameters", children: "Parameters" }), _jsx(ParamTable, { params: [
                    { name: 'name', type: 'string', required: true, description: 'Label displayed in the debug window' },
                    { name: 'value', type: 'T', required: true, description: 'The state value to watch' },
                ] }), _jsx("h2", { id: "returns", children: "Returns" }), _jsxs("p", { children: ["Returns the same value passed in. This makes ", _jsx("code", { children: "useDebugState" }), " a transparent passthrough - safe to wrap around any value without changing behavior. In production, this hook is a complete no-op."] }), _jsx("h2", { id: "example", children: "Example" }), _jsx(CodeBlock, { code: `import { useState } from 'react';
import { useDebugState } from 'findchange';

function UserProfile() {
  const [user, setUser] = useState(null);

  // Watch 'user' state in the debug window
  useDebugState('currentUser', user);

  return <div>{user?.name}</div>;
}`, filename: "UserProfile.tsx", highlightLines: [7] }), _jsx("h2", { id: "notes", children: "Notes" }), _jsxs("ul", { children: [_jsxs("li", { children: ["The hook uses an internal ", _jsx("code", { children: "useRef" }), " for stable ID generation, so it can be safely used with any render strategy."] }), _jsxs("li", { children: ["When ", _jsx("code", { children: "value" }), " changes, the hook updates the DebugStore and broadcasts a snapshot."] }), _jsx("li", { children: "Cleanup is automatic - when the component unmounts, the state is removed from the store." })] })] }));
}
