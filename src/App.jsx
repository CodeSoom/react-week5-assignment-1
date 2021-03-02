import React, { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    regions: [
      {
        id: 1,
        name: '서울',
      },
      {
        id: 2,
        name: '대전',
      },
    ],
    categories: [],
  });

  const handleClick = () => {

  };

  return (
    <>
      <ul>
        {state.regions.map((region) => (
          <li key={region.id}>
            <button type="button" onClick={handleClick}>
              {region.name}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <button type="button" onClick={handleClick}>
            한식
          </button>
        </li>
        <li>
          <button type="button" onClick={handleClick}>
            중식
          </button>
        </li>
      </ul>
    </>
  );
}
