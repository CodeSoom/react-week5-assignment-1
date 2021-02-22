import React from 'react';

export default function Regions({ regions }) {
  return (
    <div>
      <ul>
        {regions.map((region) => (
          <li key={region.id}>
            <button type="button">{region.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 추후 Button 세부 컴포넌트 추가
