import React from 'react';

export default function Regions({ regions = [] }) {
  return (
    <ul>
      {regions.length > 0 ? (
        regions.map((region) => <li key={region.id}>{region.name}</li>)
      ) : <li>지역 정보가 없습니다.</li>}
    </ul>
  );
}
