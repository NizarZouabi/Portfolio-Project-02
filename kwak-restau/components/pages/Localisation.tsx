import { LocationMap } from "@/components/location/location";

const hours = [
  ["Dimanche", "12:00 – 23:00"],
  ["Lundi", "12:00 – 23:00"],
  ["Mardi", "12:00 – 23:00"],
  ["Mercredi", "12:00 – 23:00"],
  ["Jeudi", "12:00 – 23:00"],
  ["Vendredi", "12:00 – 23:00"],
  ["Samedi", "12:00 – 23:00"],
];

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Avenue+Emile+Vandervelde+2,+1200+Woluwe-Saint-Lambert,+Belgique";

export default function Localisation() {
  return (
    <div className="bg-ink text-parchment font-sans min-h-screen">
      {/* Header — matches Menu / Gallery page pattern */}
      <section className="max-w-3xl mx-auto px-8 pt-20 pb-8 text-center">
        <p className="text-brass text-sm tracking-wide mb-3">Nous trouver</p>
        <h1 className="font-serif font-medium text-4xl mb-4">Localisation</h1>
        <p className="text-sage text-base max-w-md mx-auto">
          Au cœur de Woluwe-Saint-Lambert, à deux pas du rond-point Saint-Lambert.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-8 mb-16">
        <LocationMap />
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm text-brass border border-brass px-5 py-2 rounded-sm hover:bg-brass hover:text-ink transition-colors"
        >
          Obtenir l&apos;itinéraire
        </a>
      </section>

      <div className="border-t border-panel max-w-4xl mx-auto" />

      {/* Address + Hours, side by side */}
      <section className="max-w-3xl mx-auto px-8 py-16 grid sm:grid-cols-2 gap-10">
        <div>
          <p className="text-brass text-sm mb-3">Adresse</p>
          <p className="text-base leading-loose text-sage">
            Avenue Emile Vandervelde 2<br />
            Woluwe-Saint-Lambert, Bruxelles 1200<br />
            Belgique<br />
            +32 2 763 33 88
          </p>
        </div>

        <div>
          <p className="text-brass text-sm mb-3">Horaires</p>
          <div className="text-sm leading-loose text-sage">
            {hours.map(([day, time]) => (
              <div key={day} className="flex justify-between max-w-64">
                <span>{day}</span>
                <span className="text-parchment">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}