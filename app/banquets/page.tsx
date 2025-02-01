import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Users, Music, Wifi, Monitor, Star, Flower, PartyPopper, CalendarDays, Sparkles } from 'lucide-react'

export default function BanquetsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/banquet2.jpg?height=800&width=1920"
          alt="Banquet Hall"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif text-center mb-4 mt-24">
            Banquets
          </h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-4">
            We have created the most beautiful venues, elegantly adorned and ready for our impeccable service and delightful delicacies to add to the splendor of your occasion. Let us make your celebrations beautiful memories.
          </p>
        </div>
      </section>

      {/* Airavat Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-baryellow">Airavat</h2>
              <p className="text-gray-600 leading-relaxed">
                Built for grand events, able to accommodate upto 600 guests, Airavat is acoustically designed, airconditioned with fully furnished green rooms.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <Users className="h-6 w-6 text-baryellow" />
                  </div>
                  <span className="text-sm text-gray-600">Up to 600 guests</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <Music className="h-6 w-6 text-baryellow" />
                  </div>
                  <span className="text-sm text-gray-600">Acoustic Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <Wifi className="h-6 w-6 text-baryellow" />
                  </div>
                  <span className="text-sm text-gray-600">WiFi Connectivity</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <Monitor className="h-6 w-6 text-baryellow" />
                  </div>
                  <span className="text-sm text-gray-600">AV Facilities</span>
                </div>
              </div>
              <Button className="bg-baryellow hover:bg-[#B08968]">
                Book Venue
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/banquet1.jpg?height=800&width=1200"
                alt="Airavat Banquet Hall"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Airavat Terrace Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden md:order-last">
              <Image
                src="/banquet2.jpg?height=800&width=1200"
                alt="Airavat Terrace"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-baryellow">Airavat Terrace</h2>
              <p className="text-gray-600 leading-relaxed">
                Perfect venue for those who like a breeze or open starlit skies to complement your rejoicing. The terrace is equipped with a dias, audio visual facilities and offers a seating capacity of more than 300 patrons.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white rounded-lg">
                    <Users className="h-6 w-6 text-baryellow" />
                  </div>
                  <span className="text-sm text-gray-600">300+ capacity</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white rounded-lg">
                    <Star className="h-6 w-6 text-baryellow" />
                  </div>
                  <span className="text-sm text-gray-600">Open Air</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white rounded-lg">
                    <Monitor className="h-6 w-6 text-baryellow" />
                  </div>
                  <span className="text-sm text-gray-600">AV Equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white rounded-lg">
                    <Flower className="h-6 w-6 text-baryellow" />
                  </div>
                  <span className="text-sm text-gray-600">Customizable</span>
                </div>
              </div>
              <Button className="bg-baryellow hover:bg-[#B08968]">
                Book Venue
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navlakhi Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-baryellow">Navlakhi</h2>
              <p className="text-gray-600 leading-relaxed">
                Inspired by the enchanting Step wells of Vadodara within the Palace estate, Navlakhi is our intimate banquet hall spread over 1400 sq ft accommodating upto a hundred guests on the ground floor.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <Users className="h-6 w-6 text-baryellow" />
                  </div>
                  <span className="text-sm text-gray-600">Up to 125 guests</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <PartyPopper className="h-6 w-6 text-baryellow" />
                  </div>
                  <span className="text-sm text-gray-600">Intimate Events</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <CalendarDays className="h-6 w-6 text-baryellow" />
                  </div>
                  <span className="text-sm text-gray-600">Multiple Layouts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <Sparkles className="h-6 w-6 text-baryellow" />
                  </div>
                  <span className="text-sm text-gray-600">Elegant Design</span>
                </div>
              </div>
              <Button className="bg-baryellow hover:bg-[#B08968]">
                Book Venue
              </Button>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/banquet5.jpg?height=800&width=1200"
                alt="Navlakhi Banquet Hall"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capacity Table Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif mb-4">Venue Configurations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our versatile spaces can be arranged to perfectly suit your event needs, 
              from intimate gatherings to grand celebrations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                layout: "Theatre Style",
                icon: "rows-2",
                airavat: "100-350",
                navlakhi: "30-75",
                description: "Perfect for conferences, presentations, and ceremonies"
              },
              {
                layout: "U-Shaped",
                icon: "component",
                airavat: "100-125",
                navlakhi: "20-40",
                description: "Ideal for training sessions and interactive discussions"
              },
              {
                layout: "Board Room",
                icon: "table-2",
                airavat: "100-125",
                navlakhi: "20-35",
                description: "Suited for executive meetings and intimate discussions"
              },
              {
                layout: "Classroom",
                icon: "layout-dashboard",
                airavat: "100-200",
                navlakhi: "30-50",
                description: "Optimal for workshops and educational events"
              },
              {
                layout: "Reception",
                icon: "party-popper",
                airavat: "600",
                navlakhi: "75-125",
                description: "Ideal for social gatherings and celebrations"
              },
              {
                layout: "Total Area",
                icon: "maximize",
                airavat: "3700 sq ft",
                navlakhi: "1370 sq ft",
                description: "Spacious venues to accommodate your vision"
              }
            ].map((config) => (
              <Card key={config.layout} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 rounded-full bg-baryellow/10 group-hover:bg-baryellow/20 transition-colors">
                      {config.icon === 'rows-2' && <LayoutGrid className="w-6 h-6 text-baryellow" />}
                      {config.icon === 'component' && <Component className="w-6 h-6 text-baryellow" />}
                      {config.icon === 'table-2' && <Table2 className="w-6 h-6 text-baryellow" />}
                      {config.icon === 'layout-dashboard' && <LayoutDashboard className="w-6 h-6 text-baryellow" />}
                      {config.icon === 'party-popper' && <PartyPopper className="w-6 h-6 text-baryellow" />}
                      {config.icon === 'maximize' && <Maximize className="w-6 h-6 text-baryellow" />}
                    </div>
                    <h3 className="font-serif text-lg">{config.layout}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{config.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Airavat</p>
                      <p className="font-semibold text-lg">{config.airavat}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Navlakhi</p>
                      <p className="font-semibold text-lg">{config.navlakhi}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <Button className="bg-baryellow hover:bg-[#B08968]">
              Download Floor Plans
            </Button>
          </div>
        </div>
      </section> */}

      {/* Event Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">Perfect For Every Occasion</h2>
            <p className="text-gray-600">From intimate gatherings to grand celebrations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Weddings & Receptions",
                description: "Make your special day truly memorable with our elegant venues and impeccable service.",
                icon: Sparkles
              },
              {
                title: "Corporate Events",
                description: "Professional settings for conferences, seminars, and business meetings.",
                icon: Users
              },
              {
                title: "Social Celebrations",
                description: "Perfect spaces for birthdays, anniversaries, and family gatherings.",
                icon: PartyPopper
              }
            ].map((event, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto p-3 bg-gray-50 rounded-full w-fit">
                    <event.icon className="h-6 w-6 text-baryellow" />
                  </div>
                  <CardTitle className="font-serif">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{event.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

