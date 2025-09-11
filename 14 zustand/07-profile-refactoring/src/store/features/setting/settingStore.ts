import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type SettingStore = UserPreferences & PreferencesActionType;

export const useSettingStore = create<SettingStore>()(
  persist(
    immer((set) => ({
      language: "ko",
      fontSize: "medium",
      notifications: {
        email: false,
        push: false,
        desktop: false,
      },
      colorScheme: "system",
      updateLanguage: (language: UserPreferences["language"]) =>
        set((state) => {
          state.language = language;
        }),
      updateFontSize: (fontSize: UserPreferences["fontSize"]) =>
        set((state) => {
          state.fontSize = fontSize;
        }),
      updateNotifications: (
        key: keyof UserPreferences["notifications"],
        value: boolean
      ) =>
        set((state) => {
          state.notifications[key] = value;
        }),
      updateColorScheme: (scheme: UserPreferences["colorScheme"]) =>
        set((state) => {
          state.colorScheme = scheme;
        }),
    })),
    { name: "setting-storage" }
  )
);
