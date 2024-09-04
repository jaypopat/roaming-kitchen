import Image from "next/image";
import { Metadata } from "next";
import Founder from "@/components/Founder";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about the passionate individuals behind Roaming Kitchen.",
};

export default function AboutPage() {
  const chef_pfp = "/founders/chef_narendra_image.jpg";
  const vipul_pfp = "/founders/pfp.jpg";

  return (
    <>
      <header className="h-5"></header>
      <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Our Team
              </h2>
              <p className="mt-4 sm:mt-6 max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the passionate individuals behind Roaming Kitchen.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Founder
                role="Chef & Co Founder"
                photo={chef_pfp}
                name="Narendra Sharma"
              />
              <Founder role="Co Founder" photo={vipul_pfp} name="Vipul Popat" />
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
              <Image
                src="/about-truck.jpeg"
                width={550}
                height={320}
                alt="Truck Image"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
