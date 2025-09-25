import Container from "@/components/layout/Container";
import ReservationForm from "@/components/reservation/ReservationForm";

export default function ReservationPage() {
  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-10 py-10">
        {/* Levý sloupec – info + formulář */}
        <div>
          <h2 className="uppercase dark:text-neutral-300 font-serif text-xl tracking-wide text-foreground pb-2">
            <span className="text-accent font-black">BIG</span> Ben Foods
          </h2>

          <div className="text-neutral-700 dark:text-neutral-300 font-lato leading-6 text-sm pb-4">
            <p className="font-semibold mb-1 text-neutral-900 dark:text-neutral-300 font-lato">
              Otevírací doba:
            </p>
            <p>pondělí–středa 11:30–23:00</p>
            <p>čtvrtek–pátek 11:30–24:00</p>
            <p>sobota 12:00–24:00</p>
            <p>neděle 12:00–23:00</p>
          </div>

          {/* Formulář */}
          <ReservationForm />
        </div>

        {/* Pravý sloupec – mapa */}
        <div>
          <div className="aspect-[4/3] border border-neutral-700">
            <iframe
              className="w-full h-full"
              src="https://www.openstreetmap.org/export/embed.html?bbox=14.4414,50.0718,14.4448,50.0743&layer=mapnik&marker=50.07305,14.4431"
              loading="lazy"
            />
          </div>
          <p className="mt-2 text-xs text-neutral-400">
            Nitrianská 1625/22, Vinohrady, Praha 3, 130 00
          </p>
        </div>
      </div>
    </Container>
  );
}
