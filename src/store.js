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

  page: "projects",
  setPage(page) {
    set({ page: page });
  },

  isMessageShow: true,
  setIsMessageShow(isShow) {
    set({ isMessageShow: isShow });
  },
}));
