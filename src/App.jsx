import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setRegions,
} from './actions';

const restaurants = {
  regions: [{ id: 0, name: '서울' }, { id: 1, name: '대전' }],
};

export default function App() {
  const { regions } = useSelector((state) => ({
    regions: state.regions,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRegions(restaurants.regions));
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
