import { Facebook, Instagram, Twitter, PhoneIcon as WhatsApp, MapPin, Phone, Clock } from 'lucide-react'
import Link from "next/link"

export default function Footer () {
  return (
    <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4">About StayLuxury</h3>
              <p className="text-gray-400">
                Baroda Residency is your gateway to an extraordinary hospitality experience. 
                Combining elegant design, unparalleled comfort, and exceptional service.
              </p>
              <div className="flex space-x-4 mt-4">
                <Facebook className="text-gray-400 hover:text-white" />
                <Instagram className="text-gray-400 hover:text-white" />
                <Twitter className="text-gray-400 hover:text-white" />
                <WhatsApp className="text-gray-400 hover:text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Testimonials</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">FAQs</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Terms & Condition</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Latest Updates</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="text-[#C4A484]" />
                  <div>
                    <p>+1234567895424</p>
                    <p>+985451251254</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="text-[#C4A484]" />
                  <p>Surdhara Circle<br />Vadodara, India</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="text-[#C4A484]" />
                  <p>9:00 AM to 5:00 PM<br />Monday to Saturday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

  )

}