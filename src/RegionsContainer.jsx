import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setSelected } from './actions';

import Regions from './Regions';

export default function RegionsContainer() {
  const { regions, selected } = useSelector((state) => ({
    regions: state.regions,
    selected: state.selected,
  }));

  const dispatch = useDispatch();

  const onClickCheck = (event) => {
    dispatch(setSelected({
      region: {
        id: event.target.id,
        name: event.target.name,
      },
      category: {
        id: selected.category.id,
        name: selected.category.name,
      },
    }))
  };

  return (
    <Regions 
      regions={regions} 
      onClickCheck={onClickCheck}
      selectedRegionName={selected.region.name}
    />
  );
}
