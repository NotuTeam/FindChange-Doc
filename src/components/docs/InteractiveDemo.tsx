import { useState } from 'react';
import { useDebugState, DebugWatcher } from 'findchange';
import {
  Bug,
  ChevronRight,
  ChevronLeft,
  Check,
  ShoppingBag,
  User,
  CreditCard,
  RotateCcw,
} from 'lucide-react';

interface DemoForm {
  name: string;
  email: string;
  product: string;
  quantity: number;
  shipping: 'standard' | 'express';
  paymentMethod: string;
}

const EMPTY_FORM: DemoForm = {
  name: '',
  email: '',
  product: 'T-Shirt',
  quantity: 1,
  shipping: 'standard',
  paymentMethod: 'card',
};

const STEPS = ['Profile', 'Order', 'Payment'] as const;
const STEP_ICONS = [User, ShoppingBag, CreditCard];

export default function InteractiveDemo() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<DemoForm>(EMPTY_FORM);
  const [completed, setCompleted] = useState(false);

  // These states are watched by findchange in real-time
  useDebugState('demo.form', form);
  useDebugState('demo.currentStep', step);
  useDebugState('demo.completed', completed);

  const update = <K extends keyof DemoForm>(key: K, value: DemoForm[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const reset = () => {
    setForm(EMPTY_FORM);
    setStep(0);
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className="not-prose">
        <DemoShell onReset={reset}>
          <div className="text-center py-8">
            <div className="w-14 h-14 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <Check className="text-green-400" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">Order placed!</h3>
            <p className="text-sm text-zinc-400 mb-6">
              {form.quantity}x {form.product} for {form.name}
            </p>
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
            >
              <RotateCcw size={14} /> Try again
            </button>
          </div>
        </DemoShell>
      </div>
    );
  }

  return (
    <div className="not-prose">
      <DemoShell onReset={step !== 0 || form !== EMPTY_FORM ? reset : undefined}>
        {/* Stepper */}
        <div className="flex items-center gap-2 mb-6">
          {STEPS.map((label, i) => {
            const Icon = STEP_ICONS[i];
            const isActive = i === step;
            const isDone = i < step;
            return (
              <div key={label} className="flex items-center flex-1 last:flex-none">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                      isActive
                        ? 'bg-accent text-black'
                        : isDone
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-zinc-800 text-zinc-500'
                    }`}
                  >
                    {isDone ? <Check size={14} /> : <Icon size={13} />}
                  </div>
                  <span
                    className={`text-xs hidden sm:inline ${
                      isActive ? 'text-white font-medium' : 'text-zinc-500'
                    }`}
                  >
                    {label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className={`h-px flex-1 mx-2 ${isDone ? 'bg-green-500/30' : 'bg-border'}`} />
                )}
              </div>
            );
          })}
        </div>

        {/* Step content */}
        {step === 0 && (
          <div className="space-y-3">
            <Field label="Name">
              <input
                type="text"
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                placeholder="Jane Doe"
                className="demo-input"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                placeholder="jane@example.com"
                className="demo-input"
              />
            </Field>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-3">
            <Field label="Product">
              <select
                value={form.product}
                onChange={(e) => update('product', e.target.value)}
                className="demo-input"
              >
                <option>T-Shirt</option>
                <option>Hoodie</option>
                <option>Mug</option>
                <option>Sticker Pack</option>
              </select>
            </Field>
            <Field label={`Quantity: ${form.quantity}`}>
              <input
                type="range"
                min={1}
                max={10}
                value={form.quantity}
                onChange={(e) => update('quantity', Number(e.target.value))}
                className="w-full accent-amber-500"
              />
            </Field>
            <Field label="Shipping">
              <div className="flex gap-2">
                {(['standard', 'express'] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => update('shipping', s)}
                    className={`flex-1 py-2 px-3 rounded-md text-sm border transition-colors capitalize ${
                      form.shipping === s
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-border text-zinc-400 hover:border-zinc-600'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </Field>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3">
            <Field label="Payment Method">
              <div className="flex gap-2">
                {['card', 'paypal', 'crypto'].map((m) => (
                  <button
                    key={m}
                    onClick={() => update('paymentMethod', m)}
                    className={`flex-1 py-2 px-3 rounded-md text-sm border transition-colors capitalize ${
                      form.paymentMethod === m
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-border text-zinc-400 hover:border-zinc-600'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </Field>
            <div className="rounded-md border border-border bg-bg p-3 mt-4">
              <p className="text-xs text-zinc-500 mb-2">Order Summary</p>
              <div className="flex justify-between text-sm text-zinc-300">
                <span>{form.quantity}x {form.product}</span>
                <span>${(form.quantity * (form.product === 'Hoodie' ? 45 : form.product === 'Mug' ? 12 : form.product === 'Sticker Pack' ? 8 : 25)).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-zinc-300">
                <span>Shipping ({form.shipping})</span>
                <span>{form.shipping === 'express' ? '$9.99' : '$4.99'}</span>
              </div>
              <div className="flex justify-between text-sm font-medium text-white border-t border-border mt-2 pt-2">
                <span>Total</span>
                <span>
                  ${(
                    form.quantity * (form.product === 'Hoodie' ? 45 : form.product === 'Mug' ? 12 : form.product === 'Sticker Pack' ? 8 : 25) +
                    (form.shipping === 'express' ? 9.99 : 4.99)
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between gap-2 mt-6">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md border border-border text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={14} /> Back
          </button>
          {step < STEPS.length - 1 ? (
            <button
              onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}
              className="inline-flex items-center gap-1 text-sm px-4 py-1.5 rounded-md bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
            >
              Next <ChevronRight size={14} />
            </button>
          ) : (
            <button
              onClick={() => setCompleted(true)}
              className="inline-flex items-center gap-1 text-sm px-4 py-1.5 rounded-md bg-green-600 text-white font-medium hover:bg-green-500 transition-colors"
            >
              <Check size={14} /> Place Order
            </button>
          )}
        </div>
      </DemoShell>

      {/* Real DebugWatcher - opens actual popup */}
      <DebugWatcher />
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-medium text-zinc-400 mb-1.5">{label}</label>
      {children}
    </div>
  );
}

function DemoShell({
  children,
  onReset,
}: {
  children: React.ReactNode;
  onReset?: () => void;
}) {
  return (
    <div className="rounded-card border border-border bg-bg-surface overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-bg-elevated">
        <span className="text-xs text-zinc-400 flex items-center gap-1.5">
          <Bug size={12} className="text-accent" />
          Live Demo - states are watched by findchange
        </span>
        {onReset && (
          <button
            onClick={onReset}
            className="text-xs text-zinc-500 hover:text-accent transition-colors flex items-center gap-1"
          >
            <RotateCcw size={11} /> Reset
          </button>
        )}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
