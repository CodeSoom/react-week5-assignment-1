import { useDispatch } from 'react-redux';

import React from 'react';

import { loadRestaurants } from './actions';

export default function Button({ item, onclick, selectedButton }) {
  const dispatch = useDispatch();

  function handleClick() {
    onclick(item);
    dispatch(loadRestaurants());
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
