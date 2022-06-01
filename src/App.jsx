import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AreasContainer from './areas/AreasContainer';
import CategoriesContainer from './categories/CategoriesContainer';
import { setAreas } from './redux/reducer';

// function loadAreas({ dispatch }) {
//   const areas = [];

//   // TODO: fetch
//   dispatch(setAreas(areas));
// }

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAreas([]));
  }, []);

  return (
    <>
      <AreasContainer />
      <CategoriesContainer />
    </>
  );
}
