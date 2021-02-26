import React from 'react';

import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const { restaurants, selected } = useSelector((state) => ({
    restaurants: state.restaurants,
    selected: state.selected,
  }));

  if (selected.region.name && !selected.category.name) {
    return (
      <p>카테고리 버튼도 클릭 해주세요</p>
    );
  }

  if (selected.category.name && !selected.region.name) {
    return (
      <p>지역 버튼도 클릭 해주세요</p>
    );
  }

  return (
    <Restaurants
      restaurants={restaurants}
    />
  );
}
