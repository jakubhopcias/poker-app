import PlayerInterface from "./PlayerInterface";

export default function calculateMoney(
  player: PlayerInterface,
  chipsValue: number,
  entryFee: number,
) {
  if (!player) return 0;

  const factor = chipsValue / entryFee;
  const earnings = player.chips / factor - player.bets * entryFee;

  return earnings.toFixed(2);
}
