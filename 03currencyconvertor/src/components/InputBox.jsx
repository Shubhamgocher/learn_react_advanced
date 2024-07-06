import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "usd",
  className = "",
  currencyType = [],
}) {
  return (
    <div className="bg-white p-3 rounded-lg text-sm flex ">
      <div className="w-1/2">
        <label htmlFor="from" className="text-black/40 inline-block mb-4">
          {label}
        </label>
        <input
          type="number"
          className="outline-none p-4 "
          value={amount}
          onChange={(e) =>
            ( onAmountChange && onAmountChange(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">CurrencyType</p>
        <select
          name="currency"
          id="1"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="rounded-lg px-1 py-1 bg-gray-100 outline-none cursor-pointer"
        >
          {currencyType.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
