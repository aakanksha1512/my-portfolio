import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative border-b bg-gradient-to-br from-white to-slate-50">
        <div className="container mx-auto py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Portfolio</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Aakanksha Desai
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Software Engineer @ onsemi · Backend & Cloud Systems · Java, Spring Boot, AWS · Full‑Stack & GenAI Integration
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="/projects">View Projects</a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="mailto:aakanksha15desai@gmail.com">Contact</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://www.linkedin.com/in/aakanksha-desai152" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </Button>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              Scottsdale, Arizona · H1B · aakanksha15desai@gmail.com
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="font-semibold">Summary</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                I build scalable backend services, full‑stack features, and cloud‑native systems. Experience spans Java, Spring Boot, Python, AWS, and modern frontend frameworks with strong foundations in REST APIs, microservices, and CI/CD. I enjoy turning ideas into production‑ready features and integrating GenAI capabilities into enterprise workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="border-b">
        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SkillCard title="Languages" items={["Java", "Go", "Python", "C/C++", "JavaScript/TypeScript", "Shell"]} />
            <SkillCard title="Frameworks & Tools" items={["Spring Boot (Batch, JDBC, WebFlux)", "React", "Angular", "Redux", "FastAPI", "JUnit", "Hibernate"]} />
            <SkillCard title="Cloud & DevOps" items={["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Jenkins (CI/CD)", "Terraform", "Git workflows"]} />
            <SkillCard title="Databases" items={["PostgreSQL", "MySQL", "MongoDB", "DynamoDB", "Snowflake", "RDS", "ElasticSearch"]} />
            <SkillCard title="Systems & Messaging" items={["REST APIs", "OAuth 2.0/OpenID", "Kafka", "RabbitMQ", "IBM MQ", "Concurrency", "Memory management"]} />
            <SkillCard title="AI" items={["LLM APIs", "RAG", "Prompt Engineering", "NLP"]} />
          </div>
        </div>
      </section>

      {/* Experience highlights */}
      <section className="border-b">
        <div className="container mx-auto py-12">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold">Experience</h2>
            <Button asChild variant="link">
              <a href="/experience">See all experience →</a>
            </Button>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <ExpCard
              role="Software Engineer"
              company="onsemi"
              period="Apr 2024 – Present · Scottsdale, AZ"
              bullets={[
                "Designed and deployed scalable backend services (Java, Spring Boot, PostgreSQL).",
                "Built GenAI chatbot with Spring WebFlux + LLM APIs for real‑time support.",
                "Automated deployments with Jenkins + Docker/Kubernetes; improved reliability.",
              ]}
            />
            <ExpCard
              role="Software Engineer Intern"
              company="BahFed Corp"
              period="May 2023 – Dec 2023 · Portland, OR"
              bullets={[
                "Enhanced ERP modules in C#/.NET/SQL Server; streamlined operations.",
                "Optimized APIs and SQL queries; ~30% faster on high‑volume transactions.",
                "Delivered reporting dashboards for real‑time financial insights.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section>
        <div className="container mx-auto py-12">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <Button asChild variant="link">
              <a href="/projects">All projects →</a>
            </Button>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <ProjectCard
              title="Customer Service Chatbot"
              description="LLM‑powered chatbot for customer support with Spring WebFlux and AWS Lambda; ~40% support deflection."
              tech={["Java", "Spring Boot", "WebFlux", "AWS", "OAuth 2.0", "LLM APIs"]}
            />
            <ProjectCard
              title="AI‑Powered Sticky Notes"
              description="Semantic search notes platform with RBAC and CI/CD automation."
              tech={["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "OpenAI"]}
            />
            <ProjectCard
              title="Real‑Time Video Analytics"
              description="Object detection and tracking across live streams; Kafka + FastAPI + Kubernetes."
              tech={["Python", "OpenCV", "FastAPI", "Kafka", "PostgreSQL", "Kubernetes"]}
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Let’s build something great.</h3>
            <p className="text-sm text-muted-foreground">Open to backend, cloud, and full‑stack roles. GenAI integration welcome.</p>
          </div>
          <div className="flex gap-3">
            <Button asChild>
              <a href="mailto:aakanksha15desai@gmail.com">Email me</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="https://github.com/aakanksha1512" target="_blank" rel="noreferrer">GitHub</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border bg-card p-5 shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((it) => (
          <li key={it} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md">
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExpCard({
  role,
  company,
  period,
  bullets,
}: {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-xl border bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">{role} · {company}</h3>
        <span className="text-xs text-muted-foreground">{period}</span>
      </div>
      <ul className="mt-3 list-disc pl-5 text-sm space-y-2">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, tech }: { title: string; description: string; tech: string[] }) {
  return (
    <div className="rounded-xl border bg-card p-5 shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {tech.map((t) => (
          <li key={t} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}
