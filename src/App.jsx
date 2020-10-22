import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { loadRegions } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  return (
    <div>
      <RegionsContainer />
      <ul>
        <li>
          <button type="button">
            한식
          </button>
        </li>
        <li>
          <button type="button">
            중식
          </button>
        </li>
        <li>
          <button type="button">
            일식
          </button>
        </li>
      </ul>
    </div>
  );
}
