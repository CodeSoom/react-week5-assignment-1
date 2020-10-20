import React, { useState } from 'react';
import Categories from './Categories';
import Regions from './Regions';

export default function App() {
  const initialCategories = [
    { id: 1, category: '한식', isChecked: false },
    { id: 2, category: '중식', isChecked: false },
    { id: 3, category: '일식', isChecked: false },
    { id: 4, category: '양식', isChecked: false },
    { id: 5, category: '분식', isChecked: false },
  ];

  const [categories, setState] = useState(initialCategories);

  function onClick(id, isChecked) {
    setState([
      ...categories.map((category) => (
        category.id === id ? { ...category, isChecked: !isChecked } : category
      )),
    ]);
  }

  const regions = [
    { id: 1, region: '서울' },
    { id: 2, region: '대구' },
    { id: 3, region: '부산' },
    { id: 4, region: '대전' },
    { id: 5, region: '강원도' },
    { id: 6, region: '광주' },
  ];

  return (
    <>
      <Categories categories={categories} onClick={onClick} />
      <Regions regions={regions} />
    </>
  );
}
