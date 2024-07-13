import Image from "next/image";
import { readdirSync } from "fs";
import path from "path";
import { Metadata } from "next";
import ChefCarousel from "@/components/ChefCarousel";
import Award from "@/components/Award";

export const metadata: Metadata = {
  title: "Chef",
  description: "Meet our chef and check out his proudest accomplishments.",
};

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
            <ChefCarousel
              images={chef_images}
              dir={chef_portfolio_dir}
              w={1100}
              h={400}
            />
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
              <Award
                title="Best Chef 2022"
                description="Awarded by the National Culinary Association"
              />
              <Award
                title="Top Rated Chef 2023"
                description="Voted by our loyal customers"
              />
              <Award
                title="Michelin Star 2024"
                description="Recognized for our exceptional cuisine"
              />
            </div>
            <ChefCarousel
              images={chef_achievments}
              dir={chef_awards_dir}
              w={600}
              h={300}
            />
          </div>
        </div>
      </section>
    </>
  );
}
