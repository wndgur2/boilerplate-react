import { create } from 'zustand';

import type { User } from '@/entities/user';

type UserState = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
  updateUser: (patch: Partial<Omit<User, 'id' | 'createdAt'>>) => void;
};

export const useUserStore = create<UserState>(set => ({
  user: null,
  setUser: user => set({ user }),
  clearUser: () => set({ user: null }),
  updateUser: patch =>
    set(state => (state.user ? { user: { ...state.user, ...patch } } : state)),
}));
