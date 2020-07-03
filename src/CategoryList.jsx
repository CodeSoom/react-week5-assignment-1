import React from 'react';

export default function CategoryList({ categoryList }) {
  return (
    <ul>
      {categoryList.map((category) => (
        <li key={category.id}>
          <button type="button">{category.name}</button>
        </li>
      ))}
    </ul>
  );
}
