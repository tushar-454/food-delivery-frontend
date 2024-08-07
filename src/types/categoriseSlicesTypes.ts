export type CategoriseSlicesState = {
  isLoading: boolean;
  isError: boolean;
  categorise: CategoryItemType[] | null;
};

export type CategoryItemType = {
  _id: string;
  name: string;
  image: string;
  category: string;
};
