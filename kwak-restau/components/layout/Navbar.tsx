"use client"

import { link } from "fs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const navLinks = [
    {href: "/menu", label:"Menu"},
    {href: "/galerie", label:"Galerie"},
    {href: "/localisation", label:"Localisation"}
]

function Navbar() {
    const pathname = usePathname()

    return (
    <div>
        <nav className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <div>
            <span className="font-serif text-xl font-medium">Brasserie Kwak</span>
        </div>
        <div className="hidden sm:flex gap-8">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);
 
          return (
            <Link
              key={href}
              href={href}
              className={`group relative text-md font-normal transition-all duration-200 hover:font-bold hover:text-brass focus:font-bold focus:text-brass flex items-center justify-between px-8 py-6 max-w-6xl mx-auto ${
                isActive ? "text-brass font-bold" : "text-sage"
              }`}
            >
              {label}
            </Link>
          );
        })}
        </div>
        <div className="flex justify-end">
            <Button className="border border-brass text-brass bg-transparent px-5 py-2 text-sm rounded-none hover:bg-brass hover:text-ink hover:text-secondary transition-colors">
                Réserver
            </Button>
        </div>
        </nav>
    </div>
  );
}

export default Navbar;