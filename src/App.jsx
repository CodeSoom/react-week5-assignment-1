import React, { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    regions: [
      {
        id: 1,
        name: '서울',
      },
      {
        id: 2,
        name: '대전',
      },
    ],
    categories: [
      {
        id: 1,
        name: '한식',
      },
      {
        id: 2,
        name: '중식',
      },
    ],
    selectedRegion: '',
    selectedCategory: '',
    restaurants: [
      {
        id: 1,
        name: '양천주가',
      },
      {
        id: 2,
        name: '한국식 초밥',
      },
    ],
  });

  const handleRegionClick = (region) => {
    const { name } = region;
    setState({
      ...state,
      selectedRegion: name,
    });
  };

  const handleCategoryClick = (category) => {
    const { name } = category;
    setState({
      ...state,
      selectedCategory: name,
    });
  };

  return (
    <>
      <ul>
        {state.regions.map((region) => (
          <li key={region.id}>
            <button type="button" onClick={() => handleRegionClick(region)}>
              {region.name}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {state.categories.map((category) => (
          <li key={category.id}>
            <button type="button" onClick={() => handleCategoryClick(category)}>
              {category.name}
            </button>
          </li>
        ))}
      </ul>
      {state.selectedCategory && state.selectedRegion
        ? state.restaurants.map((restaurant) => (
          <li key={restaurant.id}>
            {restaurant.name}
          </li>
        )) : null}
      <ul />
    </>
  );
}
