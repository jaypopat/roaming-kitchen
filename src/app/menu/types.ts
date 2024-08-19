interface Menu {
  [key: string]: Category;
}
interface Category {
  Vegetarian?: Item[];
  NonVegetarian?: Item[];
}
interface Item {
  item: string;
  image: string;
  allergens: number[];
  description: string;
}
interface Filters {
  vegetarian: boolean;
  nonVegetarian: boolean;
}
export { type Menu, type Category, type Item, type Filters };
