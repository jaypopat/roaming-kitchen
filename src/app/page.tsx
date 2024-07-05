"use client"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import ContactForm from "@/components/contact"


export default function Component() {



  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
            <img height={80} width={80} src="logo.png" alt="" />
          <span className="text-2xl font-bold">Roaming Kitchen</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#menu"  className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Menu
          </Link>
          <Link href="#about"  className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#team"  className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Team
          </Link>
          <Link href="#contact"  className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full h-screen relative">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="slideshow.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Roaming Kitchen</h1>
              <p className="max-w-[600px] md:text-xl">Serving up delicious, freshly-prepared meals on the go.</p>
            </div>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View Menu
            </Link>
          </div>
        </section>
        <section id="menu" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Cuisines we provide</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our delicious selection of cuisines.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card>
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Burrito"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Thai</h3>
                  <p className="text-muted-foreground">
                    Freshly-grilled steak, rice, beans, salsa, and guacamole wrapped in a warm tortilla.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Tacos"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Indian</h3>
                  <p className="text-muted-foreground">
                    Soft corn tortillas filled with your choice of meat, onions, cilantro, and a squeeze of lime.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Quesadilla"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Italian</h3>
                  <p className="text-muted-foreground">
                    Grilled tortilla filled with melted cheese, your choice of meat, and sautéed vegetables.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Nachos"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Japanese</h3>
                  <p className="text-muted-foreground">
                    Crispy tortilla chips topped with melted cheese, salsa, guacamole, and your choice of protein.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Roaming Kitchen</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Roaming Kitchen is your go-to spot for delicious, chef-crafted meals made with passion and the freshest ingredients. 
                We are committed to bringing quality and affordability together, making your dining experience a delightful adventure.
                 Join us as we bring our culinary creations to your neighborhood!
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src=" https://www.renaultgroup.com/wp-content/uploads/2015/06/ft8.jpg "
                  width="550"
                  height="310"
                  alt="About Roaming Kitchen"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the passionate individuals behind Roaming Kitchen.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex flex-col items-center justify-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>VP</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">Vipul Popat</h3>
                  <p className="text-muted-foreground">Co-Founder</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>NS</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">Narendra Sharma</h3>
                  <p className="text-muted-foreground">Co-Founder and Chef</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ContactForm/>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-primary text-primary-foreground">
        <p className="text-xs">&copy; 2024 Roaming Kitchen. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
