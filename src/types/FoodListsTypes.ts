export interface FoodListProps {
  foodList: FoodListsTypes;
}

export type FoodListsTypes = {
  _id: string;
  name: string;
  category: string;
  price: number;
  image: string;
};
