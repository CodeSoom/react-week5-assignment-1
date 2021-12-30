import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchFilterContainer from './components/SearchFilterContainer';
import RestaurantsListContainer from './components/RestaurantsListContainer';
import { fetchRestaurants } from './store/actions';
import Title from './components/Title';

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
      <Title />
      <SearchFilterContainer />
      <RestaurantsListContainer />
    </main>
  );
}
