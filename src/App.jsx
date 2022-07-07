import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setIsLoading } from './actions';
import { loadCategories, loadRegions } from './actions-async';

import RegionsContainer from './RegionsContainer';
import Categories from './Categories';

export default function App() {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state);

  const loadData = async () => {
    await dispatch(loadRegions());
    await dispatch(loadCategories());
    dispatch(setIsLoading(false));
  };

  useEffect(() => {
    loadData();
  }, []);

  if (isLoading) {
    return <div>로딩중입니다!</div>;
  }

  return (
    <div>
      <RegionsContainer />
      <Categories />
    </div>
  );
}
