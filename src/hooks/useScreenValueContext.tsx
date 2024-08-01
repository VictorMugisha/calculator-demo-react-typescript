import { useContext } from "react";
import { ScreenValueContext } from "../contexts/ScreenValueContext";

export function useScreenValueContext() {
    const context = useContext(ScreenValueContext)

    if (context === undefined) {
        console.log("CONTEXT IS UNDEFINED")
        throw new Error("useScreenValueContext must be used with provider")
    }

    return context
}