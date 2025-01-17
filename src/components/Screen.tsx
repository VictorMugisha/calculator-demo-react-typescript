import { useScreenContext } from "../hooks/useScreenContext"

export default function Screen() {
    const screenContext = useScreenContext()
    return (
        <div className="w-full bg-slate-500 text-white font-semibold text-3xl md:text-5xl py-3 px-3 flex items-center justify-end">
            <span className="overflow-hidden">{screenContext.screenValue}</span>
        </div>
    )
}
