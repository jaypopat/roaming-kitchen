import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const MenuItems = ({ category, filters, items }) => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filters.vegetarian &&
        items[category].Vegetarian.map((item) => (
          <Card key={item.item}>
            <CardContent className="flex flex-col items-center gap-2">
              <Image
                src="/menu/starters/chips-and-wedges.jpeg"
                width={150}
                height={150}
                alt={item.item}
                className="rounded-full"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{item.item}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      {filters.nonVegetarian &&
        items[category]["Non-Vegetarian"].map((item) => (
          <Card key={item.item}>
            <CardContent className="flex flex-col items-center gap-2">
              <Image
                src="/menu/starters/chips-and-wedges.jpeg"
                width={150}
                height={150}
                alt={item.item}
                className="rounded-full"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">{item.item}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};
