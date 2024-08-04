export interface FoodItemProps {
  foodItem: FoodsDisplayTypes;
}

export type FoodsDisplayTypes = {
  image: string;
  name: string;
  desc: string;
  price: number;
  rating: number;
};
