import React from 'react';

export default function Categories({ categories = [], handleClickCategory, selected }) {
  return (
    <ul>
      {categories.length > 0
        ? categories.map((category) => (
          <li key={category.id}>
            <button
              type="button"
              onClick={() => { handleClickCategory(category.id); }}
            >
              {category.name}
              {category.id === selected && '(V)'}
            </button>
          </li>
        ))
        : <li>카테고리가 없습니다.</li>}
    </ul>
  );
}
