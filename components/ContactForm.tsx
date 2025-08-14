"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return <p className="text-foreground/70">Thanks! I’ll get back to you soon.</p>;
  }

  return (
    <form onSubmit={submit} className="max-w-xl grid gap-4">
      <h1 className="text-2xl font-bold tracking-tight">Contact</h1>
      <label className="grid gap-1 text-sm">
        <span>Name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="rounded-md border border-foreground/20 bg-transparent px-3 py-2"
        />
      </label>
      <label className="grid gap-1 text-sm">
        <span>Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded-md border border-foreground/20 bg-transparent px-3 py-2"
        />
      </label>
      <label className="grid gap-1 text-sm">
        <span>Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={5}
          className="rounded-md border border-foreground/20 bg-transparent px-3 py-2"
        />
      </label>
      <button className="btn-ghost rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90">Send</button>
    </form>
  );
}


