import { useSettingStore } from "../store/features/setting/settingStore";
import { SupportedLanguage, translations } from "./i18n";

export default function useTranslation() {
  const language = useSettingStore((state) => state.language);
  const lang = language as SupportedLanguage;
  const t = translations[lang];
  return { t, lang };
}
