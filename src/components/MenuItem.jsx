import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { allergensIndex } from "../app/menu/allergensIndex";

const CARD_SIZE = 350;
const TEXT_HEIGHT = 50;
const DIALOG_IMAGE_HEIGHT = 500;

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
const AllergenIndicator = ({ allergens }) => {
  if (!Array.isArray(allergens) || allergens.length === 0) return null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="absolute top-2 left-2 z-10 w-8 h-8 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center cursor-pointer hover:bg-amber-500 transition-colors">
            <img src="/allergens.png" alt="" />
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom" align="start" className="w-64 p-2">
          <div className="font-semibold mb-2">Allergens:</div>
          <div className="flex flex-col gap-1">
            {allergens.map((allergen) => (
              <Badge key={allergen} variant="secondary" className="text-xs">
                {allergensIndex[allergen] || allergen}
              </Badge>
            ))}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const MenuItem = ({ item, isVeg }) => (
  <Dialog>
    <DialogTrigger asChild>
      <Card
        style={{
          position: "relative",
          overflow: "hidden",
          width: `${CARD_SIZE}px`,
          height: `${CARD_SIZE}px`,
          cursor: "pointer",
        }}
      >
        <CardContent className="p-0 h-full flex flex-col">
          <div
            style={{
              position: "relative",
              height: `${CARD_SIZE - TEXT_HEIGHT}px`,
              overflow: "hidden",
            }}
          >
            <Image
              src={item.image}
              alt={item.item}
              layout="fill"
              objectFit="cover"
            />
            <VegIndicator isVeg={isVeg} />
            <AllergenIndicator allergens={item.allergens} />
          </div>
          <div
            className="w-full text-center bg-white py-2 flex items-center justify-center"
            style={{ height: `${TEXT_HEIGHT}px` }}
          >
            <h3 className="text-lg font-semibold">{item.item}</h3>
          </div>
        </CardContent>
      </Card>
    </DialogTrigger>
    <DialogContent className="w-full h-[80vh] max-h-[600px] p-0 sm:max-w-[100vw] md:max-w-[50vw]">
      <DialogHeader className="p-4 bg-gray-50 shrink-0">
        <DialogTitle className="text-2xl font-bold">{item.item}</DialogTitle>
      </DialogHeader>
      <DialogDescription>
        {item.description && (
          <p className="text-gray-700 mb-4">{item.description}</p>
        )}
      </DialogDescription>
      <div className="flex-grow overflow-y-auto">
        <div
          className="relative w-full"
          style={{ height: `${DIALOG_IMAGE_HEIGHT}px` }}
        >
          <Image
            src={item.image}
            alt={item.item}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-0 right-0 p-2 bg-white bg-opacity-80 rounded-tl-md">
            <Badge variant={isVeg ? "success" : "destructive"}>
              {isVeg ? "Vegetarian" : "Non-Vegetarian"}
            </Badge>
          </div>
        </div>
        <div className="p-4">
  <div className="flex items-center mb-2">
    <h3 className="text-lg font-semibold mr-4">Allergens</h3>
    <img src="/allergens.png" alt="Allergens icon" className="h-6 w-6" />
  </div>
  <div className="grid grid-cols-1 gap-2">
    {item.allergens && item.allergens.length > 0 ? (
      item.allergens.map((allergen) => (
        <Badge
          key={allergen}
          variant="outline"
          className="transition-colors hover:bg-gray-100 w-full text-left px-2 py-1"
        >
          {allergensIndex[allergen] || "Unknown allergen"}
        </Badge>
      ))
    ) : (
      <p className="text-gray-500 italic">No allergens listed</p>
    )}
  </div>
</div>
      </div>
    </DialogContent>
  </Dialog>
);

export const MenuItems = ({ category, filters, items }) => {
  const renderItems = (itemList, isVeg) =>
    itemList.map((item) => (
      <MenuItem key={item.item} item={item} isVeg={isVeg} />
    ));

  const renderNoItemsMessage = (type) => (
    <div className="col-span-full text-center text-gray-500">
      No {type} items available.
    </div>
  );

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filters.vegetarian && items[category]?.Vegetarian?.length > 0
        ? renderItems(items[category].Vegetarian, true)
        : filters.vegetarian && renderNoItemsMessage("vegetarian")}

      {filters.nonVegetarian && items[category]?.NonVegetarian?.length > 0
        ? renderItems(items[category].NonVegetarian, false)
        : filters.nonVegetarian && renderNoItemsMessage("non-vegetarian")}
    </div>
  );
};
