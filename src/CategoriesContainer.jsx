import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setSelected } from './actions';

import Categories from './Categories';

export default function CategoriesContainer() {
  const { categories, selected } = useSelector((state) => ({
    categories: state.categories,
    selected: state.selected,
  }));
  
  const dispatch = useDispatch();

  const onClickCheck = (event) => {
    dispatch(setSelected({
      region: {
        id: selected.region.id,
        name: selected.region.name,
      },
      category: {
        id: event.target.id,
        name: event.target.name,
      }
    }))
  };

  return (
    <Categories
      categories={categories}
      onClickCheck={onClickCheck}
      selectedCategoryName={selected.category.name}
    />
  );
}
