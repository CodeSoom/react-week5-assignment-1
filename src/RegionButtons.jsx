import React from 'react';

export default function RegionButtons({ onClick, currentRegion }) {
  return (
    <li>
      <button
        type="button"
        onClick={() => onClick('서울')}
      >
        { currentRegion === '서울' ? '서울V' : '서울'}
      </button>
    </li>
  );
}
