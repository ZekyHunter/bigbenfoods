"use client";

import { useMemo, useState } from "react";

function times(from = 11, to = 24, stepMin = 30) {
  const out: string[] = [];
  const start = from * 60;
  const end = to * 60;
  for (let m = start; m <= end; m += stepMin) {
    const hh = String(Math.floor(m / 60)).padStart(2, "0");
    const mm = String(m % 60).padStart(2, "0");
    out.push(`${hh}:${mm}`);
  }
  return out;
}

export default function ReservationForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  const timeOptions = useMemo(() => times(11, 24, 30), []);
  const today = useMemo(() => {
    const d = new Date();
    return d.toISOString().slice(0, 10);
  }, []);

  async function onSubmit(form: FormData) {
    setLoading(true);
    setOk(null);

    const payload = {
      people: Number(form.get("people") || 1),
      date: String(form.get("date") || ""),
      time: String(form.get("time") || ""),
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      note: String(form.get("note") || ""),
      hp: String(form.get("company") || ""), // honeypot
    };

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setOk(res.ok);
      if (res.ok)
        (
          document.getElementById("reservation-form") as HTMLFormElement
        )?.reset();
    } catch {
      setOk(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      id="reservation-form"
      action={onSubmit}
      className="space-y-3 max-w-xl"
    >
      <div className="flex gap-3">
        <label className="flex-1 inline-flex items-center gap-2 border border-neutral-700 px-3 py-2">
          <span className="text-neutral-400">👥</span>
          <select
            name="people"
            defaultValue="1"
            className="w-full bg-transparent outline-none"
            aria-label="Počet osob"
            required
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n} className="bg-neutral-900">
                {n}
              </option>
            ))}
          </select>
        </label>

        <label className="flex-1 inline-flex items-center gap-2 border border-neutral-700 px-3 py-2">
          <span className="text-neutral-400">📅</span>
          <input
            type="date"
            name="date"
            defaultValue={today}
            className="w-full bg-transparent outline-none"
            required
          />
        </label>

        <label className="flex-1 inline-flex items-center gap-2 border border-neutral-700 px-3 py-2">
          <span className="text-neutral-400">⏰</span>
          <select
            name="time"
            defaultValue="18:00"
            className="w-full bg-transparent outline-none"
            aria-label="Čas"
            required
          >
            {timeOptions.map((t) => (
              <option key={t} value={t} className="bg-neutral-900">
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <input
        name="name"
        placeholder="Vaše jméno"
        className="w-full border border-neutral-700 px-3 py-2 bg-transparent placeholder-neutral-500 outline-none"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Váš email"
        className="w-full border border-neutral-700 px-3 py-2 bg-transparent placeholder-neutral-500 outline-none"
        required
      />
      <textarea
        name="note"
        placeholder="Poznámka"
        rows={5}
        className="w-full border border-neutral-700 px-3 py-2 bg-transparent placeholder-neutral-500 outline-none"
      />

      {/* Honeypot proti spamu (schované) */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="pt-2 flex items-center gap-3">
        <button
          disabled={loading}
          className="rounded-full border border-red-600 bg-red-600/20 hover:bg-red-600/40 text-red-200 px-5 py-2 transition disabled:opacity-60"
        >
          {loading ? "Odesílám…" : "Odeslat rezervaci"}
        </button>

        {ok === true && (
          <span className="text-sm text-green-400">
            Děkujeme, brzy se ozveme.
          </span>
        )}
        {ok === false && (
          <span className="text-sm text-red-400">
            Něco se nepovedlo. Zkuste to znovu.
          </span>
        )}
      </div>
    </form>
  );
}
