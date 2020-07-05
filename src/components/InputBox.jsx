import React from 'react';

export default function InputBox({ inputProperty, inputValue, handleChangeInputValue }) {
  return (
    <input type="text" name={inputProperty} value={inputValue} onChange={handleChangeInputValue} />
  );
}
