export type createFoodItemType = {
  name: string;
  description: string;
  category: string;
  price: number | '';
  image: string;
};

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

export type initialStateType = {
  isLoading: boolean;
  isError: boolean;
  food: createFoodItemType | null | FoodsDisplayTypes[];
};

export type FoodItemWithRating = createFoodItemType & { rating: number };

export interface FoodItemProps {
  foodItem: FoodItemWithRating;
}
