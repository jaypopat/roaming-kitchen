"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

export const MenuItems = ({ category, filters, items }) => {
  const cardSize = 300;
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
    const [showTooltip, setShowTooltip] = useState(false);

    if (!allergens || allergens.length === 0) return null;

    return (
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: 10,
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            backgroundColor: "#fbbf24",
            border: "2px solid white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          !
        </div>
        {showTooltip && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "0",
              backgroundColor: "white",
              border: "1px solid #ccc",
              borderRadius: "4px",
              padding: "8px",
              zIndex: 20,
              minWidth: "150px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <strong>Allergens:</strong>
            <ul style={{ margin: "4px 0 0 0", paddingLeft: "20px" }}>
              {allergens.map((allergen, index) => (
                <li key={index}>{allergen}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

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
