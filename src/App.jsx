import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Categories from './Categories';

import Regions from './Regions';

export default function App() {
  const dispatch = useDispatch();

  const { categories, regions } = useSelector((state) => ({
    categories: state.initialCategories,
    regions: state.initialRegions,
  }));

  function onClick(id, isChecked) {
    dispatch();
    // [
    //   ...categories.map((category) => (
    //     category.id === id ? { ...category, isChecked: !isChecked } : category
    //   )),
    // ]

    dispatch();
    // [
    //   ...regions.map((region) => (
    //     region.id === id ? { ...region, isChecked: !isChecked } : region
    //   )),
    // ]
  }

  return (
    <>
      <Categories categories={categories} onClick={onClick} />
      <Regions regions={regions} onClick={onClick} />
    </>
  );
}
