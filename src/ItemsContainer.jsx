import React from 'react';

import { useSelector } from 'react-redux';

import Items from './Items';

export default function ItemsContainer() {
  const { region, category } = useSelector((state) => ({
    region: state.region,
    category: state.category,
  }));

  return (
    <Items
      region={region}
      category={category}
    />
  );
}
