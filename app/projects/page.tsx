import ItemCard from "@/components/ItemCard";
import { categories, projects } from "@/lib/data";

export const metadata = {
  title: "Projects — TAREK AMMARI",
};

export default function ProjectsPage({ searchParams }: { searchParams: { category?: string } }) {
  const category = searchParams?.category ?? "all";
  const data = category === "all" ? projects : projects.filter((p) => p.category === category);
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
          <p className="text-foreground/70 text-sm mt-1">Production‑ready templates you can buy and deploy.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <a
              key={c.id}
              href={c.id === "all" ? "/projects" : `/projects?category=${c.id}`}
              className={`text-sm rounded-md border px-3 py-1.5 ${
                category === c.id ? "border-foreground bg-foreground text-background" : "border-foreground/20 hover:bg-foreground/5"
              }`}
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}


