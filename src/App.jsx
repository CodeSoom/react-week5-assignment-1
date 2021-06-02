import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRegions, loadCategories } from './actions';

import Buttons from './Buttons';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
    dispatch(loadCategories());
  }, []);

  const { regions, categories } = useSelector((state) => ({
    regions: state.regions,
    categories: state.categories,
  }));

  return (
    <div>
      <Buttons
        search="region"
        options={regions}
      />
      <Buttons
        search="category"
        options={categories}
      />
    </div>
  );
}
