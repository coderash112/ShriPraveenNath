export default function EventsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold text-orange-600 mb-6">
        Upcoming Events
      </h1>

      <div className="space-y-4">
        <div className="bg-white border rounded-xl p-4">
          <p className="font-medium">25 December 2025</p>
          <p className="text-sm text-slate-600">
            Satsang and discourse at Indore Ashram
          </p>
        </div>

        <div className="bg-white border rounded-xl p-4">
          <p className="font-medium">10 January 2026</p>
          <p className="text-sm text-slate-600">
            Spiritual gathering and bhajan evening – Ujjain
          </p>
        </div>
      </div>
    </div>
  );
}
