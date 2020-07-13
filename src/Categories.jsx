import React from 'react';

export default function Categories({ categories, selectedCategory, onClick }) {
  return (
    <>
      <div>
        {categories.map((category) => (
          <button
            type="button"
            key={category.id}
            onClick={() => onClick(category.id)}
          >
            {category.name}
            {selectedCategory === category.id && '(V)'}
          </button>
        ))}
      </div>
    </>
  );
}
