// redux에 대해서 알고, 레스토랑 목록을 스토어의 리듀서로 바꿔준다.
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { setRestaurants } from './action';

import restaurants from '../fixtures/fixture';

import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
    </div>
  );
}
