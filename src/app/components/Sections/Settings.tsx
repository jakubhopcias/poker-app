"use client";
import { useSettingsStore } from "@/app/store/settingsStore";
import Button from "../Button";
export default function Settings() {
  const { entryFee, chipsValue, setEntryFee, setChipsValue,reset } = useSettingsStore()

  return (
    <div className="settings">
      <h2 className="text-center">Ustawienia</h2>
      <div className="flex flex-col gap-8 justify-center items-center">
        <label className="text-gray-400" htmlFor="entry-fee">Ile wynosi wpisowe (domyślnie 10)?</label>
          <input
            type="number"
            name="entry-fee"
            value={entryFee}
            onChange={(e) => setEntryFee(Number(e.target.value))}/>

        <label htmlFor="chips-value" className="text-gray-400">
          Ile żetonów za wpisowe (domyślnie 20)?
        </label>
          <input
            type="number"
            name="chips-value"
            value={chipsValue}
            onChange={(e) => setChipsValue(Number(e.target.value))}
          />


        <Button onClick={reset} text="Resetuj sesję" />
      </div>
    </div>
  );
}
