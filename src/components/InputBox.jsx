import PropTypes from "prop-types";
import { useId } from "react";
import Select from "react-select";
import { customStyles } from "./index";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "inr",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`p-3 rounded-lg text-sm flex bg-blue-100/40 ${className}`}>
      <div className="w-1/2 flex flex-col">
        <label htmlFor={amountInputId} className="text-black/40 text-start ">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full pl-2 mt-4 bg-zinc-100 rounded 
          border-2 border-[hsl(166,78%,37%)] py-1.5
          focus:outline-none focus:ring-[3px] focus:ring-green-500 focus:border-transparent"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <Select
          styles={customStyles}
          options={currencyOptions.map((currencyOption) => ({
            label: currencyOption,
            value: currencyOption,
          }))}
          value={{ label: selectCurrency, value: selectCurrency }}
          onChange={(selectedOption) =>
            onCurrencyChange && onCurrencyChange(selectedOption.value)
          }
          isDisabled={currencyDisable}
        />
      </div>
    </div>
  );
}

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.number,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
  currencyOptions: PropTypes.array,
  selectCurrency: PropTypes.string,
  amountDisable: PropTypes.bool,
  currencyDisable: PropTypes.bool,
  className: PropTypes.string,
};

export default InputBox;
