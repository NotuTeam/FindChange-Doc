interface PropTableProps {
  props: {
    prop: string;
    type: string;
    default?: string;
    description: string;
  }[];
}

export default function PropTable({ props }: PropTableProps) {
  return (
    <div className="my-4 overflow-x-auto rounded-card border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-bg-surface">
            <th className="text-left font-semibold text-zinc-300 px-4 py-2.5">Prop</th>
            <th className="text-left font-semibold text-zinc-300 px-4 py-2.5">Type</th>
            <th className="text-left font-semibold text-zinc-300 px-4 py-2.5">Default</th>
            <th className="text-left font-semibold text-zinc-300 px-4 py-2.5">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((p) => {
            const isUnion = p.type.includes('|');
            const types = isUnion
              ? p.type.split('|').map((t) => t.trim().replace(/'/g, ''))
              : [p.type];
            return (
              <tr key={p.prop} className="border-b border-border/50 last:border-0">
                <td className="px-4 py-2.5">
                  <code className="font-mono text-accent">{p.prop}</code>
                </td>
                <td className="px-4 py-2.5">
                  <div className="flex flex-wrap gap-1">
                    {types.map((t) => (
                      <code
                        key={t}
                        className="font-mono text-xs px-1.5 py-0.5 rounded text-zinc-400 bg-zinc-900"
                      >
                        {t}
                      </code>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-2.5">
                  {p.default ? (
                    <code className="font-mono text-xs text-zinc-400 bg-zinc-900 px-1.5 py-0.5 rounded">{p.default}</code>
                  ) : (
                    <span className="text-zinc-600">&mdash;</span>
                  )}
                </td>
                <td className="px-4 py-2.5 text-zinc-400">{p.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
