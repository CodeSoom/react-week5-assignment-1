import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  loadRestaurants,
} from '../actions';

export default function RestaurantContainer() {
  const dispatch = useDispatch();

  const { selectedOption } = useSelector((state) => ({
    selectedOption: state.selectedOption,
  }));

  useEffect(() => {
    dispatch(loadRestaurants());
  }, [selectedOption]);
  return (
    <ul>
      <li>양천주가</li>
      <li>한국식 초밥</li>
    </ul>
  );
}
