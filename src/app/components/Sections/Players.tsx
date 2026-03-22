"use client";
import { useState } from "react";
import ActionButton from "../Plus";

import PlayerInterface from "@/app/lib/PlayerInterface";
import { useGameStore } from "@/app/store/gameStore";

export default function Players() {
  const [name, setName] = useState("");
  const { players, addPlayer, updateBet } = useGameStore();

  const handleAddPlayer = () => {
    if (!name.trim()) return;
    addPlayer(name);
    setName("");
  };

  return (
    <section id="players">
      <h2>Gracze</h2>
      <h4>Dodaj gracza</h4>

      <label htmlFor="name">Imię: </label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <ActionButton char="+" onClick={handleAddPlayer} />

      <h2>Dodaj wpisowe</h2>
      <table>
        <thead>
          <tr>
            <th>Gracz</th>
            <th>Zakłady</th>
            <th>Dodaj zakład</th>
            <th>Usuń zakład</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player: PlayerInterface, index: number) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.bets}</td>
              <td>
                <ActionButton
                  char="+"
                  onClick={() => updateBet(player.name, 1)}
                />
              </td>
              <td>
                <ActionButton
                  char="-"
                  onClick={() => updateBet(player.name, -1)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
