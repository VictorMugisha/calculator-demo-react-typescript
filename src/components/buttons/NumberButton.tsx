import { useScreenContext } from "../../hooks/useScreenContext";

type NumberButtonProps = {
  value: number;
  customStyles?: string;
}

export default function NumberButton({ value, customStyles }: NumberButtonProps) {
  const screenContext = useScreenContext()
  function handleNumberButtonClick() {
    if (screenContext.screenValue === 0) {
      screenContext.setScreenValue(value)
    } else if(screenContext.screenValue.toString().length < 12) {
      screenContext.setScreenValue(prevValue => {
        return parseInt(prevValue.toString() + value)
      })
    } else {
      return
    }
  }
  return (
    <button
      className={`bg-gray-100 border-none  outline-none h-28 text-3xl md:text-4xl font-semibold ${customStyles}`}
      onClick={handleNumberButtonClick}
    >
      {value}
    </button>
  )
}
