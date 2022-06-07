import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchRestaurants } from '../services/api';
import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const { areaName, categoryId } = useSelector((state) => ({
    areaName: state.areaName,
    categoryId: state.categoryId,
  }));

  useEffect(async () => {
    if (areaName && categoryId) {
      const response = await fetchRestaurants(areaName, categoryId);
      console.log('response : ', response);
    }
  }, [areaName, categoryId]);

  return (
    <div>
      <h1>식당 목록</h1>
      <Restaurants areaName={areaName} categoryId={categoryId} />
    </div>
  );
}
