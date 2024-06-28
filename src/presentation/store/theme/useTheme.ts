import { create } from "zustand";

interface ThemeState {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
    isDarkMode: localStorage.getItem("isDarkMode") === "true",
    toggleTheme: () =>
        set((state) => {
            const newMode = !state.isDarkMode;
            localStorage.setItem("isDarkMode", JSON.stringify(newMode));
            return { isDarkMode: newMode };
        }),
}));

export default useThemeStore;
