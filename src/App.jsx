import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadRegions } from './async-actions';

const App = () => {
  const dispatch = useDispatch();

  const regions = useSelector((state) => state.regions);

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default App;
