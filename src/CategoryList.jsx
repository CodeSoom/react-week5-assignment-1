import React from 'react';

export default function CategoryList({ categoryList, onClick }) {
  return (
    <ul>
      {categoryList.map((category) => (
        <li key={category.id}>
          <button type="button" onClick={onClick}>{category.name}</button>
        </li>
      ))}
    </ul>
  );
}
