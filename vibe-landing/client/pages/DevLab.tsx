import Layout from "@/components/Layout";
import ApiPlayground from "@/components/devlab/ApiPlayground";
import WebSocketDemo from "@/components/devlab/WebSocketDemo";
import LatencyMonitor from "@/components/devlab/LatencyMonitor";

export default function DevLab() {
  return (
    <Layout>
      <section className="border-b">
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold">Interactive Developer Lab</h1>
          <p className="mt-2 text-muted-foreground">Hands-on widgets that demonstrate HTTP fundamentals, realtime, and performance.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <ApiPlayground />
            <WebSocketDemo />
            <LatencyMonitor />
          </div>
        </div>
      </section>
    </Layout>
  );
}
