export type User = {
  _id: string;
  role: string;
  name: string;
  email: string;
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
