import Image from "next/image";
import { readdirSync } from "fs";
import path from "path";
import { Metadata } from "next";
import ChefCarousel from "@/components/ChefCarousel";
import Award from "@/components/Award";
import portfolioData from "./portfolio_description.json";
import awardsData from "./awards_description.json";

export const metadata: Metadata = {
  title: "Chef",
  description: "Meet our chef and check out his proudest accomplishments.",
};
type FileData = {
  filename: string;
  description: string;
};

type JSONData = {
  files: FileData[];
};

export default function ChefPage() {
  function findDescription(data: JSONData, filename: string): string | null {
    const file = data.files.find((item) => item.filename === filename);
    return file ? file.description : null;
  }

  const chef_portfolio_dir = "/chef-portfolio/Narendra";
  const chef_awards_dir = `${chef_portfolio_dir}/awards`;

  const readDirectory = (dir: string) => {
    const directoryPath = path.join("public", dir);
    const files = readdirSync(directoryPath);
    return files.filter((file) => /\.(jpg|JPG|jpeg|png|gif)$/.test(file));
  };

  const chef_images = readDirectory(chef_portfolio_dir).map((file) => ({
    src: file,
    text: `${findDescription(portfolioData, file)}`,
  }));

  const chef_achievements = readDirectory(chef_awards_dir).map((file) => ({
    src: file,
    text: `${findDescription(awardsData, file)}`,
  }));

  return (
    <>
      <section id="chef" className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-xl font-bold tracking-tighter sm:text-4xl">
                Meet Our Chef
              </h2>
              <p className="mt-4 max-w-[1000px] text-muted-foreground text-left md:text-xl lg:text-xl xl:text-xl">
                With 25 years of leading top kitchens, Chef Narendra is a
                culinary maestro known for creating delightful dishes and
                orchestrating large-scale events. His expertise ensures each
                meal is a memorable experience, combining exquisite flavors with
                impeccable presentation. Whether you're organizing a grand event
                or a casual gathering, Chef Narendra’s culinary creations
                promise to impress. Experience the artistry and passion of a
                seasoned chef dedicated to providing delicious food and
                unforgettable dining experiences. Chef Narendra brings his rich
                experience and innovative approach to every event, making each
                occasion truly special.
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
                title="Times Food Award 2007-2009"
                description="Winner of TIMES FOOD AWARD for BestRestaurant in Delhi for 3 consecutive year (2007 – 2009)"
              />
              <Award
                title="Featured in Documentary Birmingham to Bombay"
                description="This documentary was created by Food Archaeologist Alan Coxon, same was screened on the History Channel TV18, TLC in India"
              />
              <Award
                title="Featured in Magazine Vogue Living Jan 2016"
                description="Created a month-by-month Ayurveda-driven menu, blending traditional wisdom with modern culinary techniques for holistic and delicious dining."
              />
            </div>
            <ChefCarousel
              images={chef_achievements}
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
