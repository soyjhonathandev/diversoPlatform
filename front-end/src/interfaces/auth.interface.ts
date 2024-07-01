export interface User {
  id: number;
  email: string;
  username: string;
  role: string;
  is_deleted: boolean;
}

export interface AuthContextData {
  user: User | null;
  login: (credentials: UserLogin) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  error: Error | null;
  update: () => Promise<void>;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface RegisterUserInput {
  username: string;
  email: string;
  password: string;
}