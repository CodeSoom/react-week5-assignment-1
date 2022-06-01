import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setRegions,
} from './actions';

export default function App() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRegions(regions));
  }, []);

  return (
    <div>
      <ul>
        {regions.map(({ id, name }) => (
          <li key={id}>
            <button type="button">{name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
