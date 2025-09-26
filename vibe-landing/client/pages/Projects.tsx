import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "Customer Service Chatbot",
    description:
      "GenAI-powered chatbot for customer portal queries (orders, cases, accounts) with async Spring WebFlux APIs and serverless execution on AWS Lambda. Achieved ~40% support deflection with secure OAuth 2.0 integration.",
    tech: [
      "Java",
      "Spring Boot",
      "WebFlux",
      "AWS Lambda",
      "OAuth 2.0",
      "LLM APIs",
    ],
    image: "/placeholder.svg",
    repo: "https://github.com/aakanksha1512",
  },
  {
    title: "AI-Powered Sticky Notes Platform",
    description:
      "Full-stack semantic search + notes platform with RBAC, vector search, and CI/CD automation. Containerized microservices with FastAPI backend and React + TypeScript frontend.",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "OpenAI"],
    image: "/placeholder.svg",
    repo: "https://github.com/aakanksha1512",
  },
  {
    title: "Real-Time Video Analytics Pipeline",
    description:
      "Low-latency pipeline for object detection and tracking across live streams using Python + OpenCV. Asynchronous APIs with FastAPI, Kafka streaming, and PostgreSQL for analytics; deployed with Docker + Kubernetes.",
    tech: [
      "Python",
      "OpenCV",
      "FastAPI",
      "Kafka",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
    image: "/placeholder.svg",
    repo: "https://github.com/aakanksha1512",
  },
];

export default function Projects() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-background to-muted/30 border-b">
        <div className="container mx-auto py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Projects</h1>
            <p className="mt-3 text-muted-foreground">
              Detailed case studies of selected work showcasing backend systems, cloud-native architectures, and GenAI integrations.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[16/9] bg-muted">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center gap-3">
                  <Button asChild variant="outline" size="sm">
                    <a href={p.repo} target="_blank" rel="noreferrer">GitHub</a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t">
        <div className="container mx-auto py-10 flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">Want more details, metrics, or code walk-throughs?</p>
          <Button asChild>
            <a href="mailto:aakanksha15desai@gmail.com">Request a deep dive</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
