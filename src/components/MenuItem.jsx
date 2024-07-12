import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const MenuItems = ({ category, filters, items }) => {
  const cardSize = 300;
  const imageWidth = 300;
  const imageHeight = 225; // 3:4 aspect ratio
  const textPositionFromBottom = 20; // Adjusted for better visibility

  const VegIndicator = ({ isVeg }) => (
    <div
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
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
    <Card
      key={item.item}
      style={{
        position: "relative",
        overflow: "hidden",
        width: `${cardSize}px`,
        height: `${cardSize}px`,
      }}
    >
      <CardContent className="p-0">
        <div style={{ position: "relative" }}>
          <Image
            src={item.image}
            width={imageWidth}
            height={imageHeight}
            alt={item.item}
            objectFit="cover"
          />
          <VegIndicator isVeg={isVeg} />
        </div>
        <div
          className="absolute w-full text-center bg-white bg-opacity-75 py-2"
          style={{
            bottom: `${textPositionFromBottom}px`,
          }}
        >
          <h3 className="text-lg font-semibold">{item.item}</h3>
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
