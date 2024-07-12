import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { readdirSync } from "fs";
import path from "path";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function ChefPage() {
  const chef_portfolio_dir = "/chef-portfolio/Narendra";
  const chef_awards_dir = "/chef-portfolio/Narendra/awards";

  const readDirectory = (dir: string) => {
    const directoryPath = path.join("public", dir);
    const files = readdirSync(directoryPath);
    return files.filter((file) => /\.(jpg|jpeg|png|gif)$/.test(file));
  };

  let chef_images = readDirectory(chef_portfolio_dir);
  let chef_achievments = readDirectory(chef_awards_dir);

  return (
    <>
      <section id="chef" className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-xl font-bold tracking-tighter sm:text-5xl">
                Meet Our Chef
              </h2>
              <p className="mt-4 max-w-[800px] text-muted-foreground md:text-2xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
                A culinary maestro with 25 years of experience leading top
                kitchens. Chef Narendra creates dishes that delight,
                orchestrates events for hundreds, and builds strong supplier
                relationships for the freshest ingredients. Experience delicious
                food and an unforgettable experience with Chef Narendra.
              </p>
            </div>
            <Carousel className="w-full max-w-[50vw]">
              <CarouselContent>
                {chef_images.map((image) => (
                  <CarouselItem key={image}>
                    <div className="flex justify-center items-center">
                      <Image
                        src={`${chef_portfolio_dir}/${image}`}
                        width={1200}
                        height={675}
                        alt={image}
                        className="aspect-video object-cover rounded-md"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </section>
      <section
        id="chef-achievements"
        className="w-full py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-10xl font-bold tracking-tighter sm:text-5xl">
                Chef's Achievements
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of our chef's proudest accomplishments.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <h3 className="text-2xl font-bold">Best Chef 2022</h3>
                  <p className="text-muted-foreground">
                    Awarded by the National Culinary Association
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <h3 className="text-2xl font-bold">Top Rated Chef 2023</h3>
                  <p className="text-muted-foreground">
                    Voted by our loyal customers
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <h3 className="text-2xl font-bold">Michelin Star 2024</h3>
                  <p className="text-muted-foreground">
                    Recognized for our exceptional cuisine
                  </p>
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

              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
