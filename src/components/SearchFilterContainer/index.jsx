import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRegions, fetchCategories } from '../../store/actions';
import SearchFilter from './SearchFilter';

export default function SearchFilterContainer() {
  const { regions, categories } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRegions());
    dispatch(fetchCategories());
  }, []);

  return (
    <SearchFilter options={{ regions, categories }} />
  );
}
