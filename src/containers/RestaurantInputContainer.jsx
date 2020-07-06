import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  updateRestaurantProperty, addRestaurant,
} from '../actions';

import InputBox from '../components/InputBox';
import AddButton from '../components/AddButton';

export default function RestaurantInputContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  const dispatch = useDispatch();

  function handleupdateRestaurantProperty(ev) {
    dispatch(updateRestaurantProperty(ev.target.name, ev.target.value));
  }

  function handleAddRestaurant() {
    dispatch(addRestaurant());
  }

  return (
    <>
      <InputBox property="name" value={restaurant.name} handleChangeInput={handleupdateRestaurantProperty} />
      <InputBox property="category" value={restaurant.category} handleChangeInput={handleupdateRestaurantProperty} />
      <InputBox property="address" value={restaurant.address} handleChangeInput={handleupdateRestaurantProperty} />
      <AddButton handleClickButton={handleAddRestaurant} />
    </>
  );
}
