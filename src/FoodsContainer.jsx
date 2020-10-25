import React from 'react';

import { useSelector } from 'react-redux';

import Foods from './Foods';

export default function FoodsContainer() {
  const { foods } = useSelector((state) => ({
    foods: state.foods,
  }));

  return (
    <Foods foods={foods} />
  );
}