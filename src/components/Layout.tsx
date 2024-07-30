import { useState } from "react";
import { CalculationContext } from "../contexts/CalculationContext";
import Keyboard from "./Keyboard";
import Screen from "./Screen";
import { ExpressionType } from "../contexts/CalculationContext";

export default function Layout() {
    const [expression, setExpression] = useState<ExpressionType>({
        firstOperand: 0,
        operation: '',
        secondOperand: 0
    })

    const calculationContextValue = {
        expression,
        setExpression
    }

    return (
        <CalculationContext.Provider value={calculationContextValue}>
            <Screen />
            <Keyboard />
        </CalculationContext.Provider>
    )
}
