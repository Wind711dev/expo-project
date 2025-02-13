import { create } from 'zustand';

interface ICountStore {
  count: number;
  increaseByOne: () => void;
  reloadCount: () => void;
}

export const useCountStore = create<ICountStore>(set => ({
  count: 0,
  increaseByOne: () =>
    set((state: ICountStore) => ({ count: state.count + 1 })),
  reloadCount: () => set({ count: 0 })
}));
