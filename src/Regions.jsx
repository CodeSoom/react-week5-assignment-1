import React from 'react';

const isEmpty = (array = []) => array.length === 0;

export default function Regions({ selectedRegionId, regions, onClick }) {
  if (isEmpty(regions)) {
    return <p>지역 정보가 없습니다!</p>;
  }

  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick(id)}
          >
            {name + (id === selectedRegionId ? '(V)' : '')}
          </button>
        </li>
      ))}
    </ul>
  );
}
