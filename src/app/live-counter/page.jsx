"use client";

import React, { useState } from "react";
import { MenuItems } from "@/components/MenuItem";

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
import items from "../menu/items.json";

export default function LiveEventFood() {
  const [filters, setFilters] = useState({
    vegetarian: true,
    nonVegetarian: true,
  });

  const handleFilterChange = (filter, checked) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: checked,
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
                  Live Counter Food
                </h2>
                <p
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.25rem)",
                    maxWidth: "600px",
                    color: "var(--muted-foreground)",
                  }}
                >
                  Explore our special selection of live event food items.
                </p>
              </div>
              <FilterDropdown
                filters={filters}
                handleFilterChange={handleFilterChange}
              />
              <div className="w-full">
                <MenuItems
                  category="Live Counters"
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

function FilterDropdown({ filters, handleFilterChange }) {
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

function FilterIcon(props) {
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
