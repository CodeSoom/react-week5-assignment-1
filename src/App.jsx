import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchFilterContainer from './components/SearchFilterContainer';
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
    <>
      <SearchFilterContainer />
    </>
  );
}
