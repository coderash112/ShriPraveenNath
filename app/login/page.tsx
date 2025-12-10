"use client";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });

    if (res.ok) {
      window.location.href = "/events/admin";
    } else {
      setError("Invalid login");
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-10">
      <h2 className="text-xl font-semibold text-orange-600 mb-4">
        Admin Login
      </h2>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <form onSubmit={submit} className="space-y-3">
        <input
          name="username"
          className="w-full border px-3 py-2 rounded"
          placeholder="Username"
          required
        />
        <input
          name="password"
          type="password"
          className="w-full border px-3 py-2 rounded"
          placeholder="Password"
          required
        />

        <button className="bg-orange-600 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
