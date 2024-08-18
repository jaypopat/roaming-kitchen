import items from "./items.json";
import MenuLayout from "@/components/MenuLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description: "Check out our delicious selection of street food favorites.",
};

export default function Page() {
  const types: string[] = Object.keys(items);

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen bg-gray-50">
      <header className="h-14"></header>
      <main className="overflow-y-auto">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center gap-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  Our Menu
                </h2>
                <p className="max-w-[600px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  Explore our delicious selection of street food favorites.
                </p>
              </div>
              <MenuLayout types={types} items={items} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
