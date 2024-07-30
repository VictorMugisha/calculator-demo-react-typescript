import { createContext } from "react";

export interface ScreenContextType {
    screenValue: string;
    setScreenValue: (prevState?: string) => string
}

export const ScreenContext = createContext<ScreenContextType | undefined>(undefined)