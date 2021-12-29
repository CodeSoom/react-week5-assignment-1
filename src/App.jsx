import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchFilterContainer from './components/SearchFilterContainer';
import RestaurantsListContainer from './components/RestaurantsListContainer';
import { fetchRestaurants } from './store/actions';

export default function App() {
  const { filter: { region, category } } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!region || !category) {
      return;
    }
    dispatch(fetchRestaurants());
  }, [region, category]);

  return (
    <main>
      <h1 style={{ display: 'none' }}>레스토랑 검색</h1>
      <SearchFilterContainer />
      <RestaurantsListContainer />
    </main>
  );
}
