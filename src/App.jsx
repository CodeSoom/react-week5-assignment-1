import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  loadRegionNames,
  loadCategories,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegionNames());
    dispatch(loadCategories());
  }, []);

  const { regionNames, categories } = useSelector((state) => ({
    regionNames: state.regionNames,
    categories: state.categories,
  }));

  return (
    <div>
      <ul>
        {regionNames.map(({ name, id }) => (
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
