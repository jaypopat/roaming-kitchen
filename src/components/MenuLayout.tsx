"use client";
import { Button } from "@/components/ui/button";
import { MenuItems } from "@/components/MenuItem";
import DietaryFilter from "@/components/DietaryFilter";
import Search from "@/components/Search";
import { useEffect, useState } from "react";
import { sendGAEvent } from "@next/third-parties/google";
import { Filters, Menu } from "@/app/menu/types";

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

interface MenuLayoutProps {
  types: string[];
  items: Menu;
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
        sendGAEvent("event", "menuCategoryClicked", {value: type});
      }}
    >
      {type}
    </Button>
  ));
};

export function MenuLayout({ types, items }: MenuLayoutProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<string>(types[0]);
  const [filters, setFilters] = useState<Filters>({
    vegetarian: true,
    nonVegetarian: true,
  });
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<Menu | null>(null);

  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSearchResults = (results: Menu) => {
    setSearchResults(results);
    if (Object.keys(results).length > 0) {
      setActiveTab("Search Results");
    } else if (activeTab === "Search Results") {
      setActiveTab(types[0]);
    }
  };

  const displayItems =
    searchResults && activeTab === "Search Results" ? searchResults : items;

  const displayTypes =
    searchResults && Object.keys(searchResults).length > 0
      ? ["Search Results", ...types]
      : types;

  return (
    <div className="w-full">
      <Search items={items} onSearchResults={handleSearchResults} />
      <TabContainer
        types={displayTypes}
        isMobile={isMobile}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <DietaryFilter setFilters={setFilters} />
      {activeTab === "Search Results" ? (
        Object.entries(displayItems).map(([category, categoryItems]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mt-6 mb-4">{category}</h3>
            <MenuItems
              category={category}
              filters={filters}
              items={{ [category]: categoryItems }}
            />
          </div>
        ))
      ) : (
        <MenuItems
          category={activeTab}
          filters={filters}
          items={displayItems}
        />
      )}
    </div>
  );
}

export default MenuLayout;
