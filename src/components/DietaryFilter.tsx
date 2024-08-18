import { motion } from "framer-motion";
import { useState } from "react";

interface DietaryFilterProps {
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}
interface FilterOption {
  id: "veg" | "both" | "nonveg";
  emoji: string;
  label: string;
  bgColor: string;
}
interface Filters {
  vegetarian: boolean;
  nonVegetarian: boolean;
}

export default function DietaryFilter({ setFilters }: DietaryFilterProps) {
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
}
