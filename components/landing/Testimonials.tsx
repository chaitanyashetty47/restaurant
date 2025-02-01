import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials(){
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-[#C4A484] mb-2">Reviews</h3>
            <h2 className="text-3xl font-serif">What our Guest say about StayLuxury</h2>
          </div>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {[
                {
                  name: "Emily Carter",
                  role: "Honorable Guest",
                  comment: "My experience at StayLuxury was absolutely delightful. The rooms were spacious, elegantly furnished, and equipped with all modern conveniences."
                },
                {
                  name: "David Harrison",
                  role: "Honorable Guest",
                  comment: "StayLuxury truly lives up to its name. From the moment I checked in, I was greeted with warmth and efficiency."
                },
                {
                  name: "Sophia Nguyen",
                  role: "Honorable Guest",
                  comment: "I had an outstanding stay at StayLuxury. The hotel's design is stunning, and every corner reflects elegance and comfort."
                }
              ].map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6 text-center">
                      <p className="text-gray-600 mb-4">{testimonial.comment}</p>
                      <h4 className="font-serif">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
  )
}