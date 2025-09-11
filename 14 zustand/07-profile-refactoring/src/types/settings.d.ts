interface UserPreferences {
  language: "ko" | "en" | "ja";
  fontSize: "small" | "medium" | "large";
  notifications: {
    email: boolean;
    push: boolean;
    desktop: boolean;
  };
  colorScheme: "system" | "light" | "dark";
}

interface PreferencesActionType {
  updateLanguage: (language: AUserPreferences["language"]) => void;
  updateFontSize: (size: UserPreferences["fontSize"]) => void;
  updateNotifications: (
    key: keyof UserPreferences["notifications"],
    value: boolean
  ) => void;
  updateColorScheme: (shceme: UserPreferences["colorScheme"]) => void;
}
