import { MenuCategoryTabs } from "@/components/menu/category-tabs";

const menuItems = [
  {
    id: "1",
    category: "Entrées",
    name: "Croquettes de crevettes grises",
    description: "Sauce tartare maison, citron",
    price: "€14",
    dietary: null,
  },
  {
    id: "2",
    category: "Entrées",
    name: "Salade de chèvre chaud",
    description: "Miel, noix, mesclun",
    price: "€12",
    dietary: "Végétarien",
  },
  {
    id: "3",
    category: "Entrées",
    name: "Tartare de saumon",
    description: "Avocat, agrumes, aneth",
    price: "€15",
    dietary: "Sans gluten",
  },
  {
    id: "4",
    category: "Plats",
    name: "Moules façon Kwak",
    description: "Sauce à la bière blonde, frites maison",
    price: "€24",
    dietary: null,
  },
  {
    id: "5",
    category: "Plats",
    name: "Carbonade flamande",
    description: "Mijotée à la bière brune, frites maison",
    price: "€21",
    dietary: null,
  },
  {
    id: "6",
    category: "Plats",
    name: "Waterzooi de volaille",
    description: "Crème, légumes de saison",
    price: "€19",
    dietary: "Sans gluten",
  },
  {
    id: "7",
    category: "Plats",
    name: "Risotto aux champignons",
    description: "Parmesan, huile de truffe",
    price: "€18",
    dietary: "Végétarien",
  },
  {
    id: "8",
    category: "Desserts",
    name: "Tarte au riz",
    description: "Spécialité maison",
    price: "€8",
    dietary: "Végétarien",
  },
  {
    id: "9",
    category: "Desserts",
    name: "Mousse au chocolat",
    description: "Chocolat noir 70%, chantilly",
    price: "€9",
    dietary: "Sans gluten",
  },
  {
    id: "10",
    category: "Boissons",
    name: "Kwak",
    description: "Bière blonde belge, 33cl",
    price: "€6",
    dietary: null,
  },
  {
    id: "11",
    category: "Boissons",
    name: "Vin rouge maison",
    description: "Verre 15cl",
    price: "€6.5",
    dietary: null,
  },
];

export default function Menu() {
  return (
    <div className="bg-ink text-parchment font-sans min-h-screen">
      <section className="max-w-3xl mx-auto px-8 pt-20 pb-8 text-center">
        <p className="text-brass text-sm tracking-wide mb-3">Notre carte</p>
        <h1 className="font-serif font-medium text-4xl mb-4">Menu</h1>
        <p className="text-sage text-base max-w-md mx-auto">
          Cuisine française et belge, préparée avec des produits de saison.
        </p>
      </section>

      <MenuCategoryTabs items={menuItems} />
    </div>
  );
}