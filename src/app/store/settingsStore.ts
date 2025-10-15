"use client";
import { create } from "zustand";

interface Settings {
  entryFee: number;
  chipsValue: number;
  setEntryFee: (value: number) => void;
  setChipsValue: (value: number) => void;
  reset: () => void;
}

export const useSettingsStore = create<Settings>((set) => ({
  entryFee: 10,
  chipsValue: 20,

  setEntryFee: (value) => {
    set({ entryFee: value });
    localStorage.setItem(
      "settings",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("settings") || "{}"),
        entryFee: value,
      })
    );
  },

  setChipsValue: (value) => {
    set({ chipsValue: value });
    localStorage.setItem(
      "settings",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("settings") || "{}"),
        chipsValue: value,
      })
    );
  },
  reset: () => {
    set({ entryFee: 10, chipsValue: 20 });
    localStorage.clear();
  },
}));

// Load settings from localStorage if available (only in browser environment)
if (typeof window !== "undefined") {
  const saved = localStorage.getItem("settings");
  if (saved) {
    const { entryFee, chipsValue } = JSON.parse(saved);
    useSettingsStore.setState({ entryFee, chipsValue });
  }
}
