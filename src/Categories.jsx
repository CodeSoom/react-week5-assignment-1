import React from 'react';

const isEmpty = (array = []) => array.length === 0;

export default function Regions({ selectedCategoryId, categories, onClick }) {
  if (isEmpty(categories)) {
    return <p>음식 분류가 없습니다!</p>;
  }

  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(id)}
          >
            {name + (id === selectedCategoryId ? '(V)' : '')}
          </button>
        </li>
      ))}
    </ul>
  );
}
