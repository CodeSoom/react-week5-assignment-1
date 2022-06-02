import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import areas from '../fixtures/areas';

import AreasContainer from './areas/AreasContainer';
import CategoriesContainer from './categories/CategoriesContainer';
import { setAreas, setCategories } from './redux/reducer';
import categories from '../fixtures/categories';

function loadAreas({ dispatch }) {
  // TODO: fetch
  dispatch(setAreas(areas));
}

function loadCategories({ dispatch }) {
  // TODO: fetch
  dispatch(setCategories(categories));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadAreas({ dispatch });
    loadCategories({ dispatch });
  }, []);

  return (
    <>
      <AreasContainer />
      <CategoriesContainer />
    </>
  );
}
