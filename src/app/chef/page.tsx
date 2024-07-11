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
                Chef Narendra brings 25 years of culinary expertise from top
                hotels and restaurants, consistently creating dishes that
                delight discerning palates. They have excelled at leading large
                teams, orchestrating events for hundreds of guests, and managing
                intricate social gatherings. Their experience also includes
                strong supplier relationships, ensuring fresh, high-quality
                ingredients at the best value. Chef Narendra is a culinary
                maestro, a skilled leader, and a logistics expert—the perfect
                combination to spearhead any culinary endeavor, guaranteeing
                delicious food and an unforgettable experience.
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

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
