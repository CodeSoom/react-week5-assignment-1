import React from 'react';

export default function Regions({ regions = [], selected, handleClickRegion }) {
  return (
    <ul>
      {regions.length > 0 ? (
        regions.map((region) => (
          <li key={region.id}>
            <button
              type="button"
              onClick={() => { handleClickRegion(region.name); }}
            >
              {region.name}
              {selected === region.name && '(V)'}
            </button>
          </li>
        ))
      ) : <li>지역 정보가 없습니다.</li>}
    </ul>
  );
}
