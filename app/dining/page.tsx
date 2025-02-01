import Image from "next/image"
import { Button } from "@/components/ui/button"

import {  ChefHatIcon as Chef, Star } from 'lucide-react'

export default function DiningPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/mandvi1.jpg?height=800&width=1920"
          alt="Mandvi Restaurant"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif text-center mb-4">
            Mandvi
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-4">
            A culinary journey through the flavors of India and beyond
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
              {/* Centered Title */}
              <h2 className="text-3xl font-serif mb-12 text-baryellow text-center">Welcome to Mandvi</h2>
              
              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Left Column - Text and Timings */}
                <div className="space-y-8">
                  {/* Main Content */}
                  <div>
                    <p className="text-gray-600 mb-8">
                      Our multi-cuisine restaurant, where the interiors present a glimpse of the kaleidoscopic artistic traditions of Vadodara. Named after the ornate gate in the heart of the city, Mandvi is where an ambience will set the mood for a myriad of delectable flavours and aromas. A complete treat for all your senses.
                    </p>
                  </div>

                  {/* Timings Section */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-serif text-baryellow">Dining Hours</h3>
                    <div className="space-y-3">
                      <div className="flex space-x-2 items-center">
                        <span className="font-serif">Breakfast:</span>
                        <span className="text-gray-600">7:00 AM - 10:30 AM</span>
                      </div>
                      <div className="flex space-x-2 items-center">
                        <span className="font-serif">Lunch:</span>
                        <span className="text-gray-600">12:30 PM - 3:30 PM</span>
                      </div>
                      <div className="flex space-x-2 items-center">
                        <span className="font-serif">Dinner:</span>
                        <span className="text-gray-600">7:00 PM - 11:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="flex items-center">
                  <Image
                    src="/mandvi1.jpg?height=500&width=700"
                    alt="Mandvi Restaurant Interior"
                    width={700}
                    height={500}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

      {/* Cuisine Variety Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12 text-center text-baryellow">A World of Flavors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Indian Delicacies",
                description: "From Paneer Nawabi to Awadhi Subz Biryani, Surti Undhiyu to Mysore Dosa, savor the best of India's culinary wonders.",
                icon: Utensils
              },
              {
                title: "International Cuisine",
                description: "Enjoy global favorites like Wonton soup, Falafel, Mushroom Risotto, and Alfredo Pasta, offering you a taste of the world on your plate.",
                icon: Globe
              },
              {
                title: "Breakfast Bonanza",
                description: "Start your day with our sumptuous breakfast buffet or à la carte options, giving you all the pizzazz to power through your day.",
                icon: Clock
              }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-baryellow/10 rounded-full mr-4">
                      <item.icon className="h-6 w-6 text-baryellow" />
                    </div>
                    <h3 className="text-xl font-serif">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center max-w-4xl mx-auto mb-8 text-navy leading-relaxed text-baryellow">
          Our Culinary Range
          </h2>

          <h2 className="text-md md:text-lg font-serif text-center max-w-3xl mx-auto mb-16 text-navy leading-relaxed ">
          From Paneer Nawabi to Awadhi Subz Biryani, Surti Undhiyu to Mysore Dosa, the best of India’s culinary wonders. Wonton soup to Falafel, Mushroom Risotto to Alfredo Pasta, we offer you a taste of the world on your plate.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Villa Card */}
            <div className="flex flex-col items-center">
              <div className="rounded-full h-[100%] w-[75%] overflow-hidden aspect-square mb-6 relative">
                <Image
                  src="/indian.jpg"
                  alt="Luxury Villa"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-3xl font-serif text-navy">Indian</h3>
            </div>

            {/* Yacht Card */}
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden h-full w-[75%] aspect-square mb-6 relative">
                <Image
                  src="/european.jpg"
                  alt="Luxury Yacht"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-3xl font-serif text-navy">European</h3>
            </div>

            {/* Party Card */}
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden h-full w-[76%] aspect-square mb-6 relative">
                <Image
                  src="/buffet.jpg"
                  alt="Luxury Party"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-3xl font-serif text-navy">Breakfast</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Chef and Quality Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-baryellow">Culinary Excellence</h2>
              <p className="text-gray-600 leading-relaxed">
                Our Chefs take great pride and delight in creating fresh and beautifully presented dishes with the choicest of ingredients and passion. Each plate is a masterpiece, crafted to delight your palate and showcase the rich culinary heritage of India and beyond.
              </p>
              <div className="flex space-y-1">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-50 rounded-full">
                    <Chef className="h-6 w-6 text-baryellow" />
                  </div>
                  <span className="text-gray-600">Expert chefs with years of experience</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-50 rounded-full">
                    <Star className="h-6 w-6 text-baryellow" />
                  </div>
                  <span className="text-gray-600">Finest ingredients for exceptional taste</span>
                </div>

              </div>
              
              
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/chef.jpg?height=800&width=1200"
                alt="Chef preparing a dish"
                fill
                className="object-fit"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Call-to-Action Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-6 text-baryellow">Reserve Your Table</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the culinary delights of Mandvi. Whether it&apos;s a romantic dinner, family gathering, or business lunch, we&apos;re ready to serve you an unforgettable meal.
          </p>
          <Button className="bg-baryellow hover:bg-[#B08968] text-white px-8 py-3 rounded-full text-lg">
            Make a Reservation
          </Button>
        </div>
      </section>
    </div>
  )
}

