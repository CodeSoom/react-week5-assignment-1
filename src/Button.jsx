import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadRestaurants } from './actions';

export default function Button({ item, onclick, selectedButton }) {
  const dispatch = useDispatch();
  const { selectedCategory, selectedRegion } = useSelector((state) => ({
    selectedCategory: state.selectedCategory,
    selectedRegion: state.selectedRegion,
  }));
  function handleClick() {
    onclick(item);
    dispatch(loadRestaurants(selectedRegion.name, selectedCategory.id));
  }

  return (
    <div>
      <button type="button" onClick={() => handleClick()}>
        {selectedButton.name === item.name
          ? `${item.name}${'(V)'}`
          : `${item.name}`}
      </button>
    </div>
  );
}
