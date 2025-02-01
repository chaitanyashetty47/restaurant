import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [
    "/hero1.jpg?height=1080&width=1920",
    "/hero2.jpg?height=1080&width=1920",
    "/hero3.jpg?height=1080&width=1920"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen "> {/* Added mt-16 to create space below the header */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <Image
            key={image}
            src={image || "/placeholder.svg"}
            alt={`Luxury Hotel Room ${index + 1}`}
            fill
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            priority={index === 0}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 py-20"> {/* Added padding */}
        <h1 className="text-3xl md:text-6xl font-serif text-center mb-4 md:mb-8 mt-40">
          Stays That Feel Like Home
        </h1>
        <h2 className="text-base md:text-lg font-serif text-center mb-6 md:mb-8 px-4">
          Spacious Studio Rooms, Exceptional Service, and a Tranquil Stay in the Heart of Vadodara
        </h2>
        <form 
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
          }} 
          className="bg-black/40 p-4 md:p-6 rounded-lg w-full max-w-4xl mx-4 mt-4"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <label htmlFor="checkIn" className="text-sm text-white">Check In</label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                required
                className="w-full px-3 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C4A484]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="checkOut" className="text-sm text-white">Check Out</label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                required
                className="w-full px-3 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C4A484]"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="guests" className="text-sm text-white">Guests</label>
              <select
                id="guests"
                name="guests"
                required
                className="w-full px-3 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C4A484]"
              >
                <option value="1" className="text-black">1 Adult</option>
                <option value="2" className="text-black">2 Adults</option>
                <option value="3" className="text-black">3 Adults</option>
                <option value="4" className="text-black">4 Adults</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="roomType" className="text-sm text-white">Room Type</label>
              <select
                id="roomType"
                name="roomType"
                required
                className="w-full px-3 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#C4A484]"
              >
                <option value="deluxe" className="text-black">Suite Room</option>
                <option value="suite" className="text-black">Deluxe Room</option>
              </select>
            </div>
          </div>
          <Button type="submit" className="w-full mt-4 bg-baryellow hover:bg-yellow-600 text-black font-bold">
            Search Availability
          </Button>
        </form>
      </div>
    </section>
  );
}