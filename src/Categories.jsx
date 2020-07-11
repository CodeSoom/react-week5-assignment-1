import React from 'react';

export default function Categories({ categories, selectedCategory, onClick }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button type="button" onClick={() => onClick(category.id)}>
            {category.name}
            {selectedCategory ? (
              <>
                {category.id === selectedCategory.id ? '(V)' : null}
              </>
            ) : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
