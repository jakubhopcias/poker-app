export default function Button({onClick,text}: {onClick: () => void, text: string}) {
    return (
        <button className="text-[1.1rem] px-8 py-2.5 rounded-[12px] bg-[var(--primary)]" onClick={onClick}>
            {text}
        </button>
    );
}