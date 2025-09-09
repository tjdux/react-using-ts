import { useEffect, useMemo, useState } from "react";
import { SettingContext, SettingContextAction } from "./SettingContext";

const defaultValue: UserPreferences = {
  language: "ko",
  fontSize: "medium",
  notifications: {
    email: false,
    push: false,
    desktop: false,
  },
  colorScheme: "system",
};

export default function SettingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [preferences, setPreferences] = useState<UserPreferences>(defaultValue);
  const updateLanguage = (language: UserPreferences["language"]) => {
    setPreferences((preferences) => ({ ...preferences, language }));
  };
  const updateFontSize = (fontSize: UserPreferences["fontSize"]) => {
    setPreferences((preferences) => ({ ...preferences, fontSize }));
  };
  const updateNotifications = (
    key: keyof UserPreferences["notifications"],
    value: boolean
  ) => {
    setPreferences((preferences) => ({
      ...preferences,
      notifications: { ...preferences.notifications, [key]: value },
    }));
  };
  const updateColorScheme = (colorScheme: UserPreferences["colorScheme"]) => {
    setPreferences((preferences) => ({ ...preferences, colorScheme }));
  };
  const memoization = useMemo(
    () => ({
      updateLanguage,
      updateFontSize,
      updateNotifications,
      updateColorScheme,
    }),
    []
  );

  useEffect(() => {
    document.documentElement.style.fontSize = {
      small: "14px",
      medium: "16px",
      large: "18px",
    }[preferences.fontSize];
  }, [preferences]);

  return (
    <>
      <SettingContextAction value={memoization}>
        <SettingContext value={{ preferences }}>{children}</SettingContext>
      </SettingContextAction>
    </>
  );
}
