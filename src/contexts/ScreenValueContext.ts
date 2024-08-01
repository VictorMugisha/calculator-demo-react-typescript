import { createContext } from "react";

export interface ScreenValueContextType {
    screenString: string;
    setScreenString: React.Dispatch<React.SetStateAction<string>>;
}

export const ScreenValueContext = createContext<ScreenValueContextType | undefined>(undefined)