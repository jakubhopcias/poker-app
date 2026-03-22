export default function ActionButton({ onClick, char }: { onClick?: () => void; char: string }) {
  return (
    <button
      onClick={onClick}
      className="w-[50px] text-[20px] rounded-[50%] px-4 py-3 h-[50px] bg-[#616161]"
    >
      {char}
    </button>
  );
}
