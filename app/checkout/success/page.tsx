import Link from "next/link";

export const metadata = { title: "Success — TAREK AMMARI" };

export default function SuccessPage() {
  return (
    <div className="max-w-lg mx-auto text-center space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">Thank you!</h1>
      <p className="text-foreground/70">Your purchase is confirmed. A receipt will be sent to your email.</p>
      <div className="flex justify-center gap-3">
        <Link href="/projects" className="rounded-md border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-foreground/5">
          Keep browsing
        </Link>
        <Link href="/" className="rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90">
          Go home
        </Link>
      </div>
    </div>
  );
}


