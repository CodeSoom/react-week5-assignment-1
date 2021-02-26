import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setSelected } from './actions';

import Buttons from './Buttons';

export default function RegionsContainer() {
  const { regions, selected: { category, region } } = useSelector((state) => ({
    regions: state.regions,
    selected: state.selected,
  }));

  const dispatch = useDispatch();

  const handleClick = (event) => {
    const { name, id } = event.target;

    if (!(name === region.name)) {
      dispatch(setSelected({
        region: {
          id,
          name,
        },
        category,
      }));
    }
  };

  return (
    <Buttons
      buttons={regions}
      handleClick={handleClick}
      selectedName={region.name}
    />
  );
}
