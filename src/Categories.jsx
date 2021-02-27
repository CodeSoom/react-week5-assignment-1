import React from 'react';

export default function Categories({ categories, onClickCheck, selectedCategoryName }) { 
  return (
    <ul>
      {categories.map(({id, name}) => (
        <li key={id}>
          <button 
            id={id}
            name={name}
            type="button" 
            onClick={onClickCheck}
          >
            {name}
            {name === selectedCategoryName ? '(V)' : ''}
          </button>
        </li>
      ))}
    </ul>
  )
}
