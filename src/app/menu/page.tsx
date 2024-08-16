"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MenuItems } from "@/components/MenuItem";
import items from "./items.json";
import { track } from "@vercel/analytics/react";

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

export default function Component(): JSX.Element {
  const types: string[] = Object.keys(items);
  const [activeTab, setActiveTab] = useState<string>(types[0]);
  const [filters, setFilters] = useState<Filters>({
    vegetarian: true,
    nonVegetarian: false,
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

  const toggleFilter = (filter: keyof Filters): void => {
    setFilters((prevFilters) => ({
      vegetarian: filter === "vegetarian",
      nonVegetarian: filter === "nonVegetarian",
    }));
  };

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen">
      <header className="h-14"></header>
      <main className="overflow-y-auto">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center gap-8">
              <div className="space-y-4">
                <h2
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: "bold",
                    lineHeight: "1.1",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Our Menu
                </h2>
                <p
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.25rem)",
                    maxWidth: "600px",
                    color: "var(--muted-foreground)",
                  }}
                >
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
                <div className="flex justify-center gap-4 mb-8">
                  <Button
                    variant={filters.vegetarian ? "default" : "outline"}
                    onClick={() => toggleFilter("vegetarian")}
                  >
                    Vegetarian
                  </Button>
                  <Button
                    variant={filters.nonVegetarian ? "default" : "outline"}
                    onClick={() => toggleFilter("nonVegetarian")}
                  >
                    Non-Vegetarian
                  </Button>
                </div>
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

const TabContainer = ({
  types,
  isMobile,
  activeTab,
  setActiveTab,
}: TabContainerProps) => {
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

const TabButtons = ({ types, activeTab, setActiveTab }: TabButtonsProps) => {
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
