import { useState } from "react";
import CalculatorButton from "./CalculatorButton";

const performCalculation = function (
  prev: number,
  curr: number,
  operation: string
) {
  switch (operation) {
    case "+":
      return prev + curr;
    case "-":
      return prev - curr;
    case "*":
      return prev * curr;
    case "/":
      return prev / curr;
    default:
      return curr;
  }
};

const initialData: CalculatorState = {
  currentNumber: "0",
  previousNumber: "",
  operation: null,
  isNewNumber: true,
};

export default function Calculator() {
  const [calculatorState, setCalculatorState] =
    useState<CalculatorState>(initialData);

  const handleClear = () => {
    setCalculatorState(initialData);
  };

  const handleOperator = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const operator = e.currentTarget.value;

    setCalculatorState((calculatorState) => {
      if (calculatorState.currentNumber === "" && operator) {
        return calculatorState;
      }

      if (calculatorState.previousNumber && calculatorState.operation) {
        const result = performCalculation(
          parseFloat(calculatorState.previousNumber),
          parseFloat(calculatorState.currentNumber),
          calculatorState.operation
        );

        return operator === "="
          ? {
              currentNumber: result.toString(),
              previousNumber: "",
              operation: null,
              isNewNumber: true,
            }
          : {
              currentNumber: "",
              previousNumber: result.toString(),
              operation: operator,
              isNewNumber: true,
            };
      }

      if (operator === "=") return { ...calculatorState, isNewNumber: true };

      return {
        currentNumber: "",
        previousNumber: parseFloat(calculatorState.currentNumber).toString(),
        operation: operator,
        isNewNumber: true,
      };
    });
  };

  const handleNum = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const value = e.currentTarget.value;
    setCalculatorState((calculatorState) => ({
      ...calculatorState,
      currentNumber: calculatorState.isNewNumber
        ? value
        : calculatorState.currentNumber + value,
      isNewNumber: false,
    }));
  };

  const handleDot = () => {
    if (calculatorState.currentNumber.includes(".")) return;

    setCalculatorState((calculatorState) => ({
      ...calculatorState,
      currentNumber: calculatorState.currentNumber + ".",
      isNewNumber: false,
    }));
  };

  const buttonConfigs: ButtonConfig[] = [
    { value: "C", className: "calc-clear", onClick: handleClear },
    { value: "/", className: "calc-operator", onClick: handleOperator },
    { value: "1", className: "calc-num", onClick: handleNum },
    { value: "2", className: "calc-num", onClick: handleNum },
    { value: "3", className: "calc-num", onClick: handleNum },
    { value: "*", className: "calc-operator", onClick: handleOperator },
    { value: "4", className: "calc-num", onClick: handleNum },
    { value: "5", className: "calc-num", onClick: handleNum },
    { value: "6", className: "calc-num", onClick: handleNum },
    { value: "+", className: "calc-operator", onClick: handleOperator },
    { value: "7", className: "calc-num", onClick: handleNum },
    { value: "8", className: "calc-num", onClick: handleNum },
    { value: "9", className: "calc-num", onClick: handleNum },
    { value: "-", className: "calc-operator", onClick: handleOperator },
    { value: ".", className: "calc-dot", onClick: handleDot },
    { value: "0", className: "calc-num", onClick: handleNum },
    { value: "=", className: "calc-result", onClick: handleOperator },
  ];

  return (
    <>
      <div className="bg-[#1f1f1f] flex items-center justify-center h-screen">
        <article className="w-[282px] border border-[#333] bg-[#ccc] p-1">
          <form
            className="grid grid-cols-[repeat(4, 65px)] auto-rows-[65px] gap-1"
            name="forms"
          >
            <input
              type="text"
              className="calc-input"
              name="output"
              readOnly
              value={calculatorState.currentNumber}
            />
            {buttonConfigs.map((config) => (
              <CalculatorButton {...config} key={config.value} />
            ))}
          </form>
        </article>
      </div>
    </>
  );
}
