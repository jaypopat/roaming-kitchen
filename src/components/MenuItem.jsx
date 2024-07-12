import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const MenuItems = ({ category, filters, items }) => {
  let image_width = 300;
  let image_height = 400;

  const VegIndicator = ({ isVeg }) => (
    <div
      style={{
        position: "absolute",
        top: "-10px",
        right: "-10px",
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: isVeg ? "#22c55e" : "#ef4444",
        border: "2px solid white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: "10px",
        zIndex: 10,
      }}
    >
      {isVeg ? "VEG" : "NON"}
    </div>
  );

  const MenuItem = ({ item, isVeg }) => (
    <Card key={item.item} style={{ position: "relative", overflow: "visible" }}>
      <VegIndicator isVeg={isVeg} />
      <CardContent className="flex flex-col items-center gap-2">
        <Image
          src={item.image}
          width={image_width}
          height={image_height}
          alt={item.item}
          className="rounded-md"
        />
        <div className="space-y-1 text-center">
          <h3 className="text-lg font-semibold">{item.item}</h3>
          {/* <p className="text-muted-foreground">{item.description}</p> */}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filters.vegetarian &&
        items[category].Vegetarian.map((item) => (
          <MenuItem key={item.item} item={item} isVeg={true} />
        ))}
      {filters.nonVegetarian &&
        items[category]["Non-Vegetarian"].map((item) => (
          <MenuItem key={item.item} item={item} isVeg={false} />
        ))}
    </div>
  );
};
