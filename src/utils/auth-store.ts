import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../interface/user.interface";

interface AuthState {
  currentUser: User | null;
  setCurrentUser: (newUser: User) => void;
  removeCurrentUser: () => void;
  updateCurrentUser: (updatedUser: User) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      currentUser: null,
      setCurrentUser: (newUser: User) => set({ currentUser: newUser }),
      removeCurrentUser: () => set({ currentUser: null }),
      updateCurrentUser: (updatedUser: User) =>
        set({ currentUser: updatedUser }),
    }),
    {
      name: "auth-storage", // LocalStorage key name
    }
  )
);

export default useAuthStore;
