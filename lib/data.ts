export type CatalogItem = {
  id: string;
  title: string;
  description: string;
  price: number;
  category: "wordpress" | "nextjs" | "react" | "htmlcss";
  kind: "project" | "course";
  /** Optional external link to live project */
  url?: string;
  /** Optional image (screenshot/cover). If not provided, card shows no image. */
  image?: string;
};

export const projects: CatalogItem[] = [
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
    id: "wp-shop-starter",
    title: "WordPress Shop Starter",
    description: "Optimized WooCommerce theme + setup for fast online stores.",
    price: 149,
    category: "wordpress",
    kind: "project",
  },
  {
    id: "nextjs-saas-kit",
    title: "Next.js SaaS Kit",
    description: "Production-ready SaaS boilerplate with auth and billing hooks.",
    price: 199,
    category: "nextjs",
    kind: "project",
  },
  {
    id: "react-dashboard",
    title: "React Admin Dashboard",
    description: "Clean admin UI with charts, tables, and authentication.",
    price: 129,
    category: "react",
    kind: "project",
  },
  {
    id: "htmlcss-landing",
    title: "HTML/CSS Landing Page",
    description: "High-converting landing page with modern CSS and accessibility.",
    price: 79,
    category: "htmlcss",
    kind: "project",
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


