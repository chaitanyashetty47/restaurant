import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export default function Intro() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif mb-4">Welcome to <span className="text-baryellow">Baroda Residency</span></h2>
          <p className="text-gray-800 text-lg max-w-3xl mx-auto">
            Experience unparalleled luxury in our diverse spaces,<br /> each designed for your comfort and enjoyment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Airavat",
              description: "Our grand wedding hall, perfect for your special day.",
              images: [
                "/airavat1.jpg",
                "/navlakhi1.jpg",
              ]
            },
            {
              name: "Navlakhi",
              description: "State-of-the-art conference hall for your business needs.",
              images: [
                "/navlakhi1.jpg",
                "/airavat1.jpg",
              ]
            },
            {
              name: "Mandvi",
              description: "Exquisite dining space offering culinary delights.",
              images: [
                "/mandvi1.jpg",
                "/mandvi2.jpg",
                "/mandvi3.jpg"
              ]
            },
            {
              name: "Suite Room",
              description: "Luxurious accommodations for a comfortable stay.",
              images: [
                "/room1.jpg",
                "/room2.jpg",
                "/room3.jpg"
              ]
            }
          ].map((space, index) => (
            <Card key={index} className="group overflow-hidden rounded-xl">
              <div className="aspect-[4/3] relative w-full overflow-hidden">
                <Carousel className="w-full h-full">
                  <CarouselContent>
                    {space.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex} className="relative">
                        <div className="relative w-full h-full aspect-[4/3]">
                          <Image
                            src={image}
                            alt={`${space.name} view ${imgIndex + 1}`}
                            className="object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            priority={index === 0}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CarouselNext className="right-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Carousel>
              </div>
              <CardContent className="p-6 bg-white">
                <h3 className="text-2xl font-serif font-thin mb-2 text-gray-900">{space.name}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{space.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}