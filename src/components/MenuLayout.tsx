"use client";
import { Button } from "@/components/ui/button";
import { MenuItems } from "@/components/MenuItem";
import DietaryFilter from "@/components/DietaryFilter";
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

  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full">
      <TabContainer
        types={types}
        isMobile={isMobile}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <DietaryFilter setFilters={setFilters} />
      <MenuItems category={activeTab} filters={filters} items={items} />
    </div>
  );
}

export default MenuLayout;
