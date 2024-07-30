import DotButton from "./buttons/DotButton";
import EqualButton from "./buttons/EqualButton";
import NumberButton from "./buttons/NumberButton";
import OperatorButton from "./buttons/OperatorButton";
import SpecialFunctionButton from "./buttons/SpecialFunctionButton";

export default function Keyboard() {
    return (
        <div className="grid grid-cols-4 gap-[1px] bg-gray-700">
            <SpecialFunctionButton symbol="AC" />
            <SpecialFunctionButton symbol="+/-" />
            <SpecialFunctionButton symbol="%" />
            <OperatorButton operatorSymbol="÷" />
            <NumberButton value={7} />
            <NumberButton value={8} />
            <NumberButton value={9} />
            <OperatorButton operatorSymbol="x" />
            <NumberButton value={4} />
            <NumberButton value={5} />
            <NumberButton value={6} />
            <OperatorButton operatorSymbol="-" />
            <NumberButton value={1} />
            <NumberButton value={2} />
            <NumberButton value={3} />
            <OperatorButton operatorSymbol="+" />
            <NumberButton value={0} customStyles="col-span-2" />
            <DotButton />
            <EqualButton />
        </div>
    )
}
