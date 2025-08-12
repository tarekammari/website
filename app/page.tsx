import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center sm:text-left grid gap-6 sm:grid-cols-2 sm:gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Hi, I’m <span className="text-foreground/80">TAREK AMMARI</span>
          </h1>
          <p className="mt-3 text-foreground/70 text-base sm:text-lg">
            Full‑stack developer building modern web apps and teaching developers.
            Explore my production‑ready templates and professional courses.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/projects" className="rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90">
              Browse Projects
            </Link>
            <Link href="/courses" className="rounded-md border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-foreground/5">
              View Courses
            </Link>
          </div>
        </div>
        <div className="rounded-xl border border-foreground/10 p-6 bg-background/60">
          <p className="text-sm text-foreground/60">Stacks I deliver in</p>
          <ul className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <li className="rounded-md border border-foreground/10 px-3 py-2">WordPress</li>
            <li className="rounded-md border border-foreground/10 px-3 py-2">Next.js</li>
            <li className="rounded-md border border-foreground/10 px-3 py-2">React</li>
            <li className="rounded-md border border-foreground/10 px-3 py-2">HTML/CSS</li>
          </ul>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid gap-6 sm:grid-cols-3">
        {["Fast", "Accessible", "Responsive"].map((v) => (
          <div key={v} className="rounded-lg border border-foreground/10 p-5 bg-background/60">
            <h3 className="font-semibold mb-1">{v}</h3>
            <p className="text-sm text-foreground/70">Built with performance and UX best practices.</p>
          </div>
        ))}
      </section>
    </div>
  );
}
