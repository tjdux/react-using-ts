import { useLayoutEffect, useMemo, useState } from "react";
import { SettingContext, SettingContextAction } from "./SettingContext";

const defaultValue: UserPreferences = {
  language: "ko",
  fontSize: "medium",
  notifications: {
    email: false,
    push: false,
    desktop: false,
  },
  colorSchema: "system",
};

export default function SettingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [preferences, setPreferences] = useState<UserPreferences>(() => {
    const save = localStorage.getItem("preferences");
    return save ? JSON.parse(save) : defaultValue;
  });
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

  const updateColorSchema = (colorSchema: UserPreferences["colorSchema"]) => {
    setPreferences((preferences) => ({
      ...preferences,
      colorSchema,
    }));
  };

  const memoization = useMemo(
    () => ({
      updateLanguage,
      updateFontSize,
      updateNotifications,
      updateColorSchema,
    }),
    []
  );

  // useLayoutEffect: 화면이 그려지기 전에 useEffect 실행
  useLayoutEffect(() => {
    localStorage.setItem("preferences", JSON.stringify(preferences));

    const root = document.documentElement;

    // 폰트 사이즈 변경
    root.style.fontSize = {
      small: "14px",
      medium: "16px",
      large: "18px",
    }[preferences.fontSize];

    // 테마 설정
    root.classList.remove("light", "dark");

    if (preferences.colorSchema === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(isDark ? "dark" : "light");
    } else {
      root.classList.add(preferences.colorSchema);
    }
  }, [preferences]);

  return (
    <SettingContextAction value={memoization}>
      <SettingContext value={{ preferences }}>{children}</SettingContext>
    </SettingContextAction>
  );
}
