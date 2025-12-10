"use client";

import { useState, type FormEvent } from "react";

export default function AdminEventsPage() {
  const [date, setDate] = useState("");
  const [remarks, setRemarks] = useState("");

  async function addEvent(e: FormEvent<HTMLFormElement>) {
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
    <div className="max-w-xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-orange-600 mb-6">
        Admin – Add Event
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

        <button
          type="submit"
          className="bg-orange-600 text-white px-4 py-2 rounded"
        >
          Add Event
        </button>
      </form>
    </div>
  );
}
