import React from 'react';

export default function Categories({ categories, onClickCheck }) { 
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button 
            type="button" 
            onClick={onClickCheck}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  )
}
