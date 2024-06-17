import React from "react";

const Input = ({ placeholder, type, value, handleInput, name }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleInput}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
