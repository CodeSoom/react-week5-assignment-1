import React from 'react';

import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const { selectedRegionId, selectedCategoryId, restaurants } = useSelector((state) => ({
    selectedRegionId: state.selectedRegionId,
    selectedCategoryId: state.selectedCategoryId,
    restaurants: state.restaurants,
  }));

  return (selectedRegionId && selectedCategoryId) ? (
    <>
      <h4>레스토랑 목록</h4>
      <Restaurants restaurants={restaurants} />
    </>
  ) : (
    <p>지역과 분류를 선택해주세요!</p>
  );
}
