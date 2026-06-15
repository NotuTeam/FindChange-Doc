import CodeBlock from '../components/docs/CodeBlock';

export default function CommonPatterns() {
  return (
    <div className="docs-prose">
      <p className="text-sm text-zinc-500">FAQ & Tips</p>
      <h1>Common Patterns</h1>
      <p>Practical usage patterns and tips for getting the most out of findchange.</p>

      <h2 id="derived">Watching derived / computed values</h2>
      <p>You can pass any expression to <code>useDebugState</code>, not just state variables:</p>
      <CodeBlock
        code={`const [items, setItems] = useState([]);

// Watch a computed value
useDebugState('cartTotal', items.reduce((sum, i) => sum + i.price, 0));
useDebugState('itemCount', items.length);`}
        filename="Cart.tsx"
      />

      <h2 id="custom-hooks">Watching values from custom hooks</h2>
      <p>Works inside any custom hook:</p>
      <CodeBlock
        code={`function useAuth() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useDebugState('auth.user', user);
  useDebugState('auth.token', token);

  return { user, token, login, logout };
}`}
        filename="useAuth.ts"
      />

      <h2 id="naming">Naming convention for clarity</h2>
      <p>Use descriptive names with dot notation for visual grouping in the debug window:</p>
      <CodeBlock
        code={`// Good: grouped, descriptive names
useDebugState('checkoutForm.step2.address', address);
useDebugState('checkoutForm.step2.payment', paymentMethod);

// States are sorted by last-changed, so grouping helps
// distinguish related states at a glance`}
        filename="naming.ts"
      />

      <h2 id="multiple-states">Watching multiple related states</h2>
      <p>
        When watching multiple states in the same component, smart sorting will automatically
        reorder them based on which changed most recently:
      </p>
      <CodeBlock
        code={`function Wizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});

  // In the debug window, the most recently changed
  // state will float to the top
  useDebugState('wizard.step', step);
  useDebugState('wizard.data', data);
  useDebugState('wizard.errors', errors);
}`}
        filename="Wizard.tsx"
      />

      <h2 id="redux">Using with Redux / Zustand / Context</h2>
      <p>Works seamlessly with any state management solution:</p>
      <CodeBlock
        code={`// Redux
import { useSelector } from 'react-redux';
const user = useSelector(state => state.user);
useDebugState('redux.user', user);

// Zustand
import { useStore } from './store';
const count = useStore(state => state.count);
useDebugState('zustand.count', count);

// Context
const theme = useContext(ThemeContext);
useDebugState('context.theme', theme);`}
        filename="integrations.tsx"
      />
    </div>
  );
}
