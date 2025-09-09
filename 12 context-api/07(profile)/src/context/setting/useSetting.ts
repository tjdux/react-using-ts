import { useContext } from "react";
import { SettingContext, SettingContextAction } from "./SettingContext";

export function useSetting() {
  const context = useContext(SettingContext);
  if (!context) {
    throw new Error("useSeeting은 SettingProvider 내부에서만 사용 가능");
  }
  return context;
}

export function useSettingAction() {
  const context = useContext(SettingContextAction);
  if (!context) {
    throw new Error("useSeetingAction은 SettingProvider 내부에서만 사용 가능");
  }
  return context;
}
