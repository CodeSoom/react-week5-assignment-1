import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadCategories, loadRegions } from './actions-async';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';

export default function App() {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state);
  const { regions, categories } = isLoading;

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  if (regions && categories) {
    return <div>로딩중입니다!</div>;
  }

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
    </div>
  );
}
