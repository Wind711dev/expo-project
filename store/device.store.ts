import { create } from 'zustand';

interface IDeviceStore {
  token: string | null;
  setToken: (value: string) => void;
  removeToken: () => void;
}

export const useDeviceStore = create<IDeviceStore>(set => ({
  token: null,
  setToken: (value: string) => set(() => ({ token: value })),
  removeToken: () => set({ token: null })
}));
