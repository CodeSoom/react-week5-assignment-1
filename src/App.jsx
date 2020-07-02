import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { loadRegions, selectCategory } from './action';


const categories = [
  { id: 1, name: '한식' },
  { id: 2, name: '중식' },
  { id: 3, name: '일식' },
  { id: 4, name: '양식' },
  { id: 5, name: '분식' },
];

export default function App() {
  const { selectedCategory } = useSelector((state) => ({
    selectedCategory: state.selectedCategory,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  function handleSelectCategory(newSelectedCategory) {
    dispatch(selectCategory(newSelectedCategory));
    // TODO : loadRestaurants(지역, 카테고리)
  }

  return (
    <div>
      <RegionsContainer />
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleSelectCategory(category.name)}
          type="button"
        >
          {category.name === selectedCategory ? `${category.name}(V)` : category.name}
        </button>
      ))}

    </div>
  );
}
