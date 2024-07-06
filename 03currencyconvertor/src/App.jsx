import React, { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
const data={
  "usd":{
    "inr":82,
    "aud":76,
    "usd":1
   },
   "aud":{
    "inr":65,
     "aud":1,
     "usd":0.123,

   },
   "inr":{
    "inr":1,
     "aud":0.134,
     "usd":0.112
   },

   
}
function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount,setConvertedAmount]=useState(0);
  //const data = useCurrencyInfo(from);
  const res=data[from]
  //console.log("options",res);
  const options=Object.keys(res);
  //console.log("options",options);
  console.log("from",from);
  console.log("To",to);
function swap(){
  setFrom(to);
  setTo(from);
  setAmount(convertedAmount);
  setConvertedAmount(amount);
}
 function onAmountChange(amount){
  setAmount(amount);
 }
  const convert=()=>{
    console.log("value",res[to]);
       setConvertedAmount(amount*res[to])
  }
  
  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full flex items-center">
        <div className="w-1/2 mx-auto max-w-md">
          <img
            src="https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="currency Image"
            className="border border-gray-500 backdrop-brightness-105"
          />
        </div>
        <div className="w-1/2 max-w-md mx-auto border border-gray-300  rounded-lg p-5 backdrop-blur-sm  bg-white/30">
          <form onSubmit={(e)=>{e.preventDefault()
          convert()}}>
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyType={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={onAmountChange}
              />
            </div>
            <div className=" relative w-full h-0.5 ">
              <button
                type="button"
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2   border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyType={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                onAmountChange={(convertedAmount) => setConvertedAmount(convertedAmount)}
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
