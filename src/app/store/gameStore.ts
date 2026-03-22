import { create } from "zustand";
import { persist } from "zustand/middleware";
import PlayerInterface from "@/app/lib/PlayerInterface";

interface GameState {
  players: PlayerInterface[];
  entryFee: number;
  chipsValue: number;
  // Akcje
  addPlayer: (name: string) => void;
  updateBet: (playerName: string, delta: number) => void;
  setEntryFee: (value: number) => void;
  setChipsValue: (value: number) => void;
  updateChips: (playerName: string, chips: number) => void;
  reset: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      players: [],
      entryFee: 10,
      chipsValue: 20,

      addPlayer: (name) => {
        set((state) => ({
          players: [...state.players, { name, bets: 1, chips: 0, money: 0 }],
        }));
      },
      updateChips: (playerName, chips) => {
        set((state) => {
          const updatedPlayers = state.players.map((p) =>
            p.name === playerName ? { ...p, chips: chips } : p,
          );
          return { players: updatedPlayers };
        });
      },
      updateBet: (playerName, delta) => {
        set((state) => {
          const updatedPlayers = state.players.map((p) =>
            p.name === playerName ? { ...p, bets: p.bets + delta } : p,
          );
          const filteredPlayers = updatedPlayers.filter((p) => p.bets > 0);

          return { players: filteredPlayers };
        });
      },
      updateMoney: (playerName: string, amount: number) => {
        set((state) => {
          const updatedPlayers = state.players.map((p) =>
            p.name === playerName ? { ...p, money: p.money + amount } : p,
          );
          return { players: updatedPlayers };
        });
      },
      setEntryFee: (value) => set({ entryFee: value }),
      setChipsValue: (value) => set({ chipsValue: value }),

      reset: () => {
        set({ players: [], entryFee: 10, chipsValue: 20 });
      },
    }),
    { name: "game-storage" },
  ),
);
