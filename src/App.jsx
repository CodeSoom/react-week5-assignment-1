import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setCategories } from './actions';
import CategoriesContainer from './CategoriesContainer';

async function loadCategories({ dispatch }) {
  //const data = await fetchCategories();
  const categories = [];
  dispatch(setCategories(categories));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadCategories({ dispatch });
  });

  return (
    <>
      <CategoriesContainer />
    </>
  );
}
