import { create } from "zustand";

export const useAppStore = create((set) => ({
  opacityTrigger: false,
  setOpacity(opacity) {
    set({ opacityTrigger: opacity });
  },

  languageSelect: "fr",
  setLanguage(language) {
    set({ languageSelect: language });
  },
}));
