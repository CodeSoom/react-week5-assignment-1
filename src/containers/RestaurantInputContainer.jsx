import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  updateRestaurantProperty, addRestaurant,
} from '../stores/action/action-creators';

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
      <InputBox inputProperty="name" inputValue={restaurant.name} handleChangeInputValue={handleupdateRestaurantProperty} />
      <InputBox inputProperty="category" inputValue={restaurant.category} handleChangeInputValue={handleupdateRestaurantProperty} />
      <InputBox inputProperty="address" inputValue={restaurant.address} handleChangeInputValue={handleupdateRestaurantProperty} />
      <AddButton handleClickButton={handleAddRestaurant} />
    </>
  );
}
