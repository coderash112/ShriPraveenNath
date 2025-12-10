"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function submit(e: any) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold text-orange-600 mb-6">
        Contact Us
      </h1>

      {sent && (
        <p className="mb-4 text-green-700 bg-green-50 border border-green-200 px-3 py-2 rounded text-sm">
          Thank you. We will contact you soon.
        </p>
      )}

      <form onSubmit={submit} className="space-y-4">
        <input
          required
          placeholder="Your Name"
          className="w-full border rounded px-3 py-2"
        />
        <input
          required
          type="email"
          placeholder="Email"
          className="w-full border rounded px-3 py-2"
        />
        <textarea
          placeholder="Message"
          className="w-full border rounded px-3 py-2 h-28"
        />
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
}
