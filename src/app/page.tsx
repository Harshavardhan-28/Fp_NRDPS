import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Professional <br />
              Photographers
            </h1>
            <p className="text-gray-300 max-w-md">
              Capturing your precious moments with creativity and passion. We specialize in weddings, events, portraits,
              and commercial photography.
            </p>
            <Button className="bg-[#ff6c4b] hover:bg-[#e05a3b] text-white">Book Now</Button>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 rotate-3">
              <div className="bg-white p-2 shadow-lg rotate-[-5deg]">
                <Image
                  src="/placeholder.svg?height=300&width=200"
                  alt="Portrait photo"
                  width={200}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="bg-white p-2 shadow-lg rotate-[5deg]">
                <Image
                  src="/placeholder.svg?height=300&width=200"
                  alt="Wedding photo"
                  width={200}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-[#ff6c4b] rounded-full"></div>
          <div className="absolute bottom-40 right-20 w-3 h-3 bg-[#ff6c4b] rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white rounded-full"></div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
            <span className="text-[#ff6c4b] mr-2">•</span> Who We Are ?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="flex gap-4">
              <Image
                src="/placeholder.svg?height=300&width=200"
                alt="Studio photo"
                width={200}
                height={300}
                className="object-cover rounded-md"
              />
              <Image
                src="/placeholder.svg?height=300&width=200"
                alt="Photographer"
                width={200}
                height={300}
                className="object-cover rounded-md mt-8"
              />
            </div>
            <div className="bg-[#9dbaa0]/20 p-6 rounded-md">
              <p className="text-gray-300 leading-relaxed">
                Founded in 2005, Raja Photo Studio has been capturing life's most precious moments for over 15 years.
                Our team of professional photographers brings creativity, technical expertise, and a passion for
                storytelling to every shoot.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline" className="text-[#ff6c4b] border-[#ff6c4b]">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="text-[#ff6c4b] mr-2">•</span> Our Services
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Wedding Photography",
                description: "Capturing your special day with creativity and emotion.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Portrait Sessions",
                description: "Professional portraits for individuals and families.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Event Coverage",
                description: "Comprehensive coverage for all types of events.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Commercial Shoots",
                description: "High-quality images for your business and products.",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-[#0b3c5a] border-none overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white">{service.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">{service.description}</p>
                  <Button variant="link" className="text-[#ff6c4b] p-0 h-auto mt-2 text-sm">
                    Learn more <ChevronRight className="h-3 w-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild className="bg-[#ff6c4b] hover:bg-[#e05a3b] text-white">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-16 px-4 md:px-6 relative">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="text-[#ff6c4b] mr-2">•</span> Latest Work Gallery
          </h2>
          <div className="relative">
            <div className="bg-[#ff6c4b] h-40 rounded-md"></div>
            <div className="flex justify-center -mt-20 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-3 shadow-lg rotate-[-2deg] hover:rotate-0 transition-transform">
                  <Image
                    src="/placeholder.svg?height=200&width=150"
                    alt={`Gallery image ${item}`}
                    width={150}
                    height={200}
                    className="object-cover"
                  />
                  <p className="text-center text-xs mt-2 text-gray-700">2023</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <Button asChild className="bg-white text-[#03121c] hover:bg-gray-100">
                <Link href="/gallery">View All</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-6 bg-[#0b3c5a]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Capture Your Moments?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let our professional photographers help you preserve your special moments with creativity and passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#ff6c4b] hover:bg-[#e05a3b] text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/gallery">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

