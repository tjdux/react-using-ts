interface UserPreferences {
  language: "ko" | "en" | "jp";
  fontSize: "small" | "medium" | "large";
  notifications: {
    email: boolean;
    push: boolean;
    desktop: boolean;
  };
  colorSchema: "system" | "light" | "dark";
}

interface PreferencesContextType {
  preferences: UserPreferences;
}

interface PreferencesContextActionType {
  updateLanguage: (langauge: UserPreferences["langauge"]) => void;
  updateFontSize: (fontSize: UserPreferences["fontSize"]) => void;
  updateNotifications: (
    key: keyof UserPreferences["notifications"],
    value: boolean
  ) => void;
  updateColorSchema: (colorSchema: UserPreferences["colorSchema"]) => void;
}
