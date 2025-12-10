"use client";

import { useEffect, useState } from "react";

export default function AdminEventsPage() {
  const [date, setDate] = useState("");
  const [remarks, setRemarks] = useState("");
  const [events, setEvents] = useState<any[]>([]);

  async function addEvent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date, remarks }),
    });

    setDate("");
    setRemarks("");
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold mb-6 text-orange-600">
        Admin – Add Events
      </h1>

      <form onSubmit={addEvent} className="space-y-4">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border px-3 py-2 rounded"
          required
        />

        <textarea
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          placeholder="Location / Remarks"
          className="w-full border px-3 py-2 rounded"
        />

        <button className="bg-orange-600 text-white px-4 py-2 rounded">
          Add Event
        </button>
      </form>
    </div>
  );
}
