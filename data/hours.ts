export type OpenHour = { label: string; value: string };

export const hours: OpenHour[] = [
  { label: "pondělí–středa", value: "11:30–23:00" },
  { label: "čtvrtek–pátek", value: "11:30–24:00" },
  { label: "sobota", value: "12:00–24:00" },
  { label: "neděle", value: "12:00–23:00" },
];
