import React from "react";

const Input = ({
  password,
  length,
  numbers,
  characters,
  setLength,
  setNumbers,
  setCharacters,
  copyToClip,
  inputRef,
}) => {
  return (
    <div className="w-full max-w-md bg-gray-600 rounded-md px-4 py-2 mx-auto mt-6">
      <div className="flex justify-between gap-6">
        <input
          className="bg-[#d5c0c0fd] outline-none rounded-md px-3 py-1 flex-1"
          type="text"
          value={password}
          placeholder="password"
          readOnly
          ref={inputRef}
        />
        <button
          onClick={copyToClip}
          className="bg-slate-400 text-black px-2 py-1 rounded-md font-medium cursor-pointer"
        >
          Copy
        </button>
      </div>
      <div className="flex justify-between gap-3 mt-2">
        <div className="flex justify-center">
          <input
            type="range"
            min={1}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-white">Length:{length}</label>
        </div>
        <div className="flex justify-center">
          <input
            type="checkbox"
            defaultChecked={numbers}
            onChange={() => {
              setNumbers((prev) => !prev);
            }}
          />
          <label className="text-white">Numbers</label>
        </div>
        <div className="flex justify-center">
          <input
            type="checkbox"
            defaultChecked={characters}
            onChange={() => {
              setCharacters((prev) => !prev);
            }}
          />
          <label className="text-white">Characters</label>
        </div>
      </div>
    </div>
  );
};

export default Input;
