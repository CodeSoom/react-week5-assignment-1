import React from 'react';

export default function Categories({ categories }) {
  return (
    <div>
      {
        categories.map((category) => (
          <button type="button" key={category.id}>
            { category.name }
          </button>
        ))
      }
    </div>
  );
}
