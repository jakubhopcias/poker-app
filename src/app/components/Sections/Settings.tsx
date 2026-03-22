"use client";
import { useGameStore } from "@/app/store/gameStore";
import Button from "../ActionButton";
export default function Settings() {
  const { entryFee, chipsValue, setEntryFee, setChipsValue, reset } =
    useGameStore();

  return (
    <div className="settings">
      <h2 className="text-center">Ustawienia</h2>
      <div className="flex flex-col gap-8 justify-center items-center">
        <label className="text-gray-400" htmlFor="entry-fee">
          Ile wynosi wpisowe?
        </label>
        <input
          type="number"
          name="entry-fee"
          value={entryFee || 10}
          onChange={(e) => setEntryFee(Number(e.target.value))}
        />

        <label htmlFor="chips-value" className="text-gray-400">
          Ile żetonów za wpisowe ?
        </label>
        <input
          type="number"
          name="chips-value"
          value={chipsValue || 20}
          onChange={(e) => setChipsValue(Number(e.target.value))}
        />

        <Button onClick={reset} text="Resetuj sesję" />
      </div>
    </div>
  );
}
