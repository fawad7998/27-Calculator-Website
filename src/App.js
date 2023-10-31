import React, { useState } from "react";
import './App.css'

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setDisplay(eval(display).toString());
      } catch (error) {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="container mx-auto mt-10 p-5 sm:p-10 w-[32%] h-[90vh] my-auto bg-gray-800 rounded-lg shadow-2xl relative">
      <form className="calculator grid grid-cols-2 grid-rows-6 gap-[6px] -px-8 py-1">
        <input
          type="text"
          className="value col-span-4 h-16 sm:h-20 bg-gray-600 text-white text-right px-2 sm:px-4 py-1 sm:py-2 rounded-md text-lg sm:text-2xl"
          readOnly
          name="txt"
          value={display}
        />
        <span
          className="num clear col-span-2 w-[154px] h-16 mt-2 bg-red-500 text-white rounded-md flex items-center justify-center"
          onClick={() => handleButtonClick("C")}
        >
          <i>C</i>
        </span>
        <span
          className="num col-span-1 w-16 h-16 mt-2 bg-gray-600 text-white rounded-md flex items-center justify-center"
          onClick={() => handleButtonClick("/")}
        >
          <i>/</i>
        </span>
        <span
          className="num col-span-1 ml-3 w-16 h-16 mt-2 bg-gray-600 text-white rounded-md flex items-center justify-center"
          onClick={() => handleButtonClick("*")}
        >
          <i>*</i>
        </span>
        <span
          className="num col-span-1 w-16 h-16 bg-gray-600 text-white rounded-md flex items-center justify-center"
          onClick={() => handleButtonClick("7")}
        >
          <i>7</i>
        </span>
        <span
          className="num col-span-1 w-16 h-16 bg-gray-600 text-white rounded-md flex items-center justify-center"
          onClick={() => handleButtonClick("8")}
        >
          <i>8</i>
        </span>
        <span
          className="num col-span-1 w-16 h-16 bg-gray-600 text-white rounded-md flex items-center justify-center"
          onClick={() => handleButtonClick("9")}
        >
          <i>9</i>
        </span>
        <span
          className="num col-span-1 ml-3 w-16 h-16 bg-gray-600 text-white rounded-md flex items-center justify-center"
          onClick={() => handleButtonClick("-")}
        >
          <i>-</i>
        </span>
        <span
          className="num col-span-1 w-16 h-16 bg-gray-600 text-white rounded-md flex items-center justify-center"
          onClick={() => handleButtonClick("4")}
        >
          <i>4</i>
        </span>
        <span
          className="num col-span-1 w-16 h-16 bg-gray-600 text-white rounded-md flex items-center justify-center"
          onClick={() => handleButtonClick("5")}
        >
          <i>5</i>
        </span>
        <span
          className="num col-span-1 w-16 h-16 bg-gray-600 text-white rounded-md flex items-center justify-center"
          onClick={() => handleButtonClick("6")}
        >
          <i>6</i>
        </span>
        <span
          className="num plus col-span-1 ml-3 row-span-2 w-16 h-[150px] bg-gray-600 text-white rounded-md flex items-center justify-center"
          onClick={() => handleButtonClick("+")}
        >
          <i>+</i>
        </span>
        <span
          className="num col-span-1 w-16 h-16 bg-gray-600 text-white rounded-md flex items-center justify-center"
          onClick={() => handleButtonClick("1")}
        >
          <i>1</i>
        </span>
        <span
          className="num col-span-1 w-16 h-16 bg-gray-600 text-white rounded-md flex items-center justify-center"
          onClick={() => handleButtonClick("2")}
        >
          <i>2</i>
        </span>
        <span
          className="num col-span-1 w-16 h-16 bg-gray-600 text-white rounded-md flex items-center justify-center"
          onClick={() => handleButtonClick("3")}
        >
          <i>3</i>
        </span>
        <span
          className="num col-span-1 w-16 h-16 bg-gray-600 text-white rounded-md flex items-center justify-center"
          onClick={() => handleButtonClick("0")}
        >
          <i>0</i>
        </span>
        <span
          className="num col-span-1 w-16 h-16 bg-gray-600 text-white rounded-md flex items-center justify-center"
          onClick={() => handleButtonClick("00")}
        >
          <i>00</i>
        </span>
        <span
          className="num col-span-1 w-16 h-16 bg-gray-600 text-white rounded-md flex items-center justify-center"
          onClick={() => handleButtonClick(".")}
        >
          <i>.</i>
        </span>
        <span
          className="num equal col-span-1 ml-3 w-16 h-16 bg-blue-500 text-white rounded-md flex items-center justify-center"
          onClick={() => handleButtonClick("=")}
        >
          <i>=</i>
        </span>
      </form>
    </div>
  );
};

export default Calculator;
