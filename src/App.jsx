// Container Components: redux에 대해서 알고, 레스토랑 목록을 가져오는 액션을 불러온다.
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setRestaurants } from './action';

import restaurants from '../fixtures/fixture';
import RestaurantsContainer from './RestaurantsContainer';
import ListCreatorContainer from './ListCreatorContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurants(restaurants));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
      <ListCreatorContainer />
    </div>
  );
}
