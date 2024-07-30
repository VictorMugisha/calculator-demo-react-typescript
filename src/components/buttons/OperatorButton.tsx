
type OperatorButtonProps = {
  operatorSymbol: string;
}

export default function OperatorButton({ operatorSymbol }: OperatorButtonProps) {
  return (
    <button
      className="bg-orange-500 text-white border-none outline-none h-28 text-3xl md:text-4xl font-semibold"
    >
      {operatorSymbol}
    </button>
  )
}
