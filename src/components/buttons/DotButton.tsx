import { useScreenContext } from "../../hooks/useScreenContext"

export default function DotButton() {
  const screenContext = useScreenContext()
  function handleDotButtonClick() {
    if (screenContext.screenValue.toString().includes('.')) {
      return
    } else {
    }
  }
  return (
    <button
      className="bg-gray-100 border-none  outline-none h-28 text-3xl md:text-4xl font-semibold"
      onClick={handleDotButtonClick}
    >
      .
    </button>
  )
}
