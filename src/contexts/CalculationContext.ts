import { createContext } from "react";

export interface CalculationContextType {
    expression: string;
    setExpression: React.Dispatch<React.SetStateAction<string>>;
}

export const CalculationContext = createContext<CalculationContextType | undefined>(undefined)