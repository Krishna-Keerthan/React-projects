import React ,{useId} from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currOptions=[],
    selectCurrency="usd", //40
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex  ${className} `}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block" htmlFor={amountId}>
                    {label}
                </label>
                <input
                    id={amountId}
                    value={amount}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    onChange={(evt)=> {
                        const v = evt.target.value
                        onAmountChange && onAmountChange( Number(v))}}
                    disabled ={amountDisable}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    onChange={(evt) => onCurrencyChange && onCurrencyChange(evt.target.value) } 
                    disabled={currencyDisable} 
                    value={selectCurrency}
                >
                    
                        {currOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export {InputBox};
