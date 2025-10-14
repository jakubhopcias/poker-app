export default function Plus({onClick} : {onClick 
    ?: ()=>void}) {
    return (
        <button onClick={onClick} className="w-[50px] text-[20px] rounded-[50%] px-4 py-3 h-[50px] bg-[#616161]">
            +
        </button>
    );
}