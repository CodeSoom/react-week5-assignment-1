import React from 'react';

const isEmpty = (array = []) => array.length === 0;

export default function Regions({ selectedRegionId, regions, onClick }) {
  if (isEmpty(regions)) {
    return <p>음식점 지역 정보를 등록해주세요!</p>;
  }

  return (
    <ul>
      {regions.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={onClick(id)}
          >
            {name + (id === selectedRegionId ? '(V)' : '')}
          </button>
        </li>
      ))}
    </ul>
  );
}
