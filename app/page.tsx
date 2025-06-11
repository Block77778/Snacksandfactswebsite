import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Instagram, Twitter, Facebook, Hammer, Zap, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PhotoGallery } from "@/components/photo-gallery"
import { Dumbbell, Heart } from "lucide-react"
import { TransformationSlider } from "@/components/transformation-slider"
import { ContactForm } from "@/components/contact-form"
import { NewsletterForm } from "@/components/newsletter-form"
import { AudioPlayer } from "@/components/audio-player"

export default function HammerFitLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Audio Player */}
      <AudioPlayer />

      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Snacks%20and%20facts%20logo-TNPSF5djY9qkumP2uzk8YFhG1aMa0G.png"
            width="40"
            height="40"
            alt="Hammer Fit Logo - Muscular arms holding hammer"
            className="rounded-lg"
          />
          <span className="text-2xl font-bold text-white">Hammer Fit</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link href="#about" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#programs" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Programs
          </Link>
          <Link href="#transformation" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Transformation
          </Link>
          <Link href="#hammer-fit" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Membership
          </Link>
          <Link href="/subscribe" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Subscribe
          </Link>
          <Link href="#contact" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
        <div className="md:hidden ml-auto">
          <Button variant="ghost" size="sm" className="text-white">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden">
          {/* Static Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Hammers */}
            <div className="absolute top-20 left-10 text-white/5">
              <Hammer className="h-32 w-32" />
            </div>
            <div className="absolute bottom-20 left-1/4 text-white/5">
              <Hammer className="h-40 w-40" />
            </div>

            {/* Fitness Elements */}
            <div className="absolute top-40 right-20 text-white/5">
              <Dumbbell className="h-24 w-24" />
            </div>
            <div className="absolute bottom-40 right-10 text-white/5">
              <Dumbbell className="h-28 w-28" />
            </div>

            {/* Power Elements */}
            <div className="absolute top-32 right-1/4 text-white/5">
              <Zap className="h-36 w-36" />
            </div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-6 order-2 lg:order-1">
                <div className="space-y-4">
                  <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20 w-fit backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Hammer className="h-4 w-4" />
                      <Dumbbell className="h-4 w-4" />
                      <Zap className="h-4 w-4" />
                    </div>
                    <span className="ml-2">Fitness & Transformation</span>
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Transform Your Body
                    </span>{" "}
                    and
                    <br />
                    <span className="text-3xl sm:text-4xl xl:text-5xl">Unleash Your Potential</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl leading-relaxed">
                    Welcome to Hammer Fit, where real transformation happens. Join me for personalized workout routines,
                    meal plans, and the motivation you need to achieve your fitness goals.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Link href="#programs">
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10 font-semibold group"
                    >
                      <div className="flex items-center gap-2">
                        <Hammer className="h-4 w-4" />
                        <Dumbbell className="h-4 w-4" />
                      </div>
                      <span className="ml-2">Explore Programs</span>
                    </Button>
                  </Link>
                  <Link href="#contact">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      Contact Me
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-3xl"></div>
                <Image
                  src="/images/hammer-dealership.png"
                  width="600"
                  height="600"
                  alt="Hammer smiling and giving a thumbs up, wearing a white shirt"
                  className="aspect-square overflow-hidden rounded-3xl object-cover shadow-2xl shadow-white/5 border border-white/10 mx-auto"
                  priority={true}
                />
                <div className="absolute -bottom-4 -left-4 bg-black/80 backdrop-blur-sm border border-white/20 p-4 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Dumbbell className="h-6 w-6 text-white" />
                    <span className="font-semibold text-white">Fitness Expert</span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-black/80 backdrop-blur-sm border border-white/20 p-4 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-white" />
                    <span className="font-semibold text-white">Power</span>
                  </div>
                </div>
                {/* Static Floating Elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <Hammer className="h-16 w-16 text-white/20" />
                </div>
                <div className="absolute top-1/4 right-1/4 pointer-events-none">
                  <Dumbbell className="h-12 w-12 text-white/15" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white relative">
          {/* Static Background Pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-10 text-gray-100">
              <Hammer className="h-20 w-20" />
            </div>
            <div className="absolute bottom-10 left-10 text-gray-100">
              <Dumbbell className="h-16 w-16" />
            </div>
            <div className="absolute top-1/2 right-1/4 text-gray-100">
              <Zap className="h-18 w-18" />
            </div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Hammer className="h-8 w-8 text-black" />
                  <Dumbbell className="h-8 w-8 text-black" />
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">Meet Hammer</h2>
                  <Zap className="h-8 w-8 text-black" />
                </div>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From personal transformation to professional fitness coaching - bringing you authentic perspectives,
                  proven workout routines, and genuine guidance about health, fitness, and personal growth.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="relative">
                <Image
                  src="/images/automotive-new-10.png"
                  width="600"
                  height="400"
                  alt="Hammer in his personalized fitness space with motivational artwork and fitness equipment"
                  className="aspect-video overflow-hidden rounded-xl object-cover shadow-2xl border border-gray-200 mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent rounded-xl"></div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h3 className="text-2xl font-bold text-black flex items-center gap-2">
                  <Hammer className="h-6 w-6" />
                  <Dumbbell className="h-6 w-6" />
                  My Story
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  My fitness journey has given me unique insights into transformation, discipline, and achieving goals.
                  Hammer Fit started as a way to share those experiences, proven methods, and authentic moments from
                  both my personal and professional journey.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether I'm helping clients achieve their fitness goals or sharing a fascinating insight I've learned,
                  it's all about genuine connections, power, and making everyday progress toward your best self.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 relative">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">Fitness Programs</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Personalized fitness solutions to help you achieve your goals
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="bg-white border-gray-200 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:border-black/20 group">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 relative">
                    <Dumbbell className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2">
                      <Hammer className="h-4 w-4 text-black" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-black">Strength Training</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Build muscle, increase strength, and transform your physique with personalized strength routines.
                  </p>
                  <Link href="/subscribe">
                    <Button className="w-full bg-black text-white hover:bg-gray-800">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:border-black/20 group">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 relative">
                    <Lightbulb className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2">
                      <Hammer className="h-4 w-4 text-black" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-black">Nutrition Planning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Customized meal plans and nutrition guidance to fuel your workouts and maximize results.
                  </p>
                  <Link href="/subscribe">
                    <Button className="w-full bg-black text-white hover:bg-gray-800">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-white border-gray-200 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 hover:border-black/20 group">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 relative">
                    <Zap className="h-8 w-8 text-white" />
                    <div className="absolute -top-2 -right-2">
                      <Hammer className="h-4 w-4 text-black" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-black">Personal Coaching</h3>
                  <p className="text-gray-600 leading-relaxed">
                    One-on-one guidance, accountability, and motivation to help you reach your fitness goals.
                  </p>
                  <Link href="/subscribe">
                    <Button className="w-full bg-black text-white hover:bg-gray-800">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Transformation Section */}
        <section id="transformation" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Dumbbell className="h-8 w-8 text-black" />
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-black">
                    Transformation Journey
                  </h2>
                  <Dumbbell className="h-8 w-8 text-black" />
                </div>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  If you want to look like the hammer, eat like the hammer - my journey to strength and wellness
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 mb-16 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Heart className="h-6 w-6 text-red-500" />
                  The Hammer Transformation
                </h3>
                <p className="text-gray-600">
                  My fitness journey isn't just about looking good – it's about feeling powerful, having energy for
                  life's adventures, and maintaining health for the long haul. Through consistent training and smart
                  nutrition choices, I've achieved this incredible transformation that speaks for itself.
                </p>
                <p className="text-gray-600">
                  These are real, unedited photos showing the results of dedication, proper nutrition, and the right
                  training approach. If you want to look like the hammer, you need to eat like the hammer and train like
                  the hammer. The transformation is possible – the question is, are you ready to commit?
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white">Strength Training</Badge>
                  <Badge className="bg-black text-white">Nutrition Planning</Badge>
                  <Badge className="bg-black text-white">Lifestyle Balance</Badge>
                  <Badge className="bg-black text-white">Mental Wellness</Badge>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent rounded-xl"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hammer%20boat%20transformation-m1DpqyF3XKxdZqMf7HHvlnxd0jgv6t.jpeg"
                  width={500}
                  height={700}
                  alt="Hammer showcasing his incredible physique on the boat with red shorts and sunglasses"
                  className="mx-auto rounded-xl object-cover shadow-xl border border-gray-200"
                />
              </div>
            </div>

            <TransformationSlider
              title="The Hammer Transformation Journey"
              description="If you want to look like the hammer, eat like the hammer - witness the incredible transformation from start to finish"
              images={[
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hammer%20transformation%20start-UUTse4Ftx0JvyG3hTbPucPj1QeLv2e.jpeg",
                  alt: "Hammer's transformation starting point - mirror selfie in green shorts showing the beginning of his fitness journey",
                  stage: "Stage 1: Starting Point",
                  description:
                    "The beginning of the journey - everyone starts somewhere. This is where dedication and consistency begin to build the foundation for transformation.",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hammer%20transformation%201-G1wyE1G5mpRy3vuzFr5cHQegfeIOyZ.jpeg",
                  alt: "Hammer's early transformation progress in patterned shorts",
                  stage: "Stage 2: Early Progress",
                  description:
                    "First signs of progress becoming visible. The hard work in the gym and kitchen is starting to pay off with noticeable changes.",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hammer%20transformation%202-hvITzzZRIlLx2GNpLrAZsxzICp1nMY.jpeg",
                  alt: "Hammer's continued transformation progress showing improved muscle definition",
                  stage: "Stage 3: Building Momentum",
                  description:
                    "Muscle definition becoming more apparent. The body is responding well to consistent training and proper nutrition protocols.",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hammer%20transformation%203-OkqC1cafBTciGsd4ywoEBjzt1vOoPn.jpeg",
                  alt: "Hammer's mid-transformation progress in green shorts showing significant changes",
                  stage: "Stage 4: Significant Changes",
                  description:
                    "Major improvements in muscle mass and body composition. The transformation is becoming undeniable with continued dedication.",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hammer%20transformation%204-WRlqKvCRfq7N00AQlS71nsMpyyiQwe.jpeg",
                  alt: "Hammer's advanced transformation progress in gray sweatpants showing excellent muscle definition",
                  stage: "Stage 5: Advanced Results",
                  description:
                    "Impressive muscle development and definition. The body is now showing the results of months of consistent effort and smart training.",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hammer%20transformation%206-lU6I0sMWslswaGujdnMH6rBdP6iEzF.jpeg",
                  alt: "Hammer's incredible final transformation result showing peak physique with visible abs and cross necklace",
                  stage: "Stage 6: Peak Achievement",
                  description:
                    "Peak physical condition achieved - incredible muscle definition, visible abs, and an overall impressive physique representing the pinnacle of dedication.",
                },
              ]}
            />
            <div className="text-center mt-12">
              <Link href="/subscribe">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 shadow-lg group text-lg px-8 py-4">
                  <div className="flex items-center gap-2">
                    <Hammer className="h-5 w-5" />
                    <Dumbbell className="h-5 w-5" />
                  </div>
                  <span className="ml-2">Join Hammer Fit Program</span>
                </Button>
              </Link>
              <p className="text-gray-600 text-sm mt-4">Ready to start your transformation?</p>
            </div>
          </div>
        </section>

        {/* Fitness Gallery */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Dumbbell className="h-8 w-8 text-black" />
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-black">
                    Fitness Gallery
                  </h2>
                  <Dumbbell className="h-8 w-8 text-black" />
                </div>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Moments captured during workouts, transformations, and fitness achievements
                </p>
              </div>
            </div>

            <PhotoGallery
              title="Fitness Moments"
              description="Celebrating progress, dedication, and results"
              images={[
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Automative%20new%208-oFCSzq7bOsqsFvtOKKR8Kgn2JdFoJz.jpeg",
                  alt: "Hammer with fitness clients celebrating their achievements",
                  aspectRatio: "video",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Automative%20new%209-anygbMvfS5EUOhvxU3BZxMp9m66t8V.jpeg",
                  alt: "Hammer with fitness colleagues sharing nutrition tips and giving thumbs up",
                  aspectRatio: "video",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Automative%20new%207-uGirQX02FJmYTVgvH0yZg96BeIs796.jpeg",
                  alt: "Hammer with a female client who completed her fitness program",
                  aspectRatio: "video",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Automative%20new%206-ffB0N9G3cByWA5z3PBzvfXkOHGtPpx.jpeg",
                  alt: "Hammer at a fitness event with colorful balloons, giving thumbs up",
                  aspectRatio: "video",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Automative%20new%205-yYeP9Ql8BvNGgmyhAZ5dQknURq77WM.jpeg",
                  alt: "Hammer with a client in the fitness studio, giving thumbs up",
                  aspectRatio: "video",
                },
                {
                  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hammer%20dealership-GGWbxPNvUtiSKJ6FkPaxlAqp0Ngj7M.jpeg",
                  alt: "Hammer outside the fitness center in his professional attire giving a thumbs up",
                  aspectRatio: "video",
                },
                {
                  src: "/images/automotive-new-1.png",
                  alt: "Hammer with a satisfied female client after completing her fitness program, both giving thumbs up",
                  aspectRatio: "video",
                },
                {
                  src: "/images/automotive-new-10.png",
                  alt: "Hammer at his personalized desk with Thor's hammer, plants, and fitness memorabilia",
                  aspectRatio: "video",
                },
              ]}
            />
          </div>
        </section>

        {/* Hammer Fit Program Section */}
        <section id="hammer-fit" className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden">
          {/* Static Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-20 text-white/5">
              <Hammer className="h-24 w-24" />
            </div>
            <div className="absolute bottom-10 right-20 text-white/5">
              <Dumbbell className="h-32 w-32" />
            </div>
            <div className="absolute top-1/2 left-1/4 text-white/5">
              <Zap className="h-28 w-28" />
            </div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Hammer className="h-8 w-8 text-white" />
                  <Dumbbell className="h-8 w-8 text-white" />
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-white">
                    Hammer Fit Program
                  </h2>
                  <Dumbbell className="h-8 w-8 text-white" />
                  <Hammer className="h-8 w-8 text-white" />
                </div>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to transform your body and mind? Join the Hammer Fit Program and get the support,
                  accountability, and results you've been looking for.
                </p>
              </div>
            </div>

            {/* Subscription Plans */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="grid gap-6 md:gap-8">
                {/* Monthly Plan */}
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl">
                        1
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">MONTHLY Subscription</h3>
                        <div className="text-3xl font-bold text-white">$29.99</div>
                      </div>
                    </div>
                    <div className="space-y-2 text-gray-300">
                      <p>• Access the entire Hammer Fit Program</p>
                      <p>• Meal Plan</p>
                      <p>• Workout Routine</p>
                      <p>• New workout routines and meal plans monthly</p>
                    </div>
                    <div className="mt-4">
                      <Link href="/subscribe">
                        <Button className="w-full bg-white text-black hover:bg-gray-100">Subscribe Now</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Quarterly Plan */}
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl">
                        2
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">QUARTERLY Subscription</h3>
                        <div className="text-3xl font-bold text-white">$99.99</div>
                      </div>
                    </div>
                    <div className="space-y-2 text-gray-300">
                      <p className="font-semibold">Enjoy everything from monthly subscription plus:</p>
                      <p>• 1 monthly personalized accountability check in via virtual call</p>
                      <p>• Quarterly progress and goal setting</p>
                      <p>• Exclusive access to merchandise and discounts</p>
                    </div>
                    <div className="mt-4">
                      <Link href="/subscribe">
                        <Button className="w-full bg-white text-black hover:bg-gray-100">Subscribe Now</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Annual Plan */}
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-bold text-xl">
                        3
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">ANNUAL Subscription</h3>
                        <div className="text-3xl font-bold text-white">$199.99</div>
                      </div>
                    </div>
                    <div className="space-y-2 text-gray-300">
                      <p className="font-semibold">Everything from Quarterly Subscription Tier plus:</p>
                      <p>• Personal Coaching - Once per week via virtual call</p>
                      <p>• An autographed T-Shirt from The Hammer</p>
                      <p>• A spot on the website for Hammer Jr. Of the month IF MONTHLY GOALS ARE REACHED!</p>
                    </div>
                    <div className="mt-4">
                      <Link href="/subscribe">
                        <Button className="w-full bg-white text-black hover:bg-gray-100">Subscribe Now</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Audio Message */}
            <div className="text-center mb-8">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm max-w-md mx-auto">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                    <Hammer className="h-5 w-5" />
                    Message from The Hammer
                  </h3>
                  <audio controls className="w-full" preload="metadata">
                    <source src="/audio/Hammer.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <p className="text-gray-300 text-sm mt-3">
                    Listen to my personal message about the transformation journey
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Benefits Section */}
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="grid gap-6 md:grid-cols-2 items-center">
                    <div>
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hammer%20transformation%206-lU6I0sMWslswaGujdnMH6rBdP6iEzF.jpeg"
                        width={300}
                        height={300}
                        alt="Hammer showing his incredible physique transformation"
                        className="rounded-xl object-cover shadow-xl"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">BENEFITS of Subscription</h3>
                      <div className="space-y-3 text-gray-300">
                        <p>
                          <strong>Consistency</strong> - Stay motivated and consistent with your fitness goals
                        </p>
                        <p>
                          <strong>Variety</strong> - Access new meal plans and workout routines monthly
                        </p>
                        <p>
                          <strong>Support</strong> - Get support from a community of like minded individuals
                        </p>
                        <p>
                          <strong>Accountability</strong> - Stay accountable with regular coaching and progress tracking
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <Link href="/subscribe">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10 font-semibold group text-lg px-8 py-4"
                >
                  <div className="flex items-center gap-2">
                    <Hammer className="h-5 w-5" />
                    <Dumbbell className="h-5 w-5" />
                  </div>
                  <span className="ml-2">Join Hammer Fit Program</span>
                </Button>
              </Link>
              <p className="text-gray-400 text-sm mt-4">Transform your body and mind with the Hammer</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Hammer className="h-8 w-8 text-black" />
                  <Dumbbell className="h-8 w-8 text-black" />
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-black">Get In Touch</h2>
                  <Zap className="h-8 w-8 text-black" />
                </div>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to start your fitness journey, ask questions about the program, or just say hello? I'd love to
                  hear from you!
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-12">
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="border-gray-200 shadow-2xl shadow-black/5 bg-black">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                      <Hammer className="h-6 w-6 text-white" />
                      <Dumbbell className="h-6 w-6 text-white" />
                      Contact Information
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <Mail className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <p className="font-medium text-white">Email</p>
                          <p className="text-gray-300">hammer.snacksnfacts@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <Phone className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <p className="font-medium text-white">Phone</p>
                          <p className="text-gray-300">Available via email</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                          <Dumbbell className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <p className="font-medium text-white">Fitness Studio</p>
                          <p className="text-gray-300">Professional Fitness Coach</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 shadow-2xl shadow-black/5">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-black mb-4">Follow the Journey</h3>
                    <div className="flex gap-4 mb-4">
                      <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-lg hover:scale-110 group"
                      >
                        <Instagram className="h-6 w-6 text-white" />
                      </Link>
                      <Link
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-lg hover:scale-110 group"
                      >
                        <Twitter className="h-6 w-6 text-white" />
                      </Link>
                      <Link
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-lg hover:scale-110 group"
                      >
                        <Facebook className="h-6 w-6 text-white" />
                      </Link>
                      <Link
                        href="https://www.tiktok.com/@hammer.snacksnfacts?_t=ZT-8x2IrKNmCQ2&_r=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 shadow-lg hover:scale-110 group"
                      >
                        <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                      </Link>
                    </div>
                    <p className="text-sm text-gray-600">
                      Follow for daily fitness tips, transformation stories, and motivational content!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden">
          {/* Static Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-20 text-white/5">
              <Hammer className="h-24 w-24" />
            </div>
            <div className="absolute bottom-10 right-20 text-white/5">
              <Dumbbell className="h-32 w-32" />
            </div>
            <div className="absolute top-1/2 left-1/4 text-white/5">
              <Zap className="h-28 w-28" />
            </div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Hammer className="h-8 w-8 text-white" />
                  <Dumbbell className="h-8 w-8 text-white" />
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">Stay Connected</h2>
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get the latest fitness tips, workout routines, and transformation stories delivered to your inbox.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 bg-black">
        <div className="flex items-center gap-2">
          <Hammer className="h-4 w-4 text-gray-400" />
          <Dumbbell className="h-4 w-4 text-gray-400" />
          <p className="text-xs text-gray-400">© 2024 Hammer Fit. All rights reserved.</p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/privacy"
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href="#contact"
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
