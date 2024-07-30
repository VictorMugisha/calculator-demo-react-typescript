import { createContext } from "react";

export interface ExpressionType {
    firstOperand: number;
    operation: string;
    secondOperand: number;
}

export interface CalculationContextType {
    expression: ExpressionType;
    setExpression: React.Dispatch<React.SetStateAction<ExpressionType>>;
}

export const CalculationContext = createContext<CalculationContextType | undefined>(undefined)