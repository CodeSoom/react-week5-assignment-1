import React from 'react';

import Categories from './Categories';

export default function CategoriesContainer() {
  const categories = [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
    { id: 3, name: '일식' },
    { id: 4, name: '양식' },
    { id: 5, name: '분식' },
  ];

  function handleClick() {
    // TODO: 버튼 클릭이 되었을 때
  }

  return (
    <Categories
      categories={categories}
      onClick={handleClick}
    />
  );
}
