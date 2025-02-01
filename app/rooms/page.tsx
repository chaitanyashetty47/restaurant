import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Home, Wifi, Coffee, Briefcase, UtensilsCrossed, Maximize2, Tv, Lock, Shirt,  FootprintsIcon as Shoe, AnvilIcon as Iron, Newspaper, Utensils, Phone, Droplet } from 'lucide-react'

export default function RoomsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/room1.jpg?height=800&width=1920"
          alt="Luxurious Room at The Baroda Residency"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif text-center mb-4">
            Our Suite Rooms
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-4">
            Experience the comfort of home with the luxury of a hotel from our various choices of rooms
          </p>
        </div>
      </section>

      {/* Room Overview and Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif mb-6 text-center text-baryellow">Your Home Away From Home</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 mb-6">
                  The Baroda Residency is specially designed to serve the feeling of home alongside the luxuries of a hotel. Each of our 340 Sq Ft luxurious rooms offer every convenience: a comfortable Lounge, a Work area with full digital connectivity, a Kitchenette, large Storage facility and much much more.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    { icon: Home, title: "Comfortable Lounge" },
                    { icon: Briefcase, title: "Work Area" },
                    { icon: UtensilsCrossed, title: "Kitchenette" },
                    { icon: Maximize2, title: "Large Storage" },
                    { icon: Wifi, title: "High-Speed Wi-Fi" },
                    { icon: Coffee, title: "Tea/Coffee Machine" },
                    // { icon: Users, title: "Interconnecting Rooms" },
                    { icon: Clock, title: "24/7 Room Service" },
                    { icon: Tv, title: "LED/LCD TV" },
                    { icon: Lock, title: "Electronic Safe" },
                    { icon: Shirt, title: "Laundry Service" },
                    // { icon: DollarSign, title: "Forex Exchange" },
                    { icon: Shoe, title: "Shoe Shine" },
                    { icon: Iron, title: "Iron & Ironing Board" },
                    // { icon: Car, title: "Airport Transfer" },
                    { icon: Newspaper, title: "Daily Newspaper" },
                    { icon: Utensils, title: "Breakfast" },
                    // { icon: Luggage, title: "Left Luggage Room" },
                    { icon: Phone, title: "Telephone" },
                    // { icon: Smoking, title: "Smoking Rooms" },
                    // { icon: Wheelchair, title: "Special Rooms" },
                    { icon: Droplet, title: "Bathroom Slippers" },
                    // { icon: Spray, title: "Designer Toiletries" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <feature.icon className="h-5 w-5 text-baryellow" />
                      <span className="text-sm text-gray-600">{feature.title}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-baryellow hover:bg-[#B08968] text-white px-8 py-3 mt-4 rounded-full text-lg">
                  Reserve Now
                </Button>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/room2.jpg?height=800&width=1200"
                  alt="Spacious Room Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Room Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center text-baryellow">Our Room Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Deluxe Room", description: "Spacious 340 Sq Ft room with all amenities and an attached batroom", image: "/room1.jpg?height=300&width=400" },
              { title: "Executive Suite", description: "Luxurious suite with separate living area and also a space for smoking room", image: "/room2.jpg?height=300&width=400" },
              { title: "Family Room", description: "Interconnecting rooms for family comfort and extended family", image: "/room3.jpg?height=300&width=400" }
            ].map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif mb-2">{room.title}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <Button className="bg-baryellow hover:bg-[#B08968] text-white">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Check-In/Check-Out Section */}
      <section className="py-20 bg-gradient-to-b from-baryellow/10 to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif mb-12 text-center text-baryellow">Your Stay at The Baroda Residency</h2>
          <div className="flex flex-col items-center mb-12">
            <div className="relative w-full max-w-3xl h-48 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <div className="text-center">
                  <h3 className="text-2xl font-serif mb-2">Check-In</h3>
                  <p className="text-3xl font-bold text-baryellow">12:00 PM</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-serif mb-2">Check-Out</h3>
                  <p className="text-3xl font-bold text-baryellow">12:00 PM</p>
                </div>
              </div>
              
            </div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-center italic">
          &quot;Time is luxury, and at The Baroda Residency, we ensure every moment of your stay is crafted for comfort and elegance.&quot;
          </p>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6 text-baryellow">Book Your Stay</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of home comfort and hotel luxury at The Baroda Residency. Book your stay now and indulge in our exceptional amenities and service.
          </p>
          <Button className="bg-baryellow hover:bg-[#B08968] text-white px-8 py-3 rounded-full text-lg">
            Reserve Now
          </Button>
        </div>
      </section>
    </div>
  )
}

