import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setRestaurants, setCategories, setRegions } from './action';

import CategoriesContainer from './CategoriesContainer';

function loadRestaurants({ dispatch }) {
  const restaurants = [];

  // API 서버 확보
  // 데이터 fetch

  dispatch(setRestaurants(restaurants));
}

function loadCategories({ dispatch }) {
  const categories = [];

  dispatch(setCategories(categories));
}

function loadRegions({ dispatch }) {
  const regions = [];

  dispatch(setRegions(regions));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRestaurants({ dispatch });
    loadCategories({ dispatch });
    loadRegions({ dispatch });
  }, []);

  return (
    <>
      <CategoriesContainer />
      <ul>
        <li>테스트</li>
      </ul>
    </>
  );
}
