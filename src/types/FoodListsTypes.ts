export interface FoodListProps {
  foodList: FoodListsTypes;
}

export type FoodListsTypes = {
  name: string;
  category: string;
  price: number;
  image: string;
};
