import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadRegions } from './actions';

import RegionsContainer from './RegionsContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <>
      <RegionsContainer />
      <ul>
        <li>
          <button type="button">
            한식
          </button>
        </li>
      </ul>
    </>
  );
}
