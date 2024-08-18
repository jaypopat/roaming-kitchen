"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MenuItems } from "@/components/MenuItem";
import items from "./items.json";
import { track } from "@vercel/analytics/react";
import { motion } from "framer-motion";

interface Filters {
  vegetarian: boolean;
  nonVegetarian: boolean;
}

interface TabContainerProps {
  types: string[];
  isMobile: boolean;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

interface TabButtonsProps {
  types: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

interface DietaryFilterProps {
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

interface FilterOption {
  id: "veg" | "both" | "nonveg";
  emoji: string;
  label: string;
  bgColor: string;
}

export default function Component(): JSX.Element {
  const types: string[] = Object.keys(items);
  const [activeTab, setActiveTab] = useState<string>(types[0]);
  const [filters, setFilters] = useState<Filters>({
    vegetarian: true,
    nonVegetarian: true,
  });
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
              <div className="w-full">
                <TabContainer
                  types={types}
                  isMobile={isMobile}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <DietaryFilter setFilters={setFilters} />
                <MenuItems
                  category={activeTab}
                  filters={filters}
                  items={items}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const TabContainer: React.FC<TabContainerProps> = ({
  types,
  isMobile,
  activeTab,
  setActiveTab,
}) => {
  if (isMobile) {
    return (
      <div className="flex overflow-x-auto pb-2 w-full">
        <div className="flex">
          <TabButtons
            types={types}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-2 mb-8 flex-wrap">
      <TabButtons
        types={types}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

const TabButtons: React.FC<TabButtonsProps> = ({
  types,
  activeTab,
  setActiveTab,
}) => {
  return types.map((type) => (
    <Button
      key={type}
      data-tab={type}
      variant={activeTab === type ? "default" : "outline"}
      className="mr-2 whitespace-nowrap flex-shrink-0"
      onClick={() => {
        setActiveTab(type);
        track("Menu Tab Selected", { tabName: type });
      }}
    >
      {type}
    </Button>
  ));
};

const DietaryFilter: React.FC<DietaryFilterProps> = ({ setFilters }) => {
  const [activeFilter, setActiveFilter] = useState<FilterOption["id"]>("both");

  const filterOptions: FilterOption[] = [
    { id: "veg", emoji: "🥗", label: "Veg", bgColor: "bg-green-500" },
    { id: "both", emoji: "🍽️", label: "Both", bgColor: "bg-yellow-500" },
    { id: "nonveg", emoji: "🍖", label: "Non-Veg", bgColor: "bg-red-500" },
  ];

  const handleFilterChange = (filter: FilterOption["id"]) => {
    setActiveFilter(filter);
    setFilters({
      vegetarian: filter === "veg" || filter === "both",
      nonVegetarian: filter === "nonveg" || filter === "both",
    });
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="bg-gray-200 p-1 rounded-full flex">
        {filterOptions.map((option) => (
          <motion.button
            key={option.id}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeFilter === option.id
                ? `${option.bgColor} text-white`
                : "text-gray-700 hover:text-gray-900"
            }`}
            onClick={() => handleFilterChange(option.id)}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-1">
              <span role="img" aria-label={option.label}>
                {option.emoji}
              </span>
              {option.label}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
