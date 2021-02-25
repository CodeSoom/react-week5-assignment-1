import React from 'react';

import { useSelector } from 'react-redux';

import Items from './Items';

export default function ItemsContainer() {
  const { items } = useSelector((state) => ({
    items: state.items,
  }));

  return (
    <Items items={items} />
  );
}
