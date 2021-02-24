import React from 'react';

export default function Regions({ regions, onClick }) {
  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={() => onClick(region.id)}
          >
            {region.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

// 추후 Button 세부 컴포넌트 추가
