import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Roaming Kitchen',
}

export default function Page() {

  return (
    <div className="flex flex-col min-h-[100dvh]">
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
              href="/menu"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              View Menu
            </Link>
          </div>
        </section>
        {/* <section id="menu" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
                <Image
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
                <Image
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
                <Image
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
                <Image
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
        </section> */}
      </main>
    </div>
  )
}
