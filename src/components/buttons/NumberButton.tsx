import { useEffect, useState } from "react";
import { useCalculationContext } from "../../hooks/useCalculationContext";
import { useScreenContext } from "../../hooks/useScreenContext";

type NumberButtonProps = {
  value: number;
  customStyles?: string;
}

export default function NumberButton({ value, customStyles }: NumberButtonProps) {
  const screenContext = useScreenContext()
  const calculationContext = useCalculationContext()

  const [isFirstStroke, setIsFirstStroke] = useState(false)

  function handleNumberButtonClick() {

    if (calculationContext.expression.operation !== "") {
      if (calculationContext.expression.secondOperand === 0) {
        calculationContext.setExpression(prevState => {
          return {
            ...prevState,
            secondOperand: value
          }
        })
        setIsFirstStroke(true)
      }

      if (!isFirstStroke) {
        screenContext.setScreenValue(parseInt(`${calculationContext.expression.secondOperand}${value}`))
      }
    } else {
      if (screenContext.screenValue === 0) {
        screenContext.setScreenValue(value)
      } else if (screenContext.screenValue.toString().length < 12) {
        screenContext.setScreenValue(prevValue => {
          return parseInt(prevValue.toString() + value)
        })
      } else {
        return
      }
    }
  }

  useEffect(() => {
    calculationContext.setExpression(expression => {
      if (expression.operation !== "") {
        return {
          ...expression,
          secondOperand: screenContext.screenValue
        }
      } else {
        return {
          ...expression,
          firstOperand: screenContext.screenValue
        }
      }
    })
  }, [screenContext.screenValue])

  return (
    <button
      className={`bg-gray-100 border-none  outline-none h-28 text-3xl md:text-4xl font-semibold ${customStyles}`}
      onClick={handleNumberButtonClick}
    >
      {value}
    </button>
  )
}
