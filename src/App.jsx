import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadCategories, loadRegions, loadRestaurants } from './actions-async';

import { setStartLoading } from './actions';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import Restaurants from './Restaurants';

export default function App() {
  const dispatch = useDispatch();

  const {
    region, categoryId, isLoading,
  } = useSelector((state) => state);

  const {
    regions, categories,
  } = isLoading;

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  useEffect(() => {
    if (region && categoryId) {
      dispatch(setStartLoading('restaurants'));
      dispatch(loadRestaurants(region, categoryId));
    }
  }, [region, categoryId]);

  if (regions && categories) {
    return <div>로딩중입니다!</div>;
  }

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <Restaurants />
    </div>
  );
}
