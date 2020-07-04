import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

export default function RestaurantsContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <div>
      <ul>
        <li>
          원초밥
        </li>
      </ul>
    </div>
  );
}
