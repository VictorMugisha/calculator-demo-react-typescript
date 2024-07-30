import { useCalculationContext } from "../../hooks/useCalculationContext";
import { useScreenContext } from "../../hooks/useScreenContext";

type OperatorButtonProps = {
  operatorSymbol: "÷" | "x" | "-" | "+";
}

export default function OperatorButton({ operatorSymbol }: OperatorButtonProps) {

  const calculationContext = useCalculationContext()
  const screenContext = useScreenContext()

  function handleOperatorButtonClick() {
    const expressionToMake: Array<number | string> = [screenContext.screenValue]
    switch (operatorSymbol) {
      case "+":
        expressionToMake.push("+")
        break
      case "-":
        expressionToMake.push("-")
        break
      case "x":
        expressionToMake.push("*")
        break
      case "÷":
        expressionToMake.push("/")
        break
    }

    calculationContext.setExpression(expressionToMake.join(''))
  }

  return (
    <button
      className="bg-orange-500 text-white border-none outline-none h-28 text-3xl md:text-4xl font-semibold"
      onClick={handleOperatorButtonClick}
    >
      {operatorSymbol}
    </button>
  )
}
