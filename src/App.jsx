import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  // State variables for the currency conversion
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Fetch currency information using a custom hook
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  // Function to swap 'from' and 'to' currencies
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // Function to perform the currency conversion
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full min-h-screen flex justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1617761141732-d481912af1a9?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-xl mx-4 md:ml-0 md:mx-auto">
        {/* Title */}
        <h1 className="text-white text-center mb-12 font-extrabold text-3xl">
          Your Own Currency Converter
        </h1>

        {/* Currency Converter Container */}
        <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* 'From' InputBox */}
            <div className="w-full">
              <InputBox
                label="From"
                amount={amount}
                className="pb-6"
                currencyOptions={options}
                selectCurrency={from}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
              />
            </div>

            {/* Swap button */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            {/* 'To' InputBox and Convert Button */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
              <button
                type="submit"
                className="w-full mt-2 bg-blue-600 text-white px-4 py-3 rounded-lg
                hover:ring-[3px] hover:ring-teal-500 hover:bg-blue-700"
                onClick={convert}
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* footer */}
      <div className="absolute bottom-4 right-4 text-white text-opacity-100 text-sm">
        Made with <span className="text-red-500">❤</span> and a sprinkle of code
        by
        <span className="font-bold text-yellow-200 ml-1">Rahul Sharma</span>
      </div>
    </div>
  );
}

export default App;
