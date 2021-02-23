import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Buttons from './Buttons';

export default function RegionsContainer() {
  const dispatch = useDispatch();
  const { regions, selectedRegionID } = useSelector((state) => ({
    regions: state.categories,
    selectedCategoryID: state.selectedCategoryID,
  }));

  function handleClick(id) {
    return dispatch(id);
  }

  return (
    <Buttons
      list={regions}
      selectedID={selectedRegionID}
      onClick={handleClick}
    />
  );
}
