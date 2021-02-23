import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import {
  setRegions,
} from './actions';

// import regions from '../fixtures/restaurants';

import { fetchRegions } from './services/api';

async function loadRegions({ dispatch }) {
  dispatch(setRegions(await fetchRegions()));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadRegions({ dispatch });
  }, []);

  const categories = [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
    { id: 3, name: '일식' },
    { id: 4, name: '양식' },
    { id: 5, name: '분식' },
    { id: 6, name: '과자' },
    { id: 7, name: '치킨' },
    { id: 1215, name: '아시아식' },
    { id: 1216, name: '중동' },
    { id: 1217, name: '가정식' },
    { id: 1218, name: '3분요리' },
    { id: 1231, name: '냉동' },
  ];

  return (
    <>
      <RegionsContainer />
      <ul>
        {categories.map(({
          id, name,
        }) => (
          <li key={id}>
            <button type="button">
              {name}
            </button>
          </li>
        ))}
      </ul>

    </>
  );
}
