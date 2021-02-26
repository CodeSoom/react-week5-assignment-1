import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setSelected } from './actions';

import Buttons from './Buttons';

export default function CategoriesContainer() {
  const { categories, selected: { category, region } } = useSelector((state) => ({
    categories: state.categories,
    selected: state.selected,
  }));

  const dispatch = useDispatch();

  const handleClick = (event) => {
    const { name, id } = event.target;

    if (!(name === category.name)) {
      dispatch(setSelected({
        region,
        category: {
          id,
          name,
        },
      }));
    }
  };

  return (
    <Buttons
      buttons={categories}
      handleClick={handleClick}
      selectedName={category.name}
    />
  );
}
