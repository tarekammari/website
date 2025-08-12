export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-foreground/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} <span className="font-medium">TAREK AMMARI</span>. All rights reserved.
        </p>
        <p className="flex gap-4">
          <a className="hover:underline" href="mailto:contact@tarekammari.dev">Email</a>
          <a className="hover:underline" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:underline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}


