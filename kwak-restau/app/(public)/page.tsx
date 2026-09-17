import { Button } from "@/components/ui/button";
import Image from 'next/image'

const dishes = [
  { name: "Moules façon Kwak", note: "Sauce à la bière blonde, frites maison", price: "€24" },
  { name: "Carbonade flamande", note: "Mijotée à la bière brune, frites maison", price: "€21" },
  { name: "Waterzooi de volaille", note: "Crème, légumes de saison", price: "€19" },
];

const hours = [
  ["Dimanche", "12:00 – 23:00"],
  ["Lundi", "12:00 – 23:00"],
  ["Mardi", "12:00 – 23:00"],
  ["Mercredi", "12:00 – 23:00"],
  ["Jeudi", "12:00 – 23:00"],
  ["Vendredi", "12:00 – 23:00"],
  ["Samedi", "12:00 – 23:00"],
];

export default function HomePage() {
  return (
    <div className="bg-ink text-parchment font-sans min-h-screen">

      <section className="max-w-6xl mx-auto px-8 pt-12 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-brass text-sm tracking-wide mb-4">
            Ouvert tous les jours, 12:00 – 23:00
          </p>
          <h1 className="font-serif font-medium text-5xl leading-tight mb-6">
            La tradition belge,<br />servie avec le sourire.
          </h1>
          <p className="text-sage text-base leading-relaxed max-w-md mb-3">
            Cuisine française et belge, grande terrasse et service attentionné,
            au cœur de Woluwe-Saint-Lambert.
          </p>
          <p className="text-sage text-sm mb-8">
            Française · Belge · €€-€€€
          </p>
          <div className="flex gap-4">
            <Button className="z-10 bg-brass text-ink hover:bg-brass border-none px-7 py-3 text-[15px] font-medium rounded-none hover:bg-brass/90 hover transition-opacity">
              Réserver une table
            </Button>
            <Button className="z-10 bg-transparent hover:text-secondary text-parchment border border-sage px-7 py-3 text-[15px] rounded-none hover:border-parchment transition-colors">
              Voir le menu
            </Button>
          </div>
        </div>
        <div className="relative z-0 bg-panel aspect-[4/5] rounded flex items-center justify-center text-sage text-sm">
          <Image alt="photo de la terrasse" fill src="/images/brasserie-kwak.jpg"/>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-8 py-16 text-center">
        <p className="font-serif text-2xl leading-relaxed text-parchment">
          Un incontournable de la tradition belge&nbsp;: nourriture de chez nous,
          ambiance conviviale et une grande terrasse pour prolonger la soirée.
        </p>
      </section>

      <div className="border-t border-panel max-w-4xl mx-auto" />

      <section className="max-w-3xl mx-auto px-8 py-16">
        <h2 className="font-serif text-2xl font-medium mb-8">
          Nos spécialités
        </h2>
        <div>
          {dishes.map((dish, i) => (
            <div
              key={dish.name}
              className={`flex items-baseline gap-5 py-5 ${i === 0 ? "" : "border-t border-panel"}`}
            >
              <span className="font-serif text-brass text-[15px] w-6">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <p className="text-base m-0">{dish.name}</p>
                <p className="text-sm text-sage mt-1">{dish.note}</p>
              </div>
              <span className="font-serif text-base text-parchment">
                {dish.price}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-panel max-w-4xl mx-auto" />

      <section className="max-w-3xl mx-auto px-8 py-16">
        <p className="text-brass text-sm mb-4">Services</p>
        <div className="flex flex-wrap gap-x-7 gap-y-2 text-base text-sage">
          <span>Déjeuner</span>
          <span>Dîner</span>
          <span>Service à table</span>
          <span>Terrasse</span>
          <span>Chaises hautes disponibles</span>
          <span>Options végétaliennes</span>
        </div>
      </section>

      <div className="border-t border-panel max-w-4xl mx-auto" />

      <section className="max-w-3xl mx-auto px-8 py-16 grid sm:grid-cols-2 gap-10">
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
        <div>
          <p className="text-brass text-sm mb-3">Localisation</p>
          <p className="text-base leading-loose text-sage">
            Avenue Emile Vandervelde 2<br />
            Woluwe-Saint-Lambert, Bruxelles 1200<br />
            Belgique<br />
            +32 2 763 33 88
          </p>
        </div>
      </section>

    </div>
  );
}