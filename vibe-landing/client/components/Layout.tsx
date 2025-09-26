import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const nav = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/experience", label: "Experience" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-background/70">
        <div className="container mx-auto flex h-16 items-center justify-between">
          <Link to="/" className="font-extrabold tracking-tight text-xl">
            <span className="text-primary">Aakanksha</span> Desai
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location.pathname === item.to ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="secondary" size="sm">
              <a href="mailto:aakanksha15desai@gmail.com">Email</a>
            </Button>
            <Button asChild size="sm">
              <a href="https://www.linkedin.com/in/aakanksha-desai152" target="_blank" rel="noreferrer">LinkedIn</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t">
        <div className="container mx-auto py-6 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Aakanksha Desai. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              className="hover:text-primary"
              href="https://github.com/aakanksha1512"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="hover:text-primary"
              href="https://www.linkedin.com/in/aakanksha-desai152"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
