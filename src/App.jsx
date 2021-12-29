import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RegionListContainer from './RegionListContainer';
import CategoryListContainer from './CategoryListContainer';
import RestaurantListContainer from './RestaurantListContainer';
import { loadCategories, loadRegions } from './store/asyncActions';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  return (
    <>
      <RegionListContainer />
      <CategoryListContainer />
      <RestaurantListContainer />
    </>
  );
}
