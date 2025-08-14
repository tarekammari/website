import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Globe, Code, ArrowRight } from "@/components/icons";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="text-center sm:text-left grid gap-6 sm:grid-cols-2 sm:gap-10 items-center">
        <Reveal>
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Hi, I’m <span className="text-foreground/80">TAREK AMMARI</span>
            </h1>
            <p className="mt-3 text-foreground/70 text-base sm:text-lg">
              Full‑stack developer building modern web apps and teaching developers.
              Explore my production‑ready templates and professional courses.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/projects" className="btn-ghost rounded-md px-6 py-3 text-base font-semibold border border-foreground/15 text-foreground hover:bg-foreground/[0.04]">
                Browse Projects
              </Link>
              <Link href="/contact" className="btn-ghost rounded-md px-6 py-3 text-base font-semibold bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-600/25 ring-2 ring-violet-300/30 hover:opacity-95 inline-flex items-center gap-2">
                <span>Let&apos;s start</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-indigo-600/10 blur-xl rounded-3xl" />

            <div className="relative mx-auto w-full max-w-[520px] md:max-w-[560px] min-h-[420px]">
              {/* Desktop frame */}
              <div className="relative rounded-2xl border border-foreground/10 bg-background shadow-xl overflow-hidden">
                <div className="border-b border-foreground/10 px-4 py-2.5 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <div className="ml-4 flex-1 h-5 rounded-md bg-foreground/5" />
                </div>
                <div className="relative w-full overflow-hidden rounded-b-2xl bg-background" style={{ aspectRatio: '16 / 9' }}>
                  <Image
                    src="/images/Desktop/HomePage.jpg"
                    alt="Desktop preview"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Tablet overlay */}
              <div className="hidden sm:block absolute -bottom-4 -left-2">
                <div className="w-48 md:w-56 lg:w-64">
                  <div className="relative rounded-[32px] bg-background shadow-xl ring-1 ring-foreground/10 p-3">
                    <div className="mx-auto mb-2 h-1.5 w-1.5 rounded-full bg-foreground/20" />
                    <div className="rounded-[20px] overflow-hidden bg-background h-[240px] md:h-[280px] lg:h-[320px]">
                      <Image
                        src="/images/tablet/HomePage.jpg"
                        alt="Tablet preview"
                        width={1200}
                        height={2000}
                        className="block w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile overlay */}
              <div className="hidden sm:block absolute -bottom-4 -right-2">
                <div className="w-28 md:w-32 lg:w-36">
                  <div className="relative rounded-[28px] p-1 bg-background shadow-xl ring-1 ring-foreground/10">
                    <div className="rounded-[26px] bg-black p-1.5">
                      <div className="mx-auto mt-1 mb-2 h-3 w-16 rounded-full bg-black/90 ring-1 ring-black/60" />
                      <div className="relative rounded-[20px] overflow-hidden bg-background h-48 md:h-56 lg:h-64">
                        <Image
                          src="/images/mobile/HomePage.jpg"
                          alt="Mobile preview"
                          width={900}
                          height={1800}
                          className="block w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Highlights */}
      <section className="grid gap-6 sm:grid-cols-3 auto-rows-fr items-stretch">
        {[
          { label: "AI", href: "/ai", desc: "LLMs, agents and automation for real products.", kind: "ai" },
          { label: "Web", href: "/web", desc: "Modern, fast, SEO‑ready web apps and sites.", kind: "web" },
          { label: "Dev", href: "/dev", desc: "DX tooling, PWAs, CI/CD and developer workflows.", kind: "dev" },
        ].map(({ label, href, desc, kind }, i) => (
          <Reveal key={label} delay={i * 120}>
            <Link href={href} className="group block h-full">
              <div className="card h-full rounded-lg border border-foreground/10 p-5 bg-background/60 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  {kind === 'ai' ? (
                    <span className="h-10 w-10 rounded-md ring-1 ring-violet-500/20 flex items-center justify-center bg-transparent">
                      <span className="ai-orb" aria-hidden />
                    </span>
                  ) : (
                    <span className="h-10 w-10 rounded-md bg-gradient-to-br from-foreground/10 to-foreground/[0.04] ring-1 ring-foreground/10 flex items-center justify-center">
                      {kind === 'web' ? (
                        <Globe className="h-5 w-5" aria-hidden />
                      ) : (
                        <Code className="h-5 w-5" aria-hidden />
                      )}
                    </span>
                  )}
                  <h3 className="font-semibold">{label}</h3>
                </div>
                <p className="text-sm text-foreground/70">{desc}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
