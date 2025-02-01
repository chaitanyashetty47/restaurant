"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="fixed w-full z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" alt="StayLuxury Logo" width={150} height={50} />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-yellow-400">Home</Link>
            <Link href="/banquets" className="text-white hover:text-yellow-400">Banquets</Link>
            <Link href="/dining" className="text-white hover:text-yellow-400">Dining</Link>
            <Link href="/rooms" className="text-white hover:text-yellow-400">Rooms</Link>
          </div>

          {/* Desktop Enquire Now button - hidden on mobile and tablet */}
          <div className="hidden lg:block">
            <Button className="bg-baryellow hover:bg-yellow-600 text-black">
              Enquire Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden text-white focus:outline-none"
          >
            <Menu size={28} />
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-black/80 py-4">
            <Link href="/" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/banquets" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Banquets</Link>
            <Link href="/dining" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Dining</Link>
            <Link href="/rooms" className="text-white hover:text-yellow-400" onClick={() => setMenuOpen(false)}>Rooms</Link>
            
            {/* Mobile Enquire Now button - only shown in mobile menu */}
            <Button 
              className="bg-baryellow hover:bg-yellow-600 text-black lg:hidden" 
              onClick={() => setMenuOpen(false)}
            >
              Enquire Now
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}