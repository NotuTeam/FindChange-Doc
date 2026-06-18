import { Server, Info } from 'lucide-react';
import CodeBlock from '../../components/docs/CodeBlock';

export default function ServerLogs() {
  return (
    <div className="docs-prose">
      <p className="text-sm text-zinc-500">API Reference</p>
      <div className="flex items-center gap-3">
        <h1 className="font-mono !mb-0">Server Logs (SSR)</h1>
        <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-badge font-medium">New</span>
      </div>
      <p>
        Server-side console capture for frameworks with SSR (Next.js, Nuxt, Remix, etc.). Captured
        server logs are injected into the client via HTML hydration so they appear in the popup's
        Console tab on page load.
      </p>

      <div className="flex items-start gap-3 p-4 rounded-card border border-accent/30 bg-accent/5 my-4">
        <Server size={18} className="text-accent shrink-0 mt-0.5" />
        <p className="!mb-0 text-sm">
          <strong>Import from <code>findchange/server</code>:</strong> Server utilities are
          available via the <code>/server</code> subpath to keep client bundles clean.
        </p>
      </div>

      <h2 id="functions">Functions</h2>
      <div className="my-4 overflow-x-auto rounded-card border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-bg-surface">
              <th className="text-left font-semibold text-zinc-300 px-4 py-2.5">Function</th>
              <th className="text-left font-semibold text-zinc-300 px-4 py-2.5">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50">
              <td className="px-4 py-2.5"><code className="font-mono text-accent text-xs">setupServerConsoleCapture()</code></td>
              <td className="px-4 py-2.5 text-zinc-400">Override console.* on the server. Suppresses in production.</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="px-4 py-2.5"><code className="font-mono text-accent text-xs">getServerLogInjection()</code></td>
              <td className="px-4 py-2.5 text-zinc-400">Returns a &lt;script&gt; snippet string with captured logs for client hydration.</td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="px-4 py-2.5"><code className="font-mono text-accent text-xs">teardownServerConsoleCapture()</code></td>
              <td className="px-4 py-2.5 text-zinc-400">Restore original server console methods.</td>
            </tr>
            <tr>
              <td className="px-4 py-2.5"><code className="font-mono text-accent text-xs">clearServerLogs()</code></td>
              <td className="px-4 py-2.5 text-zinc-400">Clear the server-side log buffer.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="usage">Usage</h2>
      <h3>Step 1: Setup on the server</h3>
      <p>Call <code>setupServerConsoleCapture()</code> once on server startup:</p>
      <CodeBlock
        code={`import { setupServerConsoleCapture } from 'findchange/server';

setupServerConsoleCapture();

// Any console.* on the server is now captured
console.log('Server rendering page...');
console.info('User session:', session.id);`}
        filename="server-entry.ts"
      />

      <h3>Step 2: Inject logs into HTML</h3>
      <p>
        Inside your HTML template, call <code>getServerLogInjection()</code> and render the result
        before app hydration. This populates <code>window.__FINDCHANGE_LOGS__</code> on the
        client.
      </p>
      <CodeBlock
        code={`import { getServerLogInjection } from 'findchange/server';

export function renderHTML(appHtml: string) {
  const logScript = getServerLogInjection(); // returns "" if no logs
  return \`<!DOCTYPE html>
<html>
<head>
  \${logScript ? \`<script>\${logScript}</script>\` : ''}
</head>
<body>
  <div id="root">\${appHtml}</div>
  <script src="/app.js"></script>
</body>
</html>\`;
}`}
        filename="render.ts"
      />

      <h3>Step 3: Client picks up the logs</h3>
      <p>
        On the client, <code>setupConsoleCapture()</code> automatically detects{' '}
        <code>window.__FINDCHANGE_LOGS__</code> and hydrates those server logs into the popup's
        Console tab. No extra code needed.
      </p>
      <CodeBlock
        code={`import { setupConsoleCapture } from 'findchange';

setupConsoleCapture();
// Server logs from window.__FINDCHANGE_LOGS__ are auto-hydrated`}
        filename="main.tsx"
      />

      <h2 id="nextjs">Next.js Example</h2>
      <CodeBlock
        code={`// app/layout.tsx (Server Component)
import { setupServerConsoleCapture, getServerLogInjection } from 'findchange/server';

setupServerConsoleCapture();

export default function RootLayout({ children }) {
  const logScript = getServerLogInjection();
  return (
    <html>
      <head>
        {logScript && (
          <script dangerouslySetInnerHTML={{ __html: logScript }} />
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}`}
        filename="app/layout.tsx"
      />

      <div className="flex items-start gap-3 p-4 rounded-card border border-border bg-bg-surface my-4">
        <Info size={18} className="text-accent shrink-0 mt-0.5" />
        <div>
          <p className="!mb-1 text-white font-medium">Hydration, not streaming</p>
          <p className="!mb-0 text-sm">
            Server logs are injected at render time and appear in the popup on page load. For
            real-time server log streaming, you would need a WebSocket transport, which is not
            included in this release.
          </p>
        </div>
      </div>

      <h2 id="cleanup">Request Lifecycle Cleanup</h2>
      <p>
        For long-running server processes, clear the log buffer between requests to avoid
        cross-request contamination:
      </p>
      <CodeBlock
        code={`import { clearServerLogs } from 'findchange/server';

// At the end of each request (Express example)
app.use((req, res, next) => {
  res.on('finish', () => {
    clearServerLogs();
  });
  next();
});`}
        filename="middleware.ts"
      />
    </div>
  );
}
