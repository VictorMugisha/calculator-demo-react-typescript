import { useState } from "react";
import { CalculationContext } from "../contexts/CalculationContext";
import Keyboard from "./Keyboard";
import Screen from "./Screen";

export default function Layout() {
    const [expression, setExpression] = useState<string>('')

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
