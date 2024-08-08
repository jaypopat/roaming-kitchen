"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { allergensIndex } from "../app/menu/allergensIndex";
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
import { useState } from "react";

export const MenuItems = ({ category, filters, items }) => {
  const cardSize = 350;
  const textHeight = 50;

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
    const allergenIcon = "⚠️"; // Generic allergen icon

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="absolute top-2 left-2 z-10 w-8 h-8 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center cursor-pointer hover:bg-amber-500 transition-colors">
              <span className="text-white text-lg">{allergenIcon}</span>
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
          key={item.item}
          style={{
            position: "relative",
            overflow: "hidden",
            width: `${cardSize}px`,
            height: `${cardSize}px`,
            cursor: "pointer",
          }}
        >
          <CardContent className="p-0 h-full flex flex-col">
            <div
              style={{
                position: "relative",
                height: `${cardSize - textHeight}px`,
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
              style={{
                height: `${textHeight}px`,
              }}
            >
              <h3 className="text-lg font-semibold">{item.item}</h3>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-[600px] h-[80vh] max-h-[600px] p-0 md:w-[50vw] md:h-[50vh]">
        <DialogHeader className="p-4 bg-gray-50">
          <DialogTitle className="text-2xl font-bold">{item.item}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col h-[calc(100%-64px)]">
          <div className="relative w-full h-1/2">
            <Image src={item.image} alt={item.item} width={600} height={300} />
            <div className="absolute bottom-0 right-0 p-2 bg-white bg-opacity-80 rounded-tl-md">
              <Badge variant={isVeg ? "success" : "destructive"}>
                {isVeg ? "Vegetarian" : "Non-Vegetarian"}
              </Badge>
            </div>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {item.description && (
              <>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
              </>
            )}
            <h3 className="text-lg font-semibold mb-2">Allergens</h3>
            <div className="flex flex-wrap gap-2">
              {item.allergens && item.allergens.length > 0 ? (
                item.allergens.map((allergen) => (
                  <Badge
                    key={allergen}
                    variant="outline"
                    className="m-1 transition-colors hover:bg-gray-100"
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

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filters.vegetarian && items[category]?.Vegetarian?.length > 0 ? (
        items[category].Vegetarian.map((item) => (
          <MenuItem key={item.item} item={item} isVeg={true} />
        ))
      ) : filters.vegetarian ? (
        <div className="col-span-full text-center text-gray-500">
          No vegetarian items available.
        </div>
      ) : null}

      {filters.nonVegetarian && items[category]?.NonVegetarian?.length > 0 ? (
        items[category].NonVegetarian.map((item) => (
          <MenuItem key={item.item} item={item} isVeg={false} />
        ))
      ) : filters.nonVegetarian ? (
        <div className="col-span-full text-center text-gray-500">
          No non-vegetarian items available.
        </div>
      ) : null}
    </div>
  );
};
