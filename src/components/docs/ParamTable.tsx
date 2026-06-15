interface ParamTableProps {
  params: {
    name: string;
    type: string;
    required?: boolean;
    description: string;
  }[];
}

function typeColor(type: string): string {
  if (type === 'string') return 'text-blue-400 bg-blue-950/50';
  if (type.startsWith('T')) return 'text-purple-400 bg-purple-950/50';
  if (type === 'boolean') return 'text-green-400 bg-green-950/50';
  return 'text-zinc-400 bg-zinc-900';
}

export default function ParamTable({ params }: ParamTableProps) {
  return (
    <div className="my-4 overflow-x-auto rounded-card border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-bg-surface">
            <th className="text-left font-semibold text-zinc-300 px-4 py-2.5">Parameter</th>
            <th className="text-left font-semibold text-zinc-300 px-4 py-2.5">Type</th>
            <th className="text-left font-semibold text-zinc-300 px-4 py-2.5">Description</th>
          </tr>
        </thead>
        <tbody>
          {params.map((p) => (
            <tr key={p.name} className="border-b border-border/50 last:border-0">
              <td className="px-4 py-2.5">
                <code className="font-mono text-accent">{p.name}</code>
                {p.required && <span className="text-red-400 ml-1">*</span>}
              </td>
              <td className="px-4 py-2.5">
                <code className={`font-mono text-xs px-1.5 py-0.5 rounded ${typeColor(p.type)}`}>{p.type}</code>
              </td>
              <td className="px-4 py-2.5 text-zinc-400">{p.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
