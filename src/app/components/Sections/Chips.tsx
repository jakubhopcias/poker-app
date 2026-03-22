"use client";
import calculateMoney from "@/app/lib/CalculateMoney";
import PlayerInterface from "@/app/lib/PlayerInterface";
import { useGameStore } from "@/app/store/gameStore";

export default function Chips() {
  const { players, updateChips, chipsValue, entryFee } = useGameStore();
  return (
    <section>
      <div>
        <h2 className="mb-2">Żetony i wypłata</h2>
        <p className="text-neutral-300">Tutaj obliczymy wypłatę oraz długi.</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Gracz</th>
            <th>Zakłady</th>
            <th>Żetony</th>
            <th>Wypłata / dług</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player: PlayerInterface, index: number) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.bets}</td>
              <td>
                <input
                  type="number"
                  value={player.chips}
                  onChange={(e) =>
                    updateChips(player.name, parseInt(e.target.value))
                  }
                />
              </td>
              <td>{calculateMoney(player, chipsValue, entryFee)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
