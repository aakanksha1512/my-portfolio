import Layout from "@/components/Layout";

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
  logo?: string; // path to logo image
};

const experiences: ExperienceItem[] = [
  {
    company: "onsemi",
    role: "Software Engineer",
    period: "Apr 2024 – Present",
    location: "Scottsdale, AZ",
    logo: "/placeholder.svg",
    bullets: [
      "Designed and deployed scalable backend services with Java, Spring Boot, and PostgreSQL.",
      "Built a GenAI-powered chatbot (Spring WebFlux + LLM APIs) for real-time customer support.",
      "Automated deployments with Jenkins, Docker & Kubernetes; reduced release time and improved reliability.",
      "Developed Kafka streaming pipelines and Spring Batch jobs for event-driven processing.",
      "Improved observability with Datadog and custom monitoring solutions.",
    ],
  },
  {
    company: "BahFed Corp",
    role: "Software Engineer Intern",
    period: "May 2023 – Dec 2023",
    location: "Portland, OR",
    logo: "/placeholder.svg",
    bullets: [
      "Enhanced ERP modules (C#/.NET, SQL Server) to streamline order, billing, and inventory flows.",
      "Optimized backend APIs and SQL queries; improved response times by ~30%.",
      "Delivered interactive reporting dashboards for real-time financial insights.",
    ],
  },
  {
    company: "Toshal Infotech",
    role: "Software Engineer Intern",
    period: "Dec 2021 – May 2022",
    location: "Surat, India",
    logo: "/placeholder.svg",
    bullets: [
      "Built POS and revenue management platform with C#/.NET and REST APIs.",
      "Implemented NLP-based search to improve product lookup accuracy.",
      "Refactored legacy modules into microservices to improve throughput and maintainability.",
    ],
  },
];

export default function Experience() {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-background to-muted/30 border-b">
        <div className="container mx-auto py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Experience</h1>
            <p className="mt-3 text-muted-foreground">
              Roles, impact, and projects delivered across backend systems, cloud platforms, and GenAI integrations.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto py-12">
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, i) => (
              <article
                key={exp.company}
                className="relative md:flex md:items-start md:gap-6"
                style={{ transform: `translateY(-${i * 10}px)` }}
              >
                <div className="md:flex-shrink-0 md:w-28 flex items-start md:items-center">
                  {/* Logo */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border bg-secondary flex items-center justify-center">
                    {exp.logo ? (
                      <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-sm font-semibold">{exp.company.slice(0, 2).toUpperCase()}</div>
                    )}
                  </div>
                </div>

                <div className="mt-4 md:mt-0 flex-1">
                  <div className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-lg font-semibold">
                          {exp.role} <span className="text-muted-foreground">·</span> <span className="text-primary">{exp.company}</span>
                        </h2>
                        <div className="text-sm text-muted-foreground mt-1">{exp.period} {exp.location ? ` · ${exp.location}` : ""}</div>
                      </div>
                    </div>

                    <ul className="mt-4 list-disc pl-5 text-sm space-y-2">
                      {exp.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t">
        <div className="container mx-auto py-10 text-sm text-muted-foreground">
          Want these expanded into case studies with architecture diagrams or metrics? I can add that per experience on request.
        </div>
      </section>
    </Layout>
  );
}
