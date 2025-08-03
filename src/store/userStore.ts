import { create } from "zustand";
import type { StateCreator } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  avatar: string;
}
interface userStore {
  user: User;
  setUser: (user: User) => void;
  logoutUser: () => void;
}
const emptyUserStore = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  avatar: "",
};
const userStore: StateCreator<userStore> = (set) => {
  return {
    user: emptyUserStore,
    setUser: (user: User) => {
      set(function () {
        return { user };
      });
    },
    logoutUser: () => {
      set(function () {
        return { user: emptyUserStore };
      });
    },
  };
};
const useUser = create(persist(userStore, { name: "Tasky-User" }));

export default useUser;
