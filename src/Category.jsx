import React from 'react';

export default function Category({ category: { id, name }, selectedCategory, onClick }) {
  return (
    <>
      <li>
        <button type="button" id={id} onClick={() => onClick(id)}>{ `${name}${selectedCategory && selectedCategory.id === id ? '(V)' : ''}` }</button>
      </li>
    </>
  );
}
