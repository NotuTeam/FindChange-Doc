import { useState } from 'react';
import { Copy, CheckCheck } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  highlightLines?: number[];
}

export default function CodeBlock({
  code,
  language = 'tsx',
  filename,
  highlightLines = [],
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const lines = code.trim().split('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-card overflow-hidden border border-border bg-[#0a0a0a] my-4">
      <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-bg-surface">
        <span className="text-xs text-zinc-400 font-mono">
          {filename || language}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase text-zinc-600">{language}</span>
          <button
            onClick={handleCopy}
            className="p-1 hover:bg-bg-elevated rounded text-zinc-400 hover:text-white transition-colors"
          >
            {copied ? <CheckCheck size={14} className="text-green-500" /> : <Copy size={14} />}
          </button>
        </div>
      </div>
      <pre className="p-4 overflow-x-auto text-[13px] leading-relaxed">
        <code className="font-mono">
          {lines.map((line, i) => {
            const lineNum = i + 1;
            const isHighlighted = highlightLines.includes(lineNum);
            return (
              <div
                key={i}
                className={isHighlighted ? '-mx-4 px-4 bg-accent/10 border-l-2 border-accent' : ''}
              >
                {line || ' '}
              </div>
            );
          })}
        </code>
      </pre>
    </div>
  );
}
