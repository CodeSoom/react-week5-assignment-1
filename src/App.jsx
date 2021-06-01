import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loadRegions, loadCategories } from './actions';

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
      <ul>
        {regions.map(({ name, id }) => (
          <li key={id}>
            <button type="button">{name}</button>
          </li>
        ))}
      </ul>
      <ul>
        {categories.map(({ name, id }) => (
          <li key={id}>
            <button type="button">{name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
