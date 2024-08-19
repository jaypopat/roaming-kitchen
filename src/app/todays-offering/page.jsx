"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DietaryFilter from "@/components/DietaryFilter";
import { MenuItem } from "@/components/MenuItem";
import { offerings } from "./offerings.json";

export default function TodaysOfferings() {
  const [filters, setFilters] = useState({
    vegetarian: true,
    nonVegetarian: true,
  });

  const filteredOfferings = offerings.filter(
    (offering) =>
      (filters.vegetarian && offering["dietary-type"] === "vegetarian") ||
      (filters.nonVegetarian && offering["dietary-type"] === "non-vegetarian"),
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Today's Offerings
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Discover our delicious menu for today, carefully curated for your
            enjoyment.
          </p>
        </motion.div>

        <DietaryFilter setFilters={setFilters} />

        <AnimatePresence>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {filteredOfferings.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
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
                <div className="p-4 bg-gray-100 text-center">
                  <span className="text-2xl font-semibold text-orange-600">
                    {item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredOfferings.length === 0 && (
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-2xl text-gray-700">
              No offerings available for the selected dietary preference.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Please try adjusting your dietary filter.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
