export type User = {
  _id: string;
  role: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    country: string;
    zip: string;
    place: string;
    state: string;
  };
};

export type initialStateType = {
  isLoading: boolean;
  isError: boolean;
  user: User | null;
};

export interface LoginResponse {
  status: number;
  user: User;
}
export interface SignupResponse {
  status: number;
}

export type UpdateProfileData = {
  name: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  place: string;
};

export type UpdateProfileInitialState = {
  fName: string;
  lName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  place: string;
  phone: string;
};
