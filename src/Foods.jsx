import React from 'react';

export default function Foods({ foods }) {
  return (
    <ul>
      {foods.map((food) => (
        <li key={food.id} style={{ listStyleType: "none" }}>
          <button type='button'>{food.name}</button>
        </li>
      ))}
    </ul>
  );
}