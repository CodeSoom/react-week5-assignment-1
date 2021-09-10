import React from 'react';

export default function Categories({ categories }) {
  function handleInputText() {

  }
  return (
    <ul>
      {categories.map((category) => (
        <li>
          <input key={category.id} type="radio" onClick={handleInputText} name="categories" />
          <label htmlFor={category.id}>{category.name}</label>
        </li>
      ))}
    </ul>
  );
}
