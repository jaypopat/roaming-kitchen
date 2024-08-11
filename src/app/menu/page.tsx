"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MenuItems } from "@/components/MenuItem";
import items from "./items.json";

interface Filters {
  vegetarian: boolean;
  nonVegetarian: boolean;
}

interface FilterDropdownProps {
  filters: Filters;
  handleFilterChange: (filter: keyof Filters, checked: boolean) => void;
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

  const handleFilterChange = (filter: keyof Filters, checked: boolean): void => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: checked,
    }));
  };

  const MobileView = (): JSX.Element => (
    <div className="flex items-center gap-2 mb-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="h-12 px-4 text-sm flex items-center gap-3"
          >
            <DropdownIcon className="h-5 w-5" />
            {activeTab}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {types.map((type) => (
            <DropdownMenuItem key={type} onSelect={() => setActiveTab(type)}>
              {type}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <FilterDropdown
        filters={filters}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );

  const DesktopView = (): JSX.Element => (
    <div className="flex flex-col items-center gap-4">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex gap-4">
          {types.map((type) => (
            <TabsTrigger key={type} value={type}>
              {type}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <FilterDropdown
        filters={filters}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );

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
              {isMobile ? <MobileView /> : <DesktopView />}
              <div className="w-full">
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

function FilterDropdown({ filters, handleFilterChange }: FilterDropdownProps): JSX.Element {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="h-12 px-4 text-sm flex items-center gap-3"
        >
          <FilterIcon className="h-5 w-5" />
          <span>Filter</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Filter by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={filters.vegetarian}
          onCheckedChange={(checked) =>
            handleFilterChange("vegetarian", checked)
          }
        >
          Vegetarian
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={filters.nonVegetarian}
          onCheckedChange={(checked) =>
            handleFilterChange("nonVegetarian", checked)
          }
        >
          Non-Vegetarian
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function FilterIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function DropdownIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}