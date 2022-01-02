import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  loadInitialData,
} from './actions';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // 액션 크리에이터 하나 만들어야 함.
    dispatch(loadInitialData());
  });

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
