export interface FoodItemProps {
  foodItem: FoodsDisplayTypes;
}

export type FoodsDisplayTypes = {
  _id: string;
  image: string;
  name: string;
  category: string;
  description: string;
  price: number;
  rating: number;
  isAvailable: boolean;
  dicount: number;
};
