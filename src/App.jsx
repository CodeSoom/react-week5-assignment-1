import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ListContainer from './ListContainer';
import RegionContainer from './RegionContainer';
import { loadRegions, loadCategories } from './actions';
import CategoriesContainer from './CategoriesContainer';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  return (
    <div>
      <RegionContainer />
      <CategoriesContainer />
      <ListContainer />
    </div>
  );
}
