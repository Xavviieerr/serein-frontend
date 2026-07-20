import type { StateCreator } from "zustand";

export interface UiSlice {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
}

export const createUiSlice: StateCreator<UiSlice> = (set) => ({
	isDarkMode: false,

	toggleDarkMode: () =>
		set((state) => ({
			isDarkMode: !state.isDarkMode,
		})),
});
