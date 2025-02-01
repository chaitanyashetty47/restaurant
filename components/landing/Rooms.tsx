// 

import React from 'react'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Maximize2, Wifi, Coffee } from 'lucide-react'

export default function Rooms() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif mb-4 text-baryellow">The Suite Room</h2>
          <p className="text-xl text-gray-600">Experience luxury and comfort in our spacious accommodations</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                The Baroda Residency is specially designed to serve the feeling of home alongside the luxuries of a hotel. Each of our 340 Sq Ft luxurious rooms offer every convenience you need for a comfortable stay.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We also offer interconnecting rooms, perfect for families or larger groups seeking both togetherness and privacy.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, text: "300+ Capacity" },
                { icon: Maximize2, text: "340 Sq Ft Space" },
                { icon: Wifi, text: "High-Speed WiFi" },
                { icon: Coffee, text: "24/7 Room Service" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <feature.icon className="text-baryellow w-6 h-6" />
                  <span className="text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Check-in/Check-out Card */}
            <Card className="p-6 bg-white shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Stay Information</h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Check-in Time</p>
                  <p className="text-xl font-semibold text-baryellow">12:00 PM</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Check-out Time</p>
                  <p className="text-xl font-semibold text-baryellow">12:00 PM</p>
                </div>
              </div>
            </Card>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                className="w-full md:w-auto bg-baryellow hover:bg-[#B08968] text-white px-8 py-6 text-lg"
              >
                Book Your Stay
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative h-[600px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/hero1.jpg"
              alt="Luxury Suite at Baroda Residency"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}