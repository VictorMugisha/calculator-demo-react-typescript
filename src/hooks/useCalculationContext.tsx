import { useContext } from "react";
import { CalculationContext } from "../contexts/CalculationContext";


export function useCalculationContext() {
    const calculationContext = useContext(CalculationContext)

    if (calculationContext === undefined) {
        console.log("USECALCULATIONCONTEXT IS USED WITHOUT PROVIDER")
        throw new Error("useCalculationContext must be used within provider tree")
    }

    return calculationContext
}