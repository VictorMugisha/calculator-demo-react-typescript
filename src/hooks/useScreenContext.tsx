import { useContext } from "react";
import { ScreenContext } from "../contexts/ScreenContext";

export function useScreenContext() {
    const context = useContext(ScreenContext)

    if (context === undefined) {
        console.log("CONTEXT IS UNDEFINED")
        throw new Error("useScreenContext must be used with provider")
    }

    return context
}