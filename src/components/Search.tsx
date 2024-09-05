import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import { Input } from "@/components/ui/input";
import { Menu, Item, Category } from "@/app/menu/types";
import { SearchIcon } from "lucide-react";

interface SearchProps {
  items: Menu;
  onSearchResults: (results: Menu) => void;
}

const Search: React.FC<SearchProps> = ({ items, onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [fuse, setFuse] = useState<Fuse<{
    item: Item;
    category: string;
    type: "Vegetarian" | "NonVegetarian";
  }> | null>(null);

  useEffect(() => {
    const allItems = Object.entries(items).flatMap(
      ([category, categoryItems]) =>
        Object.entries(categoryItems).flatMap(([type, typeItems]) =>
          typeItems.map((item: Item) => ({
            item,
            category,
            type: type as "Vegetarian" | "NonVegetarian",
          }))
        )
    );
    const fuseInstance = new Fuse(allItems, {
      keys: ["item.item", "item.description"],
      threshold: 0.3,
    });
    setFuse(fuseInstance);
  }, [items]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (fuse && term) {
      const searchResults = fuse.search(term);
      const groupedResults: Menu = searchResults.reduce((acc, result) => {
        const { category, type, item } = result.item;
        if (!acc[category]) {
          acc[category] = { Vegetarian: [], NonVegetarian: [] } as Category;
        }
        if (type === "Vegetarian" || type === "NonVegetarian") {
          (acc[category][type] as Item[]) =
            (acc[category][type] as Item[]) || [];
          (acc[category][type] as Item[]).push(item);
        }
        return acc;
      }, {} as Menu);
      onSearchResults(groupedResults);
    } else {
      onSearchResults({});
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search menu items..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
      </div>
    </div>
  );
};

export default Search;
