import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const getInitialState = () => {
  const save = localStorage.getItem("preferences");
  return (
    save
      ? JSON.parse(save)
      : {
          language: "ko",
          fontSize: "medium",
          notifications: {
            email: false,
            push: false,
            desktop: false,
          },
          colorScheme: "system",
        }
  ) as UserPreferences;
};

const settingSlice = createSlice({
  name: "settingSlice",
  initialState: getInitialState(),
  reducers: {
    updateLanguage: (
      state,
      action: PayloadAction<UserPreferences["language"]>
    ) => {
      state.language = action.payload;
    },
    updateFontSize: (
      state,
      action: PayloadAction<UserPreferences["fontSize"]>
    ) => {
      state.fontSize = action.payload;
    },
    updateNotifications: (
      state,
      action: PayloadAction<{
        key: keyof UserPreferences["notifications"];
        value: boolean;
      }>
    ) => {
      state.notifications[action.payload.key] = action.payload.value;
    },
    updateColorScheme: (
      state,
      action: PayloadAction<UserPreferences["colorScheme"]>
    ) => {
      state.colorScheme = action.payload;
    },
  },
});

export const {
  updateColorScheme,
  updateFontSize,
  updateLanguage,
  updateNotifications,
} = settingSlice.actions;
export default settingSlice.reducer;
