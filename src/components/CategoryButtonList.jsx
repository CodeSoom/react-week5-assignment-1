import React from 'react';

export default function CategoryButtonList({ categories, handleClickCategory }) {
  return (
    <ol id="category-button-list">
      {
        categories.map(({ id, name }) => (
          <li key={id}>
            <button type="button" onClick={() => handleClickCategory(id)}>
              {name}
            </button>
          </li>
        ))
      }
    </ol>
  );
}
