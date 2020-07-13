import React from 'react';

export default function Item({ name, checkedName, onClick }) {
  const handleClick = (event) => {
    const { textContent } = event.target;
    onClick({ name: textContent });
  };

  return (
    <>
      <li>
        <button type="button" onClick={handleClick}>{ `${name}${checkedName === name ? '(V)' : ''}` }</button>
      </li>
    </>
  );
}
