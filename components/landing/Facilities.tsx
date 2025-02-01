import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { Button } from "@/components/ui/button"


export default function Facilities(){
  return (
    <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-baryellow  text-3xl font-serif mb-2">Top Class Facilities</h3>
            <h2 className="text-4xl font-serif mb-8">More Ways to satisfied your stay</h2>
          </div>
          <Tabs defaultValue="spa" className="max-w-4xl mx-auto">
            <TabsList className="flex justify-center space-x-8 bg-transparent border-none">
              <TabsTrigger 
                value="spa" 
                className=" text-lg text-white data-[state=active]:text-baryellow data-[state=active]:bg-transparent relative group px-0"
              >
                Gym
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#C4A484] transform scale-x-0 data-[state=active]:scale-x-100 transition-transform" />
              </TabsTrigger>
              <TabsTrigger 
                value="swimming"
                className="text-lg text-white data-[state=active]:text-baryellow data-[state=active]:bg-transparent relative group px-0"
              >
                Swimming
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#C4A484] transform scale-x-0 data-[state=active]:scale-x-100 transition-transform" />
              </TabsTrigger>
              <TabsTrigger 
                value="golf"
                className=" text-lg text-white data-[state=active]:text-baryellow data-[state=active]:bg-transparent relative group px-0"
              >
                Golf
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#C4A484] transform scale-x-0 data-[state=active]:scale-x-100 transition-transform" />
              </TabsTrigger>
            </TabsList>
            <TabsContent value="spa" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Image
                  src="/gym.jpg?height=400&width=600"
                  alt="Luxury Spa Treatment"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-2xl font-serif mb-4">Inhouse Gymnasium</h3>
                  <p className="text-gray-400">
                  A compact yet well equipped gymnasium with treadmills, exercise bikes and more. It is a perfect way to enjoy a powerful work out and rejuvenate both body and mind. You can also book our therapist for a destressing massage.
                  </p>
                  <Button className="mt-4 bg-baryellow hover:bg-yellow-600">
                    Book Now
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="swimming" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Image
                  src="/swim.jpg?height=400&width=600"
                  alt="Luxury Swimming Pool"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-2xl font-serif mb-4">Infinity Pool</h3>
                  <p className="text-gray-400">
                    Take a dip in our stunning infinity pool with panoramic views of the city.
                    Our temperature-controlled pool provides the perfect environment for both
                    relaxation and exercise, complete with poolside service and luxury loungers.
                  </p>
                  <Button className="mt-4 bg-baryellow hover:bg-yellow-600">
                    View Pool Hours
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="golf" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Image
                  src="/golf.jpg?height=400&width=600"
                  alt="Golf Course"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-2xl font-serif mb-4">Championship Golf Course</h3>
                  <p className="text-gray-400">
                    Experience golfing excellence on our meticulously maintained 18-hole
                    championship course. With challenging holes, stunning landscapes, and
                    professional instruction available, we cater to golfers of all skill levels.
                  </p>
                  <Button className="mt-4 bg-baryellow hover:bg-yellow-600">
                    Book Tee Time
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
  )
}