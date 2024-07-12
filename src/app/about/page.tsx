import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about the passionate individuals behind Roaming Kitchen.",
};

export default function AboutPage() {
  const chef_pfp = "/chef-portfolio/Narendra/awards/pfp.png";
  const vipul_pfp = "/vipul/pfp.jpg";

  return (
    <>
      <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Team
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the passionate individuals behind Roaming Kitchen.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col items-center justify-center">
                <Card>
                  <Image
                    src={vipul_pfp}
                    alt="@vipulpopat"
                    width={400}
                    height={500}
                    className="aspect-video object-cover rounded-md"
                  />
                </Card>
                <h3 className="text-xl font-bold">Vipul Popat</h3>
                <p className="text-muted-foreground">Co-Founder</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Card>
                  <Image
                    src={chef_pfp}
                    alt="@narendrasharma"
                    width={400}
                    height={500}
                    className="aspect-video object-cover rounded-md"
                  />
                </Card>
                <h3 className="text-xl font-bold">Narendra Sharma</h3>
                <p className="text-muted-foreground">Co-Founder and Chef</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-12 md:py-24 lg:py-10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                About Roaming Kitchen
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Roaming Kitchen is your go-to spot for delicious, chef-crafted
                meals made with passion and the freshest ingredients. We are
                committed to bringing quality and affordability together, making
                your dining experience a delightful adventure. Join us as we
                bring our culinary creations to your neighborhood!
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
    </>
  );
}
