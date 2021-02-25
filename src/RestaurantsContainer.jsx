import React from 'react';

import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const { restaurants, clicked } = useSelector((state) => ({
    restaurants: state.restaurants,
    clicked: state.clicked,
  }));

  if (clicked.region && !clicked.category) {
    return (
      <p>카테고리 버튼도 클릭 해주세요</p>
    );
  }

  if (clicked.category && !clicked.region) {
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
