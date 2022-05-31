import { useState } from 'react';
import Categories from './Categories';

import Regions from './Regions';

export default function App() {
  const initialState = {
    currentRegionId: Number.MIN_SAFE_INTEGER,
    currentCategoryId: Number.MIN_SAFE_INTEGER,
    regions: [
      {
        id: 1,
        name: '서울',
      },
      {
        id: 2,
        name: '대전',
      },
      {
        id: 3,
        name: '대구',
      },
      {
        id: 4,
        name: '부산',
      },
      {
        id: 5,
        name: '광주',
      },
      {
        id: 6,
        name: '강원도',
      },
      {
        id: 7,
        name: '인천',
      },
      {
        id: 8,
        name: '제주',
      },
      {
        id: 9,
        name: '전주',
      },
      {
        id: 10,
        name: '순천',
      },
      {
        id: 11,
        name: '독도',
      },
    ],
    categories: [
      {
        id: 1,
        name: '한식',
      },
      {
        id: 2,
        name: '중식',
      },
      {
        id: 3,
        name: '일식',
      },
      {
        id: 4,
        name: '양식',
      },
      {
        id: 5,
        name: '분식',
      },
    ],
  };

  const [state, setState] = useState(initialState);

  const handleClick = (event) => {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  return (
    <div>
      <Regions state={state} onClick={handleClick} />
      <Categories state={state} onClick={handleClick} />
    </div>
  );
}
