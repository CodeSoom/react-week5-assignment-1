import React from 'react';

import Foods from './Foods';

export default function FoodsContainer() {
  const foods = [
    {
      id: 1, name:'한식',
    },
  ];

  return (
    <Foods foods={foods} />
  );
}