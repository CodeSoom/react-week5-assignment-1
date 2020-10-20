import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

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

  const initialRegions = [
    { id: 1, region: '서울', isChecked: false },
    { id: 2, region: '대구', isChecked: false },
    { id: 3, region: '부산', isChecked: false },
    { id: 4, region: '대전', isChecked: false },
    { id: 5, region: '강원도', isChecked: false },
    { id: 6, region: '광주', isChecked: false },
  ];

  const [categories, setCategories] = useState(initialCategories);

  const [regions, setRegions] = useState(initialRegions);

  function onClick(id, isChecked) {
    setCategories([
      ...categories.map((category) => (
        category.id === id ? { ...category, isChecked: !isChecked } : category
      )),
    ]);

    setRegions([
      ...regions.map((region) => (
        region.id === id ? { ...region, isChecked: !isChecked } : region
      )),
    ]);
  }

  return (
    <>
      <Categories categories={categories} onClick={onClick} />
      <Regions regions={regions} onClick={onClick} />
    </>
  );
}
