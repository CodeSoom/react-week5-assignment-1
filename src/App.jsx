import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RegionListContainer from './RegionListContainer';
import CategoryListContainer from './CategoryListContainer';
import { loadCategories, loadRegions } from './store/actions';
import RestaurantListContainer from './RestaurantListContainer';

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
