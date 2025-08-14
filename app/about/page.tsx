export const metadata = { title: "About — TAREK AMMARI" };
import { Code, Database, Globe, Smartphone } from 'lucide-react';

export default function AboutPage() {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Expert in React, Next.js, TypeScript, and modern CSS frameworks",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      description: "Proficient in Node.js, Python, databases, and API development",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "WordPress Development",
      description: "Custom themes, plugins, and headless WordPress solutions",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Responsive, accessible, and performance-optimized applications",
    },
  ];

  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Me</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A passionate full-stack developer with expertise in modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Left side - Professional Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3 opacity-20" />
              <div className="relative">
                <img
                  src="/tarek.png"
                  alt="Tarek Ammari - Full Stack Developer"
                  className="w-56 h-80 md:w-64 md:h-96 object-cover rounded-2xl shadow-2xl border border-foreground/10"
                />
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Available for hire
                </div>
              </div>
            </div>
          </div>

          {/* Middle - Text content */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Building Digital Solutions That Matter</h3>
            <p className="text-lg text-foreground/70 leading-relaxed">
              With over 3 years of experience in web development, I build high‑performance, scalable applications using
              modern technologies. My work spans from crafting pixel‑perfect user interfaces to architecting robust,
              maintainable backends.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              I leverage AI tools and automation to accelerate delivery—code generation, refactoring, testing, and
              documentation—while keeping quality and readability high. I’m comfortable across the React/Next.js and
              WordPress ecosystems, along with Node.js, Python, databases, and API development.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              I can contribute to large, business‑critical systems for companies, including accounting, human resources,
              inventory/stock management, and custom line‑of‑business applications—from prototypes to production‑ready
              releases.
            </p>
            <div className="mt-2">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 text-white font-medium shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background transition"
              >
                Let’s work together
              </a>
            </div>
          </div>
        </div>

        {/* Highlights section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">What I Do Best</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card rounded-lg border border-foreground/10 p-6 bg-background/60 text-center"
              >
                <div className="text-blue-500 mb-4 flex justify-center">{item.icon}</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-foreground mb-2">5</div>
            <div className="text-foreground/70">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground mb-2">+3</div>
            <div className="text-foreground/70">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground mb-2">5</div>
            <div className="text-foreground/70">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
            <div className="text-foreground/70">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}


