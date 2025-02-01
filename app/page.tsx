"use client"


import { useEffect} from 'react'
import AmenitiesSection from "@/components/landing/Amenities";
// import Testimonials from "@/components/landing/Testimonials"
import Facilities from "@/components/landing/Facilities"
import Rooms from "@/components/landing/Rooms"
import Intro from "@/components/landing/Intro"
import Hero from "@/components/landing/Hero"
import Location from "@/components/landing/Location"

export default function Home() {


  useEffect(() => {
    const timer = setInterval(() => {
      const nextButton = document.querySelector('[data-carousel-next]');
      if (nextButton instanceof HTMLElement) {
        nextButton.click();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      

      {/* Hero Section */}
      <Hero/>

      {/* Intro Section */}
      <Intro/>

      {/* Rooms Section */}
      <Rooms/>


      {/* Facilities Section */}
      <AmenitiesSection/>

      {/* Testimonials Section */}
      
      {/* <Testimonials/> */}


      {/* Facilities Tabs Section */}
      <Facilities/>

      <Location/>
      

      {/* Footer */}
      {/* <Footer/> */}
    </div>
  )
}

