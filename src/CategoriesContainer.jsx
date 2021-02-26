import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setSelected } from './actions';

import Buttons from './Buttons';

export default function CategoriesContainer() {
  const { categories, selected } = useSelector((state) => ({
    categories: state.categories,
    selected: state.selected,
  }));

  const dispatch = useDispatch();

  const handleClick = (event) => {
    if (!(event.target.name === selected.category.name)) {
      dispatch(setSelected({
        region: selected.region,
        category: {
          id: event.target.id,
          name: event.target.name,
        },
      }));
    }
  };

  return (
    <Buttons
      buttons={categories}
      handleClick={handleClick}
      selectedName={selected.category.name}
    />
  );
}
