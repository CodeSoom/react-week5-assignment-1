import React from 'react';

export default function Categories({ categories = [] }) {
  return (
    <ul>
      {categories.length > 0
        ? categories.map((category) => <li key={category.id}>{category.name}</li>)
        : <li>카테고리가 없습니다.</li>}
    </ul>
  );
}
