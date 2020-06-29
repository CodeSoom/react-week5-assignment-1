import React from 'react';

export default function Region({ categories, onClick }) {
  return (
    <>
      <div>
        {categories.map((category) => (
          <button
            type="button"
            key={category.id}
            onClick={() => onClick(category.name)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </>
  );
}
