import React from 'react';
import { useSelector } from 'react-redux';

import TextList from './TextList';
import RegionButtonListContainer from './RegionButtonListContainer';
import CategoryButtonListContainer from './CategoryButtonListContainer';

export default function App() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <>
      <RegionButtonListContainer />
      <CategoryButtonListContainer />
      <TextList
        elements={restaurants}
      />
    </>
  );
}
