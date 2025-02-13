import { create } from 'zustand';

interface ILoadingStore {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

export const useLoadingStore = create<ILoadingStore>(set => ({
  isLoading: false,
  setIsLoading: value => set(() => ({ isLoading: value }))
}));
