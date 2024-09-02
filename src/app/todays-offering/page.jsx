"use client";
import React, { useState } from "react";
import DietaryFilter from "@/components/DietaryFilter";
import { MenuItem } from "@/components/MenuItem";
import offeringsData from "./offerings.json";

const CARD_SIZE = 400;

export default function TodaysOfferings() {
  const [filters, setFilters] = useState({
    vegetarian: true,
    nonVegetarian: true,
  });

  const filteredOfferings = offeringsData.offerings.filter((offering) => {
    const isVeg =
      filters.vegetarian && offering["dietary-type"] === "vegetarian";
    const isNonVeg =
      filters.nonVegetarian && offering["dietary-type"] === "non-vegetarian";
    return isVeg || isNonVeg;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Today's Offerings
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Discover our delicious menu for today, carefully curated for your
            enjoyment.
          </p>
        </header>

        <DietaryFilter setFilters={setFilters} />

        {filteredOfferings.length > 0 ? (
          <div
            className="grid gap-8 mt-10"
            style={{
              gridTemplateColumns: `repeat(auto-fill, minmax(${CARD_SIZE}px, 1fr))`,
            }}
          >
            {filteredOfferings.map((item) => (
              <div
                key={item.name}
                className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <MenuItem
                  item={{
                    item: item.name,
                    description: item.description,
                    allergens: item.allergens,
                    image: item.image,
                  }}
                  isVeg={item["dietary-type"] === "vegetarian"}
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-white bg-opacity-80 text-center">
                  <span className="text-xl font-semibold text-orange-600">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-8">
            No offerings available based on your current filters.
          </p>
        )}
      </div>
    </div>
  );
}
