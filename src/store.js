import { create } from "zustand";

export const useAppStore = create((set) => ({
  opacityTrigger: false,
  updateOpacity(opacity) {
    set({ opacityTrigger: opacity });
  },
}));
