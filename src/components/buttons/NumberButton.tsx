
type NumberButtonProps = {
  value: number;
  customStyles?: string;
}

export default function NumberButton({ value, customStyles }: NumberButtonProps) {
  return (
    <button
      className={`bg-gray-100 border-none  outline-none h-28 text-3xl md:text-4xl font-semibold ${customStyles}`}
    >
      {value}
    </button>
  )
}
