import { useCalculationContext } from "../../hooks/useCalculationContext";
import { useScreenContext } from "../../hooks/useScreenContext";

type OperatorButtonProps = {
  operatorSymbol: "÷" | "x" | "-" | "+";
}

export default function OperatorButton({ operatorSymbol }: OperatorButtonProps) {

  const calculationContext = useCalculationContext()
  const screenContext = useScreenContext()


  function handleOperatorButtonClick() {

    switch (operatorSymbol) {
      case "+":
        screenContext.setScreenValue(0)
        calculationContext.setExpression(expresison => {
          return {
            ...expresison,
            operation: "+"
          }
        })
        break
      case "-":
        screenContext.setScreenValue(0)
        calculationContext.setExpression(expresison => {
          return {
            ...expresison,
            operation: "-"
          }
        })
        break
      case "x":
        screenContext.setScreenValue(0)
        calculationContext.setExpression(expresison => {
          return {
            ...expresison,
            operation: "*"
          }
        })
        break
      case "÷":
        screenContext.setScreenValue(0)
        calculationContext.setExpression(expresison => {
          return {
            ...expresison,
            operation: "/"
          }
        })
        break
    }
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
