import Container from "./Container";
import { site } from "../../data/site";
import { hours, OpenHour } from "../../data/hours";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-red-900">
      <div className="h-[2px] bg-red-800/60" />
      <Container>
        <div className="py-12 grid gap-10 md:grid-cols-4 text-sm">
          <div>
            <h3 className="font-semibold mb-3">Big Ben Foods</h3>
            <address className="not-italic leading-6 text-neutral-400">
              {site.addressLine}
              <div className="mt-2">
                <a className="hover:text-red-400" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
            </address>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Otevírací doba</h3>
            <ul className="text-neutral-400 space-y-[2px]">
              {hours.map((h) => (
                <li key={h.label} className="flex justify-between gap-3">
                  <span>{h.label}</span>
                  <span>{h.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Sociální sítě</h3>
            <ul className="text-neutral-400 space-y-1">
              {site.social?.facebook && (
                <li>
                  <Link
                    href={site.social.facebook}
                    className="hover:text-red-400"
                  >
                    Facebook
                  </Link>
                </li>
              )}
              {site.social?.instagram && (
                <li>
                  <Link
                    href={site.social.instagram}
                    className="hover:text-red-400"
                  >
                    Instagram
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Provozovatel</h3>
            <ul className="text-neutral-400 leading-6">
              <li>{site.company.name}</li>
              <li>{site.addressLine}</li>
              <li>IČO {site.company.ico}</li>
              <li>DIČ {site.company.dic}</li>
            </ul>
          </div>
        </div>

        {/* Mapa dole pod textem */}
        <div className="pb-10">
          <div className="aspect-[21/9] border border-neutral-700">
            <iframe
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=14.4414,50.0718,14.4448,50.0743&layer=mapnik&marker=50.07305,14.4431"
            />
          </div>
          <p className="mt-2 text-xs text-neutral-400">
            Nitrianská 1625/22, Vinohrady, Praha 3, 130 00
          </p>
        </div>
      </Container>
    </footer>
  );
}
