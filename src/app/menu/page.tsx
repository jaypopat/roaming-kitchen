"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MenuItems } from "@/components/MenuItem";
import items from "./items.json";
import { track } from "@vercel/analytics/react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

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

  const x = useMotionValue(0);
  const xInput = [-100, 0, 100]; // Adjusted for three states
  const background = useTransform(x, xInput, ["#22c55e", "#fbbf24", "#ef4444"]);
  const dragX = useSpring(x, { stiffness: 1000, damping: 50 });

  const vegetarianOpacity = useTransform(x, xInput, [1, 0.5, 0]);
  const bothOpacity = useTransform(x, xInput, [0, 1, 0]);
  const nonVegetarianOpacity = useTransform(x, xInput, [0, 0.5, 1]);

  const updateFilters = () => {
    const currentX = x.get();
    if (currentX <= -33) {
      // Left position for Vegetarian
      setFilters({
        vegetarian: true,
        nonVegetarian: false,
      });
    } else if (currentX >= 33) {
      // Right position for Non-Vegetarian
      setFilters({
        vegetarian: false,
        nonVegetarian: true,
      });
    } else {
      // Center position for Both
      setFilters({
        vegetarian: true,
        nonVegetarian: true,
      });
    }
  };

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
                <div className="flex flex-col items-center justify-center mb-8">
                  <motion.div
                    className="w-64 h-16 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer relative overflow-hidden shadow-lg"
                    style={{ background }}
                  >
                    <motion.div
                      className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg absolute"
                      drag="x"
                      dragConstraints={{ left: -100, right: 100 }}
                      style={{ x }}
                      onDragEnd={updateFilters}
                    >
                      <span role="img" aria-label="food" className="text-2xl">
                        {filters.vegetarian
                          ? "🥗" // Vegetarian
                          : filters.nonVegetarian
                            ? "🍖" // Non-Vegetarian
                            : "🍽️"}{" "}
                      </span>
                    </motion.div>
                    <motion.div
                      className="absolute left-4 text-2xl"
                      style={{ opacity: vegetarianOpacity }}
                    >
                      🥗
                    </motion.div>
                    <motion.div
                      className="absolute left-1/2 text-2xl"
                      style={{ opacity: bothOpacity }}
                    >
                      🍽️
                    </motion.div>
                    <motion.div
                      className="absolute right-4 text-2xl"
                      style={{ opacity: nonVegetarianOpacity }}
                    >
                      🍖
                    </motion.div>
                  </motion.div>
                  <p className="mt-4 text-sm text-gray-600">
                    Slide to choose between Vegetarian, Both, and Non-Vegetarian
                    options
                  </p>
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

// ... (TabContainer and TabButtons components remain the same)

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
