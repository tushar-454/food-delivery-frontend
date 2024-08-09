export type createFoodItemType = {
  name: string;
  description: string;
  category: string;
  price: number | '';
  image: string;
};

export type initialStateType = {
  isLoading: boolean;
  isError: boolean;
  food: createFoodItemType | null;
};
