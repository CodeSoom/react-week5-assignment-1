import React from 'react';

export default function InputBox({ property, value, handleChangeInput }) {
  return (
    <input type="text" name={property} value={value} onChange={handleChangeInput} />
  );
}
