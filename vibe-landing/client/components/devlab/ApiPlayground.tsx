import React from "react";

export default function ApiPlayground() {
  const [url, setUrl] = React.useState("/api/demo");
  const [method, setMethod] = React.useState("GET");
  const [headers, setHeaders] = React.useState('{"Accept":"application/json"}');
  const [body, setBody] = React.useState("\n");
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState<string | null>(null);
  const [duration, setDuration] = React.useState<number | null>(null);
  const [result, setResult] = React.useState<any>(null);
  const controller = React.useRef<AbortController | null>(null);

  async function send() {
    try {
      setLoading(true); setStatus(null); setDuration(null); setResult(null);
      controller.current?.abort(); controller.current = new AbortController();
      const start = performance.now();
      const res = await fetch(url, {
        method,
        headers: JSON.parse(headers || "{}"),
        body: method !== "GET" && method !== "HEAD" ? (body?.trim() ? body : undefined) : undefined,
        signal: controller.current.signal,
      });
      const text = await res.text();
      const json = (() => { try { return JSON.parse(text); } catch { return text; } })();
      const ms = Math.round(performance.now() - start);
      setStatus(`${res.status} ${res.statusText}`); setDuration(ms); setResult(json);
    } catch (e: any) {
      if (e?.name === "AbortError") { setStatus("Request aborted"); return; }
      setStatus(e?.message || "Request failed");
    } finally { setLoading(false); }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">API Playground</h3>
        <span className="text-sm text-muted-foreground">Try your server API (CORS-safe via same-origin)</span>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto]">
        <input value={url} onChange={(e)=>setUrl(e.target.value)} className="w-full rounded-xl border border-slate-300 px-3 py-2" placeholder="https://api.example.com/endpoint" />
        <select value={method} onChange={(e)=>setMethod(e.target.value)} className="rounded-xl border border-slate-300 px-3 py-2">
          {['GET','POST','PUT','PATCH','DELETE','HEAD'].map(m => <option key={m}>{m}</option>)}
        </select>
      </div>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <div>
          <label className="text-sm text-muted-foreground">Headers (JSON)</label>
          <textarea value={headers} onChange={(e)=>setHeaders(e.target.value)} rows={4} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 font-mono text-sm"/>
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Body</label>
          <textarea value={body} onChange={(e)=>setBody(e.target.value)} rows={4} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 font-mono text-sm"/>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <button onClick={send} disabled={loading} className="rounded-xl bg-slate-900 px-4 py-2 text-white hover:opacity-90 disabled:opacity-50">{loading ? 'Sending…' : 'Send'}</button>
        <button onClick={() => controller.current?.abort()} className="rounded-xl border border-slate-300 px-4 py-2 hover:bg-slate-100">Abort</button>
        <button onClick={() => { setUrl('/api/demo'); setMethod('GET'); setHeaders('{"Accept":"application/json"}'); setBody("\\n"); }} className="rounded-xl border border-slate-300 px-4 py-2 hover:bg-slate-100">Preset: /api/demo</button>
        <button onClick={() => { setUrl('https://api.github.com/users/aakanksha1512/repos'); setMethod('GET'); setHeaders('{"Accept":"application/vnd.github+json"}'); setBody("\\n"); }} className="rounded-xl border border-slate-300 px-4 py-2 hover:bg-slate-100">Preset: GitHub</button>
      </div>
      <div className="mt-3 text-sm text-muted-foreground">
        {status && <span className="mr-3">Status: <span className="font-medium text-foreground">{status}</span></span>}
        {duration !== null && <span>Time: <span className="font-medium text-foreground">{duration} ms</span></span>}
      </div>
      <pre className="mt-3 max-h-72 overflow-auto rounded-xl border border-slate-200 bg-white p-3 text-sm">{typeof result === 'string' ? result : JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}
