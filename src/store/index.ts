import { create } from "zustand";
import { createUiSlice, type UiSlice } from "./slices/ui-slice";

type Store = UiSlice;

export const useStore = create<Store>()((...args) => ({
	...createUiSlice(...args),
}));
