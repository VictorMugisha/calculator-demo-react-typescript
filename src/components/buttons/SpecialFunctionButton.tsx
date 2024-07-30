import { useScreenContext } from "../../hooks/useScreenContext";

type SpecialFunctionButtonProps = {
  symbol: string;
  operation: "reset" | "modulus" | "negation";
}

export default function SpecialFunctionButton({ symbol, operation }: SpecialFunctionButtonProps) {
  const screenContext = useScreenContext()

  function handleSpecialButtonClick() {
    switch (operation) {
      case "modulus":

        break
      case "negation":
        screenContext.setScreenValue(screenValue => {
          return screenValue * -1
        })
        break
      case "reset":
        screenContext.setScreenValue(0)
        break
    }
  }

  return (
    <button
      className="bg-gray-100 border-none  outline-none h-28 text-3xl md:text-4xl font-semibold"
      onClick={handleSpecialButtonClick}
    >
      {symbol}
    </button>
  )
}
