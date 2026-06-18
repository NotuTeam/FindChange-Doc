import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Server, Info } from 'lucide-react';
import CodeBlock from '../../components/docs/CodeBlock';
export default function ServerLogs() {
    return (_jsxs("div", { className: "docs-prose", children: [_jsx("p", { className: "text-sm text-zinc-500", children: "API Reference" }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("h1", { className: "font-mono !mb-0", children: "Server Logs (SSR)" }), _jsx("span", { className: "text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-badge font-medium", children: "New" })] }), _jsx("p", { children: "Server-side console capture for frameworks with SSR (Next.js, Nuxt, Remix, etc.). Captured server logs are injected into the client via HTML hydration so they appear in the popup's Console tab on page load." }), _jsxs("div", { className: "flex items-start gap-3 p-4 rounded-card border border-accent/30 bg-accent/5 my-4", children: [_jsx(Server, { size: 18, className: "text-accent shrink-0 mt-0.5" }), _jsxs("p", { className: "!mb-0 text-sm", children: [_jsxs("strong", { children: ["Import from ", _jsx("code", { children: "findchange/server" }), ":"] }), " Server utilities are available via the ", _jsx("code", { children: "/server" }), " subpath to keep client bundles clean."] })] }), _jsx("h2", { id: "functions", children: "Functions" }), _jsx("div", { className: "my-4 overflow-x-auto rounded-card border border-border", children: _jsxs("table", { className: "w-full text-sm", children: [_jsx("thead", { children: _jsxs("tr", { className: "border-b border-border bg-bg-surface", children: [_jsx("th", { className: "text-left font-semibold text-zinc-300 px-4 py-2.5", children: "Function" }), _jsx("th", { className: "text-left font-semibold text-zinc-300 px-4 py-2.5", children: "Description" })] }) }), _jsxs("tbody", { children: [_jsxs("tr", { className: "border-b border-border/50", children: [_jsx("td", { className: "px-4 py-2.5", children: _jsx("code", { className: "font-mono text-accent text-xs", children: "setupServerConsoleCapture()" }) }), _jsx("td", { className: "px-4 py-2.5 text-zinc-400", children: "Override console.* on the server. Suppresses in production." })] }), _jsxs("tr", { className: "border-b border-border/50", children: [_jsx("td", { className: "px-4 py-2.5", children: _jsx("code", { className: "font-mono text-accent text-xs", children: "getServerLogInjection()" }) }), _jsx("td", { className: "px-4 py-2.5 text-zinc-400", children: "Returns a <script> snippet string with captured logs for client hydration." })] }), _jsxs("tr", { className: "border-b border-border/50", children: [_jsx("td", { className: "px-4 py-2.5", children: _jsx("code", { className: "font-mono text-accent text-xs", children: "teardownServerConsoleCapture()" }) }), _jsx("td", { className: "px-4 py-2.5 text-zinc-400", children: "Restore original server console methods." })] }), _jsxs("tr", { children: [_jsx("td", { className: "px-4 py-2.5", children: _jsx("code", { className: "font-mono text-accent text-xs", children: "clearServerLogs()" }) }), _jsx("td", { className: "px-4 py-2.5 text-zinc-400", children: "Clear the server-side log buffer." })] })] })] }) }), _jsx("h2", { id: "usage", children: "Usage" }), _jsx("h3", { children: "Step 1: Setup on the server" }), _jsxs("p", { children: ["Call ", _jsx("code", { children: "setupServerConsoleCapture()" }), " once on server startup:"] }), _jsx(CodeBlock, { code: `import { setupServerConsoleCapture } from 'findchange/server';

setupServerConsoleCapture();

// Any console.* on the server is now captured
console.log('Server rendering page...');
console.info('User session:', session.id);`, filename: "server-entry.ts" }), _jsx("h3", { children: "Step 2: Inject logs into HTML" }), _jsxs("p", { children: ["Inside your HTML template, call ", _jsx("code", { children: "getServerLogInjection()" }), " and render the result before app hydration. This populates ", _jsx("code", { children: "window.__FINDCHANGE_LOGS__" }), " on the client."] }), _jsx(CodeBlock, { code: `import { getServerLogInjection } from 'findchange/server';

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
}`, filename: "render.ts" }), _jsx("h3", { children: "Step 3: Client picks up the logs" }), _jsxs("p", { children: ["On the client, ", _jsx("code", { children: "setupConsoleCapture()" }), " automatically detects", ' ', _jsx("code", { children: "window.__FINDCHANGE_LOGS__" }), " and hydrates those server logs into the popup's Console tab. No extra code needed."] }), _jsx(CodeBlock, { code: `import { setupConsoleCapture } from 'findchange';

setupConsoleCapture();
// Server logs from window.__FINDCHANGE_LOGS__ are auto-hydrated`, filename: "main.tsx" }), _jsx("h2", { id: "nextjs", children: "Next.js Example" }), _jsx(CodeBlock, { code: `// app/layout.tsx (Server Component)
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
}`, filename: "app/layout.tsx" }), _jsxs("div", { className: "flex items-start gap-3 p-4 rounded-card border border-border bg-bg-surface my-4", children: [_jsx(Info, { size: 18, className: "text-accent shrink-0 mt-0.5" }), _jsxs("div", { children: [_jsx("p", { className: "!mb-1 text-white font-medium", children: "Hydration, not streaming" }), _jsx("p", { className: "!mb-0 text-sm", children: "Server logs are injected at render time and appear in the popup on page load. For real-time server log streaming, you would need a WebSocket transport, which is not included in this release." })] })] }), _jsx("h2", { id: "cleanup", children: "Request Lifecycle Cleanup" }), _jsx("p", { children: "For long-running server processes, clear the log buffer between requests to avoid cross-request contamination:" }), _jsx(CodeBlock, { code: `import { clearServerLogs } from 'findchange/server';

// At the end of each request (Express example)
app.use((req, res, next) => {
  res.on('finish', () => {
    clearServerLogs();
  });
  next();
});`, filename: "middleware.ts" })] }));
}
