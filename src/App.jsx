import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import Regions from './Regions';

export default function App() {
  const dispatch = useDispatch();

  const { regions } = useSelector((state) => ({

    regions: state.regions,
  }));

  function onClick(id, isChecked) {
    dispatch();
    // [
    //   ...regions.map((region) => (
    //     region.id === id ? { ...region, isChecked: !isChecked } : region
    //   )),
    // ]
  }

  return (
    <>
      <CategoriesContainer />
      <Regions regions={regions} onClick={onClick} />
    </>
  );
}
