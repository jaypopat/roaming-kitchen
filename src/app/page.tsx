
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
            <img height={80} width={80} src="logo.png" alt="" />
          <span className="text-2xl font-bold">Roaming Kitchen</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Menu
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Team
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Menu</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our delicious selection of freshly-prepared meals and snacks.
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
                  <h3 className="text-xl font-bold">Burrito</h3>
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
                  <h3 className="text-xl font-bold">Tacos</h3>
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
                  <h3 className="text-xl font-bold">Quesadilla</h3>
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
                  <h3 className="text-xl font-bold">Nachos</h3>
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
                  Roaming Kitchen is a family-owned food truck that has been serving up delicious, freshly-prepared
                  meals on the go for over 10 years. Our mission is to bring high-quality, affordable food to the local
                  community, using only the freshest ingredients and time-honored recipes.
                </p>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Food Truck"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
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
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">Vipul Popat</h3>
                  <p className="text-muted-foreground">Co-Founder</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">Narendra Sharma</h3>
                  <p className="text-muted-foreground">Co-Founder and Chef</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with us for catering, event bookings, or any other inquiries.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <LocateIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-muted-foreground">123 Main St, Anytown USA</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-5 w-5 text-muted-foreground" />
                    <p className="text-muted-foreground">Mon-Sat: 11am - 8pm, Closed Sundays</p>
                  </div>
                </div>
                <form className="flex flex-col gap-2">
                  <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
                  <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
                  <Textarea placeholder="Message" className="max-w-lg flex-1" />
                  <Button type="submit">Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
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

function ClockIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function LocateIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function TruckIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}