import { Bell } from "lucide-react";
import { useSetting, useSettingAction } from "../context/setting/useSetting";
import { twMerge } from "tailwind-merge";
import useTranslation from "../lib/useTranslation";

export default function AlarmSetting() {
  const { preferences } = useSetting();
  const { updateNotifications } = useSettingAction();
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <Bell className="text-blue-500" size={24} />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t.notifications.label}
          </h2>
        </div>
        <div className="space-y-4">
          {(
            Object.keys(
              preferences.notifications
            ) as (keyof UserPreferences["notifications"])[]
          ).map((key) => (
            <label className="flex items-center justify-between" key={key}>
              <span className="text-gray-700 dark:text-gray-300 capitalize">
                {key === "email"
                  ? t.notifications.email
                  : key === "push"
                  ? t.notifications.push
                  : t.notifications.desktop}
              </span>
              <button
                className={twMerge(
                  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                  preferences.notifications[key]
                    ? "bg-blue-500"
                    : "bg-gray-300 dark:bg-gray-600"
                )}
                onClick={() =>
                  updateNotifications(key, !preferences.notifications[key])
                }
              >
                <span
                  className={twMerge(
                    "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                    preferences.notifications[key]
                      ? "translate-x-6"
                      : "translate-x-1"
                  )}
                />
              </button>
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
