"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MenuItems } from "@/components/MenuItem";
import items from "./items.json";

export default function Component() {
  const types = Object.keys(items);
  const [activeTab, setActiveTab] = useState(types[0]);
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
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Menu
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Explore our delicious selection of street food favorites.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="flex gap-4">
                    {types.map((type) => {
                      return (
                        <TabsTrigger key={type} value={type}>
                          {type}
                        </TabsTrigger>
                      );
                    })}
                  </TabsList>
                  <div className="flex items-center gap-4 mb-6">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="h-8 gap-1 text-sm">
                          <FilterIcon className="h-3.5 w-3.5" />
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
                  </div>
                  {types.map((type) => {
                    return (
                      <TabsContent key={type} value={type}>
                        <MenuItems
                          category={type}
                          filters={filters}
                          items={items}
                        />
                      </TabsContent>
                    );
                  })}
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
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

function SandwichIcon(props) {
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
      <path d="M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3" />
      <path d="M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83" />
      <path d="m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z" />
      <path d="M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z" />
    </svg>
  );
}

function TruckIcon(props) {
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
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}
