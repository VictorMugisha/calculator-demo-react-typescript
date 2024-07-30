
type SpecialFunctionButtonProps = {
  symbol: string
}

export default function SpecialFunctionButton({ symbol }: SpecialFunctionButtonProps) {
  return (
    <button
      className="bg-gray-100 border-none  outline-none h-28 text-3xl md:text-4xl font-semibold"
    >
      {symbol}
    </button>
  )
}
