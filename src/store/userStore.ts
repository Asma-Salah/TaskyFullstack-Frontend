import { create } from "zustand";
import type { StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
}
interface userStore {
  user: User | null;
  setUser: (user: User) => void;
  logoutUser: () => void;
}
const userStore: StateCreator<userStore> = (set) => {
  return {
    user: null,
    setUser: (user: User) => {
      set(function () {
        return { user };
      });
    },
    logoutUser: () => {
      set(function () {
        return { user: null };
      });
    },
  };
};
const useUser = create(persist(userStore, { name: "Tasky-User" }));

export default useUser;
