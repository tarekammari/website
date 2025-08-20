export type CatalogItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  category?: "wordpress" | "nextjs" | "react" | "htmlcss";
  kind: "project" | "course";
  /** Optional external link to live project */
  url?: string;
  /** Optional image (screenshot/cover). If not provided, card shows no image. */
  image?: string;
};

export const projects: CatalogItem[] = [
  {
    id: "kaf-wordpress",
    title: "KAF — Professional Services",
    description: "A professional WordPress website for KAF, featuring modern design, responsive layout, and optimized performance for service-based businesses.",
    price: 0,
    category: "wordpress", 
    kind: "project",
    url: "https://kaf.tarekammari.com",
    image: "/images/kaf.svg",
  },
  {
    id: "run-fitness-tracker",
    title: "Run — Fitness Tracker",
    description: "Running tracker web app with clean UI and fast performance.",
    price: 0,
    category: "wordpress",
    kind: "project",
    url: "https://astrarun.opgiouedsouf.com/",
    image: "/images/astraRun.svg",
  },
  {
    id: "digitalforce-agency",
    title: "Digital Force — Agency",
    description: "Modern digital agency website with strong branding and UX.",
    price: 0,
    category: "wordpress",
    kind: "project",
    url: "https://digitalforce.opgiouedsouf.com/",
    image: "/images/degitalForce.svg",
  },
  {
    id: "project-1",
    title: "[In Development] Project 1",
    description: "Project in development. More details coming soon.",
    price: 0,
    kind: "project",
    url: "#",
    image: "/images/placeholder-project.svg"
  },
  {
    id: "project-2",
    title: "[In Development] Project 2",
    description: "Project in development. More details coming soon.",
    price: 0,
    kind: "project",
    url: "#",
    image: "/images/placeholder-project.svg"
  },
  {
    id: "project-3",
    title: "[In Development] Project 3",
    description: "Project in development. More details coming soon.",
    price: 0,
    kind: "project",
    url: "#",
    image: "/images/placeholder-project.svg"
  },
  {
    id: "project-4",
    title: "[In Development] Project 4",
    description: "Project in development. More details coming soon.",
    price: 0,
    kind: "project",
    url: "#",
    image: "/images/placeholder-project.svg"
  },
];

export const courses: CatalogItem[] = [
  {
    id: "course-nextjs-pro",
    title: "Next.js Pro: Build and Deploy",
    description: "Master Next.js 15, App Router, data fetching, and deployment.",
    price: 99,
    category: "nextjs",
    kind: "course",
  },
  {
    id: "course-wp-dev",
    title: "WordPress for Developers",
    description: "From custom themes to plugins with modern tooling.",
    price: 79,
    category: "wordpress",
    kind: "course",
  },
  {
    id: "course-react-ui",
    title: "React UI Systems",
    description: "Design and build scalable component libraries in React.",
    price: 89,
    category: "react",
    kind: "course",
  },
];

export const categories = [
  { id: "all", label: "All" },
  { id: "wordpress", label: "WordPress" },
  { id: "nextjs", label: "Next.js" },
  { id: "react", label: "React" },
  { id: "htmlcss", label: "HTML/CSS" },
];


