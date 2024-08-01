import { useCalculationContext } from "../../hooks/useCalculationContext";

type OperatorButtonProps = {
  operatorSymbol: "÷" | "x" | "-" | "+";
}

export default function OperatorButton({ operatorSymbol }: OperatorButtonProps) {

  const calculationContext = useCalculationContext()


  function handleOperatorButtonClick() {

    switch (operatorSymbol) {
      case "+":
        calculationContext.setExpression(expresison => {
          return {
            ...expresison,
            operation: "+"
          }
        })
        break
      case "-":
        calculationContext.setExpression(expresison => {
          return {
            ...expresison,
            operation: "-"
          }
        })
        break
      case "x":
        calculationContext.setExpression(expresison => {
          return {
            ...expresison,
            operation: "*"
          }
        })
        break
      case "÷":
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
