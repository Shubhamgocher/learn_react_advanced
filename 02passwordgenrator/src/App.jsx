import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const refPassword=useRef(null);
  const PasswordGenrator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const char = "!@#$%^&*(){}<,?";
    let pass = "";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += char;
    for (let index = 1; index <= length; index++) {
      const itr = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(itr);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);
  function clickHandler(){
    refPassword.current?.select();
    refPassword.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password);
  }
  useEffect(() => {
    PasswordGenrator();
  }, [length, numAllowed,charAllowed]);

  return (
    <div className="gap-4">
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-center text-white">
          PasswordGenrator
        </h1>
      </div>
      <div className=" flex justify-center ">
        <div className="bg-slate-700 w-auto shadow-xl rounded-lg gap-4 p-2">
          <div className="flex w-full">
            <div className="bg-white w-full rounded-lg p-2">
              <input
                type="text"
                alt="bfjvkfdn"
                placeholder="password"
                className="w-full outline-none text-lg "
                value={password}
                ref={refPassword}
              />
            </div>
            <button className="bg-blue-700 rounded-xl p-2  " onClick={clickHandler}>copy</button>
          </div>
          <div className="flex justify-between mx-4 gap-2">
            <div className=" flex text-blue-600 gap-2 text-xl font-bold">
              <input
                type="range"
                value={length}
                min="6"
                max="100"
                onChange={(e) => setLength(e.target.value)}
              />
              <label>Lenght: {length}</label>
            </div>
            <div className=" flex text-blue-600 gap-2 text-xl font-bold">
              <input
                type="checkbox"
                value={numAllowed}
                onChange={() => setNumAllowed((prev) => !prev)}
              />
              <label>Number</label>
            </div>
            <div className=" flex text-blue-600 gap-2 text-xl font-bold">
              <input
                type="checkbox"
                value={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
