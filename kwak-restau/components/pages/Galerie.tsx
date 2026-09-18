import { GalleryGrid } from "@/components/gallery/gallery-grid";

const images = [
  { id: "1", category: "Plats", alt: "Moules façon Kwak", tall: true, src: "/images/gallery/plats/plat01.jpg"},
  { id: "2", category: "Intérieur", alt: "Salle principale", src: "/images/gallery/intérieur/interieur01.jpg"},
  { id: "3", category: "Plats", alt: "Carbonade flamande", src: "/images/gallery/plats/plat02.jpg"},
  { id: "4", category: "Terrasse", alt: "Terrasse en soirée", src: "/images/gallery/terrasse/terrasse01.jpg"},
  { id: "5", category: "Intérieur", alt: "Bar", src: "/images/gallery/intérieur/interieur02.jpg"},
  { id: "6", category: "Plats", alt: "Tarte au riz", tall: true, src: "/images/gallery/plats/plat03.jpg"},
  { id: "7", category: "Terrasse", alt: "Terrasse vue extérieure", src: "/images/gallery/terrasse/terrasse02.jpg"}
];

export default function Gallery() {
  return (
    <div className="bg-ink text-parchment font-sans min-h-screen">
      <section className="max-w-3xl mx-auto px-8 pt-20 pb-8 text-center">
        <p className="text-brass text-sm tracking-wide mb-3">En images</p>
        <h1 className="font-serif font-medium text-4xl mb-4">Galerie</h1>
        <p className="text-sage text-base max-w-md mx-auto">
          Un aperçu de nos plats, de notre salle et de notre terrasse.
        </p>
      </section>

      <GalleryGrid images={images} />
    </div>
  );
}