import { create } from "zustand";


// Define a type for the ad settings
type AdSettings = {
  taboola: number;
  google: number;
  jubna: number;
  sulvo: number;
  outbrain: number;
  fetchAdConfig: () => void;
};

export const useAdStore = create<AdSettings>((set) => ({
  taboola: 0,
  google: 0,
  jubna: 0,
  sulvo: 0,
  outbrain: 0,
  fetchAdConfig: () => {
    fetch("/ads-config.json")
      .then((response) => response.json())
      .then(set)
      .catch(() => {});
  },
}));
