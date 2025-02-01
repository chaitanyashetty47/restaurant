import Link from "next/link"
import { ExternalLink } from 'lucide-react';
import { Bus, Train, Plane } from 'lucide-react';

export default function Location (){
  return (
    <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-serif text-baryellow mb-4">Location</h2>
          <p className="text-xl text-gray-600 mb-6">
            Surdhara Circle, Nilmani Society, Near B/H Sal Hospital,<br />
            Thaltej, Ahmedabad, 380054
          </p>
          <Link 
            href="https://maps.google.com" 
            target="_blank"
            className="inline-flex items-center text-baryellow hover:text-[#B08968] mb-12"
          >
            View on Maps
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>

          <div className="grid gap-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <Bus className="h-6 w-6 text-baryellow" />
              </div>
              <div>
                <h3 className="font-serif text-lg mb-1">Surdhara Bungalow Bus Stop</h3>
                <p className="text-gray-600">0.1 km • 1 min</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <Train className="h-6 w-6 text-baryellow" />
              </div>
              <div>
                <h3 className="font-serif text-lg mb-1">Ahmedabad Junction Railway Station</h3>
                <p className="text-gray-600">9.5 km • 21 mins</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <Plane className="h-6 w-6 text-baryellow" />
              </div>
              <div>
                <h3 className="font-serif text-lg mb-1">Sardar Vallabhbhai Patel International Airport</h3>
                <p className="text-gray-600">13.3 km • 22 mins</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="relative h-[400px] rounded-xl overflow-hidden group">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Location Map Preview"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Link 
              href="https://www.google.com/maps/place/The+Baroda+Residency/@22.3121247,73.1723973,18z/data=!4m9!3m8!1s0x395fc8b0f44e2d89:0x8a5194e0ec87a8a1!5m2!4m1!1i2!8m2!3d22.312353!4d73.172687!16s%2Fg%2F11c0rhdk7q?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D" 
              target="_blank"
              className="text-white text-lg hover:underline"
            >
              Click to view Map
            </Link>
          </div>
        </div> */}
            <div className="relative h-[400px] my-auto rounded-xl overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470.3!2d73.1723973!3d22.3121247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8b0f44e2d89%3A0x8a5194e0ec87a8a1!2sThe%20Baroda%20Residency!5e0!3m2!1sen!2sin!4v1706022000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      />
    </div>
      </div>
    </div>
  </section>
  )
}