import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { readdirSync } from "fs"
import path from "path"
import Image from "next/image"
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Roaming Kitchen',
}

export default function Page() {

  const chef_portfolio_dir = "/chef-portfolio/Narendra";
  const chef_awards_dir = "/chef-portfolio/Narendra/awards";
  const chef_pfp = "/chef-portfolio/Narendra/awards/pfp.png";
  const vipul_pfp = "/vipul/pfp.jpg"

  const readDirectory = (dir: string) => {
    const directoryPath = path.join("public", dir);
    const files = readdirSync(directoryPath);
    return files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
  };

  let chef_images = readDirectory(chef_portfolio_dir);
  let chef_achievments = readDirectory(chef_awards_dir);



  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full h-screen relative">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="slideshow.mp4" type="video p4" />
          </video>
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Roaming Kitchen</h1>
              <p className="max-w-[600px] md:text-xl">Serving up delicious, freshly-prepared meals on the go.</p>
            </div>
            <Link
              href="#menu"
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
                  src="https://www.renaultgroup.com/wp-content/uploads/2015/06/ft8.jpg"
                  width={550}
                  height={310}
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
                  <Card>
                    <Image src={vipul_pfp} alt="@vipulpopat" width={400} height={500} className="aspect-video object-cover rounded-md"
                    />
                  </Card>
                  <h3 className="text-xl font-bold">Vipul Popat</h3>
                  <p className="text-muted-foreground">Co-Founder</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <Card>
                    <Image src={chef_pfp} alt="@narendrasharma" width={400} height={500} className="aspect-video object-cover rounded-md"
                    />
                  </Card>
                  <h3 className="text-xl font-bold">Narendra Sharma</h3>
                  <p className="text-muted-foreground">Co-Founder and Chef</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="chef" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Chef</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Chef Narendra brings 25 years of culinary expertise from top hotels and restaurants, consistently creating dishes that delight discerning palates.  They have excelled at leading large teams, orchestrating events for hundreds of guests, and managing intricate social gatherings.  Their experience also includes strong supplier relationships, ensuring fresh, high-quality ingredients at the best value. Chef Narendra is a culinary maestro, a skilled leader, and a logistics expert—the perfect combination to spearhead any culinary endeavor, guaranteeing delicious food and an unforgettable experience.
                </p>
              </div>
              <Carousel className="w-full max-w-md">
                <CarouselContent>


                  {chef_images.map((image) => (
                    <CarouselItem key={image}>
                      <Image
                        src={`${chef_portfolio_dir}/${image}`}
                        width={448}
                        height={252}
                        alt={image}
                        className="aspect-video object-cover rounded-md"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
        <section id="chef-achievements" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Chef's Achievements</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of our chef's proudest accomplishments.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <h3 className="text-2xl font-bold">Best Chef 2022</h3>
                    <p className="text-muted-foreground">Awarded by the National Culinary Association</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <h3 className="text-2xl font-bold">Top Rated Chef 2023</h3>
                    <p className="text-muted-foreground">Voted by our loyal customers</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <h3 className="text-2xl font-bold">Michelin Star 2024</h3>
                    <p className="text-muted-foreground">Recognized for our exceptional cuisine</p>
                  </CardContent>
                </Card>
              </div>
              <Carousel className="w-full max-w-md">
                <CarouselContent>
                  {chef_achievments.map((image) => (
                    <CarouselItem key={image}>
                      <Image
                        src={`${chef_awards_dir}/${image}`}
                        width={448}
                        height={252}
                        alt={image}
                        className="aspect-video object-cover rounded-md"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
    </div>
  )
}
