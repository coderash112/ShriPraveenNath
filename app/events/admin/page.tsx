"use client";
import { useEffect, useState } from "react";

export default function AdminEventsPage() {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState("");
  const [remarks, setRemarks] = useState("");

  async function loadEvents() {
    const res = await fetch("/api/events");
    setEvents(await res.json());
  }

  async function addEvent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await fetch("/api/events", {
      method: "POST",
      body: JSON.stringify({ date, remarks }),
    });
    setDate("");
    setRemarks("");
    loadEvents();
  }

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-xl text-orange-600 font-semibold">
        Admin – Manage Events
      </h2>

      <form onSubmit={addEvent} className="space-y-3">
        <input
          type="date"
          className="border px-3 py-2 rounded w-full"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <textarea
          className="border px-3 py-2 rounded w-full"
          placeholder="Location / Remarks"
          value={remarks}
          onChange={e => setRemarks(e.target.value)}
        />
        <button className="bg-orange-600 text-white px-4 py-2 rounded">
          Add Event
        </button>
      </form>

      <div className="space-y-2">
        {events.map(ev => (
          <div key={ev.id} className="border p-3 rounded bg-white">
            <strong>{ev.date}</strong>
            <p className="text-sm">{ev.remarks}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
