import { createContext } from "react";

export interface ScreenContextType {
    screenValue: number;
    setScreenValue: React.Dispatch<React.SetStateAction<number>>;
}

export const ScreenContext = createContext<ScreenContextType | undefined>(undefined)