import React from 'react';

export default function Categories({ selectedCategoryId, categories, onClick }) {
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button type="button" onClick={() => onClick('categoryId', category.id)}>
              {category.name}
              {selectedCategoryId === category.id && '(V)'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
