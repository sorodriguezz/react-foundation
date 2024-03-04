import { create } from "zustand";

interface AuthState {
  status: "authenticated" | "unauthenticated" | "checking";
  token?: string;
  user?: {
    name: string;
    email: string;
  };
  login: (email: string, password: string) => void;
  logout: () => void;
}

export const userAuthStore = create<AuthState>()((set) => ({
  status: "checking",
  token: undefined,
  user: undefined,
  login: (email: string, password: string) => {
    set({
      status: "authenticated",
      token: "ABC123",
      user: {
        name: "Juan Perez",
        email: email,
      },
    });
  },
  logout: () => {
    set({ status: "unauthenticated", token: undefined, user: undefined });
  },
}));
