import { useCalculationContext } from "../../hooks/useCalculationContext"
import { useScreenContext } from "../../hooks/useScreenContext"

export default function EqualButton() {
    const screenContext = useScreenContext()

    const { expression } = useCalculationContext()
    const { firstOperand, operation, secondOperand } = expression

    function handleEqualButtonClick() {
        if (firstOperand === 0 || operation === "" || secondOperand === 0) {
            return
        }

        const realExpression = firstOperand + operation + secondOperand
        const result = eval(realExpression)
        screenContext.setScreenValue(result)
    }

    return (
        <button
            className="bg-orange-500 text-white border-none outline-none h-28 text-3xl md:text-4xl font-semibold"
            onClick={handleEqualButtonClick}
        >
            =
        </button>
    )
}
