const PEOPLE = Array.from({ length: 12 }, (_, i) => i + 1);
const TIMES = [
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
];

export default function ReservationForm() {
  return (
    <div
      className="space-y-3 max-w-xl"
      role="form"
      aria-label="Reservation (demo)"
    >
      <div className="flex gap-3">
        {/* Počet osob */}
        <label className="flex-1 inline-flex items-center gap-2 border-2 border-gray-200 px-3 py-2">
          <span className="text-neutral-400">👥</span>
          <select
            name="people"
            defaultValue="1"
            className="w-full bg-transparent outline-none"
            aria-label="Počet osob"
          >
            {PEOPLE.map((n) => (
              <option key={n} value={n} className="bg-neutral-900">
                {n}
              </option>
            ))}
          </select>
        </label>

        {/* Datum */}
        <label className="flex-1 inline-flex items-center gap-2 border-2 border-gray-200 px-3 py-2">
          <span className="text-neutral-400">📅</span>
          <input
            type="date"
            name="date"
            className="w-full bg-transparent outline-none"
            aria-label="Datum"
          />
        </label>

        {/* Čas */}
        <label className="flex-1 inline-flex items-center gap-2 border-2 border-gray-200 px-3 py-2">
          <span className="text-neutral-400">⏰</span>
          <select
            name="time"
            defaultValue=""
            className="w-full bg-transparent outline-none"
            aria-label="Čas"
          >
            <option value="" disabled className="bg-neutral-900">
              Vyberte čas
            </option>
            {TIMES.map((t) => (
              <option key={t} value={t} className="bg-neutral-900">
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Jméno */}
      <input
        name="name"
        placeholder="Vaše jméno"
        className="w-full border-2 border-gray-200 px-3 py-2 bg-transparent placeholder-neutral-400 outline-none"
      />

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Váš email"
        className="w-full border-2 border-gray-200 px-3 py-2 bg-transparent placeholder-neutral-400 outline-none"
      />

      {/* Poznámka */}
      <textarea
        name="note"
        placeholder="Poznámka"
        rows={5}
        className="w-full border-2 border-gray-200 px-3 py-2 bg-transparent placeholder-neutral-400 outline-none"
      />

      <div className="pt-2 flex items-center gap-3">
        <button
          type="button"
          className="rounded-full border border-red-600 bg-red-600/20 hover:bg-red-600/40 text-red-200 px-5 py-2 transition"
        >
          Odeslat rezervaci
        </button>
        <span className="text-xs text-neutral-400">Zatím jen šablona</span>
      </div>
    </div>
  );
}
