import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CodeBlock from '../components/docs/CodeBlock';
export default function CommonPatterns() {
    return (_jsxs("div", { className: "docs-prose", children: [_jsx("p", { className: "text-sm text-zinc-500", children: "FAQ & Tips" }), _jsx("h1", { children: "Common Patterns" }), _jsx("p", { children: "Practical usage patterns and tips for getting the most out of findchange." }), _jsx("h2", { id: "derived", children: "Watching derived / computed values" }), _jsxs("p", { children: ["You can pass any expression to ", _jsx("code", { children: "useDebugState" }), ", not just state variables:"] }), _jsx(CodeBlock, { code: `const [items, setItems] = useState([]);

// Watch a computed value
useDebugState('cartTotal', items.reduce((sum, i) => sum + i.price, 0));
useDebugState('itemCount', items.length);`, filename: "Cart.tsx" }), _jsx("h2", { id: "custom-hooks", children: "Watching values from custom hooks" }), _jsx("p", { children: "Works inside any custom hook:" }), _jsx(CodeBlock, { code: `function useAuth() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useDebugState('auth.user', user);
  useDebugState('auth.token', token);

  return { user, token, login, logout };
}`, filename: "useAuth.ts" }), _jsx("h2", { id: "naming", children: "Naming convention for clarity" }), _jsx("p", { children: "Use descriptive names with dot notation for visual grouping in the debug window:" }), _jsx(CodeBlock, { code: `// Good: grouped, descriptive names
useDebugState('checkoutForm.step2.address', address);
useDebugState('checkoutForm.step2.payment', paymentMethod);

// States are sorted by last-changed, so grouping helps
// distinguish related states at a glance`, filename: "naming.ts" }), _jsx("h2", { id: "multiple-states", children: "Watching multiple related states" }), _jsx("p", { children: "When watching multiple states in the same component, smart sorting will automatically reorder them based on which changed most recently:" }), _jsx(CodeBlock, { code: `function Wizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  // In the debug window, the most recently changed
  // state will float to the top
  useDebugState('wizard.step', step);
  useDebugState('wizard.data', data);
  useDebugState('wizard.errors', errors);
}`, filename: "Wizard.tsx" }), _jsx("h2", { id: "redux", children: "Using with Redux / Zustand / Context" }), _jsx("p", { children: "Works seamlessly with any state management solution:" }), _jsx(CodeBlock, { code: `// Redux
import { useSelector } from 'react-redux';
const user = useSelector(state => state.user);
useDebugState('redux.user', user);

// Zustand
import { useStore } from './store';
const count = useStore(state => state.count);
useDebugState('zustand.count', count);

// Context
const theme = useContext(ThemeContext);
useDebugState('context.theme', theme);`, filename: "integrations.tsx" })] }));
}
