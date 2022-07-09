import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadInitialData } from './action';

import CategoryContainer from './CategoryContainer';
import RegionContainer from './RegionContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  return (
    <>
      <RegionContainer />
      <CategoryContainer />
      {/* Todo: Redux 적용 후 진행 */}
      {/* <RestaurantContainer /> */}
    </>
  );
}
