import ItemCard from "@/components/ItemCard";
import Reveal from "@/components/Reveal";
import { courses } from "@/lib/data";

export const metadata = {
  title: "Courses — TAREK AMMARI",
};

export default function CoursesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Courses</h1>
        <p className="text-foreground/70 text-sm mt-1">Level up with practical, modern curriculum.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((item, i) => (
          <Reveal key={item.id} delay={i * 70}>
            <ItemCard item={item} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}


