import React from "react";

export default function WebSocketDemo() {
  const [connected, setConnected] = React.useState(false);
  const [messages, setMessages] = React.useState<string[]>([]);
  const [input, setInput] = React.useState("");
  const wsRef = React.useRef<WebSocket | null>(null);
  const [rtt, setRtt] = React.useState<number | null>(null);

  function connect() {
    if (connected) return;
    const ws = new WebSocket("wss://echo.websocket.events");
    wsRef.current = ws;
    const onOpen = () => { setConnected(true); setMessages(m=>[...m, "(connected)"]); };
    const onMessage = (ev: MessageEvent) => {
      const t = Date.now();
      try {
        const payload = JSON.parse(ev.data as any);
        if (payload.__ping) { setRtt(t - payload.__ping); }
        setMessages(m=>[...m, ev.data as any]);
      } catch { setMessages(m=>[...m, ev.data as any]); }
    };
    const onClose = () => { setConnected(false); setMessages(m=>[...m, "(disconnected)"]); };
    ws.addEventListener('open', onOpen);
    ws.addEventListener('message', onMessage);
    ws.addEventListener('close', onClose);
  }

  function disconnect() { wsRef.current?.close(); }
  function send() {
    if (!wsRef.current) return;
    wsRef.current.send(input);
    setMessages(m=>[...m, `> ${input}`]);
    setInput("");
  }
  function ping() {
    if (!wsRef.current) return;
    const payload = { __ping: Date.now() };
    wsRef.current.send(JSON.stringify(payload));
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">WebSocket Echo</h3>
        <div className="text-sm text-muted-foreground">RTT: {rtt !== null ? `${rtt} ms` : "—"}</div>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        {!connected ? (
          <button onClick={connect} className="rounded-xl bg-slate-900 px-4 py-2 text-white hover:opacity-90">Connect</button>
        ) : (
          <button onClick={disconnect} className="rounded-xl border border-slate-300 px-4 py-2 hover:bg-slate-100">Disconnect</button>
        )}
        <button onClick={ping} disabled={!connected} className="rounded-xl border border-slate-300 px-4 py-2 hover:bg-slate-100 disabled:opacity-50">Ping</button>
      </div>
      <div className="mt-3 flex gap-2">
        <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Type message…" className="w-full rounded-xl border border-slate-300 px-3 py-2" />
        <button onClick={send} disabled={!connected || !input} className="rounded-xl bg-blue-700 px-4 py-2 text-white disabled:opacity-50">Send</button>
      </div>
      <div className="mt-3 h-48 overflow-auto rounded-xl border border-slate-200 bg-white p-3 text-sm">
        {messages.map((m,i)=>(<div key={i} className="whitespace-pre-wrap">{m}</div>))}
      </div>
    </div>
  );
}
