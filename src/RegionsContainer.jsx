import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setSelected } from './actions';

import Buttons from './Buttons';

export default function RegionsContainer() {
  const { regions, selected } = useSelector((state) => ({
    regions: state.regions,
    selected: state.selected,
  }));

  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(setSelected({
      region: {
        id: event.target.id,
        name: event.target.name,
      },
      category: selected.category,
    }));
  };

  return (
    <Buttons
      buttons={regions}
      handleClick={handleClick}
      selectedName={selected.region.name}
    />
  );
}
