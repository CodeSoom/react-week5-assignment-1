import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import { loadRestaurants } from './actions';

export default function RestaurantsContainer() {
  const {
    selectedRegionId,
    selectedCategoryId,
    restaurants,
  } = useSelector((state) => ({
    selectedRegionId: state.selectedRegionId,
    selectedCategoryId: state.selectedCategoryId,
    restaurants: state.restaurants,
  }));

  if (!selectedRegionId || !selectedCategoryId) {
    return <p>지역과 분류를 선택해주세요!</p>;
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurants(selectedRegionId, selectedCategoryId));
  }, []);

  return (
    <div>
      <h4>레스토랑 목록</h4>
      <Restaurants restaurants={restaurants} />
    </div>
  );
}
