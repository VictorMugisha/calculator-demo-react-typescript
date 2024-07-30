import DotButton from "./buttons/DotButton";
import EqualButton from "./buttons/EqualButton";
import NumberButton from "./buttons/NumberButton";
import OperatorButton from "./buttons/OperatorButton";
import SpecialFunctionButton from "./buttons/SpecialFunctionButton";

export default function Keyboard() {
    return (
        <div className="grid grid-cols-4 gap-[1px] bg-gray-700">
            <SpecialFunctionButton />
            <SpecialFunctionButton />
            <SpecialFunctionButton />
            <OperatorButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <OperatorButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <OperatorButton />
            <NumberButton />
            <NumberButton />
            <NumberButton />
            <OperatorButton />
            <NumberButton />
            <DotButton />
            <EqualButton />
        </div>
    )
}
