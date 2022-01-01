// Container Components: redux에 대해서 알고, 레스토랑 목록을 가져오는 액션을 불러온다.
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  setRestaurants,
  loadCategories,
} from './action';

import RestaurantsContainer from './RestaurantsContainer';
import CategoriesContainer from './CategoriesContainer';
// import RestaurantFormContainer from './RestaurantFormContainer';

function loadRestaurants({ dispatch }) { // {}안에 dispatch를 전달해주는 이유는?
  // ToDo: api서버에서 레스토랑 목록가져오기
  // 1. api서버 확보
  // 2. fetch: data를 가져오는 것
  const restaurants = [];
  dispatch(setRestaurants(restaurants));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
    loadRestaurants({ dispatch });
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
      <CategoriesContainer />
    </div>
  );
}
