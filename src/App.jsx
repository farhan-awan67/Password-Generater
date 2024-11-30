import { useCallback, useEffect, useRef, useState } from "react";
import Input from "./components/Input";
import "./index.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const inputRef = useRef("");

  const passwordGenerater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789";
    if (characters) str += "!@#$%^&*()-_=+{}[]|?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbers, characters, setPassword]);

  // passwordGenerater();
  useEffect(() => {
    passwordGenerater();
  }, [length, numbers, characters, passwordGenerater]);

  const copyToClip = useCallback(() => {
    inputRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="w-full h-screen bg-black p-2.5">
      <h1 className="text-4xl text-white text-center font-bold">
        Password Generater
      </h1>
      <Input
        password={password}
        length={length}
        numbers={numbers}
        characters={characters}
        setLength={setLength}
        setNumbers={setNumbers}
        setCharacters={setCharacters}
        copyToClip={copyToClip}
        inputRef={inputRef}
      />
    </div>
  );
}

export default App;
