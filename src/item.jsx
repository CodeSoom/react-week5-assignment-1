import React from 'react';

export default function Item({ name }) {
  return (
    <>
      <li>
        <button type="button">{ name }</button>
      </li>
    </>
  );
}
