import React from "react";

export default function LatencyMonitor() {
  const [target, setTarget] = React.useState("/api/ping");
  const [samples, setSamples] = React.useState<number[]>([]);
  const [running, setRunning] = React.useState(false);

  async function runPings(n = 5) {
    setRunning(true); setSamples([]);
    const out: number[] = [];
    for (let i=0; i<n; i++) {
      const start = performance.now();
      try { await fetch(target, { method: 'GET', cache: 'no-store' }); out.push(Math.round(performance.now() - start)); }
      catch { out.push(NaN); }
      setSamples([...out]); await new Promise(r=>setTimeout(r, 600));
    }
    setRunning(false);
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold">API Latency Monitor</h3>
      <div className="mt-3 flex gap-2">
        <input value={target} onChange={(e)=>setTarget(e.target.value)} className="w-full rounded-xl border border-slate-300 px-3 py-2" />
        <button onClick={()=>runPings(7)} disabled={running} className="rounded-xl bg-slate-900 px-4 py-2 text-white disabled:opacity-50">Run</button>
      </div>
      <div className="mt-3 grid gap-2">
        <div className="text-sm text-muted-foreground">Samples: {samples.filter(v=>!Number.isNaN(v)).map(v=>`${v}ms`).join(', ') || '—'}</div>
        <div className="h-2 w-full rounded bg-slate-200">
          <div className="flex h-2 items-end gap-1">
            {samples.map((v,i)=> (
              <div key={i} title={Number.isNaN(v)?'error':`${v}ms`} style={{ height: `${Number.isNaN(v)?100:Math.min(100, (v/500)*100)}%`, width: '12px' }} className={`rounded ${Number.isNaN(v)?'bg-red-400':'bg-blue-600'}`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
