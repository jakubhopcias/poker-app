"use client";
import { useEffect, useState } from "react";
import Plus from "../Plus";
import PlayerInterface from "@/app/lib/PlayerInterface";

export default function Players() {
  const [name, setName] = useState("");
  const [players, setPlayers] = useState<PlayerInterface[]>([]);

  function addPlayer() {
    setPlayers([...players, { name: name, bets: 1, chips: 0 }]);
    setName("");
    localStorage.setItem(
      "players",
      JSON.stringify([...players, { name: name, bets: 1, chips: 0 }])
    );
  }
  useEffect(() => {
    localStorage.getItem("players") &&
      setPlayers(JSON.parse(localStorage.getItem("players")!));
  }, []);

  function addBet(bet: number, player: string) {
    setPlayers(
      players.map((p) => (p.name === player ? { ...p, bets: bet } : p))
    );
    localStorage.setItem(
      "players",
      JSON.stringify(
        players.map((p) => (p.name === player ? { ...p, bets: bet } : p))
      )
    );
  }
  return (
    <section id="players">
      <h2>Gracze</h2>
      <h4>Dodaj gracza</h4>

      <label htmlFor="name">Imię: </label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        required
      />

      <Plus onClick={addPlayer} />

      <h2>Dodaj wpisowe</h2>
      <table>
        <thead>
          <tr>
            <th>Gracz</th>
            <th>Zakłady</th>
            <th>Dodaj zakład</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player: any, index: number) => {
            return (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.bets}</td>
                <td>
                  <Plus onClick={() => addBet(player.bets + 1, player.name)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
